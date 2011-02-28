/**
 * Author: Alexander Villalobos Yadr�
 * E-Mail: avyadro@yahoo.com.mx
 * Created on Oct 01, 2008, 10:27:26 AM
 * Place: Monterrey, Nuevo Le�n, M�xico.
 * Company: Codicentro
 * Web: http://www.codicentro.com
 * Class Name: CMB.js
 * Purpose:
 * Revisions:
 * Ver        Date               Author                                      Description
 * ---------  ---------------  -----------------------------------  ------------------------------------
 * 1.0.0       Oct 01, 2008           Alexander Villalobos Yadr�      New class.
 **/

/**
 * CONSTRUCTOR
 **/
CMB=function CMB(cfg){
    //this.parent       = parent;
    this.ds             = null;
    this.cb             = null;
    this.url            = null;
    this.mode           = "remote";
    this.create(cfg);    
}

/**
 * PROPERTIES
 **/
CMB.prototype.autoLoad       = false;
CMB.prototype.validate       = false;
CMB.prototype.fields         = null;
CMB.prototype.name           = null;
CMB.prototype.displayField   = null;
CMB.prototype.display        = null;
CMB.prototype.tooltip        = null;
CMB.prototype.valueField     = null;
CMB.prototype.queryParam     = null;
CMB.prototype.dependsOnMe    = null;
CMB.prototype.depends        = null;
CMB.prototype.dependCall     = false;
CMB.prototype.successHandler = null;
CMB.prototype.failedHandler  = null;
CMB.prototype.value          = null;
CMB.prototype.fieldLabel     = null;
CMB.prototype.fieldsParams   = null;
CMB.prototype.width          = 263;
CMB.prototype.hideLabel      = false;
CMB.prototype.visible        = true;
CMB.prototype.allowBlank     = true;
CMB.prototype.mode           = "remote";
CMB.prototype.setRowAfterLoad = false;
CMB.prototype.paramColumn     = false;
CMB.prototype.baseParams      = null;
CMB.prototype.params          = null;
CMB.prototype.owner           = null;
CMB.prototype.jsonData        = null;
CMB.prototype.emptyText       = "Optionally...";
CMB.prototype.required        = false;

CMB.prototype.create =function(cfg){
    for(x in cfg){
        if(x in this){
            this[x]=cfg[x];
        }
    }
    this.ds = new Ext.data.JsonStore({
        autoLoad:this.autoLoad,
        url:this.url,
        root:"data",
        fields:this.fields
    });
    this.cb = new Ext.form.ComboBox({
        store:this.ds,
        mode: this.mode,
        hiddenName:this.name,
        hiddenId:"ext-comp-"+GUID(),
        displayField:this.displayField,
        display:this.display,
        valueField:this.valueField,        
        tooltip:this.tooltip,     
        emptyText:this.emptyText,
        triggerAction: "all",
        queryParam:this.queryParam,
        fieldLabel: this.fieldLabel,
        width:this.width,
        validationDelay:50,
        selectOnFocus:true,
        validateOnBlur:true,
        hideLabel:this.hideLabel,
        allowBlank:this.allowBlank
    });
    // this.onBlur(this);
    this.onChange(this);
    this.onBeforeLoad(this);
    this.onLoad(this);
    this.onLoadException(this);
    if (this.depends!=null){
        for(i=0;i<this.depends.length;i++){
            this.depends[i].addDependsOnMe(this);
        }
    }
    if(this.value!=null){        
        this.params = EOSI(this.params, CPORT(this.valueField.snpE(),this.value));
        if (this.depends!=null){
            for(i=0;i<this.depends.length;i++){               
                //this.depends[i].params=this.params;
                this.params = EOSI(this.params, CPORT(this.depends[i].valueField.snpE(),this.depends[i].value));
            }
        }
        this.ds.load();
    }
}
/**
 * Fires before a request is made for a new data object.
 * If the beforeload handler returns false the load action will be canceled.
 **/
CMB.prototype.onBeforeLoad=function(own){
    this.ds.addListener("beforeload",function(s,o){
        o.params = EOSI(own.baseParams,own.params);
    });
}
/**
 * Fires after a new set of Records has been loaded.
 **/
CMB.prototype.onLoad=function(own){
    this.ds.addListener("load",function(){
        if (own.value!=null){
            own.setValue(own.value);
        }
    // own.doBusinessLogic();
    });
}
/**
 * Fires if an exception occurs in the Proxy during loading.
 * Called with the signature of the Proxy's "loadexception" event.
 **/
CMB.prototype.onLoadException=function(own){
    this.ds.on("loadexception",function(){
        own.jsonData = this.reader.jsonData;
        msgFailure(ATSHE(own.jsonData),function(){
            PMF(own.jsonData);
        });
    });
}

CMB.prototype.onChange=function(own){
    this.cb.addListener("select",function(o){
        own.value = (o.findRecord(o.displayField, o.getRawValue())!=null)?o.getValue():null;
        o.setValue(own.value);
        own.doSetBaseParamsDependsOnMe();
        if(own.dependsOnMe!=null){
            for(i=0;i<own.dependsOnMe.length;i++){
                own.dependsOnMe[i].dependCall=true;
                own.dependsOnMe[i].ds.load();
            }
        }
    // own.doBusinessLogic();
    });
}

CMB.prototype.setValue=function(v){
    this.value = (this.cb.findRecord(this.valueField, v)!=null)?v:null;
    this.cb.setValue(this.value);
    this.doSetBaseParamsDependsOnMe();
}

/**
 * Get Value by Field Name get
 *
 */
CMB.prototype.GVxFN=function(fld){
    return this.cb.findRecord(this.valueField, this.cb.getValue()).get(fld);
}

CMB.prototype.doSetBaseParamsDependsOnMe=function(){
    if(this.dependsOnMe!=null){
        for(i=0;i<this.dependsOnMe.length;i++){
            this.dependsOnMe[i].addParam(CPORT(this.valueField.snpE(),this.value));
        }
    }
}

CMB.prototype.addDependsOnMe=function(o){
    if (this.dependsOnMe==null){
        this.dependsOnMe=new Array(o);
    }else{
        this.dependsOnMe.push(o);
    }
}

CMB.prototype.addParam=function(p){
    this.params = EOSI(this.params, p);
}

/**
* Get ComboBox Object
**/
CMB.prototype.CO=function(){
    return this.cb;
}
/**
* Returns whether or not the field value is currently valid.
**/
CMB.prototype.isValid=function(){
    return (this.cb.isValid());
}

CMB.prototype.addValidate=function(fn){
    this.cb.addListener("select",fn);
}
CMB.prototype.fireSelect=function(f){
    this.cb.addListener("select",f);
}
CMB.prototype.fireLoad=function(f){
    this.ds.addListener("load",f);
}

CMB.prototype.getValue=function(){
    return this.value;
}

CMB.prototype.setDisabled=function(v){
    this.cb.setDisabled(v);
}
/*
 * Fire When ComboBox is Valid (SH=Success Handler)
 */
CMB.prototype.SH=function(h){
    if (this.successHandler==null){
        this.successHandler=new Array(h);
    }else{
        this.successHandler.push(h);
    }
}

/*
 * Fire When ComboBox is not Valid (FH=Failed Handler)
 */
CMB.prototype.FH=function(h){
    if (this.failedHandler==null){
        this.failedHandler=new Array(h);
    }else{
        this.failedHandler.push(h);
    }
}
/**
 * Fires When Occurrs Any Events
 **/
CMB.prototype.doBusinessLogic=function(){
    //DOB(this.dependsOnMe);   
    if (this.successHandler!=null){        
        for(i=0;i<this.successHandler.length;i++){
            this.successHandler[i]();
        }
        delete i;
    }else if (this.failedHandler!=null){        
        for(i=0;i<this.failedHandler.length;i++){
            this.failedHandler[i]();
        }
        delete i;
    }
}
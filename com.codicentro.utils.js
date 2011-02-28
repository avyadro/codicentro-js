/**
 * Author: Alexander Villalobos Yadró
 * E-Mail: avyadro@yahoo.com.mx
 * Created on Jan 01, 2008, 10:27:26 AM
 * Place: Quer�taro, Querétaro, México.
 * Company: Codicentro
 * Web: http://www.codicentro.com
 * Class Name: com.codicentro.utils.js
 * Purpose:
 * Revisions:
 * Ver        Date               Author                                      Description
 * ---------  ---------------  -----------------------------------  ------------------------------------
 * 1.0.0       Jan 01, 2008           Alexander Villalobos Yadró      New class.
 **/

function ltrim(s) {
    return s.replace(/^\s+/, "");
}

function rtrim(s) {
    return s.replace(/\s+$/, "");
}

function trim(s) {
    return (s || "").replace( /^\s+|\s+$/g, "" );
}

function gLIC(o,k){	
    var r=o;
    for(i=0;i<k.length;i++){
        alert(k[i]);
        r = r.getItem(k[i]);
    }
    return r;
}

/**
 * Create Element HTML
 */
function CE(){
    
}
/**
 * Is Not Defined
 */
function IND(o){
    try{ 
        if(o){
            return true;
        }else{
            return false;
        }
    }catch(err){
    }

}
/*================================================
  Array Text String Without Eval
==================================================*/
function ATSWE(rs){
    for(i=0;i<rs.message.length;i++){
        tmpStr = rs.message[i];
        tmpStr = (tmpStr==null)?"":tmpStr;
        res+=(res=="")?tmpStr:"\n"+tmpStr;
    }
    delete tmpStr;
    return res;
}
/**
 * Response Text JSON to Object
 */
function RTJO(rs){	
    return JE(rs.responseText);
}

/**
 * Response Text
 */
function RT(rs){
    return rs.responseText;
}

/**
 * Jonson Eval
 */
function JE(v){
    if (v==null){
        return null;
    }else{
        return eval('(' +  v + ')');
    }
}


/*================================================
  Array Text String With Eval
==================================================*/
function ATSHE(rs){	
    res = "";
    if(rs){
    for(i=0;i<rs.message.length;i++){
        tmpStr = rs.message[i];
        tmpStr = (tmpStr==null)?"":tmpStr;
        try{
            tmpStr = eval(tmpStr);
            if(typeof tmpStr=="undefined"){
				tmpStr = rs.message[i];
			}
        }catch(err){
            tmpStr = rs.message[i];
        }
        res+=(res=="")?tmpStr:"\n"+tmpStr;
    }
    delete tmpStr;
}else{
	 res = "Method: ATSHE(Array Text String With Eval), File: com.codicentro.utils.js"; 
}
    return res;
}
/*================================================
  Response Array Text String
==================================================*/
function ATS(rs){
    return ATSWE(rs.message);
}
/**
 * Codicentro Response Array Text String By Error
 */
function CATSE(rs){
    return ATSWE(rs.error);
}

/*================================================
  Response Array Text String By Information
==================================================*/
function ATSI(rs){
    return ATSHE(rs.information);
}
/**
 * Codicentro Response Array Text String By Information
 */
function CATSI(rs){
    return ATSHE(rs.information);
}
/*================================================
  Response Array Length by Error
==================================================*/
function ATLE(rs){
    return rs.error.length;
}

/**
 * Codicentro Response Array Length by Error
 *
 */
function CATLE(rs){
    return rs.error.length;
}

/*================================================
  Response Data
==================================================*/
function RD(rs){
    return rs.data;
}

/*================================================
  Response Array Length by information
==================================================*/
function ATLI(rs){
    return rs.information.length;
}

/**
 * Codicentro Response Array Length by information
 */
function CATLI(rs){
    return rs.information.length;
}
/**
 * Calculate Width by Length String
 * @param v Value
 * @param m Min
 */
function CWxLS(v,m){
	if(typeof v=="undefined"){
	 alert("Error: Calculate Width by Length String(CWxLS).");
	 return -1;	
	}else{
	  l = Math.ceil(v.length/2);    
      w = (l<=2)?12:l*12;
      return (w<m)?m:w;
	}
   
}

/**
 * Calculate Width by Length String and Size Text
 * @param v Value
 * @param p Size text
 */
function CWxLZ(v,p){
    l = v.length;
    w = l*p/2;
    w = w + l;
    return w;
}
/**
 * Is Undefined?
 */
function IUDEF(q){
 return (typeof(q)=="undefined");
}

/**
 * Format Haher Grid
 */
function FHG(o){
    /*
   for(x in o){

        switch(x){
            case "value":this.params = o[x];
                break;
        }
        
    }*/
    return "<p align=\""+o["align"]+"\">"+o["value"]+"</p>";
}
/*================================================
  Return object by ID
==================================================*/
function GExID(id){
    return document.getElementById(id);
}
/*================================================
  Load Java Script Source
==================================================*/
function LJSS(_url_){
    $.ajax({
        url:_url_,
        async:false,
        dataType:"script",
        ajaxError:function(rq, textStatus, errorThrown){ 
            msgFailure(textStatus,rq);
        },
        error:function(rq, textStatus, errorThrown){ 
            msgFailure(textStatus,rq);
        }
    });
}
/*================================================
  Screen Center Window
==================================================*/
function SCW(o){
 try{
	if(typeof o.parent=="undefined"){
	  pw = o.wnd.getSize().width;
	  ph = o.wnd.getSize().height;  	
	}else{
	  pw = o.parent.wnd.getSize().width;
	  ph = o.parent.wnd.getSize().height;  		
	 // console.log(o.parent.getPosition());
	 
	}
		
    x = (pw/2)-(o.wnd.getSize().width/2);
    x = (typeof x=="undefined")?0:x;
    y = (ph/2)-(o.wnd.getSize().height/2);   
    y = (typeof y=="undefined")?0:y;
    o.wnd.setPosition(x,y);
 }catch(err){	 
	 alert("SCW: "+err);
 }
}
/*================================================
  Screen Center Window
  * @param w, Window
  * @param p, Window parent
==================================================*/
function SCWE(w,p,yy){
 try{
	if(typeof p=="undefined"){
	  pw = w.getSize().width;
	  ph = w.getSize().height;  	
	}else{
	  pw = p.getSize().width;
	  ph = p.getSize().height;  			
	}		
    x = (pw/2)-(w.getSize().width/2);
    x = (typeof x=="undefined")?0:x;
    y = (ph/2)-(w.getSize().height/2);   
    y = (typeof y=="undefined")?0:y;
    w.setPosition(x,y+((typeof yy!="undefined")?yy:0));
 }catch(err){	 
	 alert("SCWE: "+err+", w: "+w+", p: "+p);
 }
}
/*================================================
  Screen Center Window Move Y
==================================================*/
function SCWY(o,v){
 try{
	if(typeof o.parent=="undefined"){
		return;
	  pw = document.width;
	  ph = document.height;  	
	}else{
	  pw = o.parent.wnd.getSize().width;
	  ph = o.parent.wnd.getSize().height;  		
	}
    x = (pw/2)-(o.wnd.getSize().width/2);
    x = (typeof x=="undefined")?0:x;
    y = (ph/2)-(o.wnd.getSize().height/2);   
    y = (typeof y=="undefined")?0:y+v;
    o.wnd.setPosition(x,y);
 }catch(err){	 
	 alert("SCW: "+err);
 }
}
/*================================================
  Return object by property NAME
==================================================*/
function GExNM(id){
    result = null;
    o = document.getElementsByName(id);    
    for (i=0;((result==null)&&(i<o.length));i++)
        result = (o[i].objectName==id)?o[i]:null;   
    return result;
}
/*================================================
  Set value a object by ID
==================================================*/
function AVxNM(id,v){
    GExNM(id).value=v;
}
/*================================================
  Return object by property TagName
==================================================*/
function GExTN(id){
    return document.getElementsByTagName(id);
}
/*================================================
  Set disabled/enabled object
==================================================*/
function SD(id,v){
    GExID(id).disabled=v;
}

/*================================================
  Document Write
==================================================*/
function DW(o){
    document.write(o);
}
/*================================================
  Document Create Element
==================================================*/
function DCE(o){
    document.write(o);
}


/**
  * Grid Store Data
 **/
function GSD(g){
    return  g.store.data;
}

/**
 * Grid Data Wrapper Checkbox
 * g = Grid
 * k = Column Valid (boolean data)
 * f = Column for Values Wrapper
 **/

function GDWCB(g,k,f){
    delete rs;
    if(GSDMK(g,k)&&(f!=null)){
        rs = {
            allow:"",
            deny:""
        };
        for(i=0;i<GSD(g).length;i++){
            if((GSD(g).items[i].modified!=null)&&(GSD(g).items[i].modified[k]!=null)){
                if(GSD(g).items[i].data[k]){
                    rs.allow +=((rs.allow=="")?"":"|,|")+GSD(g).items[i].data[f];
                }else{
                    rs.deny +=((rs.deny=="")?"":"|,|")+GSD(g).items[i].data[f];
                }

            }
        }
    }
    return rs;
}


/**
  * Is Grid Store Data Modified?
 **/
function GSDM(g){
    delete rs;
    rs = false;
    for(i=0;i<GSD(g).length;i++){
        rs = rs || (GSD(g).items[i].modified!=null);
    }
    return rs;
}

/**
  * Is Grid Store Data Modified by Key?
 **/
function GSDMK(g,k){
    if(GSDM(g)){
        delete rs;
        rs = false;
        for(i=0;i<GSD(g).length;i++){
            rs = rs || ((GSD(g).items[i].modified!=null)&&(GSD(g).items[i].modified[k]!=null));
        }
    }
    return rs;
}

/**
  * Is Grid Store Data Modified by Key, result object?
  * g, Grid
  * k, List object valid(check)
 **/
function GSDMKO(g,k){
	delete rsGSDMKO;
	rsGSDMKO = [];
    if(GSDM(g)){                
        for(i=0;i<GSD(g).length;i++){
			item = GSD(g).items[i];
		    modified=false;	
			if(typeof(k)=="object"){
			  for(iK=0;iK<k.length;iK++){				  
				modified = modified || ((item.modified!=null)&&(item.modified[k[iK]]!=null));				
			  }
			 }else{
			   modified = ((item.modified!=null)&&(item.modified[k]!=null));	
			 }			 			 						
			if(modified){				
				rsGSDMKO.push(item);
			};
        }
    }
    return rsGSDMKO;
}
/**
 * Grid Data Wrapper to Array
 * g = Grid
 * k = Column Valid
 * f = Column for Values Wrapper
 **/

function GDWA(g,k,f){
    delete rsGDWA;
    rsGDWA = "";
    items = GSDMKO(g,k);
	for(i=0;i<items.length;i++){		
		rsGDWA +=((rsGDWA=="")?"":"|");
		for(j=0;j<f.length;j++){
			rsGDWA+=((j==0)?"":",")+items[i].data[f[j]];
		}	   
	}
    return rsGDWA;
}

/**
 * Grid Data Wrapper Codicentro
 * g = Grid
 * k = Column Valid
 * f = Column for Values Wrapper
 **/

function GDWC(g,k,f){
    delete rs;    
    if(GSDMK(g,k)&&(f!=null)){
        rs = "";
        for(i=0;i<GSD(g).length;i++){
            if((GSD(g).items[i].modified!=null)&&(GSD(g).items[i].modified[k]!=null)){
                rs +=((rs=="")?"":";");
                for(j=0;j<f.length;j++){
                    rs+=((j==0)?"":",")+
                    f[j].snpE()+":"+
                    GSD(g).items[i].data[f[j]];
                }
            }
        }
    }
    return rs;
}


/**
 * Grid Data Wrapper to Array
 * g = Grid
 * k = Column Valid
 * f = Column for Values Wrapper
 **/

function TDWA(t,k,f){
    delete rs;
    if(GSDMK(g,k)&&(f!=null)){
        rs = "";
        for(i=0;i<GSD(g).length;i++){
            if((GSD(g).items[i].modified!=null)&&(GSD(g).items[i].modified[k]!=null)){
                rs +=((rs=="")?"":"|");
                for(j=0;j<f.length;j++){
                    rs+=((j==0)?"":",")+
                    GSD(g).items[i].data[f[j]];
                }
            }
        }
    }
    return rs;
}

/**
 * Is Grid Data Empty?
 */

function GDE(GRID){
    return  (GRID.store.data.length<1);
}

/**
 *
 * Get Item Menu Button
 */
function GIMB(mb,key){
    return mb.menu.items.get(key);
}
/*================================================
   Get Array List selections Grid
==================================================*/
function GALSG(GRID){
    delete result;
    result = null;
    o = GRLSG(GRID);
    if (o==null){
        result = [];
    }else{
        for(i=0;i<o.length;i++){            
            if (result==null){
                result = new Array(o[i].data);
            }else{
                result.push(o[i].data);
            }
        } 
    }
    delete o;
    delete i;
    return  result;
}

/*================================================
   Get Value Array List selections Grid By Property
==================================================*/
function GVALSG(GRID,P){
    //  otmp = null;
    o = GALSG(GRID);
    delete result;
    result = null;
    if ((o==null) || (P==null)){
        result = [];
    }else{
        for(i=0;i<o.length;i++){
            tmpA = null;            
            for(x=0;x<P.length;x++){            
                if (tmpA==null){
                    tmpA = new Array(o[i][P[x]]);
                }else{
                    tmpA.push(o[i][P[x]]);
                }            
            }
            if (result==null){
                result = new Array(tmpA);
            }else{
                result.push(tmpA);
            }
            
        } 
    }
    delete tmpA;
    delete o;
    delete i;
    return  result;
}

/**
 * Is Grid Selected
 * @param GRID, Object grid
 * @return, boolean
 */
function GRS(GRID){
	if(typeof GRID.getSelectionModel().selections=="undefined"){
		return (GRID.getSelectionModel().selection!=null);
	}else{
     return (GRID.getSelectionModel().selections.length>0);    
    }
}

/**
 * Is One Grid Selected
 * @param GRID, Object grid
 * @return, boolean
 */
function OGRS(GRID){
    return (GRID.getSelectionModel().selections.length==1);
}

/**
 * Get Row Select Grid
 */
function GRSG(GRID){
	if(GRS(GRID)){
		if(typeof GRID.getSelectionModel().getSelected!="undefined"){
			return GRID.getSelectionModel().getSelected().data;
		}else{
			return GRID.getSelectionModel().selection.record.data;
		}
	}else{
		return null;
	}
}

/**
 * Get Rows Selections Grid
 *
 */
function GRSSG(GRID){
    return  (GRS(GRID))?GRID.getSelectionModel().selections:null;
}

/**
 * Get Rows List selections Grid
 **/
function GRLSG(GRID){
    return  (GRS(GRID))?GRID.getSelectionModel().selections.items:null;
}

/**
 * Process Message Failed
 */

function PMF(dr){
	if(typeof dr=="undefined"){
		return null;
	}
    if (dr.message.contains("lng.msg.error.sessionexpired")){
       return function(){window.location.reload();};
    }else{
        return null;
    }
}

/*================================================
   Verif and return result
==================================================*/
function VR(rs,rq,fn){
    if((rs)&&(rs.responseText!=null)){
        rs = eval("("+rs.responseText+")");
    } else {
        rs =null;
    }
    if ((rs == null)||(rs.error.length>0)){
        Ext.MessageBox.show({
            minWidth:400,
            title: "Error",
            msg: rs.error,
            buttons: Ext.MessageBox.OK,
            icon:Ext.MessageBox.ERROR,
            fn:fn
        });
        return null;
    }else{
        return rs;
    }
   
}


/*================================================
   Get Value by Fields Name (Ext.data.Record)
==================================================*/
function GVxFN(rcrd,fld){    
    return  (rcrd==null)?null:rcrd.get(fld);
}


/*================================================
   Convert Html to String special chars
==================================================*/
function CHS(s){
    s=s.replace("&aacute;","???");
    s=s.replace("&eacute;","???");
    s=s.replace("&iacute;","???");
    s=s.replace("&oacute;","???");
    s=s.replace("&uacute;","???");
    s=s.replace("&Aacute;","???");
    s=s.replace("&Eacute;","???");
    s=s.replace("&Iacute;","???");
    s=s.replace("&Oacute;","???");
    s=s.replace("&Uacute;","???");
    s=s.replace("&ntilde;","???");
    s=s.replace("&Ntilde;","???");
    s=s.replace("&iexcl;","???");
    return s;
}
/*================================================
   Convert String to Html special chars
==================================================*/
function CSH(s){
    s=s.replace("???","&aacute;");
    s=s.replace("???","&eacute;");
    s=s.replace("???","&iacute;");
    s=s.replace("???","&oacute;");
    s=s.replace("???","&uacute;");
    s=s.replace("???","&Aacute;");
    s=s.replace("???","&Eacute;");
    s=s.replace("???","&Iacute;");
    s=s.replace("???","&Oacute;");
    s=s.replace("???","&Uacute;");
    s=s.replace("???","&ntilde;");
    s=s.replace("???","&Ntilde;");
    s=s.replace("???","&iexcl;");
    return s;
}


function NVL(v,r){
    return (((v==null)||(v==""))?r:v);
}
/*================================================
   Verif Param (this.param)
   o: Object params
   c: Property name
==================================================*/
function VP(o,c){
    return ((o==null)||(o[c]==null))?null:o[c];
}
/*================================================
   Convert Object to Boolean
==================================================*/
function COB(v){
    return  (v!=null)&&((v=="Y"))
}
/**
 * Open Popup Window Modal
 */

function OPWM(opt){
    //var height = 350;
    //var width = 450;
    //var left = (screen.availWidth - width)/2;
    //var top = (screen.availHeight - height)/2;

    if (window.showModalDialog){
        dialogArguments = new Object();
        window.showModalDialog(opt.url,dialogArguments,"dialogWidth=450px;dialogHeight=350px;scroll=no;status=no;");
        alert(opt.url);
    } else{
        alert("No here");
        wnd = window.open(opt.url);
        wnd.focus();
    }
    return false;
}
/**
 * Last Day by Month && Year
 * @param m, Month
 * @param y, Year
 */
function LDMY(m, y) {
    return new Date(y || new Date().getFullYear(), m, 0).format("d/m/Y");
}

function FDMY(m, y) {   
    return new Date(y || new Date().getFullYear(), m-1, 1).format("d/m/Y");
}
/**
 * If TabPanel then active tab else add new tab and activate.
 *  
 */
function ADT(cfg){
	cfg.id = "adtTabId"+cfg.id;	
    TabPanel = Ext.getCmp("mainTabPanel");
    if(typeof TabPanel == "undefined"){
        Ext.MessageBox.show({
            title: "Error",
            msg: "No existe el componente "+cfg.name,
            buttons: Ext.MessageBox.OK,
            icon:Ext.MessageBox.ERROR
        });
    }else{       
        ItemTabPanel = TabPanel.getItem(cfg.id);       
        if(typeof ItemTabPanel!="undefined"){			
            ItemTabPanel.show();            
        }else{			
			if(typeof cfg.inc!="undefined"){
				  Inc(cfg.inc.url,function(){					   
					   ItemTabPanel=TabPanel.add(cfg).show();
					   NewObject = eval(cfg.inc.name);
					   new NewObject({own:ItemTabPanel});
					  });				  
				}else{
					TabPanel.add(cfg).show();
				}				 
        }        
    }
}
/**
 * Count Not Blank Values Into Object
 * o, Objects 
 */
function nNBV(o){ 	
  rsNBV = 0;
  for(x in o){
	  rsNBV += (!isBlank(o[x]))?1:0;
  }
  return rsNBV;
}

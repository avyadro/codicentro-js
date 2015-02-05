/**
 * Author: Alexander Villalobos Yadr�
 * E-Mail: avyadro@yahoo.com.mx
 * Created on Jan 01, 2008, 10:27:26 AM
 * Place: Quer�taro, Quer�taro, M�xico.
 * Company: Codicentro
 * Web: http://www.codicentro.com
 * Class Name: com.codicentro.Ajax.js
 * Note: Depends jQuery Copyright (c) 2008 John Resig (jquery.com)
 * Purpose:
 * Revisions:
 * Ver        Date               Author                                      Description
 * ---------  ---------------  -----------------------------------  ------------------------------------
 * 1.0.0       Nov, 2008           Alexander Villalobos Yadr�      New class.
 **/

Ajax=function Ajax(cfg){
    
    this.response    = null;
    this.data        = null;
    this.version     = null;
    this.error       = null;
    this.information = null;
    this.status      = null;
    this.error       = false;    
    this.url         = null;
    this.async       = false;
    this.dataType    = null;
    this.autoSubmit  = false;   
    for(x in cfg){
        switch(x){
            case "url":this.url = cfg[x];  
                break;
            case "async":this.async = cfg[x];  
                break;
            case "dataType":this.dataType = cfg[x];  
                break;
            case "autoSubmit":this.autoSubmit = cfg[x];  
                break;
        }        
    }
    if (this.autoSubmit)this.submit();
}

Ajax.prototype.response=function(){
    return this.response;
}
Ajax.prototype.getVersion=function(){
    return eval("("+this.response+")").version;
    
}
Ajax.prototype.getError=function(){
    return eval("("+this.response+")").error;
}
Ajax.prototype.getInformation=function(){
    return eval("("+this.response+")").information;
}
Ajax.prototype.getStatus=function(){
    return eval("("+this.response+")").success;
}
Ajax.prototype.getData=function(){
    return eval("("+this.response+")").data;
}
sips = null;
Ajax.prototype.submit=function(){    
    this.response = null;
    this.error   = true;
    function load(o){         
        $.ajax({
            url:o.url,
            async:o.async,
            dataType:o.dataTye,
            ajaxError:function(rq, textStatus, errorThrown){
                msgFailure(textStatus,rq); 
            },
            error:function(rq, textStatus, errorThrown){
                msgFailure(textStatus,rq);
            },
            success:function(a,b,c){
                o.error   = false;
                o.response = a;
            }
        });      
    } 
    load(this);
    return (this.error==null);
}
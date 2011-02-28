/**
 * Author: Alexander Villalobos Yadr�
 * E-Mail: avyadro@yahoo.com.mx
 * Created on Jan 01, 2008, 10:27:26 AM
 * Place: Quer�taro, Quer�taro, M�xico.
 * Company: Codicentro
 * Web: http://www.codicentro.com
 * Class Name: com.codicentro.system.js
 * Note: Depends com.codicentro.Ajax.js
 * Purpose:
 * Revisions:
 * Ver        Date               Author                                      Description
 * ---------  ---------------  -----------------------------------  ------------------------------------
 **/

/**
 * 
 */
File = function File(cfg){
    this.url    = null;
    this.method = null;
    for(x in cfg){
        switch(x){
            case "url":this.url = cfg[x];  
                break;
            case "method":this.method = cfg[x];  
                break;     
        }        
    }       
    switch(this.method){
        case "include":            
            function include(o){
                $.ajax({
                    url:o.url,
                    async:false,
                    dataType:"script",
                    ajaxError:function(rs){
                        msgFailure(RT(rs));
                    },
                    error:function(rs){
                        msgFailure(RT(rs));
                    }
                });    
            }                    
            include(this);
            break;
        case "use":
            /**
             * Include Java Script Code
             **/
            
            ajax =  new Ajax({
                url:this.url,
                async:false,
                dataType:"script",
                autoSubmit:true
            });
            if(!ajax.error)eval(ajax.response);
            break;     
    }
}

/**
 * Include JavaScript Dyamic: Cross-domain
 * 
 **/
function Inc(url,fnc,own){
$.ajax({
	async		: false,
	type		: "GET",
	dataType	: "script",
	url			: url,
	data		: null,
	fn			: function(){ alert("fn"); },
	ajaxError	: function(rs){	alert("ajaxError"); },
	error		: function(rs){	alert("error");	},
	failed		: function(){ alert("failed"); },
	success		: function(){
					if(typeof fnc!="undefined"){
						fnc(own);
					}
				   return true;
				  }
    });
}


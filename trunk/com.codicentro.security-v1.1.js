/**
 * Author: Alexander Villalobos Yadró
 * E-Mail: avyadro@yahoo.com.mx
 * Created on Jun 02, 2009, 04:46:26 PM
 * Place: Monterrey, Nuevo León, México.
 * Company: Codicentro
 * Web: http://www.codicentro.com
 * Class Name: com.codicentro.security.js
 * Purpose:
 * Revisions:
 * Ver        Date               Author                                      Description
 * ---------  ---------------  -----------------------------------  ------------------------------------
 * 1.0.0       Jun 02, 2009           Alexander Villalobos Yadró      New class.
 * 1.1.0       May 03, 2011		Alexander Villalobos Yadró			Security based by list authorities.
 **/

Security = function Security(cfg){
	this.key="authority";// Default value key name
	LIC(this,cfg);	
	this.validateSecurity();
}

Security.prototype.validateSecurity=function(){
if((typeof authorities!='undefined')
       &&(this.authorities!=null)){
		Ext.MessageBox.show({
					title: lng.window.title.warning,
					msg: lng.msg.error.badloadprivilege,
					buttons: Ext.MessageBox.OK,
					icon: Ext.MessageBox.WARNING
				});	   
     }
}

/**
 * Check security by authority 
 * o, Class
 **/
Security.prototype.chks =function(o){
	this.validateSecurity();
    if (this.chksc(o.IU,o.IU+':'+lng.msg.error.screendenied,function(){o.destroy();})){
	   o.create();
	}
}
/**
 * If matched
 **/
Security.prototype.mtch = function (a,m,f){
	this.validateSecurity();
    if(this.authorities.containsA(this.key,'ROOT-USER-PRIVILEGES')){
        return true;
    }else{		
		this.matched = false; 
		if(a instanceof Array){
		  this.idx 	   = 0;
		  while((!this.matched)&&(this.idx<a.length)){
		    this.matched = this.authorities.containsB(this.key,a[this.idx]);		    
		    this.idx++;
		  }	
		}else{
		  	this.matched = this.authorities.containsA(this.key,a)
		}
	return this.matched;
}
}

/**
 * Check security by authority
 * a, Authority
 * m, Message when denied
 * f, Execute when denied
 **/
Security.prototype.chksc = function (a,m,f){	
        if (!this.mtch(a,m,f)) {
				Ext.MessageBox.show({
					title: lng.window.title.warning,
					msg: a+': '+lng.msg.error.controllerdenied,
					buttons: Ext.MessageBox.OK,
					icon: Ext.MessageBox.WARNING,
					fn:f
				});
        }else{
			return true;
		}
}

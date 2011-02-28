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
 **/

Security = function Security(cfg){
    this.session = null;
    this.privileges = null;
    this.keys = null;
    this.values = null;
    for(x in cfg){
        switch(x){
            case "session":this.session = cfg[x];
                break;
            case "privileges":this.privileges = cfg[x];
                break;
            case "keys":this.keys=cfg[x];
                break;
            case "values":this.value=cfg[x];
                break;
        }
    } 
}

/**
 * Check privilege of screen
 **/
Security.prototype.chks =function(o){
    if((this.session!=null)&&(this.session.ID_ROLL!=null)&&(this.session.ID_ROLL=='ROOT-USER-PRIVILEGES')){
        o.create();
    }else{
        if ((this.privileges == null)||(!this.privileges.containsA(this.keys,[o.IU,"ACCESS"]))) {
            Ext.MessageBox.show({
                title: lng.window.title.warning,
                msg: (this.privileges == null)?lng.msg.error.badloadprivilege:o.IU+":"+lng.msg.error.screendenied,
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.WARNING,
                fn:function(){
                    o.destroy();
                }
            });
        }else{
            o.create();
        }
    }
}

/**
 * Check privilege of privileges by screen
 * s IU
 * c Controller 
 **/
Security.prototype.chksc = function (s,c){
    if((this.session!=null)&&(this.session.ID_ROLL!=null)&&(this.session.ID_ROLL=='ROOT-USER-PRIVILEGES')){
        return true;
    }else{
        if ((this.privileges == null)||(!this.privileges.containsA(this.keys,[s,c]))) {
            Ext.MessageBox.show({
                title: lng.window.title.warning,
                msg: (this.privileges==null)?lng.msg.error.badloadprivilege:c+":"+lng.msg.error.controllerdenied,
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.WARNING
            });
            return false;
        }else{
            return true;
        }
    }

}

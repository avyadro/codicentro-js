/**
 * Author: Alexander Villalobos Yadr�
 * E-Mail: avyadro@yahoo.com.mx
 * Created on Oct 01, 2008, 10:27:26 AM
 * Place: Monterrey, Nuevo Le�n, M�xico.
 * Company: Codicentro
 * Web: http://www.codicentro.com
 * Class Name: IncidentForm.js
 * Purpose:
 * Revisions:
 * Ver        Date               Author                                      Description
 * ---------  ---------------  -----------------------------------  ------------------------------------
 * 1.0.0       Oct 01, 2008           Alexander Villalobos Yadr�      New class.
 **/
ShowMessage = function ShowMessage(c){    
    this.wnd = new Ext.Window({
        title    : c.title,
        closable : true,
        resizable: false,
        modal: true,
        width    : CWxLS(c.title)+c.width,       
        plain    : true
    });
    switch(c.type){
        case "TXT":
            this.wnd.add(new Ext.form.TextArea({
                readOnly:true,
                height:100,
                width:this.wnd.width-10,
                value:c.text
                }));
            break;
            default:
                this.wnd.add(new Ext.form.Label({text:c.text}));
                break;
    }   
    if (!c.hide){
        this.show();   
    }
}
ShowMessage.prototype.show=function(){
    this.wnd.show();
}
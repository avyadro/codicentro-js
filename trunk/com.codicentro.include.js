/**
 * Author: Alexander Villalobos Yadró
 * E-Mail: avyadro@yahoo.com.mx
 * Created on Sep 06, 2010, 09:17:26 AM
 * Place: Toluca, Estado de México, México.
 * Company: Codicentro
 * Web: http://www.codicentro.com
 * Class Name: com.codicentro.include.js 
 * Purpose:
 * Revisions:
 * Ver        Date               Author                                      Description
 * ---------  ---------------  -----------------------------------  ------------------------------------ 
 **/

/*================================================
  Constructor
==================================================*/
function Inc(src){
  script = DCE("script");
  script.src = this.cfg.src;
  script.type = "text/javascript";
  script.id = GUID();   
}

function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

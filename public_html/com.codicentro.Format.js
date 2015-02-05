/**
 * Author: Alexander Villalobos Yadró
 * E-Mail: avyadro@yahoo.com.mx
 * Created on 10/08/2009, 03:16:38 PM
 * Place: Monterrey, Nuevo León, México.
 * Company: Codicentro
 * Web: http://www.codicentro.com
 * Class Name: Format.java
 * Purpose:
 * Revisions:
 * Ver        Date               Author                                      Description
 * ---------  ---------------  -----------------------------------  ------------------------------------
 * 1.0.0     10/08/2009           Alexander Villalobos Yadró           New class.
 **/

/**
 * Convert Number Value to Numeric Value Money Wich format ($0.00)
 */
function fMNY(v){
    v=(Math.round((v-0)*100))/100;
    v=(v==Math.floor(v))?v+".00":((v*10==Math.floor(v*10))?v+"0":v);
    v=String(v);
    ps=v.split(".");
    whole=ps[0];
    sub=ps[1]?"."+ps[1]:".00";
    r=/(\d+)(\d{3})/;
    while(r.test(whole)){
        whole=whole.replace(r,"$1"+","+"$2")
    }
    v=whole+sub;
    if(v.charAt(0)=="-"){
        return"-$"+v.substr(1)
    }
    return"$"+v
}
/**
 * Convert Number Value to Numeric Value Percent  Wich format (0.00%)
 */
function fPC(v){
    v=(Math.round((v-0)*100))/100;
    v=(v==Math.floor(v))?v+".00":((v*10==Math.floor(v*10))?v+"0":v);
    v=String(v);
    ps=v.split(".");
    whole=ps[0];
    sub=ps[1]?"."+ps[1]:".00";    
    return v+"%";
}
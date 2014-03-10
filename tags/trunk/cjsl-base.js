/**
 * Author: Alexander Villalobos Yadr�
 * E-Mail: avyadro@yahoo.com.mx
 * Created on Oct 30, 2008, 05:05:26 AM
 * Place: Quer�taro, Quer�taro, M�xico.
 * Company: Codicentro
 * Web: http://www.codicentro.com
 * Class Name: cjsl-base.js
 * Purpose: Codicentro JavaScript Library
 * Revisions:
 * Ver        Date               Author                                      Description
 * ---------  ---------------  -----------------------------------  ------------------------------------
 * 1.0.0       Mar 18, 2011           Alexander Villalobos Yadr�      New class.
 **/
 
/**
 * Constructor
 */
Cjsl=function(){};
/**
 * Merges and over-write left side object property with new and like properties in the passed object.
 * @param p, Parent
 * @param c, Children
 */
Cjsl.prototype.OM=function(p,c){
 	for (var x in c) {
               if (c.hasOwnProperty(x)) {
                   p[x] = ob[x];
               }
           }
   return p;           
}

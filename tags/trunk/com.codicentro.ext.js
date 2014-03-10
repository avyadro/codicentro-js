/**
 * Author: Alexander Villalobos Yadr�
 * E-Mail: avyadro@yahoo.com.mx
 * Created on Oct 30, 2008, 05:05:26 AM
 * Place: Quer�taro, Quer�taro, M�xico.
 * Company: Codicentro
 * Web: http://www.codicentro.com
 * Class Name: com.codicentro.ext.js
 * Purpose:
 * Revisions:
 * Ver        Date               Author                                      Description
 * ---------  ---------------  -----------------------------------  ------------------------------------
 * 1.0.0       Oct 05, 2008           Alexander Villalobos Yadr�      New class.
 **/

/**
 * Capitalize String
 * Jonas Raoni Soares Silva
 * http://jsfromhell.com/string/capitalize [v1.0] 
 **/
//String.prototype.capitalize = function(){ //v1.0
//    return this.replace(/\w+/g, function(a){
//        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
//    });
//};
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/string/capitalize [rev. #2]

String.prototype.capitalize = function(){
	return this.replace(/\S+/g, function(a){
		return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
	});
};
/**
 * Standar Name Property
 *
 **/
String.prototype.snp = function(){ //v1.0
    return this.replace(/[_]/gi," ").capitalize().replace(/[ ]/gi,"");
}

String.prototype.snpE = function(){ //v1.0
    return this.charAt(0).toLowerCase()+this.snp().slice(1);
}
String.prototype.toUtf8 = function(){
    var i=0;
    while(i<this.length) {       
        return null;

    }
}
/**
 *  String regex, String replacement
 */
String.prototype.replaceAll = function(regex,replacement){ //v1.0
 // return this.replace(/[_]/gi," "); 
 return this.replace(new RegExp(regex, 'g'), replacement);
}

/**
 * Get index If contains value into array object by key
 **/
Array.prototype.GIC = function (key,value) {
    this.index=-1;
    for(var i=0;(i<this.length&&this.index==-1);i++){ 
        if (this[i][key]==value){
            this.index=i;
        }
    }
    return this.index;
};

/**
 * Get index If contains value into array object by key
 * Array Object value [{key:key,value:value},...]
 *
 **/
Array.prototype.GICO = function(o) {
    this.index=-1;
    for (var i=0;(i<this.length&&this.index==-1);i++){
        this.matchOV = true;
        for (var j=0;j<o.length;j++){
            this.matchOV=(this.matchOV&&this[i][o[j].key]==o[j].value);
        }      
        this.index=(this.matchOV)?i:-1;
    }
    return this.index;
};

/**
 * Get value by key in current index
 **/
Array.prototype.getValue = function (key) {
    if(this.index>=0){
        return this[this.index][key];
    }else{
        return null;
    }
};

/**
 * Encoding String to Unicode Octal
 */
function ESUO(v,e) {
    v = v.replace(/\r\n/g,"\n");
    var utftext = "";
    for (var n = 0; n < v.length; n++) {
        var c = v.charCodeAt(n);
        if(c<128) {
            utftext+=String.fromCharCode(c);
        }else{
            utftext+=((e==null)?"":e)+c.toString(8);
        }
    }
    return utftext;
}
/**
 * Escape Encoding String to Unicode Octal
 */
function EESUO(v) {
    return ESUO(v,"\\");
}
/**
 * Generate Unique ID
 */
function GUID(){
    return new Date().format("YmdHis")+Math.random()*100000000000000000;
}
/**
 * Clone Object 
 **/
function CLOB(o){
    function CO() {}
    CO.prototype = o;
    return new CO();
}

/**
 * Create Property Object in Run Time
 * @param n Property Name
 * @param v Property Value
 */
function CPORT(n,v){
    function CP(){}
    CP.prototype[n] = v;
    return new CP();
}

/**
 * Load Initial Configuration 
 */
function LIC(o,c){
 for(x in c){
        MRPO(o,CPORT(x,c[x]));
    }	 
}
/**
 * Depends of Object
 * @params d Depends
 */
function DOB(d){
    if (d!=null){
        for(i=0;i<d.length;i++){
            if ((d[i].CO().store)&&(d[i].CO().store.removeAll)){
                d[i].CO().store.removeAll();
            }
            if (d[i].CO().reset){
                d[i].CO().reset();
            }
            d[i].CO().lastQuery="http://www.codicentro.com?ID="+GUID();
        }
    }    
}
/**
 * Fire Load Store Depends Object
 */
function LSDOB(d){
    if (d!=null){
        for(i=0;i<d.length;i++){
            //if ((d[i].depends)&&(d[i].getEl().store)){
            d[i].ds.load();
        // }
        }
    }
}

/**
 * Extend Objects, simple inheritance
 * @param p Parent Object
 * @param c Child Object
 * @deprecated
 **/
function EOSI(p,c){
    function EO(){}
    for (x in p){
        EO.prototype[x] = p[x];
    }
    for (x in c){
        EO.prototype[x] = c[x];
    }
    delete x;  
    return new EO();
}

/**
 * Merge two or more objects
 */
function MRG() {
    var result = {},
        length = arguments.length,
        object = null,
        key    = null;

    if ( length < 2 ) {
        throw "Must merge two or more objects";
    }

    for ( var i=0; i<length; ++i ) {
        object = arguments[i];
        for ( var key in object ) {
            if ( !object.hasOwnProperty(key) ) { continue; }
            result[key] = object[key];
        }
    }
    return result;
};

/**
 * Aggregate two or more objects.
 */
function AGG() {
    if ( length < 2 ) {
        throw "Must aggregate two or more objects";
    }
    // The following can be simplified to 
    //   return Array.prototype.slice.call(arguments);
    // but is left in a more explicit manner to illustrate the difference
    var result = [],
        length = arguments.length;

    for ( var i=0; i<length; ++i ) {
        if ( arguments.hasOwnProperty(i) ) {
            result.push(arguments[i]);
        }
    }
    return result;
};


/**
 * Merge Recursively Properties of Two Objects
 */
function MRPO(obj1, obj2) {
	if(typeof obj1=='undefined'){		
		return obj2;
	}else{
    for (var p in obj2) {
        try {
            // Property in destination object set; update its value.
            if ( obj2[p].constructor==Object ) {
                obj1[p] = MRPO(obj1[p], obj2[p]);
            } else {
                obj1[p] = obj2[p];
            }
        } catch(e) {			
            // Property in destination object not set; create it and set its value.
            obj1[p] = obj2[p];
        }
    }
    return obj1;
 }
}


/**
 * Extend Objects, multiple inheritance
 * @param o List Object
 **/
function EOMI(o){
    function EO(){}
    for(y=0;y<o.length;y++){
        for (var i in o[y]){
            EO.prototype[i] = o[y][i];
        }
    }
    delete i;
    delete y;
    return new EO();
}

    
/*
Object.extend(Array.prototype, {
    intersect: function(array){
        return this.findAll( function(token){
            return array.include(token)
        } );
    }
});
 */
 


/**
 * Contains element into array object 
 **/
Array.prototype.contains = function (element) {
    for (var i = 0; i < this.length; i++){
        if (this[i] == element){
            return true;
        }
    }
    return false;
};

/**
 * Contains value into array object by key
 **/
Array.prototype.contain = function (key,value) {
    for (var i = 0; i < this.length; i++){
        if (this[i][key] == value){
            return true;
        }
    }
    return false;
};

/**
 * Contains any value into array object by any key
 **/
Array.prototype.containsA = function (key,value) {	
    for (var i = 0; i < this.length; i++){
        tmp = true;
        for(var k = 0;k <key.length; k++){
            tmp = tmp && this[i][key[k]] == value[k];
        }
        if (tmp){
            return true;
        }
    }
    return false;
};

/**
 * Contains any value into array object by any key
 **/
Array.prototype.containsB = function (key,value) {	
	this.matched = false;
	this.idx	 = 0;
	while((!this.matched)&&(this.idx<this.length)){
		this.matched = this[this.idx][key] == value;
		this.idx++;
	}
    return this.matched;
};

Array.prototype.remove=function(element){
    for (var i = 0; i < this.length; i++){
        if(element==this[i]) this.splice(i, 1);
    }
}

Array.prototype.remove=function(element){
    for (var i = 0; i < this.length; i++){
        if(element==this[i]) this.splice(i, 1);
    }
}
/**
 *
 */
function msgFailure(msg,fn){
    Ext.MessageBox.show({
        title: lng.window.title.error,
        msg: msg,
        buttons: Ext.MessageBox.OK,
        icon:Ext.MessageBox.ERROR,
        fn:fn
    });
}


function msgSuccess(msg,fn){
    Ext.MessageBox.show({
        minWidth:400,
        title: lng.window.title.information,
        msg: msg,
        buttons: Ext.MessageBox.OK,
        icon:Ext.MessageBox.INFO,
        fn:fn
    });
    
}
/*
Ext.lib.Ajax.request = function(method, uri, cb, data, options) {
    if(options){
        var hs = options.headers;
        if(hs){
            for(var h in hs){
                if(hs.hasOwnProperty(h)){
                    this.initHeader(h, hs[h], false);
                }
            }
        }
        if(options.xmlData){
            this.initHeader('Content-Type', 'text/xml', false);
            method = 'POST';
            data = options.xmlData;
        }else if(options.jsonData){
            this.initHeader('Content-Type', 'text/javascript', false);
            method = 'POST';
            data = typeof options.jsonData == 'object' ? Ext.encode(options.jsonData) : options.jsonData;
        }
        if (options.async == false) {
            return this.syncRequest(method, uri, cb, data);
        }
    }
    return this.asyncRequest(method, uri, cb, data);
};


Ext.lib.Ajax.syncRequest = function(method, uri, callback, postData)
{
    var o = this.getConnectionObject();

    if (!o) {
        return null;
    }
    else {
        o.conn.open(method, uri, false);

        if (this.useDefaultXhrHeader) {
            if (!this.defaultHeaders['X-Requested-With']) {
                this.initHeader('X-Requested-With', this.defaultXhrHeader, true);
            }
        }

        if(postData && this.useDefaultHeader){
            this.initHeader('Content-Type', this.defaultPostHeader);
        }

        if (this.hasDefaultHeaders || this.hasHeaders) {
            this.setHeader(o);
        }

        o.conn.send(postData || null);
        this.handleTransactionResponse(o, callback);
        return o;
    }
};
*/
/**
 * Convert Object Params to Standard Params
 */
function COPSP(p){
    copsp = "";
    for (x in p){
        copsp +=((copsp=="")?"":"&")+x+"="+( ((typeof p[x]=='undefined')||(p[x]==null))?"":p[x]);
    }
    return copsp;
}

/**
 * @deprecated
 **/
function DOFI(url){
   // CJSUtil.download(url,true);
   Ext.MessageBox.show({
				title:lng.msg.information.waiting,
				msg: lng.msg.information.processing,
				width:300,
				wait:true,
				hide:true,
				visible:true,
				waitConfig: {
					interval:200
				},
				icon:'ext-mb-download'
			});
			iframe = document.createElement('iframe');
			iframe.id=GUID();
			iframe.name=iframe.id;
			iframe.style.display = 'none';
			if(Ext.isIE){
				  iframe.onreadystatechange=function(){
						//document.body.removeChild(iframe);
						iframe=null;
						Ext.MessageBox.hide();
				  };
				}else {
							iframe.onload = function() {
							//document.body.removeChild(iframe);
							iframe=null;
							Ext.MessageBox.hide();
						};
				}
			iframe.src=url;
			document.body.appendChild(iframe);
   
}
/**
 * Embed url into Panel
 */
EURLP = Ext.extend(Ext.Panel, {
    onRender: function() {
        this.bodyCfg = {
            tag: "iframe",
            src: this.src,
            cls: this.bodyCls,
            style: {
                border: "0px none"
            }
        };
        EURLP.superclass.onRender.apply(this, arguments);
    }
});

/**
 * Data Store Cross Domain 
 * @param ds, Data store
 */
function DSCD(own,url){ 
 if(   (typeof own!="undefined")
    && (typeof own.ds!="undefined")
    && (typeof url!="undefined")){
	if(typeof own.context!="undefined"){
	  	own.ds.proxy = new Ext.data.ScriptTagProxy({url: own.context+url,method: "POST"});
	}else{
		own.ds.url = url;
	}	
 }      		
}

/**
 * Form Cross Domain 
 * @param ds, Data store
 */
function FMCD(own,url){ 
 if(   (typeof own!="undefined")
    && (typeof own.form!="undefined")
    && (typeof url!="undefined")){
	if(typeof own.context!="undefined"){
	  	own.form.proxy = new Ext.data.ScriptTagProxy({url: own.context+url,method: "POST"});
	  	own.form.url = url;
	}else{
		own.form.url = url;
	}	
 }      		
}

/**
 * Submit Cross Domain 
 * @param ds, Data store
 */
function SBCD(own,url){ 
 if(   (typeof own!="undefined")
    && (typeof own.form!="undefined")
    && (typeof url!="undefined")){
	if(typeof own.context!="undefined"){
	  	own.form.proxy = new Ext.data.HttpProxy({url: own.context+url,method: "POST"});
	}else{
		own.form.url = url;
	}	
 }      		
}
/**
 * Encode URL
 * 
 */
function EURL(own,url){ 
 if(   (typeof own!="undefined")  
    && (typeof url!="undefined")){
	if((typeof own.context!="undefined")&&(own.context!=null)){
	  	return own.context+url;
	}else{
		return url;
	}	
 }else{
	 return url;
 }      		
}

/**
 * Get Proxy or Url
 * 
 */
function GPU(own,url,target){
 if(   (typeof own!="undefined") 
    && (typeof target!="undefined")  
    && (typeof url!="undefined")){
	if(typeof own.context!="undefined"){
	  	return target.proxy=new Ext.data.HttpProxy({url: own.context+url});
	}else{
		return target.url=url;
	}	
 }else{
	 return target;
 }
}

Date.fromISOString = (function(){
  var tzoffset = (new Date).getTimezoneOffset();
  function fastDateParse(y, m, d, h, i, s, ms){ // this -> tz
    return new Date(y, m - 1, d, h || 0, +(i || 0) - this, s || 0, ms || 0);
  }

  // result function
  return function(isoDateString){
    var tz = isoDateString.substr(10).match(/([\-\+])(\d{1,2}):?(\d{1,2})?/) || 0;
    if (tz)
      tz = tzoffset + (tz[1] == '-' ? -1 : 1) * (tz[3] != null ? +tz[2] * 60 + (+tz[3]) : +tz[2]);
    return fastDateParse.apply(tz || 0, isoDateString.split(/\D/));
  }
})();

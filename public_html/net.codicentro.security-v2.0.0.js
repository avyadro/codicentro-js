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
/**
 * 
 * @param {type} cfg
 * @returns {Security}
 */
Security = function Security(cfg) {
    this.key = "authority";// Default value key name
    LIC(this, cfg);
    this.validateSecurity();
}
/**
 * 
 * @returns {undefined}
 */
Security.prototype.validateSecurity = function () {
    if (typeof authorities !== 'undefined' && this.authorities !== null) {
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
 * @param {type} o
 * @returns {undefined}
 */
Security.prototype.chks = function (o) {
    this.validateSecurity();
    if (this.chksc(o.IU, o.IU + ':' + lng.msg.error.screendenied, function () {
        if (typeof o.destroy !== 'undefined') {
            o.destroy();
        }
    })) {
        o.create();
    }
}
/**
 * Check security by authority
 * @param {type} a
 * @returns {Security@pro;authorities@call;containsA|Boolean|Security@pro;authorities@call;containsB}
 */
Security.prototype.isAllowed = function (a) {
    this.validateSecurity();
    if (this.authorities.containsA(this.key, 'ROOT-USER-PRIVILEGES')) {
        return true;
    } else {
        this.matched = false;
        if (a instanceof Array) {
            this.idx = 0;
            while ((!this.matched) && (this.idx < a.length)) {
                this.matched = this.authorities.containsB(this.key, a[this.idx]);
                this.idx++;
            }
        } else {
            this.matched = this.authorities.containsA(this.key, a);
        }
        return this.matched;
    }
}

/**
 * Check security by authority
 * @param {type} a
 * @param {type} m
 * @param {type} f
 * @returns {Boolean}
 */
Security.prototype.chksc = function (a, m, f) {
    if (!this.isAllowed(a)) {
        Ext.MessageBox.show({
            title: lng.window.title.warning,
            msg: a + ': ' + lng.msg.error.controllerdenied,
            buttons: Ext.MessageBox.OK,
            icon: Ext.MessageBox.WARNING,
            fn: f
        });
        return false;
    } else {
        return true;
    }
}

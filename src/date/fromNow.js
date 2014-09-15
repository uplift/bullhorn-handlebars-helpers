// fromNow using Moment.js
// Usage: {{fromNow date true}}
( function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'moment',
                'exports'
            ],
            function( Handlebars, moment, exports ) {
                root.Bullhorn = root.Bullhorn || {};
                root.Bullhorn.fromNow = factory( root, exports, Handlebars.default, moment );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var moment = require( 'moment' );

        module.exports = function( Handlebars ) {
            return factory( root, {}, Handlebars, moment );
        };
    // Finally, as a browser global.
    } else {
        root.Bullhorn = root.Bullhorn || {};
        root.Bullhorn.fromNow = factory( root, {}, root.Handlebars, root.moment );
    }
}( this, function( root, fromNow, Handlebars, moment ) {
    fromNow = function( date, suffix, options ) {
        if ( typeof suffix === 'object' ) {
            options = suffix;
            suffix = false;
        }

        var from = date,
            momentDate;

        if ( date ) {
            momentDate = moment( date );
            from = momentDate.isValid() ? momentDate.fromNow( suffix ) : date;
        }

        return from;
    };
    Handlebars.registerHelper( 'fromNow', fromNow );
    return fromNow;
} ));

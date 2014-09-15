// Date Formatting using Moment.js
// Usage: {{formatDate date "MMMM YYYY"}}
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
                root.Bullhorn.formatDate = factory( root, exports, Handlebars.default, moment );
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
        root.Bullhorn.formatDate = factory( root, {}, root.Handlebars, root.moment );
    }
}( this, function( root, formatDate, Handlebars, moment ) {
    formatDate = function( date, format, options ) {
        if ( typeof format === 'object' ) {
            options = format;
            format = "DD/MM/YYYY";
        }

        var ret = date,
            momentDate;

        if ( date ) {
            momentDate = moment( date );
            ret = momentDate.isValid() ? momentDate.format( format ) : date;
        }

        return ret;
    };
    Handlebars.registerHelper( 'formatDate', formatDate );
    return formatDate;
} ));

// Now using Moment.js
// Usage: {{now "MMMM YYYY"}}
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
                root.Bullhorn.now = factory( root, exports, Handlebars.default, moment );
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
        root.Bullhorn.now = factory( root, {}, root.Handlebars, root.moment );
    }
}( this, function( root, now, Handlebars, moment ) {
    now = function( format, options ) {
        if ( typeof format === 'object' ) {
            options = format;
            format = "DD/MM/YYYY";
        }

        return moment().format( format );
    };
    Handlebars.registerHelper( 'now', now );
    return now;
} ));

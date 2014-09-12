// Array Join Helper
// Usage: {{join array ", "}}
( function( root, factory ) {
    "use strict";
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'exports'
            ],
            function( Handlebars, exports ) {
                root.Bullhorn = root.Bullhorn || {};
                root.Bullhorn.join = factory( root, exports, Handlebars.default );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        module.exports = function( Handlebars ) {
            return factory( root, {}, Handlebars );
        };
    // Finally, as a browser global.
    } else {
        root.Bullhorn = root.Bullhorn || {};
        root.Bullhorn.join = factory( root, {}, root.Handlebars );
    }
}( this, function( root, join, Handlebars ) {
    join = function( array, delimiter, options ) {
        if ( typeof delimiter === "undefined" ) {
            delimiter = ', ';
        }
        if ( typeof delimiter === "object" ) {
            options = delimiter;
            delimiter = ', ';
        }

        if ( array && typeof array.join === "function" ) {
            return array.join( delimiter );
        } else {
            return "";
        }
    };
    Handlebars.registerHelper( 'join', join );
    return join;
} ));

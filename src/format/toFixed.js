// To Fixed Number Helper
// Usage: {{toFixed number}}
( function( root, factory ) {
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
                root.Bullhorn.toFixed = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.toFixed = factory( root, {}, root.Handlebars );
    }
}( this, function( root, toFixed, Handlebars ) {
    toFixed = function( number, digits, options ) {
        var num = Number( number );

        if ( isNaN( num ) ) {
            return number;
        }
        if ( typeof digits === 'object' ) {
            options = digits;
            digits = 2;
        }

        return num.toFixed( digits );
    };
    Handlebars.registerHelper( 'toFixed', toFixed );
    return toFixed;
} ));

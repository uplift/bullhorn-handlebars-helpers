// Starts With Helper
// Usage: {{#startsWith value startValue}}do something{{else}}do something else{{/startsWith}}
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
                root.Bullhorn.startsWith = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.startsWith = factory( root, {}, root.Handlebars );
    }
}( this, function( root, startsWith, Handlebars ) {
    startsWith = function( value, start, options ) {
        if ( typeof start === 'object' ) {
            options = start;
            return ( options.inverse || function() {} )( value );
        }

        var noop = function() {},
            fn = options.fn || noop,
            inverse = options.inverse || noop,
            valueStart;

        valueStart = value.slice( 0, start.length );

        if ( value.length >= start.length && valueStart === start ) {
            return fn( value );
        } else {
            return inverse( value );
        }
    };
    Handlebars.registerHelper( 'startsWith', startsWith );
    return startsWith;
} ));

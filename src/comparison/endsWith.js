// Ends With Helper
// Usage: {{#endsWith value endValue}}do something{{else}}do something else{{/endsWith}}
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
                root.Bullhorn.endsWith = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.endsWith = factory( root, {}, root.Handlebars );
    }
}( this, function( root, endsWith, Handlebars ) {
    endsWith = function( value, end, options ) {
        if ( typeof end === 'object' ) {
            options = end;
            return ( options.inverse || function() {} )( value );
        }

        var noop = function() {},
            fn = options.fn || noop,
            inverse = options.inverse || noop,
            valueEnding;

        valueEnding = value.slice( value.length - end.length );

        if ( value.length >= end.length && valueEnding === end ) {
            return fn( value );
        } else {
            return inverse( value );
        }
    };
    Handlebars.registerHelper( 'endsWith', endsWith );
    return endsWith;
} ));

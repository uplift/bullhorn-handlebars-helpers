// If Less Than or Equal To Helper
// Usage: {{#if-lte value compareValue}}do something{{else}}do something else{{/if-lte}}
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
                root.Bullhorn.lessThanEqualTo = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.lessThanEqualTo = factory( root, {}, root.Handlebars );
    }
}( this, function( root, lessThanEqualTo, Handlebars ) {
    lessThanEqualTo = function( value, compare, options ) {
        var noop = function() {},
            fn = options.fn || noop,
            inverse = options.inverse || noop;

        if ( value <= compare ) {
            return fn( value );
        } else {
            return inverse( value );
        }
    };
    Handlebars.registerHelper( 'if-lte', lessThanEqualTo );
    return lessThanEqualTo;
} ));

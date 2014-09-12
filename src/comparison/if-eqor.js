// If Equals Or Helper
// Compares value to multiple other values
// Usage: {{#if-eqor value [compareValues]}}do something{{else}}do something else{{/if-eqor}}
( function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'exports'
            ],
            function( Handlebars, _, exports ) {
                root.Bullhorn = root.Bullhorn || {};
                root.Bullhorn.equalOr = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.equalOr = factory( root, {}, root.Handlebars );
    }
}( this, function( root, equalOr, Handlebars ) {
    equalOr = function() {
        var noop = function() {},
            args = Array.prototype.slice.call( arguments ),
            value = args.shift(),
            options = args.pop(),
            inverse = options.inverse || noop,
            fn = options.fn || noop,
            i = 0,
            matches = false;

        while ( args[ i ] ) {
            if ( value === args[ i ] ) {
                matches = true;
                break;
            }
            i++;
        }

        if ( matches ) {
            return fn( value );
        } else {
            return inverse( value );
        }
    };
    Handlebars.registerHelper( 'if-eqor', equalOr );
    return equalOr;
} ));

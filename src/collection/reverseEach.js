// Collection Reverse Each Helper
// Loop over a collection from the end to the beginning
// Can also loop over a limited subset of a collection.
// Usage: {{#reverseEach items}}do something{{/reverseEach}}
// Usage: {{#reverseEach items 3 5}}do something{{/reverseEach}}
// Usage: {{#reverseEach items 7}}do something{{/reverseEach}}
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
                root.Bullhorn.reverseEach = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.reverseEach = factory( root, {}, root.Handlebars );
    }
}( this, function( root, reverseEach, Handlebars ) {
    reverseEach = function( array, offset, limit, options ) {
        var ret = "",
            max, min;

        if ( offset && typeof offset === 'object' ) {
            options = offset;
            limit = null;
            offset = null;
        }
        if ( limit && typeof limit === 'object' ) {
            options = limit;
            limit = offset;
            offset = null;
        }

        if ( array && array.length > 0 ) {
            max = offset ? Math.min( array.length, array.length - offset - 1 ) : array.length - 1;
            min = limit && limit < array.length ? Math.max( 0, ( array.length - limit ) ) : 0;
            for ( var i = max; i >= min; i-- ) {
                ret += options.fn( array[ i ] );
            }
        }

        return ret;
    };
    Handlebars.registerHelper( 'reverseEach', reverseEach );
    return reverseEach;
} ));

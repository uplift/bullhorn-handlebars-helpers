// Collection Limit Helper
// Loop over a limited subset of a collection.
// Usage: {{#limit items 3 5}}do something {{/limit}} - from 3rd to 5th items in collection
// Usage: {{#limit items 7}}do something {{/limit}} - from 1st to 7th items in collection
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
                root.Bullhorn.limit = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.limit = factory( root, {}, root.Handlebars );
    }
}( this, function( root, limit, Handlebars ) {
    limit = function( array, offset, limit, options ) {
        if ( typeof limit === 'object' ) {
            options = limit;
            limit = offset;
            offset = null;
        }
        var ret = "";

        if ( array && array.length > 0 ) {
            var min = ( parseInt( offset, 10 ) || 0 );
            var max = Math.min( array.length, limit );
            for ( var i = min; i < max; i++ ) {
                ret += options.fn( array[ i ] );
            }
        }

        return ret;
    };
    Handlebars.registerHelper( 'limit', limit );
    return limit;
} ));

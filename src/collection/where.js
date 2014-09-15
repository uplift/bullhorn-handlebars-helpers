// Where Collection Helper using Underscore.js
// Usage: {{#where}}do something{{/where}}
( function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'underscore',
                'exports'
            ],
            function( Handlebars, _, exports ) {
                root.Bullhorn = root.Bullhorn || {};
                root.Bullhorn.where = factory( root, exports, Handlebars.default, _ );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var _ = require( 'underscore' );

        module.exports = function( Handlebars ) {
            return factory( root, {}, Handlebars, _ );
        };
    // Finally, as a browser global.
    } else {
        root.Bullhorn = root.Bullhorn || {};
        root.Bullhorn.where = factory( root, {}, root.Handlebars, root._ );
    }
}( this, function( root, where, Handlebars, _ ) {
    where = function( collection, key, value, limit, options ) {
        if ( typeof limit === 'object' ) {
            options = limit;
            limit = null;
        }

        var filter = {}, results, length, result = '';

        filter[ key ] = value;
        results = _.where( collection, filter );
        length = _.isNumber( limit ) ? Math.min( results.length, limit ) : results.length;

        for ( var i = 0; i < length; i++ ) {
            result += options.fn( results[ i ] );
        }

        return result;
    };
    Handlebars.registerHelper( 'where', where );
    return where;
} ));

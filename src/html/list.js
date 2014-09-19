// List Helper
// Usage: {{list items}}
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
                root.Bullhorn.list = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.list = factory( root, {}, root.Handlebars );
    }
}( this, function( root, list, Handlebars ) {
    list = function( array, options ) {
        var html = [], label;

        for ( var i = 0, len = array.length; i < len; i++ ) {
            label = Handlebars.Utils.escapeExpression( array[ i ] );
            html.push( '<li>' + label + '</li>' );
        }
        return new Handlebars.SafeString( html.join( '' ) );
    };
    Handlebars.registerHelper( 'list', list );
    return list;
} ));

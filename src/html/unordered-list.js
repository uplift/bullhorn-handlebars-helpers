// Unordered List Helper
// Usage: {{unordered-list items}}
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
                root.Bullhorn.unorderedList = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.unorderedList = factory( root, {}, root.Handlebars );
    }
}( this, function( root, unorderedList, Handlebars ) {
    unorderedList = function( array, options ) {
        var id = options.hash.id ? ' id="' + Handlebars.Utils.escapeExpression( options.hash.id ) + '"' : '',
            cls = options.hash.class ? ' class="' + Handlebars.Utils.escapeExpression( options.hash.class ) + '"' : '',
            html = [ '<ul' + id + cls + '>' ], label;

        for ( var i = 0, len = array.length; i < len; i++ ) {
            label = Handlebars.Utils.escapeExpression( array[ i ] );
            html.push( '<li>' + label + '</li>' );
        }
        html.push( '</ul>' );
        return new Handlebars.SafeString( html.join( '' ) );
    };
    Handlebars.registerHelper( 'ul', unorderedList );
    return unorderedList;
} ));

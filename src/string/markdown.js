// Markdown Helper using pagedown
// Usage: {{markdown "**Bold**"}}
( function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'pagedown',
                'exports'
            ],
            function( Handlebars, Markdown, exports ) {
                root.Bullhorn = root.Bullhorn || {};
                root.Bullhorn.markdown = factory( root, exports, Handlebars.default, Markdown );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Markdown = require( 'pagedown' );

        module.exports = function( Handlebars ) {
            return factory( root, {}, Handlebars, Markdown );
        };
    // Finally, as a browser global.
    } else {
        root.Bullhorn = root.Bullhorn || {};
        root.Bullhorn.markdown = factory( root, {}, root.Handlebars, root.Markdown );
    }
}( this, function( root, markdown, Handlebars, Markdown ) {
    markdown = function( text, options ) {
        var converter = new Markdown.Converter(),
            escapeText = Handlebars.Utils.escapeExpression( text );

        return new Handlebars.SafeString( converter.makeHtml( escapeText ) );
    };
    Handlebars.registerHelper( 'markdown', markdown );
    return markdown;
} ));

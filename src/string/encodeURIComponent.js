// Encode URI Component Helper
// Usage: {{encodeURIComponent "http://url.com/some/path"}}
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
                root.Bullhorn.encodeURIComponent = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.encodeURIComponent = factory( root, {}, root.Handlebars );
    }
}( this, function( root, encodeURIComponentHelper, Handlebars ) {
    encodeURIComponentHelper = function( str ) {
        return encodeURIComponent( str );
    };
    Handlebars.registerHelper( 'encodeURIComponent', encodeURIComponentHelper );
    return encodeURIComponentHelper;
} ));

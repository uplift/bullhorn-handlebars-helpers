// Lowercase Helper
// Usage: {{lowercase "STRING"}}
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
                root.Bullhorn.lowercase = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.lowercase = factory( root, {}, root.Handlebars );
    }
}( this, function( root, lowercase, Handlebars ) {
    lowercase = function( string ) {
        string = string || "";
        return string.toLowerCase();
    };
    Handlebars.registerHelper( 'lowercase', lowercase );
    return lowercase;
} ));

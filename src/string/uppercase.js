// Uppercase Helper
// Usage: {{uppercase "string"}}
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
                root.Bullhorn.uppercase = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.uppercase = factory( root, {}, root.Handlebars );
    }
}( this, function( root, uppercase, Handlebars ) {
    uppercase = function( string ) {
        string = string || "";
        return string.toUpperCase();
    };
    Handlebars.registerHelper( 'uppercase', uppercase );
    return uppercase;
} ));

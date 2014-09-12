// Capitalize Helper
// Usage: {{capitalize "lowercase word"}}
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
                root.Bullhorn.capitalize = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.capitalize = factory( root, {}, root.Handlebars );
    }
}( this, function( root, capitalize, Handlebars ) {
    capitalize = function( string ) {
        return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
    };
    Handlebars.registerHelper( 'capitalize', capitalize );
    return capitalize;
} ));

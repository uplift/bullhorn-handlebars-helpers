// Math Subtract Helper
// Usage: {{subtract 5 2}} -> 3
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
                root.Bullhorn.subtract = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.subtract = factory( root, {}, root.Handlebars );
    }
}( this, function( root, subtract, Handlebars ) {
    subtract = function( number, subtract ) {
        return parseFloat( number, 10 ) - parseFloat( subtract, 10 );
    };
    Handlebars.registerHelper( 'subtract', subtract );
    return subtract;
} ));

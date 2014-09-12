// Math Multiply Helper
// Usage: {{multiply 5 2}} -> 10
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
                root.Bullhorn.multiply = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.multiply = factory( root, {}, root.Handlebars );
    }
}( this, function( root, multiply, Handlebars ) {
    multiply = function( number, multiplier ) {
        return parseFloat( number, 10 ) * parseFloat( multiplier, 10 );
    };
    Handlebars.registerHelper( 'multiply', multiply );
    return multiply;
} ));

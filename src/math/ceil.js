// Math Ceil Helper
// Usage: {{ceil 5.1}} -> 6
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
                root.Bullhorn.ceil = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.ceil = factory( root, {}, root.Handlebars );
    }
}( this, function( root, ceil, Handlebars ) {
    ceil = function( number ) {
        return Math.ceil( number );
    };
    Handlebars.registerHelper( 'ceil', ceil );
    return ceil;
} ));

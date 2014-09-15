// Math Round Helper
// Usage: {{round 5.7}} -> 6
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
                root.Bullhorn.round = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.round = factory( root, {}, root.Handlebars );
    }
}( this, function( root, round, Handlebars ) {
    round = function( number ) {
        return Math.round( number );
    };
    Handlebars.registerHelper( 'round', round );
    return round;
} ));

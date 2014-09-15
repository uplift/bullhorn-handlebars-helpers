// Math Floor Helper
// Usage: {{floor 5.7}} -> 5
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
                root.Bullhorn.floor = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.floor = factory( root, {}, root.Handlebars );
    }
}( this, function( root, floor, Handlebars ) {
    floor = function( number ) {
        return Math.floor( number );
    };
    Handlebars.registerHelper( 'floor', floor );
    return floor;
} ));

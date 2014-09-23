# Bullhorn Handlebars Helpers

[![Bower version](https://badge.fury.io/bo/bullhorn.svg)](http://badge.fury.io/bo/bullhorn)
[![NPM version](https://badge.fury.io/js/bullhorn.svg)](http://badge.fury.io/js/bullhorn)
[![Dependency Status](https://david-dm.org/uplift/bullhorn-handlebars-helpers.svg)](https://david-dm.org/uplift/bullhorn-handlebars-helpers)
[![devDependency Status](https://david-dm.org/uplift/bullhorn-handlebars-helpers/dev-status.svg)](https://david-dm.org/uplift/bullhorn-handlebars-helpers#info=devDependencies)

A collection of handlebars helpers to be used with [Handlebars](http://handlebarsjs.com/) templating.

## Install

### Bower

    bower install bullhorn-handlebars-helpers

### NPM

    npm install bullhorn-handlebars-helpers

## Usage

### Node

In Node.js environment, require the helper as a standard module and pass an instance of the Handlebars object to the required function.

    var Handlebars = require( 'handlebars' );
    var join = require( 'bullhorn/src/array/join' )( Handlebars );

The helper will be registered on the handlebars object inside of the required module. The helper is also returned as a standalone function incase it is required outside of a handlebars template. Usually you won't need to use the standalone function.

Alternatively you can register all helpers at once by requiring the bullhorn object and passing in the instance of Handlebars. This will also give you an object with all the functions on it for use outside of Handlebars templates.

    var Handlebars = require( 'handlebars' );
    var Bullhorn = require( 'bullhorn' )( Handlebars );
    // Can now use Bullhorn.join( /* ARGS */ ); 

### Browser

In a browser environment, just include the script to the helper as a script tag after the inclusion of the Handlebars script tag. (Some helpers require other libraries to be included before the helpers inclusion)
    
    <script src="bower_components/handlebars/handlebars.js"></script>
    <script src="bower_components/bullhorn/src/array/join.js"></script>

The helper will be registered on the handlebars object inside the script and a standalone function will be attached to a global Bullhorn object incase it is required outside of a handlebars template.  The above script tag would be accessible from Bullhorn.join.

### AMD

In an AMD environment, load the helper as you would any other AMD module. You'll need to configure a 'handlebars' path in your requirejs config as all the helpers load 'handlebars' in their definition. The helper will be registered on the handlebars object inside the module script and the standalone function is returned as the module export value incase it is required outside of a handlebars template. The standalone function is also attached to the global Bullhorn object the same as the standard browser environment.

    requirejs.config({
        paths: {
            "handlebars": "path/to/handlebars"
        }
    });

    // My Module
    define( [ 'bower_components/src/array/join' ], function( join ) {
        // Do something
    });


## Helpers

Detailed description of each helper can be found in their corresponding directory README under the **src** directory.

### Array

  * Join

### Collection

  * Limit
  * Reverse Each
  * Where

### Comparison

  * Contains
  * Ends With
  * If Equal
  * If Equal Or
  * If Greater Than
  * If Greater Than Or Equal
  * If Less Than
  * If Less Than Or Equal
  * If Not Equal
  * Starts With

### Date

  * Ago
  * Format Date
  * From Now
  * Now

### Form

  * Options List

### Format

  * To Fixed

### HTML

  * List
  * Ordered List
  * Unordered List

### Math

  * Add
  * Ceil
  * Divide
  * Floor
  * Multiply
  * Round
  * Subtract

### Misc

  * Debug

### String

  * Capitalize
  * Encode URI Component
  * Lowercase
  * Markdown
  * Truncate
  * Uppercase

## License

Licensed under the [MIT](http://www.opensource.org/licenses/MIT) license.



# Bullhorn Handlebars Array Helpers

## Join

Accepts an array and an optional delimiter (**Default:** ", ") to join the contents of the array together. Basically a Handlebars wrapper around Array.prototype.join function.

**Usage:**

    // array = [ "Hello", "World" ]
    {{join array " + "}}
    // Output => "Hello + World"

**Other Dependencies:** N/A

# Bullhorn Handlebars Format Helpers

## To Fixed (decimal places)

Accepts a number and an optional digits (**Default:** 2) to fix the number to the specified decimal places. Basically a Handlebars wrapper around Number.prototype.toFixed function.

**Usage:**

    {{toFixed 1.7532 2}}
    // Output => 1.75

**Other Dependencies:** N/A

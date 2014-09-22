# Bullhorn Handlebars Misc Helpers

## Debug

Accepts an optional value to log to the console. With or without a value the context/scope at that point in the template is logged to the console followed by the value if specified.

**Usage:**

    // someValue = "Hello"
    {{debug someValue}}
    // Console Output => 
    // DEBUG
    // ================
    // Context
    // {} <- Object referring to this in current scope of helper
    // Value
    // "Hello"

**Other Dependencies:** N/A

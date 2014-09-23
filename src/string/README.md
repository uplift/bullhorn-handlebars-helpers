# Bullhorn Handlebars String Helpers

## Capitalize

Accepts a string and capitalizes the first letter.

**Usage:**

    {{capitalize "hello world"}}
    // Output => "Hello world"

**Other Dependencies:** N/A

## Encode URI Component

Accepts a string and encodes it as a URI component. Basically a Handlebars wrapper around encodeURIComponent function.

**Usage:**

    {{encodeURIComponent "http://url.com/some/path"}}
    // Output => "http%3A%2F%2Furl.com%2Fsome%2Fpath"

**Other Dependencies:** N/A

## Lowercase

Accepts a string and lowercases all the letters.

**Usage:**

    {{lowercase "HELLO"}}
    // Output => "hello"

**Other Dependencies:** N/A

## Markdown

Accepts a string.  Using Pagedown, it returns and converts the markdown markup within the string.

**Usage:**

    {{markdown "**Bold**"}}
    // Output => "<p><strong>Bold</strong></p>"

**Other Dependencies:** Pagedown

## Truncate

Accepts a string and a length number and an optional suffix (**Defaults:** "..."). It will truncate the string by the length number and shorten the string so no words are cut in two. An optional suffix is added to the end of the truncated string.

**Usage:**

    {{truncate "Hello world this is my sentence!" 5}}
    // Output => "Hello..."

**Other Dependencies:** N/A

## Uppercase

Accepts a string and uppercases all the letters.

**Usage:**

    {{uppercase "hello"}}
    // Output => "HELLO"

**Other Dependencies:** N/A

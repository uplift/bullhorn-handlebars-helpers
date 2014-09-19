# Bullhorn Handlebars String Helpers

## Capitalize

**Usage:**

    {{capitalize "hello world"}}
    // Output => "Hello world"

**Other Dependencies:** N/A

## Encode URI Component

**Usage:**

    {{encodeURIComponent "http://url.com/some/path"}}
    // Output => "http%3A%2F%2Furl.com%2Fsome%2Fpath"

**Other Dependencies:** N/A

## Lowercase

**Usage:**

    {{lowercase "HELLO"}}
    // Output => "hello"

**Other Dependencies:** N/A

## Markdown

**Usage:**

    {{markdown "**Bold**"}}
    // Output => "<p><strong>Bold</strong></p>"

**Other Dependencies:** Pagedown

## Truncate

**Usage:**

    {{truncate "Hello world this is my sentence!" 5}}
    // Output => "Hello..."

**Other Dependencies:** N/A

## Uppercase

**Usage:**

    {{uppercase "hello"}}
    // Output => "HELLO"

**Other Dependencies:** N/A

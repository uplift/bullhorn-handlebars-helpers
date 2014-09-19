# Bullhorn Handlebars HTML Helpers

## List

**Usage:**

    // array = [ "Item 1", "Item 2", "Item 3" ]
    {{list array}}
    // Output => <li>Item 1</li><li>Item 2</li><li>Item 3</li>

**Other Dependencies:** N/A

## Ordered List

**Usage:**

    // array = [ "Item 1", "Item 2", "Item 3" ]
    {{ol array id="my-id" class="my-class"}}
    // Output => <ol id="my-id" class="my-class"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>

**Other Dependencies:** N/A

## Unordered List

**Usage:**

    // array = [ "Item 1", "Item 2", "Item 3" ]
    {{ul array id="my-id" class="my-class"}}
    // Output => <ul id="my-id" class="my-class"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>

**Other Dependencies:** N/A

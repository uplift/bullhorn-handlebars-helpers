# Bullhorn Handlebars HTML Helpers

## List

Accepts an array and outputs a string of list items (`<li>`). The output can then be inserted into any list tag that accepts li DOM elements.

**Usage:**

    // array = [ "Item 1", "Item 2", "Item 3" ]
    {{list array}}
    // Output => <li>Item 1</li><li>Item 2</li><li>Item 3</li>

**Other Dependencies:** N/A

## Ordered List

Accepts an array and outputs a string of an ordered list. Can pass optional id and class hash values that will be applied to the ol element.

**Usage:**

    // array = [ "Item 1", "Item 2", "Item 3" ]
    {{ol array id="my-id" class="my-class"}}
    // Output => <ol id="my-id" class="my-class"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>

**Other Dependencies:** N/A

## Unordered List

Accepts an array and outputs a string of an unordered list. Can pass optional id and class hash values that will be applied to the ul element.

**Usage:**

    // array = [ "Item 1", "Item 2", "Item 3" ]
    {{ul array id="my-id" class="my-class"}}
    // Output => <ul id="my-id" class="my-class"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>

**Other Dependencies:** N/A

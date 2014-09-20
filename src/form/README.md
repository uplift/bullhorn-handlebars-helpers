# Bullhorn Handlebars Form Helpers

## Option List

Accepts an array of objects with label and value properties and outputs a string of select dropdown option values. The label property is used for the option display text and the value property is used to populate the option value attribute. The output can be inserted into a select tag. 

**Usage:**

    // array = [ { label: "Please Select", value: "" }, { label: "Option 1", value: "1" } ]
    {{option-list array "selected value"}}
    // Output => <option value="">Please Select</option><option value="1">Option 1</option>

**Other Dependencies:** N/A

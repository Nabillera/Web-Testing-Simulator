BUGS_BY_LEVELS = {
    0: [{
            "id": "0-button-color",

            "title_examples": [
                "Level 0: The 'Print' button is yellow instead of red",
                "Level 0: The 'Print' button is displayed in yellow",
                "Level 0: Print: The button is yellow"
            ],

            "steps_examples": [
                "1. Open Level 0 2. Observe the 'Print' button",
                "1. Navigate to Level 0 2. Pay attention to the 'Print' button color",
                "1. Go to 'Level 0' 2. Note the 'Print' button color"
            ],

            "expected_examples": [
                "The button should be red",
                "The 'Print' button should be given in red",
                "'Print' should be a red button"
            ],

            "actual_examples": [
                "The 'Print' button is yellow",
                "The 'Print' button is displayed in yellow",
                "The button to print the output is yellow"
            ],

            "valid_severity": "Low",

            "valid_type": "GUI"
        },
        {
            "id": "0-field-max-length",

            "title_examples": [
                "Level 0: The user input field's max length is 20 characters instead of 50",
                "Level 0: The input field only accepts 20 characters instead of 50",
                "Level 0: Maximum length for the text field input is 20"
            ],

            "steps_examples": [
                "1. Open Level 0 2. Enter more than 20 characters in the text field",
                "1. Go to Level 0 2. Try to write text longer than 20 characters",
                "1. Navigate to Level 0 2. Provide input which contains more than 20 characters"
            ],

            "expected_examples": [
                "The field should accept input with up to 50 characters",
                "The user should be able to enter 50 characters",
                "The text field's maximum length should be 50 characters instead of 20"
            ],

            "actual_examples": [
                "The user input field's max length is 20 characters instead of 50",
                "The input field only accepts 20 characters instead of 50",
                "Maximum length for the text field input is 20"
            ],

            "valid_severity": "Average",

            "valid_type": "Functional"
        },
        {
            "id": "0-user-input-display",

            "title_examples": [
                "Level 0: User input is logged in the console instead of the designated area",
                "Level 0: Text is written in the console when the user clicks 'Print'",
                "Level 0: User-provided text is not printed in the designated area when the 'Print' button is clicked"
            ],

            "steps_examples": [
                "1. Open Level 0 2. Provide any text in the input field 3. Click 'Print' 4. Observe the 'Result Here' text 5. Check the console",
                "1. Go to Level 0 2. Write something in the text field 3. Click the 'Print' button 4. Open DevTools 5. See the output in the console"
            ],

            "expected_examples": [
                "The text user provided should be displayed in the outlined area, next to the 'Result here' text",
                "Text should be written under the input field when the user clicks 'Print'"
            ],

            "actual_examples": [
                "User input is logged in the console instead of the designated area",
                "Text is written in the console when the user clicks 'Print'"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"
        },],
    1: [{
            "id": "1-product-images-swapped",

            "title_examples": [
                "Level 1: Product Cards: Images for products 'Moth' and 'Ant' are swapped",
                "Level 1: Products: The 'Ant' displays a picture of the 'Moth' and vice versa"
            ],

            "steps_examples": [
                "1. Open Level 1 2. Observe the image for the product named 'Ant' 3. Observe the image for the product named 'Moth'",
                "1. Navigate to Level 1 2. Pay attention to the images for products 'Ant' and 'Moth'",
                "1. Go to Level 1 2. View the product 'Moth' and its display picture 3. Do the same for the product 'Ant'"
            ],

            "expected_examples": [
                "The display picture for 'Ant' should be an ant, while the display picture for 'Moth' should be a moth",
                "Images for products 'Moth' and 'Ant' should be swapped",
                "'Moth' and 'Ant' preview images should switch places"
            ],

            "actual_examples": [
                "Images for products 'Moth' and 'Ant' are swapped",
                "Picture of a moth is displayed for the 'Ant', and the 'Moth' has an image of an ant",
                "The 'Ant' displays a picture of the 'Moth' and vice versa"
            ],

            "valid_severity": "Low",

            "valid_type": "GUI"
        },
        {
            "id": "1-add-to-basket-disabled",

            "title_examples": [
                "Level 1: 'Add to Basket' button is disabled for the 'Ant'",
                "Level 1: 'Ant' cannot be added to the basket",
                "Level 1: 'Ant' is not added to the basket when the user clicks the 'Add to Basket' button"
            ],

            "steps_examples": [
                "1. Open Level 1 2. Click 'Add to Basket' for the ant",
                "1. Navigate to Level 1 2. For product named 'Ant', click the 'Add to Basket' button"
            ],

            "expected_examples": [
                "The product should be added to the basket"
            ],

            "actual_examples": [
                "The 'Add to Basket' button is disabled",
                "'Ant' cannot be added to the basket as the button is disabled"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"},
        {
            "id": "1-purchase-empty-basket",

            "title_examples": [
                "Level 1: Purchase is allowed with an empty basket",
                "Level 1: User can complete a purchase without selecting products",
                "Level 1: The 'Purchase' button works when basket is empty"
            ],

            "steps_examples": [
                "1. Open Level 1 2. Leave the basket empty 3. Click 'Purchase'",
                "1. Navigate to Level 1 2. Do not select any products 3. Click the 'Purchase' button"
            ],

            "expected_examples": [
                "The 'Purchase' button should be blocked until items are added to the basket",
                "The user should not be ablet to make a purchase with an empty basket"
            ],

            "actual_examples": [
                "The user can make a purchase with an empty basket",
                "The 'Purchase' button is enabled even when no products are selected"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"
        },
        {
            "id": "1-beetle-price-incorrect",

            "title_examples": [
                "Level 1: Basket: 'Beetle' price is increased by $5 when the user adds it to the basket",
                "Level 1: Basket: Additional charge is applied to the 'Beetle' product when it is added to the basket"
            ],

            "steps_examples": [
                "1. Go to Level 1 2. Add 'Beetle' to the basket 3. Observe its price",
                "1. Navigate to Level 1 2. Click 'Add to Basket' for 'Beetle' 3. Pay attention to the displayed price"
            ],

            "expected_examples": [
                "The 'Beetle' price should match the product catalogue",
                "The price in the basket should be the same as the price on the product card"
            ],

            "actual_examples": [
                "The Beetle price is increased by five dollars when it is added to the basket"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"
        },
        {
            "id": "1-negative-quantity",

            "title_examples": [
                "Level 1: Basket: Product quantity decreases below zero after repeatedly clicking the minus button",
                "Level 1: Basket: Negative quantity is displayed when reducing product count",
                "Level 1: Basket: Quantity value becomes negative when the user continuously reduces the number"
            ],

            "steps_examples": [
                "1. Navigate to Level 1 2. Add any product to the basket 3. Click the minus button until the quantity reaches zero 4. Continue clicking the minus button",
                "1. Open Level 1 2. Add a product 3. Reduce its quantity to zero 4. Click the decrease quantity button again"
            ],

            "expected_examples": [
                "The quantity should remain at zero and should not decrease further",
                "The user should not be able to set negative quantity"
            ],

            "actual_examples": [
                "The quantity decreases below zero",
                "A negative quantity value is displayed in the basket"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"
        },
        {
            "id": "1-purchase-modal-total",

            "id": "purchase-modal-total",

            "title_examples": [
                "Level 1: Purchase Modal: Total amount differs from basket total when the purchase summary is opened",
                "Level 1: Purchase Modal: Displayed purchase amount does not match selected products when reviewing the order",
                "Level 1: Purchase Modal: Order total differs from basket calculation when the user clicks 'Purchase'"
            ],

            "steps_examples": [
                "1. Navigate to Level 1 2. Add one or more products to the basket 3. Note the basket total 4. Click 'Purchase' 5. Compare the amount shown in the modal",
                "1. Open Level 1 2. Add products to the basket 3. Observe the total price 4. Open the purchase modal"
            ],

            "expected_examples": [
                "The purchase modal should display the same total amount as the basket",
                "The order summary total should match the calculated basket total"
            ],

            "actual_examples": [
                "The purchase modal displays a different amount than the basket",
                "The order summary total does not match the basket total"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"
        }],
    2: [{
            "id": "2-search-case-sensitive",

            "title_examples": [
                "Level 2: Search: Matching colors are not returned when the query casing differs from the color name",
                "Level 2: Search: Results depend on letter casing when searching by color name",
                "Level 2: Search: The search bar is case-sensitive"
            ],

            "steps_examples": [
                "1. Navigate to Level 2 2. Enter a color name using different capitalization than displayed 3. Observe the search results",
                "1. Open Level 2 2. Search for an existing color using lowercase letters 3. Compare the returned results"
            ],

            "expected_examples": [
                "Search results should be returned regardless of letter casing",
                "The search bar should not be case-sensitive"
            ],

            "actual_examples": [
                "Matching colors are not returned when capitalization differs",
                "Search results depend on exact letter casing",
                "The search bar is case-sensitive"
            ],

            "valid_severity": "Average",

            "valid_type": "Functional"
        },
        {
        "id": "2-sunset-glow-copy",

            "title_examples": [
                "Level 2: Color Card: HEX value '#FFFFFF' is copied instead of the 'Sunset Glow' code when clicking the copy icon",
                "Level 2: Color Card: Clipboard contains '#FFFFFF' when the user copies the code for 'Sunset Glow'",
                "Level 2: Color Card: Sunset Glow copy action returns the HEX value '#FFFFFF'"
            ],

            "steps_examples": [
                "1. Navigate to Level 2 2. Locate the Sunset Glow color card 3. Click the Copy button 4. Paste the clipboard contents into a text field",
                "1. Open Level 2 2. Find Sunset Glow 3. Copy its HEX code 4. Verify the copied value"
            ],

            "expected_examples": [
                "The HEX code displayed for Sunset Glow should be copied",
                "The clipboard should contain the Sunset Glow HEX value"
            ],

            "actual_examples": [
                "'#FFFFFF' is copied instead of the displayed HEX value",
                "The clipboard contains a different HEX code than Sunset Glow"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"
        },
        {
        "id": "2-palette-colors-swapped",

            "title_examples": [
                "Level 2: Palette: Color appears in the wrong palette, when comparing Neon and Pastel collections",
                "Level 2: Palette: Color placement differs from intended collection after switching palettes",
                "Level 2: Palette: Colors are assigned to the incorrect palette when browsing available colors"
            ],

            "steps_examples": [
                "1. Navigate to Level 2 2. Switch between Neon and Pastel palettes 3. Compare the displayed colors",
                "1. Open Level 2 2. Review colors in both palettes 3. Identify colors that belong to the other collection"
            ],

            "expected_examples": [
                "Each color should appear in its designated palette",
                "Neon and Pastel colors should be grouped correctly"
            ],

            "actual_examples": [
                "Colors appear in the wrong palette",
                "Some colors are assigned to the incorrect collection"
            ],

            "valid_severity": "Average",

            "valid_type": "GUI"
        },
        {
            "id": "2-hex-search-disabled",

            "title_examples": [
                "Level 2: Search: No results are returned when searching by a valid HEX code",
                "Level 2: Search: HEX value lookup does not filter colors after entering a HEX code",
                "Level 2: Search: Color cards are not found through HEX search when providing a valid value"
            ],

            "steps_examples": [
                "1. Navigate to Level 2 2. Copy a displayed HEX value 3. Paste it into the search field 4. Observe the returned results",
                "1. Open Level 2 2. Enter a valid HEX code belonging to a displayed color 3. Review the search results"
            ],

            "expected_examples": [
                "Matching colors should be returned when searching by HEX code",
                "HEX values should be searchable"
            ],

            "actual_examples": [
                "No matching color is returned when using a HEX value",
                "HEX search does not produce results"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"
        },
        {
            "id": "2-pagination-not-reset",

            "title_examples": [
                "Level 2: Pagination: Color list starts from a later page after switching palettes",
                "Level 2: Pagination: First page is skipped when changing the selected palette",
                "Level 2: Pagination: Current page index persists after selecting a different palette"
            ],

            "steps_examples": [
                "1. Navigate to Level 2 2. Move to the next page of colors 3. Switch to a different palette 4. Observe the displayed colors",
                "1. Open Level 2 2. Navigate away from the first page 3. Change the palette selection"
            ],

            "expected_examples": [
                "The first page of the selected palette should be displayed",
                "Pagination should reset when changing palettes"
            ],

            "actual_examples": [
                "The newly selected palette opens on a later page",
                "Pagination state is preserved after changing palettes"
            ],

            "valid_severity": "Average",

            "valid_type": "Functional"
        }],
    3: [{
            "id": "3-favourite-number-validation",

            "title_examples": [
                "Level 3: Favourite Number: Text values are accepted when entering alphabetic characters",
                "Level 3: Favourite Number: Non-numeric input is allowed when filling the field",
                "Level 3: Favourite Number: Letters can be submitted when entering a favourite number"
            ],

            "steps_examples": [
                "1. Navigate to Level 3 2. Enter alphabetic characters in the Favourite Number field 3. Submit the form",
                "1. Open Level 3 2. Type text into the Favourite Number field 3. Attempt to submit the form"
            ],

            "expected_examples": [
                "The Favourite Number field should only accept numeric values",
                "An error should be displayed when non-numeric input is entered"
            ],

            "actual_examples": [
                "Alphabetic characters are accepted in the Favourite Number field",
                "The form accepts non-numeric values in the Favourite Number field"
            ],

            "valid_severity": "Average",

            "valid_type": "Functional"
        },
        {
            "id": "3-chair-gender-option",

            "title_examples": [
                "Level 3: Gender: 'Chair' is available as a selectable option when opening the dropdown",
                "Level 3: Gender: Non-gender value appears in the dropdown list when viewing available options",
                "Level 3: Gender: 'Chair' can be selected when choosing a gender"
            ],

            "steps_examples": [
                "1. Navigate to Level 3 2. Open the Gender dropdown 3. Review the available options",
                "1. Open Level 3 2. Click the Gender field 3. Observe the values in the dropdown"
            ],

            "expected_examples": [
                "The Gender dropdown should only contain valid gender options",
                "'Chair' should not be available for selection"
            ],

            "actual_examples": [
                "'Chair' appears in the Gender dropdown",
                "A non-gender value can be selected from the Gender field"
            ],

            "valid_severity": "Low",

            "valid_type": "GUI"
        },
        {
            "id": "3-favourite-colour-spelling",

            "title_examples": [
                "Level 3: Favourite Colour: Label uses American spelling when compared with the form terminology",
                "Level 3: Favourite Colour: Favourite is written as Favorite when viewing the field label",
                "Level 3: Favourite Colour: Form terminology is inconsistent when reviewing field labels"
            ],

            "steps_examples": [
                "1. Navigate to Level 3 2. Locate the Favourite Colour field 3. Observe its label",
                "1. Open Level 3 2. Compare the spelling used in form labels"
            ],

            "expected_examples": [
                "The label should use the spelling Favourite Colour",
                "Form terminology should be consistent throughout the page"
            ],

            "actual_examples": [
                "The label is displayed as Favorite Colour",
                "American spelling is used instead of Favourite Colour"
            ],

            "valid_severity": "Low",

            "valid_type": "GUI"
        },
        {
            "id": "3-more-details-clear",

            "title_examples": [
                "Level 3: More Details: Entered text remains visible after clicking 'Clear'",
                "Level 3: More Details: Text area contents persist when clearing the form",
                "Level 3: More Details: Field is not reset after using the 'Clear' button"
            ],

            "steps_examples": [
                "1. Navigate to Level 3 2. Enter text into More Details 3. Click 'Clear' 4. Observe the field contents",
                "1. Open Level 3 2. Populate the More Details field 3. Press 'Clear'"
            ],

            "expected_examples": [
                "The More Details field should be emptied when 'Clear' is clicked",
                "All entered text should be removed from the field"
            ],

            "actual_examples": [
                "The previously entered text remains in the More Details field",
                "The field contents are not removed after clicking 'Clear'"
            ],

            "valid_severity": "Average",

            "valid_type": "Functional"
        },
        {
            "id": "3-checkboxes-radio-behaviour",

            "title_examples": [
                "Level 3: Interests: Previous selections are removed when selecting another checkbox",
                "Level 3: Interests: Checkboxes behave as radio buttons when selecting multiple options",
                "Level 3: Interests: Only one checkbox can remain selected after choosing additional options"
            ],

            "steps_examples": [
                "1. Navigate to Level 3 2. Select an interest checkbox 3. Select another checkbox 4. Observe the first selection",
                "1. Open Level 3 2. Attempt to select multiple interest options"
            ],

            "expected_examples": [
                "Multiple checkboxes should be selectable simultaneously",
                "Existing selections should remain selected when another checkbox is chosen"
            ],

            "actual_examples": [
                "Selecting a new checkbox clears the previous selection",
                "Only one checkbox can be selected at a time"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"
        }, 
        {
            "id": "3-submission-no-feedback",

            "title_examples": [
                "Level 3: Submission: No success message is displayed after submitting the form",
                "Level 3: Submission: Successful submission is not indicated on the page when sending the form",
                "Level 3: Submission: Confirmation appears only in the console after form submission"
            ],

            "steps_examples": [
                "1. Navigate to Level 3 2. Complete the form 3. Submit the form 4. Observe the page",
                "1. Open Level 3 2. Fill in all required fields 3. Click Submit"
            ],

            "expected_examples": [
                "A success message should be displayed on the user interface",
                "Users should receive visible confirmation that the form was submitted"
            ],

            "actual_examples": [
                "No success message is displayed on the page",
                "Submission confirmation is logged only in the browser console"
            ],

            "valid_severity": "Average",

            "valid_type": "Functional"
        },
        {
            "id": "3-empty-form-submission",

            "title_examples": [
                "Level 3: Submission: Form is accepted with empty fields when clicking Submit",
                "Level 3: Submission: Required information is not validated before submitting the form",
                "Level 3: Submission: Empty form can be submitted without entering any data"
            ],

            "steps_examples": [
                "1. Navigate to Level 3 2. Leave all fields empty 3. Click 'Submit'",
                "1. Open Level 3 2. Do not enter any information 3. Attempt to submit the form"
            ],

            "expected_examples": [
                "The form should not be submitted while required fields are empty",
                "Validation messages should be displayed for missing information"
            ],

            "actual_examples": [
                "The form is submitted without any information being entered",
                "No validation prevents submission of an empty form"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"
        }],
    4: [{
            "id": "4-icon-size-slider",

            "title_examples": [
                "Level 4: Icon Size: Slider thumb changes size instead of the preview icon",
                "Level 4: Icon Size: Adjusting the slider resizes the thumb rather than the preview object",
                "Level 4: Icon Size: Preview icon remains unchanged when the slider is moved"
            ],

            "steps_examples": [
                "1. Navigate to Level 4 2. Locate the 'Icon Size' section 3. Move the slider left and right 4. Observe the preview icon and slider thumb",
                "1. Open Level 4 2. Adjust the 'Icon Size' slider 3. Compare the behaviour of the preview icon and slider thumb"
            ],

            "expected_examples": [
                "The preview icon should change size when the slider is adjusted",
                "The slider thumb should remain unchanged while the preview icon is resized"
            ],

            "actual_examples": [
                "The slider thumb changes size while the preview icon remains unchanged",
                "Adjusting the slider resizes the thumb instead of the preview object"
            ],

            "valid_severity": "Average",

            "valid_type": "Functional"
        },
        {
            "id": "4-brightness-slider",

            "title_examples": [
                "Level 4: Brightness: Slider thumb changes brightness instead of the preview icon",
                "Level 4: Brightness: Adjusting the slider affects the thumb rather than the preview object",
                "Level 4: Brightness: Preview icon remains unchanged when the brightness slider is moved"
            ],

            "steps_examples": [
                "1. Navigate to Level 4 2. Locate the 'Brightness' section 3. Move the slider 4. Observe the preview icon and slider thumb",
                "1. Open Level 4 2. Adjust the 'Brightness' slider 3. Compare the behaviour of the preview icon and thumb"
            ],

            "expected_examples": [
                "The preview icon should become brighter or darker",
                "The brightness adjustment should affect the preview object"
            ],

            "actual_examples": [
                "The slider thumb changes brightness while the preview icon remains unchanged",
                "Brightness adjustments affect the thumb instead of the preview object"
            ],

            "valid_severity": "Average",

            "valid_type": "Functional"
        },
        {
            "id": "4-notifications-toggle",

            "title_examples": [
                "Level 4: Notifications: Disabling notifications enables all notification types",
                "Level 4: Notifications: Turning off the main toggle activates specific notifications",
                "Level 4: Notifications: General notification toggle produces the opposite behaviour"
            ],

            "steps_examples": [
                "1. Navigate to Level 4 2. Enable notifications 3. Turn off the main 'Notifications' toggle 4. Observe the specific notification options",
                "1. Open Level 4 2. Click the general 'Notifications' toggle 3. Review the state of Push, SMS and Email notifications"
            ],

            "expected_examples": [
                "Disabling notifications should disable all specific notification options",
                "The main toggle should turn off notification delivery"
            ],

            "actual_examples": [
                "Disabling notifications enables Push, SMS and Email notifications",
                "The main toggle performs the opposite action"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"
        },
        {
            "id": "4-surprise-theme-crash",

            "title_examples": [
                "Level 4: Theme: Selecting 'Surprise Me' causes the settings page to become unavailable",
                "Level 4: Theme: Settings page crashes after choosing 'Surprise Me'",
                "Level 4: Theme: 'Surprise Me' selection triggers an application error"
            ],

            "steps_examples": [
                "1. Navigate to Level 4 2. Open the Theme section 3. Select 'Surprise Me' 4. Observe the page behaviour",
                "1. Open Level 4 2. Click 'Surprise Me' in the Theme section"
            ],

            "expected_examples": [
                "A valid theme should be applied",
                "Selecting 'Surprise Me' should not interrupt the application"
            ],

            "actual_examples": [
                "The settings page becomes unavailable after selecting 'Surprise Me'",
                "An application error occurs when Surprise Me is selected"
            ],

            "valid_severity": "Critical",

            "valid_type": "Functional"
        },
        {
            "id": "4-save-changes",

            "title_examples": [
                "Level 4: Save Changes: Modified settings are not persisted after saving",
                "Level 4: Save Changes: Updated preferences revert after clicking 'Save Changes'",
                "Level 4: Save Changes: Settings remain unchanged after being saved"
            ],

            "steps_examples": [
                "1. Navigate to Level 4 2. Modify any available setting 3. Click 'Save Changes' 4. Refresh the page 5. Observe the saved values",
                "1. Open Level 4 2. Change a setting 3. Save the changes 4. Verify whether the update persists"
            ],

            "expected_examples": [
                "Saved settings should persist after clicking 'Save Changes'",
                "User preferences should remain updated"
            ],

            "actual_examples": [
                "Modified settings are discarded after saving",
                "Changes are not persisted despite clicking 'Save Changes'"
            ],

            "valid_severity": "Critical",

            "valid_type": "Functional"
        },
        {
            "id": "4-refresh-loading",

            "title_examples": [
                "Level 4: Refresh: Loading indicator remains visible for more than three seconds",
                "Level 4: Refresh: Page refresh takes longer than expected",
                "Level 4: Refresh: Loading state persists for an extended period after refreshing"
            ],

            "steps_examples": [
                "1. Navigate to Level 4 2. Click 'Refresh Page' 3. Measure the loading duration",
                "1. Open Level 4 2. Refresh the page 3. Observe how long the loading indicator remains visible"
            ],

            "expected_examples": [
                "The page should refresh within three seconds",
                "The loading indicator should disappear promptly"
            ],

            "actual_examples": [
                "The loading indicator remains visible for more than three seconds",
                "Refreshing the page takes longer than expected"
            ],

            "valid_severity": "Average",

            "valid_type": "Functional"
        },
        {
            "id": "4-account-info-blur",

            "title_examples": [
                "Level 4: Account Information: Unsaved changes are discarded after clicking outside the input field",
                "Level 4: Account Information: Edited values are lost when the field loses focus",
                "Level 4: Account Information: Changes cannot be retained after editing a profile field"
            ],

            "steps_examples": [
                "1. Navigate to Level 4 2. Click Edit on any account information field 3. Modify the value 4. Click outside the input field",
                "1. Open Level 4 2. Edit an account information field 3. Remove focus from the input"
            ],

            "expected_examples": [
                "Modified values should remain available until the user saves or cancels",
                "Changes should not be discarded when the field loses focus"
            ],

            "actual_examples": [
                "Edited values are removed when the input field loses focus",
                "Unsaved changes are discarded after clicking outside the field"
            ],

            "valid_severity": "Major",

            "valid_type": "Functional"
        },
        {
            "id": "4-username-not-editable",

            "title_examples": [
                "Level 4: Account Information: Username cannot be modified through the profile editor",
                "Level 4: Account Information: Username field is not editable",
                "Level 4: Account Information: Username cannot be updated when editing profile details"
            ],

            "steps_examples": [
                "1. Navigate to Level 4 2. Locate the Username field 3. Attempt to edit the value",
                "1. Open Level 4 2. Try to modify the displayed username"
            ],

            "expected_examples": [
                "The username should be editable like other profile information",
                "Users should be able to update their username"
            ],

            "actual_examples": [
                "The username cannot be edited",
                "No option exists to modify the username"
            ],

            "valid_severity": "Average",

            "valid_type": "Functional"
        }]
}
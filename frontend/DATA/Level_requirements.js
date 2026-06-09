export const REQUIREMENTS = [
  {
    heading: "Level 0: Warm-up - Requirements",
    paragraphs: [
      "This introductory level demonstrates a minimal interactive module designed to familiarize users with the simulator interface and the bug reporting process. The module is quite primitive, consisting of a single text input field, an output display area, and a red submission button.",
      "Users should be able to enter up to 50 characters into the text field. Character input exceeding the allowed limit must be prevented.",
      "When the user presses the submission button, the entered text should immediately appear inside the designated output container visible on the page.",
      "Submitted text should remain visible until the user submits a new value. The page must not refresh during the interaction.",
    ],
  },
  {
    heading: "Level 1: Shopping cart - Requirements",
    paragraphs: [
      "This module simulates a simplified shopping cart experience containing multiple purchasable products displayed as separate product cards. Each product card should display a product image, product name, product price, and an 'Add to Basket' button.",
      "Products added to the cart should display their current quantity, total item price, and controls for incrementing or decrementing quantity.",
      "Product quantities must never become negative. Products with quantity equal to zero should no longer appear in the active cart view.",
      "The 'Purchase' button should only initiate the checkout flow when at least one product exists in the cart. Completing a successful purchase should provide clear visible confirmation to the user through the interface.",
    ],
  },
  {
    heading: "Level 2: Color cards - Requirements",
    paragraphs: [
      "This module provides an interactive colour palette explorer supporting multiple selectable colour themes. Users should be able to switch between available palettes using the dropdown selector positioned at the top of the page.",
      "Each palette should display colour cards containing a visual colour preview, colour name, hexadecimal value, and a button for copying the HEX code.",
      "The search field should allow users to filter colours by either colour name or hexadecimal value. Search functionality should operate in real time and should not be case-sensitive.",
      "Pagination controls should be available to the user to allow navigation through all the color cards in the selected palette",
      "Selecting the copy action should copy the corresponding hexadecimal value to the clipboard and provide visible confirmation feedback to the user.",
    ],
  },
  {
    heading: "Level 3: You are on your own.",
    paragraphs: ["Oops, no requirements provided for this level :("],
  },
  {
    heading: "Level 4: Settings - Requirements",
    paragraphs: [
      "This module simulates a user account settings page containing configurable account preferences, notification controls, appearance settings, and display customization options.",
      "Users should be able to enable or disable notification preferences individually using toggle controls for general, push, SMS, and email notifications.",
      "Theme selection should allow users to switch between available visual themes. Selecting a theme should immediately apply the corresponding interface styling across the entire settings page.",
      "The account information section should present editable user information including email address, phone number, password, and preference settings.",
      "Display customization sliders should allow users to adjust visual preview elements in real time. Changes to slider position should immediately update the associated preview box.The icon size preview should scale proportionally according to the selected slider value. Brightness adjustment controls should affect the preview element and maintain smooth transitions.",
      "Selecting 'Save Changes' should preserve all currently selected settings and provide visible confirmation that preferences were successfully updated. Refreshing the page by clicking the designated button should preserve previously saved user settings and it should NOT take more than 3 seconds.",
    ],
  },
];

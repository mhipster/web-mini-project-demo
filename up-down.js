document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    var decrementButton = document.querySelector(".down");
    var incrementButton = document.querySelector(".up");
    var textField = document.querySelector(".text-up-down");

    // Add click event listeners for the decrement and increment buttons
    decrementButton.addEventListener("click", function() {
        var currentValue = parseInt(textField.value);
        if (currentValue > 1) {
            textField.value = currentValue - 1;
        }
    });

    incrementButton.addEventListener("click", function() {
        var currentValue = parseInt(textField.value);
        textField.value = currentValue + 1;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    openTab("tabB"); // Open "Tab A" by default when the page loads
});

function openTab(tabId) {
    // Get all tab content elements
    var tabContents = document.getElementsByClassName("tab-content");
    
    // Hide all tab content elements
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Get all tab button elements
    var tabButtons = document.getElementsByClassName("tab-button");
    
    // Remove the "active" class from all tab buttons
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the selected tab content
    document.getElementById(tabId).style.display = "block";

    // Add the "active" class to the clicked tab button
    document.querySelector(`[onclick="openTab('${tabId}')"]`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    openTab("tabB"); // Open "Tab A" by default when the page loads
});
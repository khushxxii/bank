function openTab(evt, tabName) {
    // Get all tab content elements and hide them
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all tab links and remove the 'active' class
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab content and add 'active' class to the clicked tab link
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Default tab to open when the page loads
document.getElementById("home").style.display = "block";

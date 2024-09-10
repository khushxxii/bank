document.getElementById("header").innerHTML = `
    <h1>Bank of the Future</h1>
    <nav>
        <ul>
            <li><a href="#" class="tablink" onclick="openTab(event, 'home')">Home</a></li>
            <li><a href="#" class="tablink" onclick="openTab(event, 'services')">Services</a></li>
            <li><a href="#" class="tablink" onclick="openTab(event, 'about')">About Us</a></li>
            <li><a href="#" class="tablink" onclick="openTab(event, 'contact')">Contact Us</a></li>
        </ul>
    </nav>
`;

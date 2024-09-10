document.getElementById("contact").innerHTML = `
    <h2>Contact Us</h2>
    <form id="contactForm" action="mailto:khushisingh7205@yahoo.com" method="post" enctype="text/plain" onsubmit="showThankYouPopup(); return true;">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required="required"><br><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required="required"><br><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="5" required="required"></textarea><br><br>
        <input type="submit" value="Send">
    </form>
`;

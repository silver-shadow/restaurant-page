export default function loadContact() {
    const contactContent = document.querySelector(".tab-content");
    contactContent.innerHTML = `
        <h2>Contact Us</h2>
        <p>Address: 123 Byte Street, Coding Town</p>
        <p>Phone: +1 234 567 890</p>
        <p>Email: info@basicbytes.com</p>
        <p>Follow us on social media:</p>
        <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
        </ul>
    `;
}
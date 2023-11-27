export default function loadHome() {
    const content = document.querySelector(".tab-content"); 
    content.innerHTML = `
    <p>Discover a world of flavors at Basic Bytes, where every byte is a culinary delight! Our restaurant offers a unique fusion of tastes and a warm, inviting ambiance.</p>
    
    <h2>About Us</h2>
    <p>Basic Bytes is committed to serving delicious meals prepared with fresh, high-quality ingredients. Our chefs are passionate about creating delightful dishes that cater to diverse palates.</p>
    
    <h2>Specialties</h2>
    <p>Indulge in our specialties:</p>
    <ul>
        <li>Burger Byte</li>
        <li>Pasta Code</li>
        <li>Byte-size Pizza</li>
        <li>RAMen Noodles</li>
        <li>Java Chip Ice Cream</li>
    </ul>
    
    <h2>Visit Us</h2>
    <p>We're located at:</p>
    <p>123 Byte Street, Coding Town</p>
    <p>Come and experience a gastronomic adventure!</p>
    `;
}
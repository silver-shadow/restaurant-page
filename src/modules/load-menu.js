export default function loadMenu() {
    const menuContent = document.querySelector(".tab-content");
    menuContent.innerHTML = `
        <h2>Our Menu</h2>
        <h3>Starters</h3>
        <ul>
            <li>Garlic Bread</li>
            <li>Caprese Salad</li>
            <li>Chicken Wings</li>
        </ul>
        
        <h3>Main Course</h3>
        <ul>
            <li>Burger Byte</li>
            <li>Pasta Code</li>
            <li>Byte-size Pizza</li>
            <li>RAMen Noodles</li>
        </ul>
        
        <h3>Desserts</h3>
        <ul>
            <li>Chocolate Fondant</li>
            <li>Tiramisu</li>
            <li>Fruit Sorbet</li>
            <li>Java Chip Ice Cream</li>
        </ul>
    `;
}

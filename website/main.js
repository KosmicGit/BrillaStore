//BrillaSoft 2024

const quantityBtn = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const decreaseButton = document.querySelector('.decrease');
        const increaseButton = document.querySelector('.increase');
        const quantityLabel = document.querySelector('.quantity');

        let quantity = parseInt(quantityLabel.textContent, 10);

        increaseButton.addEventListener('click', () => {
            quantity += 1;
            quantityLabel.textContent = quantity;
        });

        decreaseButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity -= 1;
                quantityLabel.textContent = quantity;
            }
        });
    });
}
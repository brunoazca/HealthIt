export function updateDisplay(number, target, numberElementId, targetElementId) {
    const bigNumberElement = document.getElementById(numberElementId);
    const parameterElement = document.getElementById(targetElementId);

    bigNumberElement.textContent = number;
    parameterElement.textContent = ` (Ideal: ${target})`;

    if (number > target) {
        bigNumberElement.style.color = 'green'; // Higher than target
    } else if (number < target) {
        bigNumberElement.style.color = 'red'; // Lower than target
    } else {
        bigNumberElement.style.color = 'blue'; // Equal to target
    }
};
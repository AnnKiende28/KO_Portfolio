// Define a list of country codes and their corresponding flags
const countryCodes = [
    { code: '+1', flag: '🇺🇸' },
    { code: '+44', flag: '🇬🇧' },
    { code: '+91', flag: '🇮🇳' }
    // more country codes to be added here
];

// Get the select element
const selectElement = document.getElementById('country-code');

// Populate the select element with options
countryCodes.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = `${country.flag} ${country.code}`;
    selectElement.appendChild(option);
});

// Event listener to update phone number input field when country code us changed
selectElement.addEventListener('change', function() {
    document.querySelector('[name = "client-phone"]').placeholder = "Phone Number" + this.value;
});
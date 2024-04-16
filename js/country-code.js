// Define a list of country codes and their corresponding flags
const countryCodes = [
    { code: '+93', flag: '🇦🇫 Afghanistan' },
    { code: '+355', flag: '🇦🇱 Albania' },
    { code: '+213', flag: '🇩🇿 Algeria' },
    { code: '+376', flag: '🇦🇩 Andorra' },
    { code: '+244', flag: '🇦🇴 Angola' },
    { code: '+1-268', flag: '🇦🇬 Antigua and Barbuda' },
    { code: '+54', flag: '🇦🇷 Argentina' },
    { code: '+374', flag: '🇦🇲 Armenia' },
    { code: '+61', flag: '🇦🇺 Australia' },
    { code: '+43', flag: '🇦🇹 Austria' },
    { code: '+994', flag: '🇦🇿 Azerbaijan' },
    { code: '+1-242', flag: '🇧🇸 Bahamas' },
    { code: '+973', flag: '🇧🇭 Bahrain' },
    { code: '+880', flag: '🇧🇩 Bangladesh' },
    { code: '+1-246', flag: '🇧🇧 Barbados' },
    { code: '+375', flag: '🇧🇾 Belarus' },
    { code: '+32', flag: '🇧🇪 Belgium' },
    { code: '+501', flag: '🇧🇿 Belize' },
    { code: '+229', flag: '🇧🇯 Benin' },
    { code: '+975', flag: '🇧🇹 Bhutan' },
    { code: '+591', flag: '🇧🇴 Bolivia' },
    { code: '+387', flag: '🇧🇦 Bosnia and Herzegovina' },
    { code: '+267', flag: '🇧🇼 Botswana' },
    { code: '+55', flag: '🇧🇷 Brazil' },
    { code: '+673', flag: '🇧🇳 Brunei Darussalam' },
    { code: '+359', flag: '🇧🇬 Bulgaria' },
    { code: '+226', flag: '🇧🇫 Burkina Faso' },
    { code: '+257', flag: '🇧🇮 Burundi' },
    { code: '+855', flag: '🇰🇭 Cambodia' },
    { code: '+237', flag: '🇨🇲 Cameroon' },
    { code: '+1', flag: '🇨🇦 Canada' },
    { code: '+238', flag: '🇨🇻 Cape Verde' },
    { code: '+236', flag: '🇨🇫 Central African Republic' },
    { code: '+235', flag: '🇹🇩 Chad' },
    { code: '+56', flag: '🇨🇱 Chile' },
    { code: '+86', flag: '🇨🇳 China' },
    { code: '+57', flag: '🇨🇴 Colombia' },
    { code: '+269', flag: '🇰🇲 Comoros' },
    { code: '+506', flag: '🇨🇷 Costa Rica' },
    { code: '+225', flag: '🇨🇮 Côte d\'Ivoire' },
    { code: '+385', flag: '🇭🇷 Croatia' },
    { code: '+53', flag: '🇨🇺 Cuba' },
    { code: '+357', flag: '🇨🇾 Cyprus' },
    { code: '+420', flag: '🇨🇿 Czech Republic' },
    { code: '+243', flag: '🇨🇩 Democratic Republic of the Congo' },
    { code: '+45', flag: '🇩🇰 Denmark' },
    { code: '+253', flag: '🇩🇯 Djibouti' },
    { code: '+1-767', flag: '🇩🇲 Dominica' },
    { code: '+1-809', flag: '🇩🇴 Dominican Republic' },
    { code: '+670', flag: '🇹🇱 Timor-Leste' },
    { code: '+593', flag: '🇪🇨 Ecuador' },
    { code: '+20', flag: '🇪🇬 Egypt' },
    { code: '+503', flag: '🇸🇻 El Salvador' },
    { code: '+240', flag: '🇬🇶 Equatorial Guinea' },
    { code: '+291', flag: '🇪🇷 Eritrea' },
    { code: '+372', flag: '🇪🇪 Estonia' },
    { code: '+251', flag: '🇪🇹 Ethiopia' },
    { code: '+679', flag: '🇫🇯 Fiji' },
    { code: '+358', flag: '🇫🇮 Finland' },
    { code: '+33', flag: '🇫🇷 France' },
    { code: '+241', flag: '🇬🇦 Gabon' },
    { code: '+220', flag: '🇬🇲 Gambia' },
    { code: '+995', flag: '🇬🇪 Georgia' },
    { code: '+49', flag: '🇩🇪 Germany' },
    { code: '+233', flag: '🇬🇭 Ghana' },
    { code: '+350', flag: '🇬🇮 Gibraltar' },
    { code: '+30', flag: '🇬🇷 Greece' },
    { code: '+299', flag: '🇬🇱 Greenland' },
    { code: '+1-473', flag: '🇬🇩 Grenada' },
    { code: '+502', flag: '🇬🇹 Guatemala' },
    { code: '+224', flag: '🇬🇳 Guinea' },
    { code: '+245', flag: '🇬🇶 Guinea-Bissau' },
    { code: '+592', flag: '🇬🇾 Guyana' },
    { code: '+509', flag: '🇭🇹 Haiti' },
    { code: '+504', flag: '🇭🇳 Honduras' },
    { code: '+852', flag: '🇭🇰 Hong Kong' },
    { code: '+36', flag: '🇭🇺 Hungary' },
    { code: '+354', flag: '🇮🇸 Iceland' },
    { code: '+91', flag: '🇮🇳 India' },
    { code: '+62', flag: '🇮🇩 Indonesia' },
    { code: '+98', flag: '🇮🇷 Iran' },
    { code: '+964', flag: '🇮🇶 Iraq' },
    { code: '+353', flag: '🇮🇪 Ireland' },
    { code: '+44', flag: '🇬🇧 United Kingdom' },
    { code: '+972', flag: '🇮🇱 Israel' },
    { code: '+39', flag: '🇮🇹 Italy' },
    { code: '+225', flag: '🇨🇮 Côte d\'Ivoire' },
    { code: '+1-876', flag: '🇯🇲 Jamaica' },
    { code: '+81', flag: '🇯🇵 Japan' },
    { code: '+962', flag: '🇯🇴 Jordan' },
    { code: '+7', flag: '🇷🇺 Russia' },
    { code: '+254', flag: '🇰🇪 Kenya' },
    { code: '+686', flag: '🇰🇮 Kiribati' },
    { code: '+850', flag: '🇰🇵 Korea' },
    { code: '+82', flag: '🇰🇷 South Korea' },
    { code: '+965', flag: '🇰🇼 Kuwait' },
    { code: '+996', flag: '🇰🇬 Kyrgyzstan' },
    { code: '+856', flag: '🇱🇦 Laos' },
    { code: '+371', flag: '🇱🇻 Latvia' },
    { code: '+961', flag: '🇱🇧 Lebanon' },
    { code: '+266', flag: '🇱🇸 Lesotho' },
    { code: '+231', flag: '🇱🇷 Liberia' },
    { code: '+218', flag: '🇱🇾 Libya' },
    { code: '+423', flag: '🇱🇮 Liechtenstein' },
    { code: '+370', flag: '🇱🇹 Lithuania' },
    { code: '+352', flag: '🇱🇺 Luxembourg' },
    { code: '+853', flag: '🇲🇴 Macao' },
    { code: '+389', flag: '🇲🇰 Macedonia' },
    { code: '+261', flag: '🇲🇬 Madagascar' },
    { code: '+265', flag: '🇲🇼 Malawi' },
    { code: '+60', flag: '🇲🇾 Malaysia' },
    { code: '+960', flag: '🇲🇻 Maldives' },
    { code: '+223', flag: '🇲🇱 Mali' },
    { code: '+356', flag: '🇲🇹 Malta' },
    { code: '+692', flag: '🇲🇭 Marshall Islands' },
    { code: '+222', flag: '🇲🇷 Mauritania' },
    { code: '+230', flag: '🇲🇺 Mauritius' },
    { code: '+52', flag: '🇲🇽 Mexico' },
    { code: '+691', flag: '🇫🇲 Micronesia' },
    { code: '+373', flag: '🇲🇩 Moldova' },
    { code: '+377', flag: '🇲🇨 Monaco' },
    { code: '+976', flag: '🇲🇳 Mongolia' },
    { code: '+382', flag: '🇲🇪 Montenegro' },
    { code: '+212', flag: '🇲🇦 Morocco' },
    { code: '+258', flag: '🇲🇿 Mozambique' },
    { code: '+95', flag: '🇲🇲 Myanmar' },
    { code: '+264', flag: '🇳🇦 Namibia' },
    { code: '+674', flag: '🇳🇷 Nauru' },
    { code: '+977', flag: '🇳🇵 Nepal' },
    { code: '+31', flag: '🇳🇱 Netherlands' },
    { code: '+64', flag: '🇳🇿 New Zealand' },
    { code: '+505', flag: '🇳🇮 Nicaragua' },
    { code: '+227', flag: '🇳🇪 Niger' },
    { code: '+234', flag: '🇳🇬 Nigeria' },
    { code: '+47', flag: '🇳🇴 Norway' },
    { code: '+968', flag: '🇴🇲 Oman' },
    { code: '+92', flag: '🇵🇰 Pakistan' },
    { code: '+680', flag: '🇵🇼 Palau' },
    { code: '+507', flag: '🇵🇦 Panama' },
    { code: '+675', flag: '🇵🇬 Papua New Guinea' },
    { code: '+595', flag: '🇵🇾 Paraguay' },
    { code: '+51', flag: '🇵🇪 Peru' },
    { code: '+63', flag: '🇵🇭 Philippines' },
    { code: '+48', flag: '🇵🇱 Poland' },
    { code: '+351', flag: '🇵🇹 Portugal' },
    { code: '+974', flag: '🇶🇦 Qatar' },
    { code: '+242', flag: '🇨🇬 Republic of the Congo' },
    { code: '+40', flag: '🇷🇴 Romania' },
    { code: '+7', flag: '🇷🇺 Russia' },
    { code: '+250', flag: '🇷🇼 Rwanda' },
    { code: '+1-869', flag: '🇰🇳 Saint Kitts and Nevis' },
    { code: '+1-758', flag: '🇱🇨 Saint Lucia' },
    { code: '+1-784', flag: '🇻🇨 Saint Vincent and the Grenadines' },
    { code: '+685', flag: '🇼🇸 Samoa' },
    { code: '+378', flag: '🇸🇲 San Marino' },
    { code: '+239', flag: '🇸🇹 São Tomé and Príncipe' },
    { code: '+966', flag: '🇸🇦 Saudi Arabia' },
    { code: '+221', flag: '🇸🇳 Senegal' },
    { code: '+381', flag: '🇷🇸 Serbia' },
    { code: '+248', flag: '🇸🇨 Seychelles' },
    { code: '+232', flag: '🇸🇱 Sierra Leone' },
    { code: '+65', flag: '🇸🇬 Singapore' },
    { code: '+421', flag: '🇸🇰 Slovakia' },
    { code: '+386', flag: '🇸🇮 Slovenia' },
    { code: '+677', flag: '🇸🇧 Solomon Islands' },
    { code: '+252', flag: '🇸🇴 Somalia' },
    { code: '+27', flag: '🇿🇦 South Africa' },
    { code: '+211', flag: '🇸🇸 South Sudan' },
    { code: '+34', flag: '🇪🇸 Spain' },
    { code: '+94', flag: '🇱🇰 Sri Lanka' },
    { code: '+249', flag: '🇸🇩 Sudan' },
    { code: '+597', flag: '🇸🇷 Suriname' },
    { code: '+268', flag: '🇸🇿 Swaziland' },
    { code: '+46', flag: '🇸🇪 Sweden' },
    { code: '+41', flag: '🇨🇭 Switzerland' },
    { code: '+963', flag: '🇸🇾 Syria' },
    { code: '+886', flag: '🇹🇼 Taiwan' },
    { code: '+992', flag: '🇹🇯 Tajikistan' },
    { code: '+255', flag: '🇹🇿 Tanzania' },
    { code: '+66', flag: '🇹🇭 Thailand' },
    { code: '+228', flag: '🇹🇬 Togo' },
    { code: '+676', flag: '🇹🇴 Tonga' },
    { code: '+1-868', flag: '🇹🇹 Trinidad and Tobago' },
    { code: '+216', flag: '🇹🇳 Tunisia' },
    { code: '+90', flag: '🇹🇷 Turkey' },
    { code: '+993', flag: '🇹🇲 Turkmenistan' },
    { code: '+688', flag: '🇹🇻 Tuvalu' },
    { code: '+256', flag: '🇺🇬 Uganda' },
    { code: '+380', flag: '🇺🇦 Ukraine' },
    { code: '+971', flag: '🇦🇪 United Arab Emirates' },
    { code: '+1', flag: '🇺🇸 United States' },
    { code: '+598', flag: '🇺🇾 Uruguay' },
    { code: '+998', flag: '🇺🇿 Uzbekistan' },
    { code: '+678', flag: '🇻🇺 Vanuatu' },
    { code: '+379', flag: '🇻🇦 Vatican City' },
    { code: '+58', flag: '🇻🇪 Venezuela' },
    { code: '+84', flag: '🇻🇳 Vietnam' },
    { code: '+967', flag: '🇾🇪 Yemen' },
    { code: '+260', flag: '🇿🇲 Zambia' },
    { code: '+263', flag: '🇿🇼 Zimbabwe' },
    // Add more country codes and flags as needed
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
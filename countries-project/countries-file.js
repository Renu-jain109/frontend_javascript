const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]



var table = document.querySelector("table");

var countryInfo = {
    "Afghanistan": {
        name: "Afghanistan",
        capital: "Kabul",
        population: "40218234",
        region: "Asia",
        area: "652230",
        languages: ["Pashto", "Uzbek", "Turkmen"]
    },
    "Albania": {
        name: "Albania",
        capital: "Tirana",
        population: "2877797",
        region: "Europe",
        area: "28748",
        languages: ["Albanian"]
    },
    "Algeria": {
        name: "Algeria",
        capital: "Algiers",
        population: "43851043",
        region: "Africa",
        area: "2381741",
        languages: ["Arabic"]
    },
    "Andorra": {
        name: "Andorra",
        capital: "Andorra la Vella",
        population: "77265",
        region: "Europe",
        area: "468",
        languages: ["Catalan"]
    },
    "Angola": {
        name: "Angola",
        capital: "Luanda",
        population: "32866268",
        region: "Africa",
        area: "1246700",
        languages: ["Portuguese"]
    },
    "Antigua and Barbuda": {
        name: "Antigua and Barbuda",
        capital: "Saint John's",
        population: "97928",
        region: "Americas",
        area: "442",
        languages: ["English"]
    },
    "Armenia": {
        name: "Armenia",
        capital: "Yerevan",
        population: "2963234",
        region: "Asia",
        area: "29743",
        languages: ["Armenian"]
    },
    "Australia": {
        name: "Australia",
        capital: "Canberra",
        population: "25687041",
        region: "Oceania",
        area: "7692024",
        languages: ["English"]
    },
    "Austria": {
        name: "Austria",
        capital: "Vienna",
        population: "8917205",
        region: "Europe",
        area: "83871",
        languages: ["German"]
    },
    "Azerbaijan": {
        name: "Azerbaijan",
        capital: "Baku",
        population: "10110116",
        region: "Asia",
        area: "86600",
        languages: ["Azerbaijani"]
    },
    "Bahamas": {
        name: "Bahamas",
        capital: "Nassau",
        population: "393248",
        region: "Americas",
        area: "13943",
        languages: ["English"]
    },
    "Bahrain": {
        name: "Bahrain",
        capital: "Manama",
        population: "1701583",
        region: "Asia",
        area: "765",
        languages: ["Arabic"]
    },
    "Barbados": {
        name: "Barbados",
        capital: "Bridgetown",
        population: "287371",
        region: "Americas",
        area: "430",
        languages: ["English"]
    },
    "Belarus": {
        name: "Belarus",
        capital: "Minsk",
        population: "9398861",
        region: "Europe",
        area: "207600",
        languages: ["Belarusian","Russian"]
    }

}

for(let i=0; i<=countries.length; i++){
    var row = table.insertRow();

        for(let j=0; j<6; j++){    
            let cell = row.insertCell();
            let countryName = countries[i];
            i++;    
            cell.textContent = countryName;

            cell.setAttribute("id",countryName);
    
    cell.addEventListener("click", function() {

        let info = countryInfo[countryName];
        let result = document.getElementById("result");
        result.innerHTML = `
            <h2>This country is ${info.name}</h2>
            <p>Its capital is ${info.capital}.</p>
            <p>${info.name}'s population is ${info.population}, and it is located in ${info.region}.</p>
            <p>The country's area is ${info.area}, and its official languages include ${info.languages.join(', ')}.</p>
        `;
        });

        }        
}   







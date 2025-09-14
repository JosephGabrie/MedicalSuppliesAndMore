let currentLang = 'en'; // default language

// Function to load JSON file and update page
async function setLanguage(lang) {
    try {
        const response = await fetch(`${lang}.json`);
        const translations = await response.json();

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[key]) {
                el.innerText = translations[key];
            }
        });
        const switcher = document.querySelector('.lang-switcher');
        if(lang === 'en') {
            switcher.classList.add('lang-en');
            switcher.classList.remove('lang-es');
        }else {
            switcher.classList.add('lang-es');
            switcher.classList.remove('lang-en');
        }
        


        currentLang = lang;
    } catch (error) {
        console.error('Error loading language file:', error);
    }
}

// Event listener for language switch button
document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('.lang-switcher');
    switcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'es' : 'en';
        setLanguage(newLang);
    });

    // Initialize page with default language
    setLanguage(currentLang);
});
// 獲取當前語言
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'zh-TW';
}

// 設置語言
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updateContent();
}

// 更新頁面內容
function updateContent() {
    const currentLang = getCurrentLanguage();
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // 更新 HTML lang 屬性
    document.documentElement.lang = currentLang;
}

// 初始化語言選擇器
function initLanguageSwitcher() {
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
}

// 頁面加載時初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    updateContent();
}); 
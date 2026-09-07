const UrlKriminalHamster = new URLSearchParams(window.location.search);

// Исправлены опечатки в названии переменной (было UrlKriminalHamste)
const install_url_pc = UrlKriminalHamster.get('app_file_pc'); 
const install_url_mobile = UrlKriminalHamster.get('app_file_mobile'); 
const pc_deeplink = UrlKriminalHamster.get('pc'); // Ссылка-протокол приложения для ПК (например, myapp://)
const mobile_deeplink = UrlKriminalHamster.get('mobile'); // Ссылка-протокол для мобильного

// Функция для попытки запуска приложения с фолбеком на установку
function openAppOrRedirect(deeplink, installUrl) {
    if (!deeplink) {
        // Если диплинка нет, сразу отправляем на скачивание
        if (installUrl) window.location.href = installUrl;
        return;
    }

    // Запускаем таймер. Если приложение не откроется, сработает переход по ссылке
    const fallbackTimeout = setTimeout(() => {
        if (installUrl) {
            window.location.href = installUrl;
        }
    }, 2500); // 2.5 секунды ожидания

    // Пытаемся открыть приложение
    window.location.href = deeplink;

    // Если пользователь переключился на приложение, страница скрывается.
    // В таком случае отменяем таймер, чтобы при возврате в браузер не началось скачивание.
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearTimeout(fallbackTimeout);
        }
    });
    
    window.addEventListener('pagehide', () => clearTimeout(fallbackTimeout));
}

// Определение типа устройства (простая проверка на мобильный)
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Запуск логики в зависимости от платформы
if (isMobile) {
    openAppOrRedirect(mobile_deeplink, install_url_mobile);
} else {
    openAppOrRedirect(pc_deeplink, install_url_pc);
}

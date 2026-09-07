const UrlKriminalHamster = new URLSearchParams(window.location.search);
const command = UrlKriminalHamster.get('command');

if (command = "kriminalvirus") {
  window.open("theannoyingsite.com");
}

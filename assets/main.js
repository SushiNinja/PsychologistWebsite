const menu=document.querySelector('.menu'),nav=document.querySelector('.links');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';
menu.setAttribute('aria-expanded',String(open));
menu.setAttribute('aria-label',open?'Κλείσιμο μενού':'Άνοιγμα μενού');
nav.classList.toggle('open',open);
menu.textContent=open?'×':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');
menu.setAttribute('aria-expanded','false');
menu.setAttribute('aria-label','Άνοιγμα μενού');
menu.textContent='☰'}));
document.getElementById('privacy-button').addEventListener('click',()=>document.getElementById('privacy').showModal());


// Keep bookmarks from the original single-page site working.
const legacyPages = { "#about": "about.html", "#services": "services.html", "#approach": "approach.html" };

function redirectLegacySection() {
  if (location.pathname.endsWith("/") || location.pathname.endsWith("/index.html")) {
    const target = legacyPages[location.hash];

    if (target) location.replace(target);

  }
}
redirectLegacySection();

window.addEventListener("hashchange", redirectLegacySection);


const translations = {
  en: {
    "nav.home":"Home","nav.about":"About","nav.band":"The Band","nav.event":"Event","nav.tickets":"Tickets","nav.gallery":"Gallery","nav.contact":"Contact",
    "hero.eyebrow":"LIVE • CLASSIC • TIMELESS","hero.sub":"A timeless musical journey.","hero.cta":"GET YOUR FREE TICKET","hero.more":"MEET THE BAND",
    "phrases.p1":"An unforgettable music experience.","phrases.p2":"4 Souls, 1 Sound.","phrases.p3":"A legendary live performance.","phrases.p4":"One unforgettable night.","phrases.p5":"A timeless musical journey.","phrases.p6":"Four talented musicians.","phrases.p7":"A powerful blues experience.","phrases.p8":"The ultimate live music event.",
    "event.dateLabel":"DATE","event.placeLabel":"VENUE","event.entryLabel":"ENTRY","event.free":"FREE • LIMITED TICKETS","event.reserve":"RESERVE NOW",
    "about.tag":"THE STORY","about.title":"BORN FROM THE BLUES.<br>INSPIRED BY THE 80s & 90s.","about.text":"Blues Legends brings the soul of blues together with the energy of the 80s and 90s. Classic sounds, unforgettable melodies and a stage filled with character — a musical journey made for every generation.","about.quote":"“Four musicians. One passion. Endless emotions.”","about.card":"Retro spirit. Modern energy.",
    "band.tag":"THE BAND","band.title":"FOUR TALENTED MUSICIANS.","band.intro":"Four souls, four instruments, one unmistakable sound.","roles.bass":"Vocals & Bass","roles.guitar":"Guitar","roles.drums":"Drums","roles.piano":"Piano",
    "ticket.tag":"THE SHOW","ticket.title":"ONE UNFORGETTABLE NIGHT.","ticket.month":"SEPTEMBER","ticket.venue":"VENUE","ticket.entry":"ENTRY","ticket.limited":"Limited tickets","ticket.formTag":"TICKET OFFICE","ticket.formTitle":"GET YOUR FREE TICKET","ticket.formText":"Reserve your place and receive a digital ticket code.","ticket.note":"Tickets are free but limited. Reserve your place now.",
    "form.name":"Full name","form.email":"Email","form.quantity":"Quantity","form.accept":"I confirm my reservation information.","form.button":"GET TICKET",
    "gallery.tag":"THE ERA","gallery.title":"FEEL THE BLUES.","gallery.intro":"Polka-dot scarves, classic hats, cassette tapes and the sound of another era.",
    "contact.tag":"CONTACT","contact.title":"KEEP THE MUSIC PLAYING.","footer":"4 Souls, 1 Sound."
  },
  pt: {
    "nav.home":"Início","nav.about":"Sobre","nav.band":"A Banda","nav.event":"Evento","nav.tickets":"Ingressos","nav.gallery":"Galeria","nav.contact":"Contato",
    "hero.eyebrow":"AO VIVO • CLÁSSICO • ATEMPORAL","hero.sub":"Uma jornada musical atemporal.","hero.cta":"PEGUE SEU INGRESSO GRÁTIS","hero.more":"CONHEÇA A BANDA",
    "phrases.p1":"Uma experiência musical inesquecível.","phrases.p2":"4 Almas, 1 Som.","phrases.p3":"Uma apresentação ao vivo lendária.","phrases.p4":"Uma noite inesquecível.","phrases.p5":"Uma jornada musical atemporal.","phrases.p6":"Quatro músicos talentosos.","phrases.p7":"Uma poderosa experiência de blues.","phrases.p8":"O evento musical definitivo.",
    "event.dateLabel":"DATA","event.placeLabel":"LOCAL","event.entryLabel":"ENTRADA","event.free":"GRÁTIS • INGRESSOS LIMITADOS","event.reserve":"RESERVE AGORA",
    "about.tag":"A HISTÓRIA","about.title":"NASCIDA DO BLUES.<br>INSPIRADA NOS ANOS 80 E 90.","about.text":"Blues Legends reúne a alma do blues com a energia dos anos 80 e 90. Sons clássicos, melodias inesquecíveis e um palco cheio de personalidade — uma jornada musical para todas as gerações.","about.quote":"“Quatro músicos. Uma paixão. Emoções sem fim.”","about.card":"Espírito retrô. Energia moderna.",
    "band.tag":"A BANDA","band.title":"QUATRO MÚSICOS TALENTOSOS.","band.intro":"Quatro almas, quatro instrumentos, um som inconfundível.","roles.bass":"Voz e baixo","roles.guitar":"Guitarra","roles.drums":"Bateria","roles.piano":"Piano",
    "ticket.tag":"O SHOW","ticket.title":"UMA NOITE INESQUECÍVEL.","ticket.month":"SETEMBRO","ticket.venue":"LOCAL","ticket.entry":"ENTRADA","ticket.limited":"Ingressos limitados","ticket.formTag":"BILHETERIA","ticket.formTitle":"PEGUE SEU INGRESSO GRÁTIS","ticket.formText":"Reserve seu lugar e receba um código de ingresso digital.","ticket.note":"Os ingressos são gratuitos, mas limitados. Reserve seu lugar agora.",
    "form.name":"Nome completo","form.email":"E-mail","form.quantity":"Quantidade","form.accept":"Confirmo os dados da minha reserva.","form.button":"PEGAR INGRESSO",
    "gallery.tag":"A ERA","gallery.title":"SINTA O BLUES.","gallery.intro":"Lenços de bolinha, chapéus clássicos, fitas cassete e o som de outra época.",
    "contact.tag":"CONTATO","contact.title":"MANTENHA A MÚSICA VIVA.","footer":"4 Almas, 1 Som."
  }
};

function setLanguage(lang){
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.getElementById("currentLang").textContent = lang.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[lang][key] !== undefined) el.innerHTML=translations[lang][key];
  });
  localStorage.setItem("bluesLang",lang);
}
document.querySelector(".lang-btn").addEventListener("click",()=>{
  const box=document.querySelector(".language");
  box.classList.toggle("open");
  document.querySelector(".lang-btn").setAttribute("aria-expanded",box.classList.contains("open"));
});
document.querySelectorAll(".lang-menu button").forEach(btn=>{
  btn.addEventListener("click",()=>{setLanguage(btn.dataset.lang);document.querySelector(".language").classList.remove("open");});
});

const menuBtn=document.querySelector(".menu-btn"), nav=document.querySelector(".nav");
menuBtn.addEventListener("click",()=>{
  nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",nav.classList.contains("open"));
});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("ticketForm").addEventListener("submit", e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const quantity=document.getElementById("quantity").value;
  const code="BL-"+Math.random().toString(36).slice(2,8).toUpperCase();
  const result=document.getElementById("ticketResult");
  result.hidden=false;
  result.innerHTML=`<strong>✓ Reservation confirmed!</strong><br>
    <span>Thank you, ${name}. Your ${quantity} ticket${quantity>1?"s":""} are reserved.</span>
    <div class="ticket-code">${code}</div>
    <small>${email} • IFPB Campus Campina Grande • 04 Sep 20266666</small>`;
  result.scrollIntoView({behavior:"smooth",block:"nearest"});
  const reservations=JSON.parse(localStorage.getItem("bluesReservations")||"[]");
  reservations.push({name,email,quantity,code,date:new Date().toISOString()});
  localStorage.setItem("bluesReservations",JSON.stringify(reservations));
});

setLanguage(localStorage.getItem("bluesLang")||"en");

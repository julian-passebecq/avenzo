const serviceData={
  strategy:{
    kicker:"STRATÉGIE & POSITIONNEMENT",
    title:"Donner une direction claire avant d’accélérer.",
    summary:"Nous clarifions votre marché, votre positionnement et vos priorités pour construire une feuille de route cohérente et directement exploitable.",
    items:["Étude de marché & veille concurrentielle","Positionnement & proposition de valeur","Go-to-market & priorités d’action","Feuille de route opérationnelle"]
  },
  digital:{
    kicker:"PRÉSENCE DIGITALE",
    title:"Transformer votre présence en véritable levier de croissance.",
    summary:"Nous concevons une présence digitale cohérente, visible et utile — du site internet aux campagnes, du contenu à l’acquisition.",
    items:["Site & landing pages","SEO / SEA & campagnes","Contenu & réseaux sociaux","E-commerce & CRM"]
  },
  growth:{
    kicker:"CROISSANCE COMMERCIALE",
    title:"Structurer la prospection et convertir les opportunités.",
    summary:"Nous aidons à organiser la démarche commerciale, identifier les bons comptes et créer un pipeline plus lisible et plus efficace.",
    items:["Ciblage & stratégie commerciale","Prospection B2B","CRM & pipeline","Partenariats & développement marché"]
  },
  events:{
    kicker:"SALONS & PARTENARIATS",
    title:"Créer des connexions utiles avant, pendant et après l’événement.",
    summary:"Nous préparons les salons, partenaires et prises de contact pour transformer un événement en opportunités commerciales concrètes.",
    items:["Stratégie salon & présence","Partenaires & fournisseurs","Lead generation","Suivi commercial post-événement"]
  }
};

const cards=[...document.querySelectorAll('[data-service]')];
const detailKicker=document.getElementById('detail-kicker');
const detailTitle=document.getElementById('detail-title');
const detailSummary=document.getElementById('detail-summary');
const detailList=document.getElementById('detail-list');

function setService(key,{scroll=true}={}){
  const data=serviceData[key];
  if(!data)return;
  cards.forEach(card=>{
    const active=card.dataset.service===key;
    card.classList.toggle('active',active);
    card.setAttribute('aria-selected',active?'true':'false');
  });
  detailKicker.textContent=data.kicker;
  detailTitle.textContent=data.title;
  detailSummary.textContent=data.summary;
  detailList.innerHTML=data.items.map(item=>'<li>'+item+'</li>').join('');
  if(scroll) document.getElementById('service-detail').scrollIntoView({behavior:'smooth',block:'center'});
}
cards.forEach(card=>card.addEventListener('click',()=>setService(card.dataset.service)));

const nav=[...document.querySelectorAll('.nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const observer=new IntersectionObserver(entries=>{
  const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible)return;
  nav.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+visible.target.id));
},{rootMargin:'-20% 0px -65% 0px',threshold:[0,.2,.5]});
sections.forEach(section=>observer.observe(section));

document.getElementById('year').textContent=new Date().getFullYear();
setService('strategy',{scroll:false});
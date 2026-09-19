const links=[...document.querySelectorAll('.nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const io=new IntersectionObserver(entries=>{
  const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible)return;
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+visible.target.id));
},{rootMargin:'-20% 0px -65% 0px',threshold:[0,.2,.5]});
sections.forEach(s=>io.observe(s));
document.getElementById('year').textContent=new Date().getFullYear();
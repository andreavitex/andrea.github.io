const projects={
camugin:{title:'Camügin',images:['assets/images/camugin-1.jpg','assets/images/camugin-2.jpg']},
cellini:{title:'Cellini Caffè',images:['assets/images/cellini-1.jpg','assets/images/cellini-2.jpg']},
brugal:{title:'Brugal 1888',images:['assets/images/brugal-1.jpg','assets/images/brugal-4.jpg','assets/images/brugal-6.jpg','assets/images/brugal-7.jpg']},
garmin:{title:'Garmin',images:['assets/images/garmin-1.jpg','assets/images/garmin-2.jpg']},
macallan:{title:'The Macallan · Spirit',images:['assets/images/macallan-1.jpg','assets/images/macallan-2.jpg']},
ginuensis:{title:'Gin Ginuensis',images:['assets/images/ginuensis-1.jpg']},
bocu:{title:'Bocù',images:['assets/images/bocu-1.jpg','assets/images/bocu-2.jpg']},
dellepiane:{title:'Paolo Dellepiane',images:['assets/images/dellepiane-1.jpg','assets/images/dellepiane-2.jpg']},
europam:{title:'Europam HVO GreenTech',images:['assets/images/europam-1.jpg']}
};
const modal=document.querySelector('.modal'), gallery=document.querySelector('.modal-gallery'), title=document.querySelector('.modal-title');
document.querySelectorAll('.card').forEach(card=>card.addEventListener('click',()=>{const p=projects[card.dataset.project];title.textContent=p.title;gallery.innerHTML=p.images.map(src=>`<img src="${src}" alt="${p.title}">`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));
function close(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelector('.modal-close').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open')));

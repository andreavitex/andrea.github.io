const base='andrea-portfolio/';
const projects={
camugin:{title:'Camügin',meta:'Product / Campaign · Visual direction',images:['camugin-1.jpg','camugin-2.jpg'],text:'Product communication developed from visual direction to final applications.'},
cellini:{title:'Cellini Caffè',meta:'Editorial / Retail · Visual system',images:['cellini-1.jpg','cellini-2.jpg'],text:'Editorial and product communication for a contemporary Italian roastery.'},
brugal:{title:'Brugal 1888',meta:'Editorial / Brand · Premium communication',images:['brugal-1.jpg','brugal-4.jpg','brugal-6.jpg','brugal-7.jpg'],text:'A premium editorial system built around image, typography and brand expression.'},
garmin:{title:'Garmin',meta:'Digital / Product · Wellness communication',images:['garmin-1.jpg','garmin-2.jpg'],text:'Digital product communication within the Garmin wellness ecosystem.'},
macallan:{title:'The Macallan · Spirit',meta:'Event / Editorial · Visual storytelling',images:['macallan-1.jpg','macallan-2.jpg'],text:'Premium event communication combining editorial composition and visual storytelling.'},
ginuensis:{title:'Gin Ginuensis',meta:'Packaging · Brand expression',images:['ginuensis-1.jpg'],text:'Packaging and local brand expression focused on a distinctive visual presence.'}
};
const modal=document.querySelector('.modal'),gallery=document.querySelector('.modal-gallery'),title=document.querySelector('.modal-title'),meta=document.querySelector('.case-meta');
document.querySelectorAll('.card').forEach(card=>card.addEventListener('click',()=>{const p=projects[card.dataset.project];if(!p)return;title.textContent=p.title;meta.innerHTML=`<span>${p.meta}</span><p>${p.text}</p>`;gallery.innerHTML=p.images.map(src=>`<img src="${base}assets/images/${src}" alt="${p.title}">`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));
function close(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelector('.modal-close').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open')));

const toolsTrack=document.querySelector('#tools-track');
const toolSlides=[...document.querySelectorAll('.tool-slide')];
const toolsPrev=document.querySelector('.tools-prev');
const toolsNext=document.querySelector('.tools-next');
const toolsCurrent=document.querySelector('#tools-current');
const toolsName=document.querySelector('#tools-name');
let toolIndex=0;
function updateToolsSlider(){
  if(!toolsTrack||!toolSlides.length)return;
  const slide=toolSlides[toolIndex];
  const viewport=document.querySelector('.tools-viewport');
  const offset=viewport.clientWidth/2-(slide.offsetLeft+slide.offsetWidth/2);
  toolsTrack.style.transform=`translateX(${offset}px)`;
  toolSlides.forEach((item,i)=>item.classList.toggle('active',i===toolIndex));
  toolsCurrent.textContent=`${String(toolIndex+1).padStart(2,'0')} / ${String(toolSlides.length).padStart(2,'0')}`;
  toolsName.textContent=slide.dataset.tool;
}
function moveTool(direction){toolIndex=(toolIndex+direction+toolSlides.length)%toolSlides.length;updateToolsSlider()}
if(toolsTrack){
  toolsPrev.addEventListener('click',()=>moveTool(-1));
  toolsNext.addEventListener('click',()=>moveTool(1));
  toolSlides.forEach((slide,index)=>slide.addEventListener('click',()=>{toolIndex=index;updateToolsSlider()}));
  window.addEventListener('resize',updateToolsSlider);
  updateToolsSlider();
}

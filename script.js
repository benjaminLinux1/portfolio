
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>{const d=document.getElementById(b.dataset.open);d.showModal();document.body.style.overflow='hidden'}));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>{b.closest('dialog').close();document.body.style.overflow=''}));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('cancel',()=>document.body.style.overflow=''));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));

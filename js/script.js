
// Mobile nav
const toggle = document.getElementById('mobileToggle');
const mob = document.getElementById('mobileMenu');
if (toggle && mob){
  toggle.addEventListener('click', ()=> mob.classList.toggle('show'));
}

// Load projects
async function loadProjects(){
  try{
    const res = await fetch('projects.json', {cache: 'no-store'});
    const data = await res.json();
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    data.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      const thumb = document.createElement('img');
      thumb.className = 'thumb';
      thumb.alt = p.title + ' thumbnail';
      thumb.src = p.thumbnail || 'assets/img/placeholder.png';
      const h3 = document.createElement('h3');
      h3.textContent = p.title;
      const meta = document.createElement('div');
      meta.style.opacity = .8;
      meta.style.fontSize = '13px';
      meta.textContent = p.date + (p.tags?.length ? ' • ' + p.tags.join(' · ') : '');
      const pEl = document.createElement('p');
      pEl.textContent = p.summary;
      const links = document.createElement('p');
      if (p.links){
        for (const [k,v] of Object.entries(p.links)){
          if (v){
            const a = document.createElement('a');
            a.href = v;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = k;
            a.style.marginRight = '12px';
            links.appendChild(a);
          }
        }
      }
      const tags = document.createElement('div');
      tags.className = 'tags';
      (p.tags||[]).forEach(t=>{
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = t;
        tags.appendChild(span);
      });
      card.appendChild(thumb);
      card.appendChild(h3);
      card.appendChild(meta);
      card.appendChild(pEl);
      card.appendChild(links);
      card.appendChild(tags);
      grid.appendChild(card);
    });
  }catch(e){
    console.error(e);
  }
}
document.addEventListener('DOMContentLoaded', loadProjects);

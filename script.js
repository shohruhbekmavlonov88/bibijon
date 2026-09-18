(function(){
  'use strict';

  const TEXT = {
    moodGood: "Ajoyib! Davom etamiz ❤️",
    moodBad: "Nega? Unda ko‘taramiz ❤️",
    memory1: "Sen bilan zakovat arenada ilk tanishuvimiz",
    memory2: "Juda ko‘p urushsak ham yarashib ketishimiz",
    memory3: "Har kuni bir-birimizga bo‘lgan mehr va iliq suhbatlar",
    memory4: "Bir-birimizni o‘ylab uyquga ketish",
    letter: "Bibim, bilaman sizni ko‘p ko‘nglingizni og‘ritdim. Bilaman, mendan judayam xafasiz. Bilaman, juda o‘ylab qiynalyapsiz. Sizga yetarlicha mehr berolmadim. Qiyin vaziyatingizda yoningizda bo‘lolmadim. Sizni tushunmadim. Lekin bilib qo‘ying sizni judayam qattiq sevaman. Siz mening borlig‘im, yagonamsiz. Doim sizni o‘ylayman. Doim sizni deyman. Mening go‘zalim, mening malikam, mening gul g‘uncham, mening pompaloq‘im, mening arazchim, mening erkatoyim faqat va faqat meniki. Dunyolarga alishmayman bu go‘zallikni. Unutmang, sizni judayam judayam judayam qattiq sevaman ❤️"
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function goTo(id){
    document.querySelectorAll('.scene').forEach(s=>s.classList.remove('active'));
    const target = document.getElementById(id);
    if(target){ target.classList.add('active'); window.scrollTo(0,0); }
  }

  document.addEventListener('click', function(e){
    const nextBtn = e.target.closest('[data-next]');
    if(nextBtn){ goTo(nextBtn.getAttribute('data-next')); }
  });

  // ---- PARTICLES ----
  function spawnParticle(){
    const el = document.createElement('div');
    el.className = 'particle';
    el.textContent = '❤';
    el.style.left = Math.random()*100 + 'vw';
    el.style.fontSize = (10 + Math.random()*14) + 'px';
    const dur = 8 + Math.random()*10;
    el.style.animationDuration = dur + 's';
    document.getElementById('particles').appendChild(el);
    setTimeout(()=> el.remove(), dur*1000 + 500);
  }
  if(!reduceMotion){
    setInterval(spawnParticle, 900);
    for(let i=0;i<6;i++) setTimeout(spawnParticle, i*300);
  }

  // ---- SAHNA 2: KAYFIYAT (2 variant) ----
  const moodBtns = document.querySelectorAll('.mood-btn');
  const moodResponse = document.getElementById('moodResponse');
  const scene2Next = document.getElementById('scene2Next');
  moodBtns.forEach(btn=>{
    btn.addEventListener('click', function(){
      moodBtns.forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      const mood = btn.getAttribute('data-mood');
      moodResponse.textContent = mood === 'good' ? TEXT.moodGood : TEXT.moodBad;
      scene2Next.classList.remove('hidden');
    });
  });

  // ---- SAHNA 3: XOTIRALAR ----
  const memoryCards = document.querySelectorAll('.memory-card');
  const memoryResponse = document.getElementById('memoryResponse');
  memoryCards.forEach(card=>{
    card.addEventListener('click', function(){
      memoryCards.forEach(c=>c.classList.remove('opened'));
      card.classList.add('opened');
      const idx = card.getAttribute('data-memory');
      const map = { '1': TEXT.memory1, '2': TEXT.memory2, '3': TEXT.memory3, '4': TEXT.memory4 };
      memoryResponse.textContent = map[idx];
    });
  });

  // ---- SAHNA 4: XAT ----
  const envelopeBtn = document.getElementById('envelopeBtn');
  const letterBox = document.getElementById('letterBox');
  const letterText = document.getElementById('letterText');
  const scene4Next = document.getElementById('scene4Next');
  let letterOpened = false;

  envelopeBtn.addEventListener('click', function(){
    if(letterOpened) return;
    letterOpened = true;
    envelopeBtn.classList.add('hidden');
    letterBox.classList.remove('hidden');
    typewrite(TEXT.letter, letterText, function(){
      scene4Next.classList.remove('hidden');
    });
  });

  function typewrite(str, el, done){
    if(reduceMotion){ el.textContent = str; if(done) done(); return; }
    let i = 0;
    el.textContent = '';
    const speed = 22;
    (function step(){
      if(i <= str.length){
        el.textContent = str.slice(0, i);
        i++;
        setTimeout(step, speed);
      } else if(done){ done(); }
    })();
  }

  // ---- SAHNA 5: YARASHAMIZMI ----
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  noBtn.addEventListener('click', function(){
    dodgeButton(noBtn);
  });

  function dodgeButton(btn){
    btn.classList.add('roaming');
    const rect = btn.getBoundingClientRect();
    const margin = 16;
    const maxX = window.innerWidth - rect.width - margin;
    const maxY = window.innerHeight - rect.height - margin;
    const x = margin + Math.random() * Math.max(maxX - margin, 40);
    const y = margin + Math.random() * Math.max(maxY - margin, 40);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
  }

  yesBtn.addEventListener('click', function(){
    goTo('scene6');
    launchConfetti();
  });

  function launchConfetti(){
    if(reduceMotion) return;
    const symbols = ['❤️','💕','💖','✨'];
    for(let i=0;i<26;i++){
      setTimeout(function(){
        const el = document.createElement('div');
        el.className = 'confetti-heart';
        el.textContent = symbols[Math.floor(Math.random()*symbols.length)];
        el.style.left = Math.random()*100 + 'vw';
        el.style.animationDuration = (2.2 + Math.random()*1.6) + 's';
        el.style.fontSize = (14 + Math.random()*16) + 'px';
        document.body.appendChild(el);
        setTimeout(()=> el.remove(), 4200);
      }, i*55);
    }
  }

})();

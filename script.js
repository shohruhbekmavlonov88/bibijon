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

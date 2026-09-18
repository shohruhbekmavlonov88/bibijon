  --bg1:#160312;
  --bg2:#2b0a2e;
  --bg3:#3a0d1f;
  --pink:#ff6fa5;
  --pink-soft:#ffb3d1;
  --maroon:#7a1f3d;
  --purple:#5b2a86;
  --glass:rgba(255,255,255,0.07);
  --glass-border:rgba(255,255,255,0.18);
  --text:#fdf1f6;
  --glow:0 0 25px rgba(255,111,165,0.55);
}

*{box-sizing:border-box; -webkit-tap-highlight-color:transparent;}
html,body{
  margin:0; padding:0; width:100%; min-height:100%;
  background:radial-gradient(circle at 30% 20%, var(--bg3), var(--bg2) 45%, var(--bg1) 100%);
  color:var(--text);
  font-family:'Segoe UI',system-ui,-apple-system,Roboto,sans-serif;
  overflow-x:hidden;
}
body{min-height:100vh; min-height:100svh;}

#particles{position:fixed; inset:0; overflow:hidden; pointer-events:none; z-index:0;}
.particle{
  position:absolute; bottom:-10%; opacity:0.6;
  animation:floatUp linear infinite;
  color:var(--pink-soft);
  font-size:14px;
}
@keyframes floatUp{
  from{transform:translateY(0) translateX(0) rotate(0deg); opacity:0;}
  10%{opacity:0.7;}
  90%{opacity:0.5;}
  to{transform:translateY(-110vh) translateX(20px) rotate(20deg); opacity:0;}
}

#app{position:relative; z-index:1; width:100%; min-height:100vh; min-height:100svh;
  display:flex; align-items:center; justify-content:center; padding:24px 16px;}

.scene{display:none; width:100%; max-width:480px;}
.scene.active{display:block; animation:sceneIn .5s ease both;}
@keyframes sceneIn{from{opacity:0; transform:translateY(16px);} to{opacity:1; transform:translateY(0);}}

.glass-card{
  background:var(--glass);
  border:1px solid var(--glass-border);
  border-radius:24px;
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);
  padding:28px 20px;
  box-shadow:0 8px 32px rgba(0,0,0,0.35);
}
.center-card{text-align:center;}

.big-heart{width:90px; margin:0 auto 12px; filter:drop-shadow(var(--glow));}
.big-heart.small-heart{width:64px;}
.heart-svg{width:100%; fill:var(--pink); animation:pulse 1.8s ease-in-out infinite;}
@keyframes pulse{0%,100%{transform:scale(1);} 50%{transform:scale(1.08);}}

.title{font-size:2rem; margin:0 0 6px; color:var(--pink-soft); text-shadow:var(--glow);}
.subtitle{font-size:1.05rem; margin:4px 0; opacity:0.9;}
.hint{font-size:0.85rem; opacity:0.6; margin-bottom:20px;}
.small-label{opacity:0.7; font-size:0.9rem; margin-bottom:8px;}
.question{font-size:1.2rem; margin:10px 0 18px; line-height:1.4;}

.btn{
  border:none; border-radius:999px; padding:14px 28px;
  font-size:1rem; font-weight:600; color:#fff;
  cursor:pointer; transition:transform .18s ease, box-shadow .18s ease;
  touch-action:manipulation;
}
.btn:active{transform:scale(0.96);}
.btn-main{background:linear-gradient(135deg,var(--pink),var(--maroon)); box-shadow:var(--glow);}
.btn-next{background:linear-gradient(135deg,var(--purple),var(--maroon)); margin-top:16px; box-shadow:0 0 18px rgba(91,42,134,0.5);}
.hidden{display:none !important;}

.mood-row{display:flex; flex-direction:column; gap:12px; margin-bottom:10px;}
.mood-btn{
  display:flex; align-items:center; gap:12px; justify-content:center;
  background:var(--glass); border:1px solid var(--glass-border); border-radius:16px;
  padding:14px; color:var(--text); font-size:0.95rem; cursor:pointer;
  transition:transform .18s ease, box-shadow .18s ease;
}
.mood-btn:active{transform:scale(0.97); box-shadow:var(--glow);}
.mood-btn.selected{box-shadow:var(--glow); border-color:var(--pink);}
.emoji{font-size:1.4rem;}
.mood-response, .memory-response{min-height:1.4em; margin:10px 0; color:var(--pink-soft); font-size:0.95rem; animation:fadeIn .4s ease;}
@keyframes fadeIn{from{opacity:0;} to{opacity:1;}}

.memory-grid{display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:6px;}
.memory-card{
  background:var(--glass); border:1px solid var(--glass-border); border-radius:16px;
  padding:20px 8px; color:var(--text); cursor:pointer; font-size:0.95rem;
  transition:transform .2s ease, box-shadow .2s ease;
}
.memory-card:active{transform:scale(0.95);}
.memory-card.opened{box-shadow:var(--glow); border-color:var(--pink);}

.envelope{
  background:none; border:none; cursor:pointer; margin:14px auto; display:block;
  width:140px; padding:0;
}
.envelope-svg{width:100%; fill:none; stroke:var(--pink-soft); stroke-width:3;
  filter:drop-shadow(var(--glow)); animation:sway 2.4s ease-in-out infinite;}
@keyframes sway{0%,100%{transform:rotate(-2deg);} 50%{transform:rotate(2deg);}}
.envelope-hint{display:block; margin-top:8px; font-size:0.8rem; opacity:0.7;}

.letter-box{margin-top:16px; text-align:left;}
.letter-text{
  white-space:pre-wrap; line-height:1.6; font-size:1rem; max-height:50vh; overflow-y:auto;
  padding:12px; background:rgba(0,0,0,0.15); border-radius:14px;
}

.answer-row{display:flex; gap:14px; justify-content:center; align-items:center; margin-top:20px; flex-wrap:wrap; position:relative;}
.btn-yes{background:linear-gradient(135deg,var(--pink),#c2185b); font-size:1.1rem; padding:16px 32px; box-shadow:var(--glow);}
.btn-no{
  background:rgba(255,255,255,0.1); border:1px solid var(--glass-border);
  font-size:1.2rem; padding:18px 36px;
}
.btn-no.roaming{position:fixed; z-index:20; margin:0;}

.final-text{font-size:1.15rem; margin:14px 0 6px;}
.final-small{opacity:0.8; font-size:0.95rem;}

.confetti-heart{position:fixed; top:-5%; font-size:1.4rem; pointer-events:none; z-index:30; animation:confettiFall linear forwards;}
@keyframes confettiFall{
  to{transform:translateY(110vh) rotate(360deg); opacity:0;}
}

@media (max-width:340px){
  .title{font-size:1.6rem;}
  .glass-card{padding:20px 14px;}
}

@media (orientation:landscape) and (max-height:420px){
  #app{padding:10px;}
  .glass-card{padding:16px;}
}

@media (prefers-reduced-motion: reduce){
  *{animation-duration:0.01ms !important; animation-iteration-count:1 !important; transition-duration:0.01ms !important;}
}

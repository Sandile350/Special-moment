const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const IMGS=["assets/Omo1.jpeg","assets/Omo2.jpeg","assets/Omo3.jpeg","assets/Omo4.jpeg","assets/Omo5.jpeg"];
/* theme */
const root=document.documentElement;
$('#th').onclick=()=>{const d=root.dataset.theme==='dark';root.dataset.theme=d?'light':'dark';$('#th').textContent=d?'☾':'☀'};
/* loader + subtitle */
function typeTo(el,txt,sp=70){el.textContent='';let i=0;(function f(){if(i<=txt.length){el.textContent=txt.slice(0,i++);setTimeout(f,sp)}})()}
addEventListener('load',()=>setTimeout(()=>{$('#ld').classList.add('off');
 const w=["Beautiful","Strong","Smart","and Unique"];let s="",k=0;const t=$('#tag');
 (function n(){if(k<w.length){s+=(k?(k==3?", ":", "):"")+w[k++];t.textContent=s.replace(", and",", and");t.style.opacity=0;gsap.to(t,{opacity:1,duration:.6});setTimeout(n,900)}else{t.textContent="Beautiful, Strong, Smart, and Unique"}})();
 gsap.from('.hc h1',{y:60,opacity:0,duration:1.6,ease:'power3.out'});
},1500));
/* AOS + gsap */
AOS.init({duration:900,once:true,offset:60});
gsap.registerPlugin(ScrollTrigger);
gsap.to('#hero video',{yPercent:15,ease:'none',scrollTrigger:{trigger:'#hero',scrub:true,start:'top top',end:'bottom top'}});
gsap.to('.hc',{yPercent:-25,opacity:0,ease:'none',scrollTrigger:{trigger:'#hero',scrub:true,start:'top top',end:'bottom 30%'}});
$$('section:not(#hero) h2').forEach(h=>gsap.from(h,{scale:.9,letterSpacing:'.2em',duration:1.2,scrollTrigger:{trigger:h,start:'top 85%'}}));
/* gallery */
const gal=$('#gal');IMGS.forEach((s,i)=>{const d=document.createElement('div');d.className='ph';d.dataset.aos='zoom-in';d.innerHTML=`<img src="${s}" alt="Photo ${i+1}" loading="lazy">`;d.onclick=()=>open(i);gal.append(d)});
let cur=0;const lb=$('#lb'),li=$('#lb img');
function open(i){cur=(i+IMGS.length)%IMGS.length;li.src=IMGS[cur];lb.classList.add('on')}
$('#lb .x').onclick=()=>lb.classList.remove('on');$('#lb .p').onclick=()=>open(cur-1);$('#lb .n').onclick=()=>open(cur+1);
lb.onclick=e=>{if(e.target===lb)lb.classList.remove('on')};
addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowRight')open(cur+1);if(e.key==='ArrowLeft')open(cur-1)});
/* quotes */
const qs=$$('#q span');let qi=0;qs[0].classList.add('on');setInterval(()=>{qs[qi].classList.remove('on');qi=(qi+1)%qs.length;qs[qi].classList.add('on')},3800);
/* counters */
$$('[data-t]').forEach(el=>ScrollTrigger.create({trigger:el,start:'top 90%',once:true,onEnter:()=>{const o={v:0};gsap.to(o,{v:100,duration:2,ease:'power2.out',onUpdate:()=>el.textContent=Math.round(o.v)+'%',onComplete:()=>{el.textContent=el.dataset.t;gsap.from(el,{scale:1.4,duration:.6,ease:'back.out(3)'})}})}}));
/* reasons */
const R=[["💖","Your Kindness","You make people feel seen and safe."],["⭐","Your Confidence","The way you carry yourself is magnetic."],["✨","Your Smile","It lights up every room it enters."],["🧠","Your Mind","Sharp, curious and always growing."],["🦋","Your Uniqueness","There is no one else like you, ever."],["💪","Your Strength","You keep going, and you do it gracefully."],["🌸","Your Style","Effortless, bold and entirely you."],["🌙","Your Heart","Gentle, loyal and full of love."]];
$('#rs').innerHTML=R.map((r,i)=>`<div class="rc glass" data-aos="fade-up" data-aos-delay="${i*70}"><i>${r[0]}</i><h3>${r[1]}</h3><p>${r[2]}</p></div>`).join('');
/* typewriter */
const M="Hey you,\n\nI hope you know how special you are. Not just the way you look — though wow — but the way you think, the way you laugh, and the way you keep showing up as yourself.\n\nYou are allowed to take up space. You are allowed to shine loudly. You are allowed to rest, to grow, and to be proud of how far you've come.\n\nOn the days you doubt yourself, come back here. Read this again. The world is a lot better with you in it.\n\nYou are loved. You are enough. You always were.";
ScrollTrigger.create({trigger:'#msg',start:'top 75%',once:true,onEnter:()=>{let i=0;const e=$('#msg');(function f(){if(i<=M.length){e.innerHTML=M.slice(0,i++).replace(/\n/g,'<br>');setTimeout(f,32)}})()}});
/* compliments */
const C=["You light up every room.","Your confidence is magnetic.","You are effortlessly beautiful.","Your smile is pure sunshine.","You are smarter than you give yourself credit for.","Your energy is unforgettable.","You make the ordinary feel magical.","Your kindness changes people's days.","You are one of a kind.","Your style is iconic.","You have a heart of gold.","You handle life with so much grace.","Your laugh is contagious.","You are stronger than you know.","You deserve every good thing coming your way.","You inspire people just by being yourself.","Your glow is real.","You're a masterpiece in progress.","You are fearless in the best way.","You make people feel like they matter.","Your presence is a gift.","You are radiant, inside and out.","You are full of beautiful surprises.","Your ambition is admirable.","You make the world softer.","You're a queen, and you carry the crown well.","Your voice deserves to be heard.","You are growing into something extraordinary.","You are enough, exactly as you are.","Being you is your superpower."];
let last=-1;$('#cb').onclick=()=>{let n;do n=Math.floor(Math.random()*C.length);while(n===last);last=n;const c=$('#cp');gsap.fromTo(c,{opacity:0,y:20,scale:.95},{opacity:1,y:0,scale:1,duration:.6});c.textContent=C[n];confetti({particleCount:40,spread:70,origin:{y:.7},colors:['#ffb6d5','#cdb8ff','#d9a93f','#a8dcff']})};
/* butterflies & stars */
const bf=$('#bf');for(let i=0;i<14;i++){const e=document.createElement('div');e.className='fl';e.textContent=i%3?'🦋':'⭐';e.style.cssText=`left:${Math.random()*95}%;font-size:${18+Math.random()*22}px;animation-duration:${9+Math.random()*10}s;animation-delay:-${Math.random()*15}s`;bf.append(e)}
/* canvas particles */
const bg=$('#bg'),bx=bg.getContext('2d'),fx=$('#fx'),fc=fx.getContext('2d');let W,H;
function rs(){W=bg.width=fx.width=innerWidth;H=bg.height=fx.height=innerHeight}rs();addEventListener('resize',rs);
const COL=['#ffb6d5','#cdb8ff','#f6d98a','#a8dcff'];
const P=Array.from({length:matchMedia('(max-width:640px)').matches?40:80},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2.5+.5,s:Math.random()*.5+.15,c:COL[Math.random()*4|0],p:Math.random()*6}));
let hearts=[],boom=[];
function loop(t){bx.clearRect(0,0,W,H);for(const p of P){p.y-=p.s;p.x+=Math.sin(t/1500+p.p)*.3;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}bx.globalAlpha=.4+.4*Math.sin(t/500+p.p);bx.fillStyle=p.c;bx.shadowBlur=12;bx.shadowColor=p.c;bx.beginPath();bx.arc(p.x,p.y,p.r,0,7);bx.fill()}
 fc.clearRect(0,0,W,H);fc.shadowBlur=0;
 hearts=hearts.filter(h=>h.l>0);for(const h of hearts){h.y-=1;h.x+=h.vx;h.l-=.012;fc.globalAlpha=Math.max(h.l,0);fc.font=h.z+'px serif';fc.fillText(h.e,h.x,h.y)}
 boom=boom.filter(b=>b.l>0);for(const b of boom){b.x+=b.vx;b.y+=b.vy;b.vy+=.04;b.vx*=.985;b.l-=.01;fc.globalAlpha=Math.max(b.l,0);fc.fillStyle=b.c;fc.shadowBlur=10;fc.shadowColor=b.c;fc.beginPath();fc.arc(b.x,b.y,b.r,0,7);fc.fill()}
 requestAnimationFrame(loop)}requestAnimationFrame(loop);
let lh=0;addEventListener('pointermove',e=>{if(e.pointerType==='touch'||performance.now()-lh<70)return;lh=performance.now();hearts.push({x:e.clientX,y:e.clientY,vx:(Math.random()-.5)*.8,l:1,z:12+Math.random()*12,e:['💗','💖','✨','💜'][Math.random()*4|0]})});
function explode(x=W/2,y=H/2){for(let i=0;i<160;i++){const a=Math.random()*6.28,v=Math.random()*7+1;boom.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,r:Math.random()*3+1,c:COL[Math.random()*4|0],l:1+Math.random()*.6})}}
$('#ex').onclick=e=>{explode(e.clientX,e.clientY);confetti({particleCount:150,spread:100,origin:{y:.7},colors:['#ffb6d5','#cdb8ff','#d9a93f','#a8dcff']})};
ScrollTrigger.create({trigger:'#fin',start:'top 55%',once:true,onEnter:()=>{setTimeout(()=>{explode();const e=Date.now()+2500;(function f(){confetti({particleCount:5,angle:60,spread:60,origin:{x:0},colors:['#ffb6d5','#d9a93f','#cdb8ff']});confetti({particleCount:5,angle:120,spread:60,origin:{x:1},colors:['#a8dcff','#ffb6d5','#d9a93f']});if(Date.now()<e)requestAnimationFrame(f)})()},600);gsap.from('#fin h2',{scale:.7,opacity:0,duration:2,ease:'elastic.out(1,.6)'})}});
/* music: soft generated chimes */
let ac,pl=false,tm;const N=[523.25,659.25,783.99,880,783.99,659.25,587.33,659.25];
function note(f,t){const o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.07,t+.05);g.gain.exponentialRampToValueAtTime(.0001,t+2.2);o.connect(g).connect(ac.destination);o.start(t);o.stop(t+2.3)}
let ni=0;function tick(){if(!pl)return;note(N[ni%8],ac.currentTime);if(ni%4==0)note(N[ni%8]/2,ac.currentTime);ni++;tm=setTimeout(tick,700)}
$('#mu').onclick=()=>{ac=ac||new(window.AudioContext||window.webkitAudioContext)();pl=!pl;$('#mu').textContent=pl?'❚❚':'♪';if(pl){ac.resume();tick()}else clearTimeout(tm)};
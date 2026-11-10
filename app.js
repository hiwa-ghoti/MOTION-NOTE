const demos = [
  {id:'bouncing-ball',name:'Bouncing ball',jp:'ぽん、と弾むボール',desc:'重力を感じる、心地よいバウンド。',category:'basic',level:'はじめて',bg:'#f3edb9',tags:['HTML','CSS'],html:'<div class="scene bounce-scene">\n  <div class="ball"></div>\n  <div class="shadow"></div>\n</div>',css:'.ball { width: 48px; height: 48px; border-radius: 50%; background: #85934f; position: absolute; bottom: 25px; animation: bounce 1.2s ease-in infinite; }\n.shadow { position: absolute; bottom: 17px; width: 48px; height: 7px; background: #b9b47b; border-radius: 50%; animation: shadow 1.2s ease-in infinite; }\n@keyframes bounce { 0%, 100% { transform: translateY(-65px) scale(1); } 50% { transform: translateY(0) scale(1.12,.88); } }\n@keyframes shadow { 0%, 100% { transform: scale(.5); opacity: .3; } 50% { transform: scale(1); opacity: .6; } }',steps:['ボールと影を、それぞれ円形の要素で作ります。','@keyframesで上下の移動と着地時のつぶれを指定します。','影の大きさと透明度を同じ周期で変えて、奥行きを出します。'],tone:330},
  {id:'orbit',name:'Little orbit',jp:'小さな軌道',desc:'くるくる巡る、小さな惑星たち。',category:'loop',level:'はじめて',bg:'#e9eddb',tags:['HTML','CSS'],html:'<div class="scene orbit-scene">\n  <div class="orbit-core"></div>\n  <div class="orbit-ring"><i></i></div>\n  <div class="orbit-ring second"><i></i></div>\n</div>',css:'.orbit-core { width: 26px; height: 26px; background: #7f8d50; border-radius: 50%; }\n.orbit-ring { position: absolute; width: 110px; height: 110px; border: 1px solid #b4bd99; border-radius: 50%; animation: orbit 5s linear infinite; }\n.orbit-ring i { display: block; width: 15px; height: 15px; background: #a7b877; border-radius: 50%; position: absolute; top: -7px; left: calc(50% - 7px); }\n.orbit-ring.second { width: 155px; height: 155px; animation-duration: 8s; animation-direction: reverse; border-style: dashed; }\n.orbit-ring.second i { width: 10px; height: 10px; background: #c0a968; top: -5px; left: calc(50% - 5px); }\n@keyframes orbit { to { transform: rotate(360deg); } }',steps:['中央の円と、丸い枠線の軌道を重ねます。','軌道の端に小さな円を配置します。','軌道全体を360度回転させ、速度と方向を変えます。'],tone:440},
  {id:'wave',name:'Soft wave',jp:'やわらかな波',desc:'リズムに合わせて、ゆらり、ふわり。',category:'loop',level:'はじめて',bg:'#e7eddf',tags:['HTML','CSS'],html:'<div class="scene wave-scene">\n  <i></i><i></i><i></i><i></i><i></i>\n</div>',css:'.wave-scene { gap: 11px; }\n.wave-scene i { width: 12px; height: 50px; border-radius: 20px; background: #8a9c73; animation: wave 1.5s ease-in-out infinite; }\n.wave-scene i:nth-child(2) { animation-delay: .15s; background: #9bab80; }\n.wave-scene i:nth-child(3) { animation-delay: .3s; background: #b0ba8e; }\n.wave-scene i:nth-child(4) { animation-delay: .45s; background: #9bab80; }\n.wave-scene i:nth-child(5) { animation-delay: .6s; }\n@keyframes wave { 0%, 100% { transform: scaleY(.45); } 50% { transform: scaleY(1.4); } }',steps:['角を丸めた5本のバーを並べます。','scaleYでバーの高さを変化させます。','animation-delayを少しずつずらして波をつなぎます。'],tone:523},
  {id:'ripple',name:'Ripple touch',jp:'タッチで広がる波紋',desc:'触れたところから、広がる余韻。',category:'interactive',level:'ひと工夫',bg:'#eee9d8',tags:['HTML','CSS','JS'],html:'<div class="scene ripple-scene">\n  <button class="ripple-button" aria-label="波紋を広げる">↗</button>\n</div>',css:'.ripple-button { width: 69px; height: 69px; border-radius: 50%; border: 1px solid #9b9e76; color: #68704a; background: #e3dfbf; font-size: 26px; position: relative; }\n.ripple-button:before, .ripple-button:after { content: ""; position: absolute; inset: -1px; border: 1px solid #a2a77f; border-radius: 50%; pointer-events: none; }\n.ripple-button:before { animation: ripple 2.6s ease-out infinite; }\n.ripple-button:after { animation: ripple 2.6s ease-out 1.3s infinite; }\n.ripple-button.touched { background: #bbc58c; }\n@keyframes ripple { from { transform: scale(1); opacity: .65; } to { transform: scale(2.2); opacity: 0; } }',js:'document.querySelectorAll(".ripple-button").forEach(button => {\n  button.addEventListener("click", () => {\n    button.classList.add("touched");\n    setTimeout(() => button.classList.remove("touched"), 350);\n  });\n});',steps:['円形ボタンの疑似要素で、2つの輪を重ねます。','輪を拡大しながら透明にすると、波紋ができます。','クリック時にクラスを加え、ボタンの色を変えます。'],tone:660},
  {id:'floating',name:'Floating shapes',jp:'ふわふわ図形',desc:'空気の中を、気ままに漂うかたち。',category:'loop',level:'はじめて',bg:'#eee6dd',tags:['HTML','CSS'],html:'<div class="scene floating-scene">\n  <i class="shape-circle"></i>\n  <i class="shape-square"></i>\n  <i class="shape-triangle"></i>\n</div>',css:'.floating-scene i { position: absolute; animation: float 4s ease-in-out infinite; }\n.shape-circle { width: 48px; height: 48px; border-radius: 50%; background: #c8a888; left: 30px; top: 30px; }\n.shape-square { width: 37px; height: 37px; border-radius: 8px; background: #9d9f78; right: 35px; top: 65px; animation-delay: -1.3s !important; }\n.shape-triangle { width: 0; height: 0; border-left: 17px solid transparent; border-right: 17px solid transparent; border-bottom: 30px solid #d5bd8c; top: 12px; right: 43px; animation-delay: -2.6s !important; }\n@keyframes float { 0%, 100% { transform: translateY(8px) rotate(-10deg); } 50% { transform: translateY(-14px) rotate(15deg); } }',steps:['円・四角・三角をCSSで作り、自由に配置します。','上下移動と回転を組み合わせます。','負のanimation-delayで、開始時から動きに差をつけます。'],tone:392},
  {id:'typing',name:'Hello, typing',jp:'ことばが生まれる瞬間',desc:'一文字ずつ、気持ちを届けよう。',category:'basic',level:'はじめて',bg:'#f2edcb',tags:['HTML','CSS'],html:'<div class="scene typing-scene">\n  <span class="typing-text">Hello, world.</span>\n</div>',css:'.typing-text { font: 600 19px/1.5 monospace; color: #747d4b; width: 0; max-width: 13ch; overflow: hidden; white-space: nowrap; border-right: 2px solid #939d67; animation: typing 4s steps(13) infinite, caret .7s step-end infinite; }\n@keyframes typing { 0%, 10% { width: 0; } 55%, 85% { width: 13ch; } 100% { width: 0; } }\n@keyframes caret { 50% { border-color: transparent; } }',steps:['テキストを折り返さずに配置し、はみ出した部分を隠します。','steps(13)で幅を一文字分ずつ広げます。','右の枠線を点滅させて、カーソルを表現します。'],tone:740},
  {id:'sound-bars',name:'Sound garden',jp:'音の小さな庭',desc:'ポン、と鳴らして。音が咲く庭。',category:'interactive',level:'ひと工夫',bg:'#e6ead6',tags:['HTML','CSS','JS'],html:'<div class="scene sound-scene">\n  <button class="note" data-frequency="261.63" aria-label="ドを鳴らす"></button>\n  <button class="note" data-frequency="329.63" aria-label="ミを鳴らす"></button>\n  <button class="note" data-frequency="392" aria-label="ソを鳴らす"></button>\n  <button class="note" data-frequency="523.25" aria-label="高いドを鳴らす"></button>\n</div>',css:'.sound-scene { gap: 10px; align-items: center; }\n.note { width: 25px; height: 48px; background: #a0ae76; border: 0; border-radius: 18px; transition: transform .2s; }\n.note:nth-child(2) { height: 78px; background: #839357; }\n.note:nth-child(3) { height: 60px; background: #b4bf8b; }\n.note:nth-child(4) { height: 38px; background: #c1c89f; }\n.note:hover, .note.playing { transform: scaleY(1.3); background: #657b3e; }',js:'let audioContext;\nasync function playNote(frequency) {\n  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();\n  await audioContext.resume();\n  const oscillator = audioContext.createOscillator();\n  const gain = audioContext.createGain();\n  oscillator.type = "sine";\n  oscillator.frequency.value = frequency;\n  gain.gain.setValueAtTime(0, audioContext.currentTime);\n  gain.gain.linearRampToValueAtTime(.15, audioContext.currentTime + .015);\n  gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + .6);\n  oscillator.connect(gain);\n  gain.connect(audioContext.destination);\n  oscillator.start();\n  oscillator.stop(audioContext.currentTime + .65);\n}\ndocument.querySelectorAll(".note").forEach(button => {\n  button.addEventListener("click", () => {\n    playNote(Number(button.dataset.frequency));\n    button.classList.add("playing");\n    setTimeout(() => button.classList.remove("playing"), 250);\n  });\n});',steps:['高さと色の違う4つのボタンに、音の周波数を設定します。','クリックをきっかけにAudioContextを起動します。','OscillatorNodeで音を作り、GainNodeでゆっくり音量を下げます。'],tone:523},
  {id:'flip',name:'Flip a little',jp:'くるっと、ひとめぐり',desc:'裏返すと見つかる、もうひとつの顔。',category:'interactive',level:'ひと工夫',bg:'#ede6cf',tags:['HTML','CSS','JS'],html:'<div class="scene flip-scene">\n  <button class="flip-card" aria-label="カードを裏返す" aria-pressed="false">\n    <span class="flip-front">✳</span>\n    <span class="flip-back">hello.</span>\n  </button>\n</div>',css:'.flip-scene { perspective: 600px; }\n.flip-card { width: 85px; height: 104px; border: 0; background: transparent; padding: 0; position: relative; transform-style: preserve-3d; transition: transform .7s ease; }\n.flip-card.flipped { transform: rotateY(180deg); }\n.flip-front, .flip-back { position: absolute; inset: 0; display: grid; place-items: center; border-radius: 12px; backface-visibility: hidden; border: 1px solid #a7ac7e; }\n.flip-front { background: #d2d7aa; color: #7d8b50; font-size: 48px; }\n.flip-back { background: #819257; color: #f8f5db; transform: rotateY(180deg); font-size: 18px; }',js:'document.querySelectorAll(".flip-card").forEach(button => {\n  button.addEventListener("click", () => {\n    const flipped = button.classList.toggle("flipped");\n    button.setAttribute("aria-pressed", String(flipped));\n  });\n});',steps:['ボタンの中に表と裏の2つの面を重ねます。','裏面を180度回転させ、backface-visibilityで背面を隠します。','クリックでボタン全体を回転させます。'],tone:587},
  {id:'morph',name:'Organic mood',jp:'気まぐれなかたち',desc:'丸でも四角でもない、自由な輪郭。',category:'loop',level:'はじめて',bg:'#e9ebd8',tags:['HTML','CSS'],html:'<div class="scene morph-scene">\n  <div class="blob"></div>\n</div>',css:'.blob { width: 93px; height: 93px; background: #9ba875; border-radius: 45% 55% 62% 38% / 41% 34% 66% 59%; animation: morph 6s ease-in-out infinite; box-shadow: inset -9px -8px 0 #8b9c64; }\n@keyframes morph { 0%, 100% { border-radius: 45% 55% 62% 38% / 41% 34% 66% 59%; transform: rotate(0deg); } 33% { border-radius: 63% 37% 32% 68% / 58% 62% 38% 42%; } 66% { border-radius: 35% 65% 57% 43% / 68% 40% 60% 32%; transform: rotate(35deg); } }',steps:['ひとつの要素に、縦横で異なる角丸を設定します。','border-radiusを複数のキーフレームで変化させます。','ゆっくりとした回転と内側の影で、やわらかさを加えます。'],tone:294}
];

// 文字ごとの時間差も、コピーしたHTMLとCSSだけで再現できます。
const textDemos = [
  {
    id:'text-wave', name:'Wavy words', jp:'波打つ文字列',
    desc:'一文字ずつ、波に乗ってゆらゆら。', bg:'#f3edb9', tone:494,
    html:'<div class="scene text-wave-scene">\n  <span class="wavy-words" aria-label="ゆらゆら、ことば">\n    <span aria-hidden="true" style="--i:0">ゆ</span><span aria-hidden="true" style="--i:1">ら</span><span aria-hidden="true" style="--i:2">ゆ</span><span aria-hidden="true" style="--i:3">ら</span><span aria-hidden="true" style="--i:4">、</span><span aria-hidden="true" style="--i:5">こ</span><span aria-hidden="true" style="--i:6">と</span><span aria-hidden="true" style="--i:7">ば</span>\n  </span>\n</div>',
    css:'.wavy-words { display: flex; font-size: 21px; font-weight: 700; color: #7b884b; white-space: nowrap; }\n.wavy-words > span { display: inline-block; animation: text-wave 2s ease-in-out infinite; animation-delay: calc(var(--i) * -0.14s); }\n@keyframes text-wave { 0%, 100% { transform: translateY(9px); } 50% { transform: translateY(-12px); } }',
    steps:['文字を一文字ずつspanで囲み、--iに順番を設定します。','translateYで文字を上下に動かします。','animation-delayをずらすと、波が文字列を伝わります。']
  },
  {
    id:'text-shrink', name:'Tiny & back', jp:'小さくなって、元どおり',
    desc:'きゅっと縮んで、ふわっと元のサイズへ。', bg:'#e9eddb', tone:392,
    html:'<div class="scene text-shrink-scene">\n  <span class="shrinking-words">small, then back.</span>\n</div>',
    css:'.shrinking-words { display: inline-block; font: 700 20px/1.5 sans-serif; white-space: nowrap; color: #75854b; transform-origin: center; animation: text-shrink 3s ease-in-out infinite; }\n@keyframes text-shrink { 0%, 15%, 85%, 100% { transform: scale(1); } 45%, 55% { transform: scale(.3); } }',
    steps:['文字列をひとつのspanで囲みます。','scale(1)からscale(.3)に変えて、小さくします。','再びscale(1)へ戻し、両端に静止する時間を設けます。']
  },
  {
    id:'text-hop', name:'Letter parade', jp:'一文字ずつジャンプ',
    desc:'ぽん、ぽん、ぽん。文字たちの行進。', bg:'#eee6dd', tone:587,
    html:'<div class="scene text-hop-scene">\n  <span class="hopping-words" aria-label="HELLO!">\n    <span aria-hidden="true" style="--i:0">H</span><span aria-hidden="true" style="--i:1">E</span><span aria-hidden="true" style="--i:2">L</span><span aria-hidden="true" style="--i:3">L</span><span aria-hidden="true" style="--i:4">O</span><span aria-hidden="true" style="--i:5">!</span>\n  </span>\n</div>',
    css:'.hopping-words { display: flex; gap: 5px; font: 700 29px/1.5 sans-serif; color: #a58a68; }\n.hopping-words > span { display: inline-block; transform-origin: bottom; animation: text-hop 2.4s ease-in-out infinite; animation-delay: calc(var(--i) * .14s); }\n@keyframes text-hop { 0%, 40%, 100% { transform: translateY(0) scale(1); } 10% { transform: translateY(3px) scale(1.1,.85); } 22% { transform: translateY(-24px) scale(.95,1.05); } 34% { transform: translateY(0) scale(1.12,.88); } }',
    steps:['一文字ごとにspanを作り、下端を変形の中心にします。','跳ぶ直前と着地時に縦を縮め、弾力を表現します。','各文字の開始時間をずらして、順番にジャンプさせます。']
  },
  {
    id:'text-breathe', name:'Breathing space', jp:'文字間の深呼吸',
    desc:'広がって、戻って。余白も深呼吸。', bg:'#e7eddf', tone:349,
    html:'<div class="scene text-breathe-scene">\n  <span class="breathing-words">BREATHE</span>\n</div>',
    css:'.breathing-words { display: inline-block; font: 600 18px/1.5 sans-serif; color: #7c9066; white-space: nowrap; animation: text-breathe 4s ease-in-out infinite; }\n@keyframes text-breathe { 0%, 100% { letter-spacing: 1px; transform: translateX(.5px); opacity: .65; } 50% { letter-spacing: 7px; transform: translateX(3.5px); opacity: 1; } }',
    steps:['折り返さない文字列を中央に配置します。','letter-spacingを1pxから7pxに変え、文字の間を広げます。','右端にも入る文字間隔の半分だけ位置を補正し、中心を保ちます。']
  },
  {
    id:'text-reveal', name:'Soft focus', jp:'ぼかしから現れる文字',
    desc:'ぼんやりした言葉が、すっと鮮明に。', bg:'#f2edcb', tone:659,
    html:'<div class="scene text-reveal-scene">\n  <span class="focus-words">ひらめき、ふわり。</span>\n</div>',
    css:'.focus-words { display: inline-block; font: 600 19px/1.5 sans-serif; color: #8b8752; white-space: nowrap; animation: text-focus 4s ease-in-out infinite; }\n@keyframes text-focus { 0%, 100% { filter: blur(9px); opacity: 0; transform: translateY(12px); } 30%, 75% { filter: blur(0); opacity: 1; transform: translateY(0); } }',
    steps:['文字にfilter: blur()を設定し、輪郭をぼかします。','ぼかしと透明度を同時に変え、下から浮かび上がらせます。','鮮明な状態をしばらく保ち、読み取る時間を設けます。']
  },
  {
    id:'text-swing', name:'Word swing', jp:'ことばのブランコ',
    desc:'右へ、左へ。揺れることばのブランコ。', bg:'#ede6cf', tone:440,
    html:'<div class="scene text-swing-scene">\n  <span class="swinging-words">ゆらり、ゆらり。</span>\n</div>',
    css:'.swinging-words { display: inline-block; position: relative; padding: 13px 16px; border: 1px solid #b6bd8d; border-radius: 8px; background: #dce1b7; color: #77844c; font: 600 17px/1.5 sans-serif; white-space: nowrap; transform-origin: 50% -28px; animation: text-swing 3s ease-in-out infinite; }\n.swinging-words::before { content: ""; position: absolute; width: 1px; height: 28px; background: #a9b27c; bottom: 100%; left: 50%; }\n@keyframes text-swing { 0%, 100% { transform: rotate(-12deg); } 50% { transform: rotate(12deg); } }',
    steps:['文字列に枠と背景をつけ、上に糸を伸ばします。','transform-originを要素の上方に置き、支点にします。','左右に回転させると、ブランコのような動きになります。']
  }
];
demos.push(...textDemos.map(d => ({...d, category:'text', level:'はじめて', tags:['HTML','CSS']})));

// タップによる動きと音を、サンプルコードにも一緒に含めます。
const audioSample = demos.find(d => d.id === 'sound-bars').js.split('document.querySelectorAll')[0];
for (const id of ['ripple', 'flip']) {
  const demo = demos.find(d => d.id === id);
  demo.js = audioSample + demo.js.replace('button.addEventListener("click", () => {', `button.addEventListener("click", () => {\n    playNote(${demo.tone});`);
  demo.steps.push('同じクリック処理からWeb Audio APIで短い音を鳴らし、動きと音を結びつけます。');
}
const rippleDemo = demos.find(d => d.id === 'ripple');
rippleDemo.css = rippleDemo.css.replace('.ripple-button:before { animation: ripple 2.6s ease-out infinite; }', '.ripple-button.touched:before { animation: ripple .8s ease-out; }').replace('.ripple-button:after { animation: ripple 2.6s ease-out 1.3s infinite; }', '.ripple-button.touched:after { animation: ripple .6s ease-out .15s; }').replace('pointer-events: none;', 'pointer-events: none; opacity: 0;');
rippleDemo.js = audioSample + `document.querySelectorAll(".ripple-button").forEach(button => {
  let timer;
  button.addEventListener("click", () => {
    playNote(660);
    clearTimeout(timer);
    button.classList.remove("touched");
    void button.offsetWidth;
    button.classList.add("touched");
    timer = setTimeout(() => button.classList.remove("touched"), 850);
  });
});`;
demos.push(
  {id:'tap-pop',name:'Pop a sound',jp:'タップでポンッ',desc:'タップすると、弾むかたちとポップな音。',category:'interactive',level:'ひと工夫',bg:'#f3edb9',tags:['HTML','CSS','JS'],tone:784,
    html:'<div class="scene pop-scene">\n  <button class="tap-sound pop-button" data-frequency="784" aria-label="タップして弾む音を鳴らす">✳</button>\n</div>',
    css:'.pop-button { width: 80px; height: 80px; display: grid; place-items: center; border: 1px solid #a3ad73; background: #d5dfa5; border-radius: 50%; color: #738447; font-size: 43px; position: relative; }\n.pop-button::after { content: ""; position: absolute; inset: -6px; border: 2px dotted #9da869; border-radius: 50%; opacity: 0; pointer-events: none; }\n.pop-button.sounding { animation: tap-pop .65s ease-out; }\n.pop-button.sounding::after { animation: pop-ring .65s ease-out; }\n@keyframes tap-pop { 0% { transform: scale(1); } 20% { transform: scale(.65); } 48% { transform: scale(1.25) rotate(20deg); } 75% { transform: scale(.95); } 100% { transform: scale(1); } }\n@keyframes pop-ring { 0% { transform: scale(.6); opacity: 1; } 100% { transform: scale(1.8); opacity: 0; } }',
    steps:['丸いボタンと、疑似要素の点線の輪を用意します。','タップでクラスを付け、縮小・拡大と輪の拡散を再生します。','同じイベントで音を鳴らし、連続タップでも動きを最初から再生します。']},
  {id:'tap-bell',name:'Little chime',jp:'タップで揺れるベル',desc:'ちりん、と響いて、ゆらゆら揺れる。',category:'interactive',level:'ひと工夫',bg:'#eee6dd',tags:['HTML','CSS','JS'],tone:1046.5,
    html:'<div class="scene bell-scene">\n  <button class="tap-sound bell-button" data-frequency="1046.5" aria-label="ベルをタップして鳴らす"><span class="bell-body"></span></button>\n</div>',
    css:'.bell-button { position: relative; display: grid; place-items: center; width: 100px; height: 110px; border: 0; background: transparent; transform-origin: 50% 15%; }\n.bell-body { width: 57px; height: 58px; border-radius: 30px 30px 8px 8px; background: #c4a56e; border-bottom: 6px solid #a88d5b; position: relative; }\n.bell-body::before { content: ""; position: absolute; top: -9px; left: 22px; width: 13px; height: 13px; border: 3px solid #a88d5b; border-radius: 50%; box-sizing: border-box; }\n.bell-body::after { content: ""; position: absolute; bottom: -15px; left: 22px; width: 13px; height: 10px; background: #a88d5b; border-radius: 0 0 8px 8px; }\n.bell-button.sounding { animation: bell-ring .85s ease-in-out; }\n@keyframes bell-ring { 0%, 100% { transform: rotate(0); } 15% { transform: rotate(24deg); } 35% { transform: rotate(-20deg); } 55% { transform: rotate(13deg); } 75% { transform: rotate(-7deg); } }',
    steps:['角丸と疑似要素で、ベルの本体・持ち手・振り子を作ります。','回転の振れ幅を徐々に減らし、揺れが収まる動きを表現します。','タップで揺れと高い音を一緒に再生します。']}
);
for (const demo of demos.filter(d => ['tap-pop','tap-bell'].includes(d.id))) {
  demo.js = audioSample + `document.querySelectorAll(".tap-sound").forEach(button => {
  let timer;
  button.addEventListener("click", () => {
    playNote(Number(button.dataset.frequency));
    clearTimeout(timer);
    button.classList.remove("sounding");
    void button.offsetWidth;
    button.classList.add("sounding");
    timer = setTimeout(() => button.classList.remove("sounding"), 900);
  });
});`;
}

function setupWanderingImage(arena, onToggle = () => {}) {
  const button = arena.querySelector('.wander-image');
  const status = arena.querySelector('.wander-status');
  let x = 0, y = 0, vx = 96, vy = 68, running = false;
  let frame = 0, lastTime = 0, initialized = false, movementSpeed = 1;
  const bounds = () => ({
    x: Math.max(0, arena.clientWidth - button.offsetWidth),
    y: Math.max(0, arena.clientHeight - button.offsetHeight)
  });
  function draw() { button.style.transform = `translate(${x}px, ${y}px)`; }
  function resize() {
    const limit = bounds();
    x = initialized ? Math.min(Math.max(x, 0), limit.x) : limit.x / 2;
    y = initialized ? Math.min(Math.max(y, 0), limit.y) : limit.y / 2;
    initialized = true;
    draw();
  }
  function tick(time) {
    const dt = lastTime ? Math.min((time - lastTime) / 1000, .04) : 0;
    lastTime = time;
    const limit = bounds();
    x += vx * dt * movementSpeed;
    y += vy * dt * movementSpeed;
    if (x <= 0) { x = 0; vx = Math.abs(vx); }
    if (x >= limit.x) { x = limit.x; vx = -Math.abs(vx); }
    if (y <= 0) { y = 0; vy = Math.abs(vy); }
    if (y >= limit.y) { y = limit.y; vy = -Math.abs(vy); }
    draw();
    if (running) frame = requestAnimationFrame(tick);
  }
  function toggle() {
    running = !running;
    button.setAttribute('aria-pressed', String(running));
    button.setAttribute('aria-label', running ? '画像をタップして止める' : '画像をタップして動かす');
    status.textContent = running ? 'もう一度タップでストップ' : 'タップしてスタート';
    cancelAnimationFrame(frame);
    lastTime = 0;
    if (running) frame = requestAnimationFrame(tick);
    onToggle(running);
  }
  button.style.left = '0';
  button.style.top = '0';
  button.addEventListener('click', toggle);
  const observer = new ResizeObserver(resize);
  observer.observe(arena);
  resize();
  const cleanup = () => {
    running = false;
    cancelAnimationFrame(frame);
    observer.disconnect();
    button.removeEventListener('click', toggle);
  };
  cleanup.setSpeed = value => { movementSpeed = value; };
  cleanup.setPaused = value => { if (running !== !value) toggle(); };
  return cleanup;
}
demos.push({
  id:'wandering-image', name:'Little wanderer', jp:'画像のおさんぽ',
  desc:'タップでおさんぽ。端まで行ったら、くるっと折り返し。',
  category:'interactive', level:'ひと工夫', bg:'#eee9d8', tags:['HTML','CSS','JS'], tone:523,
  hint:'画像をタップでスタート・ストップ。端に当たると跳ね返ります。',
  html:'<div class="scene wander-scene">\n  <button class="wander-image" aria-label="画像をタップして動かす" aria-pressed="false">\n    <img src="assets/wandering-image.jpg" alt="オレンジ色のキャラクター" width="1280" height="1280" draggable="false">\n  </button>\n  <span class="wander-status" role="status">タップしてスタート</span>\n</div>',
  css:'.wander-scene { display: block; position: relative; width: min(680px, calc(100vw - 32px)); height: clamp(200px, 45vh, 360px); overflow: hidden; }\n.wander-image { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 88px; height: 88px; padding: 0; border: 2px solid #fff9df; border-radius: 18px; background: #000; box-shadow: 0 5px 14px #30332a20; cursor: pointer; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }\n.wander-image img { display: block; width: 100%; height: 100%; object-fit: contain; border-radius: 16px; user-select: none; pointer-events: none; }\n.wander-image:focus-visible { outline: 3px solid #728245; outline-offset: -4px; }\n.wander-status { position: absolute; bottom: 5px; right: 5px; padding: 5px 8px; border-radius: 12px; background: #fbfaf0cc; color: #747d61; font: 10px/1.5 sans-serif; pointer-events: none; }',
  js:audioSample + setupWanderingImage.toString() + '\n\nconst arena = document.querySelector(".wander-scene");\nconst cleanup = setupWanderingImage(arena, running => playNote(running ? 523 : 392));\n// cleanup.setSpeed(2) で2倍速、cleanup.setPaused(true) で一時停止できます。\n// 要素を取り除くときは cleanup() を呼び、アニメーションと監視を終了します。',
  steps:['assetsフォルダを作り、画像をwandering-image.jpgという名前で保存します。別の画像でも差し替えられます。','画像をボタンで囲み、タップで移動の開始・停止を切り替えます。','requestAnimationFrameで経過時間に合わせて座標を更新し、端で進行方向を反転させます。','ResizeObserverで画面幅の変更に対応します。タップ時には短い音も鳴ります。']
});

function setupColorTap(root, sound) {
  const button = root.querySelector('.color-tap');
  const label = root.querySelector('.color-value');
  const colors = ['#9BA875', '#DBAD73', '#B29BC1', '#79A9A2', '#D68F91'];
  let index = 0;
  function tap() {
    index = (index + 1) % colors.length;
    button.style.backgroundColor = colors[index];
    label.textContent = colors[index];
    sound([392, 440, 523, 587, 659][index]);
  }
  button.addEventListener('click', tap);
  return () => button.removeEventListener('click', tap);
}
function setupPlayfulBurst(root, sound) {
  const button = root.querySelector('.playful-button');
  let timer;
  function tap() {
    clearTimeout(timer);
    button.classList.remove('bursting');
    void button.offsetWidth;
    button.classList.add('bursting');
    sound(Number(button.dataset.tone));
    timer = setTimeout(() => button.classList.remove('bursting'), 1000);
  }
  button.addEventListener('click', tap);
  return () => { clearTimeout(timer); button.removeEventListener('click', tap); };
}
function setupDayNight(root, sound) {
  const button = root.querySelector('.day-night');
  const label = root.querySelector('.day-night-label');
  function tap() {
    const night = button.classList.toggle('is-night');
    button.setAttribute('aria-pressed', String(night));
    button.setAttribute('aria-label', night ? '昼に切り替える' : '夜に切り替える');
    label.textContent = night ? 'おやすみ、またあした。' : 'おはよう、新しい一日。';
    sound(night ? 294 : 587);
  }
  button.addEventListener('click', tap);
  return () => button.removeEventListener('click', tap);
}
function setupEscapingImage(root, sound) {
  const arena = root.querySelector('.escape-scene');
  const button = arena.querySelector('.escape-image');
  const label = arena.querySelector('.escape-count');
  let x = 0, y = 0, count = 0, initialized = false;
  const bounds = () => ({x: Math.max(0, arena.clientWidth - button.offsetWidth), y: Math.max(0, arena.clientHeight - button.offsetHeight)});
  function draw() { button.style.transform = `translate(${x}px, ${y}px)`; }
  function resize() {
    const limit = bounds();
    x = initialized ? Math.min(x, limit.x) : limit.x / 2;
    y = initialized ? Math.min(y, limit.y) : limit.y / 2;
    initialized = true;
    draw();
  }
  function tap() {
    const limit = bounds();
    let nx = Math.random() * limit.x, ny = Math.random() * limit.y;
    // 近すぎる位置が選ばれたら、反対側へ移動します。
    if (Math.hypot(nx - x, ny - y) < 60) {
      nx = x < limit.x / 2 ? limit.x : 0;
      ny = y < limit.y / 2 ? limit.y : 0;
    }
    x = nx; y = ny;
    draw();
    label.textContent = `${++count} 回つかまえた！`;
    sound(440 + (count % 5) * 65);
  }
  button.style.left = '0'; button.style.top = '0';
  button.addEventListener('click', tap);
  const observer = new ResizeObserver(resize);
  observer.observe(arena);
  resize();
  return () => { observer.disconnect(); button.removeEventListener('click', tap); };
}
const playfulDemos = [
  {
    id:'color-tap',name:'Color picnic',jp:'タップで色あそび',desc:'タップするたび、新しい色と新しい音。',bg:'#eee6dd',setup:setupColorTap,
    html:'<div class="scene color-tap-scene">\n  <button class="color-tap" aria-label="次の色に変える">✳</button>\n  <span class="color-value" role="status">#9BA875</span>\n</div>',
    css:'.color-tap-scene { flex-direction: column; gap: 15px; }\n.color-tap { display: grid; place-items: center; width: 84px; height: 84px; border: 0; border-radius: 24px; background: #9BA875; color: #fff8e8; font-size: 43px; transition: background-color .5s ease, border-radius .5s ease; }\n.color-tap:active { border-radius: 50%; }\n.color-value { font: 11px/1.5 monospace; color: #89856e; letter-spacing: 2px; }',
    steps:['5色のカラーコードを配列に用意します。','タップするたびに次の色へ進み、背景色と表示するコードを更新します。','CSSのtransitionで色をなめらかに変化させ、色ごとに異なる音を鳴らします。']
  },
  {
    id:'jelly-tap',name:'Jelly joy',jp:'ぷるぷるゼリー',desc:'つつくと、ぷるん。やわらかく揺れるゼリー。',bg:'#e7eddf',setup:setupPlayfulBurst,
    html:'<div class="scene jelly-scene">\n  <button class="playful-button jelly-button" data-tone="349" aria-label="ゼリーをつついて揺らす"><span aria-hidden="true">◡</span></button>\n</div>',
    css:'.jelly-button { width: 100px; height: 84px; border: 0; border-radius: 45% 45% 28% 28%; background: #a7bb83; color: #5c7742; box-shadow: inset -9px -9px 0 #91a76f; font-size: 37px; transform-origin: center bottom; position: relative; }\n.jelly-button::before { content: ""; position: absolute; top: 15px; left: 21px; width: 20px; height: 8px; border-radius: 50%; background: #dbe6c4; transform: rotate(-25deg); }\n.jelly-button.bursting { animation: jelly-wobble .9s ease-out; }\n@keyframes jelly-wobble { 0%, 100% { transform: scale(1); } 15% { transform: scale(1.25,.72) skewX(-8deg); } 32% { transform: scale(.82,1.2) skewX(8deg); } 50% { transform: scale(1.12,.9) skewX(-5deg); } 70% { transform: scale(.96,1.06) skewX(3deg); } }',
    steps:['角丸と内側の影でゼリーの形を作ります。','scaleとskewXを交互に変化させ、揺れ幅を少しずつ小さくします。','タップでアニメーションを最初から再生し、低めの音を添えます。']
  },
  {
    id:'confetti-tap',name:'Tiny celebration',jp:'タップで紙吹雪',desc:'小さなお祝いを、ぱっと咲かせよう。',bg:'#f2edcb',setup:setupPlayfulBurst,
    html:'<div class="scene confetti-scene">\n  <button class="playful-button confetti-button" data-tone="784" aria-label="紙吹雪を飛ばす">\n    <span aria-hidden="true">✦</span>\n'+Array.from({length:14},(_,i)=>`    <i aria-hidden="true" style="--x:${Math.round(Math.cos(i/14*Math.PI*2)*83)}px;--y:${Math.round(Math.sin(i/14*Math.PI*2)*62)}px;--r:${i*53}deg;--c:${['#9cab6d','#d6a270','#ba9eb7','#80aaa1'][i%4]}"></i>`).join('\n')+'\n  </button>\n</div>',
    css:'.confetti-button { position: relative; width: 70px; height: 70px; border: 1px solid #b1b988; border-radius: 22px; background: #dce2b0; color: #78874a; font-size: 32px; overflow: visible; }\n.confetti-button i { position: absolute; left: calc(50% - 3px); top: calc(50% - 5px); width: 6px; height: 10px; border-radius: 2px; background: var(--c); opacity: 0; pointer-events: none; }\n.confetti-button.bursting > span { display: inline-block; animation: confetti-pop .4s ease-out; }\n.confetti-button.bursting i { animation: confetti-fly .9s ease-out both; }\n@keyframes confetti-fly { 0% { transform: translate(0,0) rotate(0); opacity: 0; } 12% { opacity: 1; } 70% { opacity: 1; } 100% { transform: translate(var(--x),var(--y)) rotate(var(--r)); opacity: 0; } }\n@keyframes confetti-pop { 40% { transform: scale(.7) rotate(-30deg); } 75% { transform: scale(1.2); } }',
    steps:['ボタンの中央に14枚の小さな紙を重ねます。','CSS変数にそれぞれの飛ぶ位置・回転角度・色を設定します。','タップすると外へ飛ばし、透明にして消します。紙は毎回再利用します。']
  },
  {
    id:'escape-image',name:'Catch me!',jp:'タップで逃げる画像',desc:'つかまえた？ 次の瞬間、ぴょんとお引っ越し。',bg:'#eee9d8',setup:setupEscapingImage,
    hint:'画像をタップすると別の場所へジャンプ。何回つかまえられる？',
    html:'<div class="scene escape-scene">\n  <button class="escape-image" aria-label="画像をつかまえる"><img src="assets/wandering-image.jpg" width="1280" height="1280" alt="オレンジ色のキャラクター" draggable="false"></button>\n  <span class="escape-count" role="status">タップでつかまえて！</span>\n</div>',
    css:'.escape-scene { position: relative; display: block; width: min(680px, calc(100vw - 32px)); height: clamp(200px,45vh,360px); overflow: hidden; }\n.escape-image { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 70px; height: 70px; padding: 0; background: #000; border: 2px solid #fff8de; border-radius: 17px; transition: transform .3s cubic-bezier(.2,.8,.2,1); touch-action: manipulation; }\n.escape-image img { display: block; width: 100%; height: 100%; object-fit: contain; border-radius: 15px; pointer-events: none; }\n.escape-image:focus-visible { outline: 3px solid #728245; outline-offset: -4px; }\n.escape-count { position: absolute; right: 5px; bottom: 5px; font: 10px/1.5 sans-serif; color: #788167; background: #fbfaf0cc; padding: 5px 8px; border-radius: 12px; pointer-events: none; }',
    steps:['移動できるエリアの中に、画像をボタンとして配置します。','タップでランダムな座標へ移動し、つかまえた回数を表示します。','画像の大きさを移動範囲から引き、画面外に出ないようにします。']
  },
  {
    id:'day-night',name:'Hello, goodnight',jp:'昼と夜のスイッチ',desc:'太陽をタップしたら、月と星の時間。',bg:'#e9eddb',setup:setupDayNight,
    html:'<div class="scene day-night-scene">\n  <button class="day-night" aria-label="夜に切り替える" aria-pressed="false"><span class="sky-stars" aria-hidden="true">✧ · ✦</span><span class="sky-sun" aria-hidden="true"></span><span class="sky-hill" aria-hidden="true"></span></button>\n  <span class="day-night-label" role="status">おはよう、新しい一日。</span>\n</div>',
    css:'.day-night-scene { flex-direction: column; gap: 13px; }\n.day-night { position: relative; width: 170px; height: 92px; border: 1px solid #bdc6a2; border-radius: 50px; overflow: hidden; background: #e9d99d; transition: background .7s ease; }\n.sky-sun { position: absolute; width: 36px; height: 36px; top: 15px; left: 24px; border-radius: 50%; background: #f8f0bb; transition: transform .7s ease, box-shadow .7s ease; }\n.sky-hill { position: absolute; width: 200px; height: 80px; left: -15px; bottom: -50px; border-radius: 50%; background: #a6b77b; transition: background .7s ease; }\n.sky-stars { position: absolute; color: #f5ebbb; right: 20px; top: 15px; font-size: 19px; opacity: 0; transform: translateY(7px); transition: opacity .7s ease, transform .7s ease; }\n.day-night.is-night { background: #46516a; }\n.day-night.is-night .sky-sun { transform: translateX(73px); box-shadow: inset -11px -4px #46516a; }\n.day-night.is-night .sky-stars { right: auto; left: 19px; opacity: 1; transform: translateY(0); }\n.day-night.is-night .sky-hill { background: #65765a; }\n.day-night-label { font: 10px/1.5 sans-serif; color: #7d8669; }',
    steps:['空・太陽・丘・星をボタンの中に重ねます。','タップでis-nightクラスを切り替え、背景と各パーツを変化させます。','太陽に内側の影を重ねて三日月に見せ、星を浮かび上がらせます。']
  }
];
demos.push(...playfulDemos.map(d => ({
  ...d, category:'interactive', level:'ひと工夫', tags:['HTML','CSS','JS'],
  js:audioSample + d.setup.toString() + `\n\nconst cleanup = ${d.setup.name}(document, playNote);\n// 画面を閉じるときは cleanup() を呼びます。`
})));

function setupSplitBall(root, sound) {
  const button = root.querySelector('.split-button');
  const status = root.querySelector('.split-status');
  let timer;
  function split() {
    clearTimeout(timer);
    button.classList.remove('splitting');
    void button.offsetWidth;
    button.classList.add('splitting');
    status.textContent = 'ばらばら、そしてひとつに。';
    sound(330);
    timer = setTimeout(() => {
      button.classList.remove('splitting');
      status.textContent = 'タップして分裂';
    }, 2250);
  }
  button.addEventListener('click', split);
  return () => { clearTimeout(timer); button.removeEventListener('click', split); };
}
function setupMagnetTrail(root, sound) {
  const arena = root.querySelector('.magnet-scene');
  const dots = [...arena.querySelectorAll('.magnet-dot')];
  const cursor = arena.querySelector('.magnet-cursor');
  const points = dots.map(() => ({x: 0, y: 0}));
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let target = {x: 0, y: 0}, frame = 0, previousTime = 0;
  let pointer = null;
  function draw(element, x, y, size) {
    element.style.left = '0'; element.style.top = '0';
    element.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
  }
  function tick(time) {
    frame = 0;
    const dt = previousTime ? Math.min(time - previousTime, 40) : 16.67;
    previousTime = time;
    const amount = reducedMotion.matches ? 1 : 1 - Math.pow(.77, dt / 16.67);
    let lead = target, distance = 0;
    draw(cursor, target.x, target.y, 30);
    points.forEach((point, index) => {
      point.x += (lead.x - point.x) * amount;
      point.y += (lead.y - point.y) * amount;
      distance = Math.max(distance, Math.abs(lead.x - point.x), Math.abs(lead.y - point.y));
      draw(dots[index], point.x, point.y, 18);
      lead = point;
    });
    if (distance > .15) frame = requestAnimationFrame(tick);
    else previousTime = 0;
  }
  function startFrame() { if (!frame) frame = requestAnimationFrame(tick); }
  function clampTarget() {
    target.x = Math.min(Math.max(target.x, 16), Math.max(16, arena.clientWidth - 16));
    target.y = Math.min(Math.max(target.y, 16), Math.max(16, arena.clientHeight - 16));
  }
  function move(event) {
    const rect = arena.getBoundingClientRect();
    target = {x: (event.clientX - rect.left) * arena.clientWidth / rect.width, y: (event.clientY - rect.top) * arena.clientHeight / rect.height};
    clampTarget(); startFrame();
  }
  function down(event) {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    pointer = event.pointerId;
    arena.setPointerCapture(pointer);
    arena.focus({preventScroll: true});
    move(event); sound(523);
  }
  function up(event) {
    if (event.pointerId !== pointer) return;
    if (arena.hasPointerCapture(pointer)) arena.releasePointerCapture(pointer);
    pointer = null;
  }
  function leave() {
    if (pointer === null) { target = {x: arena.clientWidth / 2, y: arena.clientHeight / 2}; startFrame(); }
  }
  function key(event) {
    const delta = {ArrowLeft: [-24, 0], ArrowRight: [24, 0], ArrowUp: [0, -24], ArrowDown: [0, 24]}[event.key];
    if (!delta) return;
    event.preventDefault();
    target.x += delta[0]; target.y += delta[1];
    clampTarget(); startFrame();
  }
  function resize() {
    clampTarget();
    points.forEach(point => {
      point.x = Math.min(Math.max(point.x, 16), Math.max(16, arena.clientWidth - 16));
      point.y = Math.min(Math.max(point.y, 16), Math.max(16, arena.clientHeight - 16));
    });
    startFrame();
  }
  target = {x: arena.clientWidth / 2, y: arena.clientHeight / 2};
  points.forEach((point, i) => { point.x = target.x - i * 4; point.y = target.y; });
  const events = {pointermove: move, pointerdown: down, pointerup: up, pointercancel: up, pointerleave: leave, keydown: key};
  Object.entries(events).forEach(([name, handler]) => arena.addEventListener(name, handler));
  const observer = new ResizeObserver(resize);
  observer.observe(arena); startFrame();
  return () => {
    cancelAnimationFrame(frame); observer.disconnect();
    if (pointer !== null && arena.hasPointerCapture(pointer)) arena.releasePointerCapture(pointer);
    Object.entries(events).forEach(([name, handler]) => arena.removeEventListener(name, handler));
  };
}
function setupWaterRipples(root, sound) {
  const water = root.querySelector('.water-scene');
  const ripples = new Map();
  function remove(ripple) { clearTimeout(ripples.get(ripple)); ripples.delete(ripple); ripple.remove(); }
  function tap(event) {
    const rect = water.getBoundingClientRect();
    const x = event.detail === 0 ? water.clientWidth / 2 : (event.clientX - rect.left) * water.clientWidth / rect.width;
    const y = event.detail === 0 ? water.clientHeight / 2 : (event.clientY - rect.top) * water.clientHeight / rect.height;
    // 連続タップでも増えすぎないよう、古い波紋から取り除きます。
    if (ripples.size >= 12) remove(ripples.keys().next().value);
    const ripple = document.createElement('span');
    ripple.className = 'water-ripple';
    ripple.setAttribute('aria-hidden', 'true');
    ripple.style.left = `${Math.max(0, Math.min(x, water.clientWidth))}px`;
    ripple.style.top = `${Math.max(0, Math.min(y, water.clientHeight))}px`;
    for (let i = 0; i < 3; i++) {
      const ring = document.createElement('i');
      ring.style.animationDelay = `${i * .12}s`;
      ripple.append(ring);
    }
    water.append(ripple);
    ripples.set(ripple, setTimeout(() => remove(ripple), 1700));
    sound(440 + Math.max(0, 1 - y / water.clientHeight) * 220);
  }
  water.addEventListener('click', tap);
  return () => { water.removeEventListener('click', tap); [...ripples.keys()].forEach(remove); };
}
function setupFlower(root, sound) {
  const flower = root.querySelector('.flower-button');
  const label = root.querySelector('.flower-status');
  function tap() {
    const open = flower.classList.toggle('bloomed');
    flower.setAttribute('aria-pressed', String(open));
    flower.setAttribute('aria-label', open ? '花をつぼみに戻す' : '花を咲かせる');
    label.textContent = open ? 'ぱっと、ひと花。' : 'タップで花を咲かせよう';
    sound(open ? 659 : 392);
  }
  flower.addEventListener('click', tap);
  return () => flower.removeEventListener('click', tap);
}
function setupDice(root, sound) {
  const button = root.querySelector('.dice-button');
  const face = root.querySelector('.dice-face');
  const label = root.querySelector('.dice-status');
  let timer, rolling = false;
  function roll() {
    if (rolling) return;
    rolling = true;
    button.classList.add('dice-rolling');
    button.setAttribute('aria-busy', 'true');
    label.textContent = 'ころころ…';
    sound(440);
    timer = setTimeout(() => {
      const value = Math.floor(Math.random() * 6) + 1;
      face.dataset.face = String(value);
      label.textContent = `${value} が出ました！`;
      button.setAttribute('aria-label', `サイコロを振る。現在の目は${value}`);
      button.classList.remove('dice-rolling');
      button.setAttribute('aria-busy', 'false');
      rolling = false;
      sound(330 + value * 55);
    }, 700);
  }
  button.addEventListener('click', roll);
  return () => { clearTimeout(timer); button.removeEventListener('click', roll); };
}
const morePlayfulDemos = [
  {
    id:'split-ball', name:'Together again', jp:'分裂するボール', desc:'ひとつがたくさんに。やがて、またひとつに。', bg:'#e9eddb', setup:setupSplitBall,
    html:'<div class="scene split-scene">\n  <button class="split-button" aria-label="ボールを分裂させる"><span class="split-core" aria-hidden="true"></span>\n'+Array.from({length:8},(_,i)=>`    <i class="split-piece" aria-hidden="true" style="--x:${Math.round(Math.cos(i*Math.PI/4)*66)}px;--y:${Math.round(Math.sin(i*Math.PI/4)*44)}px;--c:${['#9ba875','#bdc78f','#7d9466','#cbb47e'][i%4]}"></i>`).join('\n')+'\n  </button>\n  <span class="split-status" role="status">タップして分裂</span>\n</div>',
    css:'.split-scene { flex-direction: column; }\n.split-button { position: relative; width: 190px; height: 115px; border: 0; padding: 0; background: transparent; }\n.split-core { position: absolute; left: calc(50% - 35px); top: calc(50% - 35px); width: 70px; height: 70px; border-radius: 50%; background: #92a169; box-shadow: inset -7px -7px #81945a; }\n.split-piece { position: absolute; left: calc(50% - 10px); top: calc(50% - 10px); width: 20px; height: 20px; border-radius: 50%; background: var(--c); opacity: 0; }\n.splitting .split-core { animation: split-core 2.2s ease-in-out both; }\n.splitting .split-piece { animation: split-piece 2.2s ease-in-out both; }\n.split-status { font: 10px/1.5 sans-serif; color: #7b8766; }\n@keyframes split-core { 0%, 100% { transform: scale(1); opacity: 1; } 18%, 78% { transform: scale(0); opacity: 0; } }\n@keyframes split-piece { 0%, 100% { opacity: 0; transform: translate(0,0) scale(.1); } 20% { opacity: 1; } 38%, 60% { opacity: 1; transform: translate(var(--x),var(--y)) scale(1); } 80% { opacity: 1; transform: translate(0,0) scale(.5); } }',
    steps:['大きな丸の中心に、8つの小さな丸を重ねます。','大きな丸を縮め、CSS変数で指定した方向に小さな丸を広げます。','少し間を置いて小さな丸を中心へ戻し、大きな丸を元のサイズに戻します。']
  },
  {
    id:'magnet-trail', name:'Follow my lead', jp:'磁石みたいな動き', desc:'マウスや指のあとを、図形がするすると追いかける。', bg:'#eee6dd', setup:setupMagnetTrail,
    hint:'マウスを動かす・指でなぞると追いかけます。矢印キーでも遊べます。',
    html:'<div class="scene magnet-scene" role="group" tabindex="0" aria-label="磁石のエリア。マウスや指でなぞるか、矢印キーで動かせます">\n  <span class="magnet-cursor" aria-hidden="true"></span>\n'+Array.from({length:6},(_,i)=>`  <i class="magnet-dot" aria-hidden="true" style="--i:${i};--c:${['#82965d','#9aab71','#b3bd89','#c5aa7d','#d0b78d','#dcc99f'][i]}"></i>`).join('\n')+'\n  <span class="magnet-caption" aria-hidden="true">なぞって、つれていこう。</span>\n</div>',
    css:'.magnet-scene { position: relative; display: block; width: min(680px,calc(100vw - 32px)); height: clamp(200px,45vh,360px); overflow: hidden; touch-action: none; cursor: crosshair; border-radius: 12px; background-image: radial-gradient(#b8ae922e 1px, transparent 1px); background-size: 20px 20px; }\n.magnet-cursor { position: absolute; width: 30px; height: 30px; left: calc(50% - 15px); top: calc(50% - 15px); border: 1px dashed #8b9970; border-radius: 50%; pointer-events: none; }\n.magnet-dot { position: absolute; width: 18px; height: 18px; left: calc(50% - 9px - var(--i)*8px); top: calc(50% - 9px); border-radius: 6px; background: var(--c); pointer-events: none; }\n.magnet-dot:nth-of-type(even) { border-radius: 50%; }\n.magnet-caption { position: absolute; right: 10px; bottom: 10px; color: #8d8972; font: 10px/1.5 sans-serif; pointer-events: none; }',
    steps:['Pointer Eventsでマウスと指の座標を同じ方法で取得します。','各図形をひとつ前の図形に少しずつ近づけると、あとを追う動きになります。','指でなぞる間は操作エリアだけスクロールを抑えます。矢印キーでも座標を動かせます。','画面移動時にはフレームとイベントを解除します。動きを減らす設定では遅れずに追従します。']
  },
  {
    id:'water-ripples', name:'A drop of calm', jp:'水面の波紋', desc:'触れた場所から、静かな波紋が重なって広がる。', bg:'#e0eae3', setup:setupWaterRipples,
    hint:'水面の好きなところをタップ。波紋をいくつも重ねてみよう。',
    html:'<button class="scene water-scene" aria-label="水面をタップして波紋を広げる"><span class="water-caption" aria-hidden="true">tap anywhere, make a little ripple.</span></button>',
    css:'.water-scene { position: relative; display: block; width: min(680px,calc(100vw - 32px)); height: clamp(200px,45vh,360px); border: 0; padding: 0; overflow: hidden; background: radial-gradient(ellipse at 35% 25%,#edf5e8,#c9dfd4 75%); border-radius: 14px; cursor: crosshair; touch-action: manipulation; }\n.water-scene::before { content: ""; position: absolute; width: 70px; height: 32px; left: calc(50% - 35px); top: calc(50% - 16px); border: 1px solid #8fae9970; border-radius: 50%; box-shadow: 0 0 0 12px #d7e7dc,0 0 0 13px #a9c4b050; pointer-events: none; }\n.water-ripple { position: absolute; width: 0; height: 0; pointer-events: none; }\n.water-ripple i { position: absolute; width: 28px; height: 14px; left: -14px; top: -7px; border: 1px solid #789e88; border-radius: 50%; opacity: 0; animation: water-expand 1.4s ease-out both; }\n.water-caption { position: absolute; bottom: 12px; left: 12px; right: 12px; text-align: center; color: #7c9b85; font: 10px/1.5 sans-serif; pointer-events: none; }\n@keyframes water-expand { 0% { transform: scale(.2); opacity: .9; } 30% { opacity: .6; } 100% { transform: scale(9); opacity: 0; } }',
    steps:['タップした座標を水面エリア内の座標に変換します。','その場所に楕円の輪を3つ作り、少しずつ時間をずらして拡大します。','透明になった輪は削除し、連続タップしても増えすぎないよう上限を設けます。','キーボードのEnter・Spaceでは、水面の中心に波紋を作ります。']
  },
  {
    id:'flower-bloom', name:'Bloom a little', jp:'タップで花が咲く', desc:'小さなつぼみから、ぱっとひらく花びら。', bg:'#f0e7de', setup:setupFlower,
    html:'<div class="scene flower-scene">\n  <button class="flower-button" aria-label="花を咲かせる" aria-pressed="false"><span class="flower-stem" aria-hidden="true"></span>\n'+Array.from({length:6},(_,i)=>`    <i class="flower-petal" aria-hidden="true" style="--turn:${i*60}deg"></i>`).join('\n')+'\n    <span class="flower-center" aria-hidden="true"></span>\n  </button>\n  <span class="flower-status" role="status">タップで花を咲かせよう</span>\n</div>',
    css:'.flower-scene { flex-direction: column; gap: 4px; }\n.flower-button { position: relative; width: 130px; height: 120px; background: transparent; border: 0; padding: 0; }\n.flower-stem { position: absolute; width: 4px; height: 60px; background: #92a475; top: 50px; left: 63px; border-radius: 4px; }\n.flower-stem::after { content: ""; position: absolute; width: 24px; height: 12px; top: 28px; right: 0; background: #a8b683; border-radius: 0 100% 0 100%; }\n.flower-petal { position: absolute; width: 30px; height: 45px; top: 10px; left: 50px; background: #d4a697; border-radius: 60% 60% 45% 45%; transform-origin: 50% 100%; transform: rotate(var(--turn)) scale(.15); opacity: .3; transition: transform .7s cubic-bezier(.3,1.5,.5,1),opacity .5s; }\n.bloomed .flower-petal { transform: rotate(var(--turn)) scale(1); opacity: 1; }\n.flower-center { position: absolute; width: 23px; height: 23px; top: 43px; left: 53.5px; border-radius: 50%; background: #ddc480; box-shadow: inset -3px -3px #c8ad65; }\n.flower-status { font: 10px/1.5 sans-serif; color: #9a8c76; }',
    steps:['6枚の花びらを、角度を60度ずつ変えて重ねます。','つぼみの間は花びらを縮めておき、タップで一斉に広げます。','もう一度タップするとつぼみに戻ります。茎と葉もCSSで作れます。']
  },
  {
    id:'rolling-dice', name:'Roll a little', jp:'ころころサイコロ', desc:'ころころ、ぽん。今日はどんな目が出る？', bg:'#eeeccf', setup:setupDice,
    html:'<div class="scene dice-scene">\n  <button class="dice-button" aria-label="サイコロを振る。現在の目は1" aria-busy="false"><span class="dice-face" data-face="1" aria-hidden="true">\n'+Array.from({length:7},()=> '    <i></i>').join('\n')+'\n  </span></button>\n  <span class="dice-status" role="status">タップでころころ</span>\n</div>',
    css:'.dice-scene { flex-direction: column; gap: 17px; }\n.dice-button { width: 80px; height: 80px; border: 1px solid #c4c6a3; border-radius: 18px; padding: 16px; background: #fbf7df; box-shadow: 4px 5px 0 #d7d6ae; }\n.dice-face { display: grid; width: 100%; height: 100%; grid-template: repeat(3,1fr) / repeat(3,1fr); gap: 5px; }\n.dice-face i { width: 10px; height: 10px; border-radius: 50%; background: #8a9862; opacity: 0; place-self: center; }\n.dice-face i:nth-child(1) { grid-area: 1/1; }\n.dice-face i:nth-child(2) { grid-area: 1/3; }\n.dice-face i:nth-child(3) { grid-area: 2/1; }\n.dice-face i:nth-child(4) { grid-area: 2/2; }\n.dice-face i:nth-child(5) { grid-area: 2/3; }\n.dice-face i:nth-child(6) { grid-area: 3/1; }\n.dice-face i:nth-child(7) { grid-area: 3/3; }\n'+[ [4],[1,7],[1,4,7],[1,2,6,7],[1,2,4,6,7],[1,2,3,5,6,7] ].map((pips,i)=>pips.map(p=>`.dice-face[data-face="${i+1}"] i:nth-child(${p})`).join(',\n')+' { opacity: 1; }').join('\n')+'\n.dice-rolling { animation: dice-roll .7s ease-out; }\n.dice-status { font: 10px/1.5 sans-serif; color: #8b8e6c; }\n@keyframes dice-roll { 20% { transform: translateY(-14px) rotate(-35deg); } 45% { transform: translateY(-22px) rotate(100deg); } 75% { transform: translateY(0) rotate(195deg); } 100% { transform: rotate(360deg); } }',
    steps:['3×3のグリッドに点を配置し、data-face属性で1〜6の目を表示します。','タップで回転・ジャンプを再生し、Math.randomで出目を決めます。','転がっている間の連打を抑え、止まったら結果と音を出します。']
  }
];
demos.push(...morePlayfulDemos.map(d => ({
  ...d, category:'interactive', level:'ひと工夫', tags:['HTML','CSS','JS'],
  js:audioSample + d.setup.toString() + `\n\nconst cleanup = ${d.setup.name}(document, playNote);\n// 画面を閉じるときは cleanup() を呼びます。`
})));
const dayNightDemo = demos.find(d => d.id === 'day-night');
dayNightDemo.css += '\n.day-night-scene { background: #e9eddb; border-radius: 16px; transition: background .7s ease; }\n.day-night-scene:has(.is-night) { background: #303a4d; }\n.day-night-scene:has(.is-night) .day-night-label { color: #dce4be; }';

const app = document.querySelector('#app');
const style = document.createElement('style');
style.textContent = demos.map(d => d.css).join('\n');
document.head.append(style);
let audioContext, currentFilter = 'all', currentTab = 'html', currentDemo, paused = false, speed = 1, toastTimeout;
let cleanupDemo = () => {};
const escapeHTML = text => text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const tags = d => d.tags.map(t => `<span class="tag">${t}</span>`).join('');
function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => el.classList.remove('show'), 2300); }
async function playTone(frequency) {
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    await audioContext.resume();
    const oscillator = audioContext.createOscillator(), gain = audioContext.createGain(), now = audioContext.currentTime;
    oscillator.type = 'sine'; oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0, now); gain.gain.linearRampToValueAtTime(.14, now + .015); gain.gain.exponentialRampToValueAtTime(.001, now + .6);
    oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(now); oscillator.stop(now + .65);
  } catch { toast('このブラウザでは音を再生できません。'); }
}
function home() {
  currentDemo = null;
  app.innerHTML = `<section class="hero"><div><div class="eyebrow"><span class="tiny-dot"></span> A LITTLE COLLECTION OF MOTION</div><h1>眺めて、触れて、<br><span>動きのアイデア</span><span class="hero-tail">を見つけよう。</span></h1><p>HTML・CSS・JavaScriptで生まれる、小さなアニメーション。<br>気になる動きを開いて、しくみをのぞいて、あなたのアイデアに。</p></div><div class="hero-art" aria-hidden="true"><div class="art-core"></div><i class="art-dot"></i><span class="art-star">✳</span><span class="art-plus">＋</span><span class="art-label">a little motion, a little joy.</span></div></section><div class="intro-strip"><span><span class="tiny-dot"></span> すべてブラウザで動く、小さな実験。</span><span class="strip-note">↗ デモを見る　 &lt;/&gt; コードを読む　 ◖)) 音であそぶ</span></div><section class="collection" aria-label="アニメーション一覧"><div class="collection-toolbar"><div class="section-title">The collection<span id="collection-count">${String(demos.length).padStart(2,'0')}</span></div><div class="filters" role="group" aria-label="カテゴリー"><button class="filter" data-filter="all">すべて</button><button class="filter" data-filter="basic">ベーシック</button><button class="filter" data-filter="loop">ループ</button><button class="filter" data-filter="text">テキスト</button><button class="filter" data-filter="interactive">タップ＆音</button></div></div><div class="grid" id="grid"></div><div class="end-note"><span>✳</span> 気になる動きから、はじめよう。</div></section>`;
  document.title = 'MOTION NOTE — 動きの実験帳';
  document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {currentFilter = b.dataset.filter; renderCards();}));
  renderCards();
}
function renderCards() {
  const filtered = demos.filter(d => currentFilter === 'all' || d.category === currentFilter);
  document.querySelector('#collection-count').textContent = String(filtered.length).padStart(2,'0');
  document.querySelectorAll('[data-filter]').forEach(b => { const selected = b.dataset.filter === currentFilter; b.classList.toggle('active', selected); b.setAttribute('aria-pressed',String(selected)); });
  document.querySelector('#grid').innerHTML = filtered.map(d => `<a class="card" href="#/animation/${d.id}" aria-label="${d.name}：${d.jp}のデモを見る"><div class="card-visual" style="--scene-bg:${d.bg}"><span class="card-number">${String(demos.indexOf(d)+1).padStart(2,'0')} /</span>${d.category === 'interactive' ? '<span class="card-sound">◖)) SOUND</span>':''}<div aria-hidden="true" inert>${d.html}</div></div><div class="card-body"><div class="card-title-row"><h2>${d.name}</h2><span class="card-arrow">↗</span></div><p class="card-description">${d.desc}</p><div class="card-meta">${tags(d)}<span class="card-level">${d.level}</span></div></div></a>`).join('');
}
function codeFor(d, tab) {
  if(tab === 'html') return `<!doctype html>\n<html lang="ja">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>${d.name}</title>\n  <link rel="stylesheet" href="style.css">\n  <script src="script.js" defer></script>\n</head>\n<body>\n${d.html}\n</body>\n</html>`;
  if(tab === 'css') return `/* style.css */\n* { box-sizing: border-box; }\nbody { margin: 0; min-height: 100vh; display: grid; place-items: center; background: ${d.bg}; }\nbutton { cursor: pointer; }\n.scene { display: flex; align-items: center; justify-content: center; width: 200px; height: 150px; position: relative; }\n\n${d.css}\n\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after { animation: none !important; transition: none !important; }\n}`;
  return d.js || '// このアニメーションはHTMLとCSSだけで動きます。\n// script.jsは空のままで大丈夫です。';
}
function renderControls(d) {
  // タップで完結するデモに再生コントロールは不要。
  if (d.category === 'interactive' && d.id !== 'wandering-image') {
    return d.id === 'flip'
      ? '<div class="controls controls--reset"><button class="control-btn" id="replay">↺ 表に戻す</button></div>'
      : '';
  }
  return `<div class="controls"><div class="control-group"><button class="control-btn primary" id="pause" aria-pressed="${d.id === 'wandering-image'}">${d.id === 'wandering-image' ? '▶ おさんぽ開始' : 'Ⅱ 一時停止'}</button><button class="control-btn" id="replay">↺ リセット</button></div><label class="speed">再生速度<input type="range" id="speed" min="0.25" max="2" step="0.25" value="1"><output id="speed-value">1×</output></label></div>`;
}
function detail(d) {
  currentDemo = d; paused = d.id === 'wandering-image'; speed = 1; currentTab = 'html';
  document.title = `${d.name} — MOTION NOTE`;
  app.innerHTML = `<div class="breadcrumb"><a href="#">コレクション</a><span>/</span><span>${d.name}</span></div><section><div class="detail-heading"><div><div class="eyebrow">EXPERIMENT ${String(demos.indexOf(d)+1).padStart(2,'0')} / ${d.jp}</div><h1>${d.name}</h1><p>${d.desc}</p><div class="card-meta">${tags(d)}</div></div><span class="detail-badge">${d.level}</span></div><div class="demo-panel"><div class="detail-stage" id="stage" style="--scene-bg:${d.bg}"><span class="stage-caption">LIVE PLAYGROUND</span><div id="demo-content">${d.html}</div><span class="stage-hint">${d.hint || (d.category === 'interactive' ? 'タップすると、動きに合わせて音が鳴ります。' : 'ゆっくり眺めて、動きのリズムを感じよう。')}</span></div>${renderControls(d)}</div><details class="learning"><summary><span>&lt;/&gt; 作り方とコード<small>しくみを知って、自分でつくってみよう</small></span></summary><div class="learning-inner"><div class="howto"><h2>HOW IT WORKS — つくり方</h2><ol>${d.steps.map(s=>`<li>${s}</li>`).join('')}</ol></div><div class="code-toolbar"><div class="code-tabs" role="tablist" aria-label="コードの言語">${['html','css','js'].map((t,i)=>`<button role="tab" id="tab-${t}" aria-controls="code-panel" aria-selected="${i===0}" tabindex="${i===0?'0':'-1'}" class="code-tab" data-tab="${t}">${t === 'js' ? 'JavaScript' : t.toUpperCase()}</button>`).join('')}</div><button class="copy-btn" id="copy-code">▢ コピー</button></div><pre id="code-panel" role="tabpanel" aria-labelledby="tab-html" tabindex="0"><code id="code"></code></pre><p class="code-footnote">HTMLを index.html、CSSを style.css、JavaScriptを script.js として同じフォルダに保存し、index.htmlをブラウザで開いてください。<br>上のコードはデモ本体です。再生コントロールは含まれません。音付きのデモでは、タップで音を鳴らす処理もJavaScriptに含まれます。</p></div></details><a class="back-link" href="#">← コレクションに戻る</a></section>`;
  bindInteractions();
  document.querySelector('#pause')?.addEventListener('click', () => { paused = !paused; document.querySelector('#demo-content').classList.toggle('paused',paused); const b = document.querySelector('#pause'); b.textContent = paused ? '▶ 再生する' : 'Ⅱ 一時停止'; b.setAttribute('aria-pressed',String(paused)); updatePlayback(); });
  document.querySelector('#replay')?.addEventListener('click', () => { cleanupDemo(); cleanupDemo = () => {}; document.querySelector('#demo-content').innerHTML = d.html; bindInteractions(); updatePlayback(); });
  document.querySelector('#speed')?.addEventListener('input', e => { speed = Number(e.target.value); document.querySelector('#speed-value').textContent = `${speed}×`; updatePlayback(); });
  const tabButtons = [...document.querySelectorAll('[data-tab]')];
  function selectTab(b) { currentTab = b.dataset.tab; tabButtons.forEach(t => {t.setAttribute('aria-selected',String(t===b));t.tabIndex=t===b?0:-1;}); document.querySelector('#code-panel').setAttribute('aria-labelledby',b.id); renderCode(); }
  tabButtons.forEach((b,i) => {b.addEventListener('click',()=>selectTab(b)); b.addEventListener('keydown', e => {let n;if(e.key==='ArrowRight')n=(i+1)%3;if(e.key==='ArrowLeft')n=(i+2)%3;if(e.key==='Home')n=0;if(e.key==='End')n=2;if(n!==undefined){e.preventDefault();selectTab(tabButtons[n]);tabButtons[n].focus();}});});
  document.querySelector('#copy-code').addEventListener('click', async () => { const text = codeFor(d,currentTab); try { await navigator.clipboard.writeText(text); toast('コードをコピーしました'); } catch { const field = document.createElement('textarea'); field.value = text; document.body.append(field); field.select(); const ok = document.execCommand('copy'); field.remove(); toast(ok ? 'コードをコピーしました' : 'コードを選択してコピーしてください'); } });
  renderCode();
}
function renderCode() { document.querySelector('#code').textContent = codeFor(currentDemo,currentTab); }
function updatePlayback() {
  if (currentDemo?.id === 'wandering-image') {
    cleanupDemo.setSpeed(speed);
    cleanupDemo.setPaused(paused);
    return;
  }
  document.querySelector('#demo-content').classList.toggle('paused',paused); document.querySelectorAll('#demo-content .scene, #demo-content .scene *').forEach(el => el.getAnimations().forEach(a => {a.playbackRate = speed; if(paused) a.pause(); else a.play();})); }
function bindInteractions() {
  if (currentDemo?.setup) cleanupDemo = currentDemo.setup(document.querySelector('#demo-content'), playTone);
  const arena = document.querySelector('#demo-content .wander-scene');
  if (arena) cleanupDemo = setupWanderingImage(arena, running => {
    paused = !running;
    const button = document.querySelector('#pause');
    button.textContent = paused ? '▶ 再開する' : 'Ⅱ 一時停止';
    button.setAttribute('aria-pressed', String(paused));
    playTone(running ? 523 : 392);
  });
  document.querySelectorAll('#demo-content .note').forEach(b=>b.addEventListener('click',()=>{playTone(Number(b.dataset.frequency),true);b.classList.add('playing');setTimeout(()=>b.classList.remove('playing'),250);}));
  document.querySelectorAll('#demo-content .ripple-button, #demo-content .tap-sound').forEach(b => {
    let timer;
    b.addEventListener('click', () => {
      const ripple = b.classList.contains('ripple-button');
      const className = ripple ? 'touched' : 'sounding';
      playTone(ripple ? 660 : Number(b.dataset.frequency));
      clearTimeout(timer);
      b.classList.remove(className);
      void b.offsetWidth;
      b.classList.add(className);
      updatePlayback();
      timer = setTimeout(() => b.classList.remove(className), 900 / speed);
    });
  });
  document.querySelectorAll('#demo-content .flip-card').forEach(b=>b.addEventListener('click',()=>{const flipped=b.classList.toggle('flipped');b.setAttribute('aria-pressed',String(flipped));playTone(587);}));
}
function route() { cleanupDemo(); cleanupDemo = () => {}; const id = location.hash.match(/^#\/animation\/([a-z-]+)$/)?.[1]; const d = demos.find(d=>d.id===id); if(d) detail(d); else home(); window.scrollTo(0,0); }
window.addEventListener('hashchange',route);
route();


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

const app = document.querySelector('#app');
const style = document.createElement('style');
style.textContent = demos.map(d => d.css).join('\n');
document.head.append(style);
let audioContext, currentFilter = 'all', currentTab = 'html', currentDemo, paused = false, speed = 1, toastTimeout;
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
  app.innerHTML = `<section class="hero"><div><div class="eyebrow"><span class="tiny-dot"></span> A LITTLE COLLECTION OF MOTION</div><h1>眺めて、触れて、<br><span>動きのアイデア</span>を見つけよう。</h1><p>HTML・CSS・JavaScriptで生まれる、小さなアニメーション。<br>気になる動きを開いて、しくみをのぞいて、あなたのアイデアに。</p></div><div class="hero-art" aria-hidden="true"><div class="art-core"></div><i class="art-dot"></i><span class="art-star">✳</span><span class="art-plus">＋</span><span class="art-label">a little motion, a little joy.</span></div></section><div class="intro-strip"><span><span class="tiny-dot"></span> すべてブラウザで動く、小さな実験。</span><span class="strip-note">↗ デモを見る　 &lt;/&gt; コードを読む　 ◖)) 音であそぶ</span></div><section class="collection" aria-label="アニメーション一覧"><div class="collection-toolbar"><div class="section-title">The collection<span id="collection-count">${String(demos.length).padStart(2,'0')}</span></div><div class="filters" role="group" aria-label="カテゴリー"><button class="filter" data-filter="all">すべて</button><button class="filter" data-filter="basic">ベーシック</button><button class="filter" data-filter="loop">ループ</button><button class="filter" data-filter="text">テキスト</button><button class="filter" data-filter="interactive">タップ＆音</button></div></div><div class="grid" id="grid"></div><div class="end-note"><span>✳</span> 気になる動きから、はじめよう。</div></section>`;
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
function detail(d) {
  currentDemo = d; paused = false; speed = 1; currentTab = 'html';
  document.title = `${d.name} — MOTION NOTE`;
  app.innerHTML = `<div class="breadcrumb"><a href="#">コレクション</a><span>/</span><span>${d.name}</span></div><section><div class="detail-heading"><div><div class="eyebrow">EXPERIMENT ${String(demos.indexOf(d)+1).padStart(2,'0')} / ${d.jp}</div><h1>${d.name}</h1><p>${d.desc}</p><div class="card-meta">${tags(d)}</div></div><span class="detail-badge">${d.level}</span></div><div class="demo-panel"><div class="detail-stage" id="stage" style="--scene-bg:${d.bg}"><span class="stage-caption">LIVE PLAYGROUND</span><div id="demo-content">${d.html}</div><span class="stage-hint">${d.category === 'interactive' ? 'タップすると、動きに合わせて音が鳴ります。' : 'ゆっくり眺めて、動きのリズムを感じよう。'}</span></div><div class="controls"><div class="control-group"><button class="control-btn primary" id="pause" aria-pressed="false">Ⅱ 一時停止</button><button class="control-btn" id="replay">↺ リセット</button></div><label class="speed">再生速度<input type="range" id="speed" min="0.25" max="2" step="0.25" value="1"><output id="speed-value">1×</output></label></div></div><details class="learning"><summary><span>&lt;/&gt; 作り方とコード<small>しくみを知って、自分でつくってみよう</small></span></summary><div class="learning-inner"><div class="howto"><h2>HOW IT WORKS — つくり方</h2><ol>${d.steps.map(s=>`<li>${s}</li>`).join('')}</ol></div><div class="code-toolbar"><div class="code-tabs" role="tablist" aria-label="コードの言語">${['html','css','js'].map((t,i)=>`<button role="tab" id="tab-${t}" aria-controls="code-panel" aria-selected="${i===0}" tabindex="${i===0?'0':'-1'}" class="code-tab" data-tab="${t}">${t === 'js' ? 'JavaScript' : t.toUpperCase()}</button>`).join('')}</div><button class="copy-btn" id="copy-code">▢ コピー</button></div><pre id="code-panel" role="tabpanel" aria-labelledby="tab-html" tabindex="0"><code id="code"></code></pre><p class="code-footnote">HTMLを index.html、CSSを style.css、JavaScriptを script.js として同じフォルダに保存し、index.htmlをブラウザで開いてください。<br>上のコードはデモ本体です。再生コントロールは含まれません。音付きのデモでは、タップで音を鳴らす処理もJavaScriptに含まれます。</p></div></details><a class="back-link" href="#">← コレクションに戻る</a></section>`;
  bindInteractions();
  document.querySelector('#pause').addEventListener('click', () => { paused = !paused; document.querySelector('#demo-content').classList.toggle('paused',paused); const b = document.querySelector('#pause'); b.textContent = paused ? '▶ 再生する' : 'Ⅱ 一時停止'; b.setAttribute('aria-pressed',String(paused)); updatePlayback(); });
  document.querySelector('#replay').addEventListener('click', () => { document.querySelector('#demo-content').innerHTML = d.html; bindInteractions(); updatePlayback(); });
  document.querySelector('#speed').addEventListener('input', e => { speed = Number(e.target.value); document.querySelector('#speed-value').textContent = `${speed}×`; updatePlayback(); });
  const tabButtons = [...document.querySelectorAll('[data-tab]')];
  function selectTab(b) { currentTab = b.dataset.tab; tabButtons.forEach(t => {t.setAttribute('aria-selected',String(t===b));t.tabIndex=t===b?0:-1;}); document.querySelector('#code-panel').setAttribute('aria-labelledby',b.id); renderCode(); }
  tabButtons.forEach((b,i) => {b.addEventListener('click',()=>selectTab(b)); b.addEventListener('keydown', e => {let n;if(e.key==='ArrowRight')n=(i+1)%3;if(e.key==='ArrowLeft')n=(i+2)%3;if(e.key==='Home')n=0;if(e.key==='End')n=2;if(n!==undefined){e.preventDefault();selectTab(tabButtons[n]);tabButtons[n].focus();}});});
  document.querySelector('#copy-code').addEventListener('click', async () => { const text = codeFor(d,currentTab); try { await navigator.clipboard.writeText(text); toast('コードをコピーしました'); } catch { const field = document.createElement('textarea'); field.value = text; document.body.append(field); field.select(); const ok = document.execCommand('copy'); field.remove(); toast(ok ? 'コードをコピーしました' : 'コードを選択してコピーしてください'); } });
  renderCode();
}
function renderCode() { document.querySelector('#code').textContent = codeFor(currentDemo,currentTab); }
function updatePlayback() { document.querySelector('#demo-content').classList.toggle('paused',paused); document.querySelectorAll('#demo-content .scene, #demo-content .scene *').forEach(el => el.getAnimations().forEach(a => {a.playbackRate = speed; if(paused) a.pause(); else a.play();})); }
function bindInteractions() {
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
function route() { const id = location.hash.match(/^#\/animation\/([a-z-]+)$/)?.[1]; const d = demos.find(d=>d.id===id); if(d) detail(d); else home(); window.scrollTo(0,0); }
window.addEventListener('hashchange',route);
route();


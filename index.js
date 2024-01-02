console.clear();

const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

const frameCount = 317;
    const currentFrame = index => (
      `./src/animation/${(index + 1).toString()}.webp`
    );

const images = []
const airpods = {
  frame: 0
};

for (let i = 9; i < frameCount + 9; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    // trigger: ".hero-lightpass",
    start: "top top",
    end: "+=1500",
    scrub: 0.5,
    pin: "#hero-lightpass",
    // pin: true,
  },
  onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
//   onComplete: renderLast
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0); 
}


gsap.utils.toArray(".text-highlight").forEach((highlight) => {
  ScrollTrigger.create({
    trigger: highlight,
    start: "-100px center",
    onEnter: () => highlight.classList.add("active")
  });
});


// gsap.utils.toArray("code-part").forEach((code) => {
//     ScrollTrigger.create({
//       trigger: code,
//       start: "-100px center",
//       onEnter: typingAnim(code.id)
//     });
//   });


// function typingAnim(code) {
//   console.log(code)
//   var i = 0;
// var txt = 'Lorem ipsum dummy text blabla.';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// }

hljs.highlightElement(document.getElementById("code1"));
// new TypeIt("#code1", {
//   strings: "def SoftMax(signal):\r\n  s = np.exp(signal)\r\n  return s\/sum(s)",
//   speed: 20,
//   waitUntilVisible: true,
//   cursor: false,
//   afterComplete: function (instance) {
//     instance.destroy();
//     hljs.highlightElement(document.getElementById("code1"));
//   }
// }).go();

new TypeIt("#code2", {
  strings: "#\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043B\u044F \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u0430 \u0445\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 \u0434\u043B\u044F \u0432\u0435\u043A\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044F \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u0438\r\ndef count_field(x_range,y_range,A,beta):\r\n  data = []\r\n  dots = []\r\n\r\n  for i in range(x_range.size):\r\n    for j in range(y_range.size):\r\n      dots.append([[x_range[i]],[y_range[j]]])\r\n      data.append(dynamics(\"bruh\",np.array([[x_range[i]],[y_range[j]]]),A,beta))\r\n\r\n  dots = np.array(dots)\r\n  data = np.array(data)\r\n\r\n  x = dots[:,0,0]\r\n  y = dots[:,1,0]\r\n\r\n  u = data[:,0,0]\r\n  v = data[:,1,0]\r\n\r\n  return [x,y,u,v]\r\n\r\nx_r = np.arange(-2,2.1,0.5)\r\ny_r = np.arange(-2,2.1,0.5)\r\n\r\nA = np.array([[1, 0],\r\n              [0, 1],\r\n              [-1, -1]])\r\n\r\nwith plt.style.context(\"dark_background\"):\r\n  [x,y,u,v] = count_field(x_r,y_r,A,0.1)\r\n  plt.quiver(x,y,u,v,color = [1,0,0,.3])\r\n  [x,y,u,v] = count_field(x_r,y_r,A,1)\r\n  plt.quiver(x,y,u,v,color = [0,1,0,.3])\r\n  [x,y,u,v] = count_field(x_r,y_r,A,10)\r\n  plt.quiver(x,y,u,v,color = [0,0,1,.3])\r\n  plt.scatter(A[:,0],A[:,1],color = \"r\")\r\n  plt.legend([r'$\\beta=0.1$',r'$\\beta=1$',r'$\\beta=10$',\"points\"],loc=1)\r\nplt.show()",
  speed: 1,
  waitUntilVisible: true,
  cursor: false,
  // html: false,
  afterComplete: function (instance) {
    document.getElementById("graph3").style.opacity = 1;
    document.getElementById("graph3-home").style.maxHeight = "100%";
    instance.destroy();
    hljs.highlightElement(document.getElementById("code2"));
  }
}).go();

new TypeIt("#code3", {
  strings: ["с <3 от Никиты, Тимура и Артёма", "import numpy as np\r\nimport matplotlib.pyplot as plt\r\nimport librosa\r\nimport IPython\r\nimport os"],
  speed: 20,
  breakLines: false,
  waitUntilVisible: true,
  // cursor: false,
  afterComplete: function (instance) {
    instance.destroy();
    hljs.highlightElement(document.getElementById("code3"));
  }
}).go();


new TypeIt("#code4", {
  strings: "def softmax(x, beta=1):\r\n   s = np.exp(beta*x);\r\n   return (s\/sum(s))\r\n\r\ndef dynamics(t,x, A, beta):\r\n   x_s = np.dot(A,x)\r\n   s = softmax(x_s,beta)\r\n   res = np.dot(A.T,s) - x\r\n   return res",
  speed: 10,
  waitUntilVisible: true,
  // cursor: false,
  afterComplete: function (instance) {
    instance.destroy();
    hljs.highlightElement(document.getElementById("code4"));
  }
}).go();


new TypeIt("#code5", {
  strings: "def Runge_Kutta_method(fun, t, x_0, dt, args={}):\r\n   tau = np.append(np.arange(t[0],t[1],dt),t[1])\r\n\r\n   psi = np.zeros((tau.shape[0],x_0.shape[0]))\r\n   psi[0] = x_0;\r\n\r\n   for i in range(1,tau.size):\r\n      h = tau[i]-tau[i-1]\r\n      k1 = h*fun(tau[i-1],psi[i-1],**args)\r\n      k2 = h*fun(tau[i],psi[i-1]+k1,**args)\r\n      psi[i] = psi[i-1]+1\/2*k1+1\/2*k2\r\n\r\n   return [tau,psi]\r\n\r\ndef Euler_method(fun, t, x_0, dt, args={}):\r\n   tau = np.append(np.arange(t[0],t[1],dt),t[1])\r\n\r\n   psi = np.zeros((tau.shape[0],x_0.shape[0]))\r\n   psi[0] = x_0;\r\n\r\n   for i in range(1,tau.size):\r\n      psi[i] = psi[i-1]+(tau[i]-tau[i-1])*fun(tau[i-1],psi[i-1],**args)\r\n\r\n   return [tau,psi]",
  speed: 10,
  waitUntilVisible: true,
  // cursor: false,
  afterComplete: function (instance) {
    instance.destroy();
    hljs.highlightElement(document.getElementById("code5"));
  }
}).go();

new TypeIt("#code6", {
  strings: "sr = 20000 # \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u0434\u0438\u0441\u043A\u0440\u0435\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0441\u0435\u0445 \u0434\u043E\u0440\u043E\u0436\u0435\u043A\r\nmsz = 30000\r\n\r\ncats = []\r\ndogs = []\r\n\r\n#print(\"cats:\")\r\nfor filename in os.listdir(\"perfect examples\/cats\"):\r\n  if filename[-3:] == \"mp3\":\r\n    sound,sr = librosa.load(\"perfect examples\/cats\/\"+filename, sr = sr)\r\n    while (len(sound)>msz):\r\n      cats.append(sound[:msz])\r\n      #display(IPython.display.Audio(sound[:msz], rate = sr))\r\n      #print(sound[:msz].shape)\r\n      sound = sound[msz:]\r\n    #print()\r\n\r\ni = 0\r\n#print(\"dogs:\")\r\nfor filename in os.listdir(\"perfect examples\/dogs\"):\r\n  if filename[-3:] == \"mp3\":\r\n    sound,sr = librosa.load(\"perfect examples\/dogs\/\"+filename, sr = sr)\r\n    while (len(sound)>msz):\r\n      if (i==0):\r\n        dogs.append(sound[:msz])\r\n        #display(IPython.display.Audio(sound[:msz], rate = sr))\r\n        #print(sound[:msz].shape)\r\n      sound = sound[msz:]\r\n      i=(i+1)%5\r\n\r\nprint(\"Cat examples: \"+str(len(cats)))\r\nprint(\"Dog examples: \"+str(len(dogs)))\r\n\r\nM = np.stack(cats+dogs,\r\n             axis=1).transpose() # \u043C\u0430\u0442\u0440\u0438\u0446\u0430 \u044D\u0442\u0430\u043B\u043E\u043D\u043D\u044B\u0445 \u0437\u0432\u0443\u043A\u043E\u0432",
  speed: 5,
  waitUntilVisible: true,
  // cursor: false,
  afterComplete: function (instance) {
    instance.destroy();
    hljs.highlightElement(document.getElementById("code6"));
  }
}).go();

new TypeIt("#code7", {
  strings: "# \u0432\u0435\u043A\u0442\u043E\u0440 x_0 \u0434\u043B\u044F \u0434\u0438\u0444\u0444\u0443\u0440\u0430 - \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u0435\u043A\u0442\u043E\u0440-\u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u0443\u0435\u043C\u043E\u0439 \u0430\u0443\u0434\u0438\u043E\u0434\u043E\u0440\u043E\u0436\u043A\u0438\r\nwho, s = librosa.load(\"checkdata\/\"+input(\"type in example name: \")+\".mp3\", sr = sr)\r\n\r\nif (len(who)>=msz):\r\n  who = who[:msz].transpose()\r\nelse:\r\n  who = np.concatenate((who,np.zeros(msz-len(who)))).transpose()\r\n\r\nprint(\"Sound:\")\r\ndisplay(IPython.display.Audio(who, rate = sr))\r\n\r\n\r\nsolution = Euler_method(dynamics,[0,10],who,0.1,dict({\"A\":M,\"beta\":0.1}))[1][-1]\r\n\r\nprint(\"Solution:\")\r\ndisplay(IPython.display.Audio(solution, rate = sr))",
  speed: 5,
  waitUntilVisible: true,
  // cursor: false,
  afterComplete: function (instance) {
    document.getElementById("result-home").style.maxHeight = "100%";
    instance.destroy();
    hljs.highlightElement(document.getElementById("code7"));
  }
}).go();


new TypeIt("#code8", {
  strings: "c = min([np.linalg.norm(i-solution) for i in cats])\r\nd = min([np.linalg.norm(i-solution) for i in dogs])\r\n\r\nif (c>d):\r\n  print(\"it's a dog! Bark bark\")\r\nelse:\r\n  print(\"it's a cat! Mew mew\")",
  speed: 10,
  waitUntilVisible: true,
  // cursor: false,
  afterComplete: function (instance) {
    instance.destroy();
    hljs.highlightElement(document.getElementById("code8"));
  }
}).go();


const seps = gsap.utils.toArray('.separator');
seps.forEach(sep => {
  gsap.from(sep, {
  scrollTrigger: {
    trigger: sep,
    scrub: true,
    start: "top bottom",
    end: "top top"
  },
  scaleX: 0,
  transformOrigin: "left center", 
  ease: "none"
});
});



const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {	
  
  var thisPinWrap = sec.querySelector('.pin-wrap');
  var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
  
  var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 

  gsap.fromTo(thisAnimWrap, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
  }, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
    ease: "none",
    scrollTrigger: {
      trigger: sec,		
      start: "top top",
      end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
      pin: thisPinWrap,
      invalidateOnRefresh: true,
      //anticipatePin: 1,
      scrub: true,
      //markers: true,
    }
  });

});	


// const fadeAbles = gsap.utils.toArray('.fadeAble');
// fadeAbles.forEach(fa => {
//   gsap.to(fa, {
//   scrollTrigger: {
//     trigger: fa,
//     scrub: true,
//     start: "center",
//     // end: "top top"
//   },
//   y: 100,
//   ease: 'power4.in',
//   duration: 3,
// }, 0);
// });

var n,u,i,t,r,o,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function a(n,l){for(var u in l){ n[u]=l[u]; }return n}function v(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var i,t=arguments,r={};for(i in l){ "key"!==i&&"ref"!==i&&(r[i]=l[i]); }if(arguments.length>3){ for(u=[u],i=3;i<arguments.length;i++){ u.push(t[i]); } }if(null!=u&&(r.children=u),"function"==typeof n&&null!=n.defaultProps){ for(i in n.defaultProps){ void 0===r[i]&&(r[i]=n.defaultProps[i]); } }return p(n,r,l&&l.key,l&&l.ref,null)}function p(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(o.__v=o),n.vnode&&n.vnode(o),o}function d(n){return n.children}function m(n,l){this.props=n,this.context=l;}function w(n,l){if(null==l){ return n.__?w(n.__,n.__.__k.indexOf(n)+1):null; }for(var u;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){ return u.__e; } }return "function"==typeof n.type?w(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break} }return k(n)}}function g(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!i++||r!==n.debounceRendering)&&((r=n.debounceRendering)||t)(_);}function _(){for(var n;i=u.length;){ n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,r,o,f;n.__d&&(o=(r=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=a({},r)).__v=i,t=A(f,r,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==o?w(r):o),T(u,r),t!=o&&k(r)));}); }}function b(n,l,u,i,t,r,o,f,s){var a,h,p,y,d,m,k,g=u&&u.__k||c,_=g.length;if(f==e&&(f=null!=r?r[0]:_?w(u,0):null),a=0,l.__k=x(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=g[a])||p&&u.key==p.key&&u.type===p.type){ g[a]=void 0; }else { for(h=0;h<_;h++){if((p=g[h])&&u.key==p.key&&u.type===p.type){g[h]=void 0;break}p=null;} }if(y=A(n,u,p=p||e,i,t,r,o,f,s),(h=u.ref)&&p.ref!=h&&(k||(k=[]),p.ref&&k.push(p.ref,null,u),k.push(h,u.__c||y,u)),null!=y){var c;if(null==m&&(m=y),void 0!==u.__d){ c=u.__d,u.__d=void 0; }else if(r==p||y!=f||null==y.parentNode){n:if(null==f||f.parentNode!==n){ n.appendChild(y),c=null; }else {for(d=f,h=0;(d=d.nextSibling)&&h<_;h+=2){ if(d==y){ break n; } }n.insertBefore(y,f),c=f;}"option"==l.type&&(n.value="");}f=void 0!==c?c:y.nextSibling,"function"==typeof l.type&&(l.__d=f);}else { f&&p.__e==f&&f.parentNode!=n&&(f=w(p)); }}return a++,u}),l.__e=m,null!=r&&"function"!=typeof l.type){ for(a=r.length;a--;){ null!=r[a]&&v(r[a]); } }for(a=_;a--;){ null!=g[a]&&D(g[a],g[a]); }if(k){ for(a=0;a<k.length;a++){ j(k[a],k[++a],k[++a]); } }}function x(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n){ l&&u.push(l(null)); }else if(Array.isArray(n)){ for(var i=0;i<n.length;i++){ x(n[i],l,u); } }else { u.push(l?l("string"==typeof n||"number"==typeof n?p(null,n,null,null,n):null!=n.__e||null!=n.__c?p(n.type,n.props,n.key,null,n.__v):n):n); }return u}function P(n,l,u,i,t){var r;for(r in u){ "children"===r||"key"===r||r in l||N(n,r,null,u[r],i); }for(r in l){ t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||N(n,r,l[r],u[r],i); }}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===s.test(l)?u+"px":null==u?"":u;}function N(n,l,u,i,t){var r,o,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l){ if(r=n.style,"string"==typeof u){ r.cssText=u; }else {if("string"==typeof i&&(r.cssText="",i=null),i){ for(e in i){ u&&e in u||C(r,e,""); } }if(u){ for(c in u){ i&&u[c]===i[c]||C(r,c,u[c]); } }} }else { "o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),f=l.toLowerCase(),l=(f in n?f:l).slice(2),u?(i||n.addEventListener(l,z,o),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,z,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u)); }}function z(l){this.l[l.type](n.event?n.event(l):l);}function A(l,u,i,t,r,o,f,e,c){var s,v,h,p,y,w,k,g,_,x,P=u.type;if(void 0!==u.constructor){ return null; }(s=n.__b)&&s(u);try{n:if("function"==typeof P){if(g=u.props,_=(s=P.contextType)&&t[s.__c],x=s?_?_.props.value:s.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new m(g,x),v.constructor=P,v.render=E),_&&_.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=a({},v.__s)),a(v.__s,P.getDerivedStateFromProps(g,v.__s))),p=v.props,y=v.state,h){ null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount); }else {if(null==P.getDerivedStateFromProps&&g!==p&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v&&!v.__){for(v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),s=0;s<u.__k.length;s++){ u.__k[s]&&(u.__k[s].__=u); }break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(p,y,w);});}v.context=x,v.props=g,v.state=v.__s,(s=n.__r)&&s(u),v.__d=!1,v.__v=u,v.__P=l,s=v.render(v.props,v.state,v.context),u.__k=null!=s&&s.type==d&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=v.getChildContext&&(t=a(a({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(p,y)),b(l,u,i,t,r,o,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else { null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=$(i.__e,u,i,t,r,o,f,c); }(s=n.diffed)&&s(u);}catch(l){u.__v=null,n.__e(l,u,i);}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function $(n,l,u,i,t,r,o,f){var s,a,v,h,p,y=u.props,d=l.props;if(t="svg"===l.type||t,null!=r){ for(s=0;s<r.length;s++){ if(null!=(a=r[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,r[s]=null;break} } }if(null==n){if(null===l.type){ return document.createTextNode(d); }n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),r=null,f=!1;}if(null===l.type){ y!==d&&n.data!=d&&(n.data=d); }else {if(null!=r&&(r=c.slice.call(n.childNodes)),v=(y=u.props||e).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!f){if(y===e){ for(y={},p=0;p<n.attributes.length;p++){ y[n.attributes[p].name]=n.attributes[p].value; } }(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""));}P(n,d,y,t,f),h?l.__k=[]:(l.__k=l.props.children,b(n,l,u,i,"foreignObject"!==l.type&&t,r,o,e,f)),f||("value"in d&&void 0!==(s=d.value)&&s!==n.value&&N(n,"value",s,y.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&N(n,"checked",s,y.checked,!1));}return n}function j(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function D(l,u,i){var t,r,o;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||"function"==typeof l.type||(i=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount){ try{t.componentWillUnmount();}catch(l){n.__e(l,u);} }t.base=t.__P=null;}if(t=l.__k){ for(o=0;o<t.length;o++){ t[o]&&D(t[o],u,i); } }null!=r&&v(r);}function E(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,r,f;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=h(d,null,[l]),f=[],A(u,(t?u:i||u).__k=l,r||e,e,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:c.slice.call(u.childNodes),f,i||e,t),T(f,l);}n={__e:function(n,l){for(var u,i;l=l.__;){ if((u=l.__c)&&!u.__){ try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i){ return g(u.__E=u) }}catch(l){n=l;} } }throw n}},m.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),g(this));},m.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this));},m.prototype.render=d,u=[],i=0,t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=e,f=0;

var ENV = window.location.href.includes('localhost:4000') ? 'DEV' : 'PROD';
var APP = {};
var VIEW = { render: undefined };

var initAppDefault = function () {
  APP.start = '';

  APP.activeSession = 0;

  APP.sessions = [
    {
      title: '',
      min: 15,
      sec: 0,
      totalSec: 900,
      rounds: 1,
      stack: [
        { min: 0, sec: 30, totalSec: 30, title: "Jumping Jacks", bgColor: "#1dd1a1", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Wall Sit", bgColor: "#1dd1a1", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Push Ups", bgColor: "#1dd1a1", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Crunches", bgColor: "#1dd1a1", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Chair Steps", bgColor: "#f368e0", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Squats", bgColor: "#f368e0", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Chair Triceps", bgColor: "#f368e0", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Plank", bgColor: "#f368e0", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "High Knees", bgColor: "#feca57", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Lunge", bgColor: "#feca57", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Push Up Rotation", bgColor: "#feca57", collapsed: false },
        { min: 0, sec: 10, totalSec: 10, title: "Rest", bgColor: "#2d98da", collapsed: false },
        { min: 0, sec: 30, totalSec: 30, title: "Side Plank", bgColor: "#feca57", collapsed: false }
      ]
    }
  ];

  Object.seal(APP);
};

var initViewDefault = function () {
  VIEW.sessionState = 0;
  
  VIEW.timeIncrement = new Array(60).fill(0);

  VIEW.drag = {
    active: false,
    lastDropped: 0
  };

  // Timer View
  VIEW.locked = false;
  VIEW.isPlaying = false;
  VIEW.timerID = undefined;
  VIEW.currRow = 0;
  VIEW.currSecs = 0;
  VIEW.currRound = 0;
  VIEW.start = true;
  VIEW.finish = false;

  VIEW.min = 0;
  VIEW.sec = 0;

  VIEW.progressBar = '';

  Object.seal(VIEW);
};

var newData = function () {
  initAppDefault();
  initViewDefault();
};

var nextStage = function (dontPersist) {
  if (dontPersist && VIEW.isPlaying) {
    clearTimeout(VIEW.timerID);
    VIEW.isPlaying = !VIEW.isPlaying;
  }

  if (VIEW.start) {
    VIEW.start = false;
    VIEW.currRow = -1;
  }

  var target = APP.sessions[APP.activeSession];

  var newRow = VIEW.currRow + 1 === target.stack.length ? 0 : VIEW.currRow + 1;
  var newRound = newRow === 0 && VIEW.currRow >= 0 ? VIEW.currRound + 1 : VIEW.currRound;

  if (newRound === target.rounds + 1 && newRow === 0) {
    VIEW.finish = true;
    VIEW.render();
    return
  } else {
    VIEW.currRow = newRow;
    VIEW.currRound = newRound;
  }

  VIEW.currSecs = APP.sessions[APP.activeSession].stack[VIEW.currRow].totalSec;
  VIEW.min = Math.floor(VIEW.currSecs / 60);
  VIEW.sec = VIEW.currSecs > 60 ? VIEW.currSecs % 60 : VIEW.currSecs;

  VIEW.render();
};

var restartStage = function () {
  VIEW.currSecs = APP.sessions[APP.activeSession].stack[VIEW.currRow].totalSec;
  VIEW.min = Math.floor(VIEW.currSecs / 60);
  VIEW.sec = VIEW.currSecs > 60 ? VIEW.currSecs % 60 : VIEW.currSecs;
};

var lastStage = function () {
  if (VIEW.isPlaying) {
    clearTimeout(VIEW.timerID);
    VIEW.isPlaying = !VIEW.isPlaying;
  }

  if (VIEW.finish) {
    VIEW.finish = false;
    VIEW.currRow = APP.sessions[APP.activeSession].stack.length;
  }

  var target = APP.sessions[APP.activeSession];

  var newRow = VIEW.currRow - 1 === -1 ? target.stack.length - 1 : VIEW.currRow - 1;
  var newRound = VIEW.currRow <= 0 ? VIEW.currRound - 1 : VIEW.currRound;
  
  if (newRow === 1 && newRound === -1) {
    VIEW.start = true;
    VIEW.currSecs = 5;
    VIEW.render();
    return
  } else {
    VIEW.currRow = newRow;
    VIEW.currRound = newRound;
  }

  VIEW.currSecs = APP.sessions[APP.activeSession].stack[VIEW.currRow].totalSec;
  VIEW.min = Math.floor(VIEW.currSecs / 60);
  VIEW.sec = VIEW.currSecs > 60 ? VIEW.currSecs % 60 : VIEW.currSecs;

  VIEW.render();
};

var timer = function (start) {
  var target = APP.sessions[APP.activeSession].stack[VIEW.currRow];

  if (start) {
    if (VIEW.currSecs <= 5) {
      var msg = new SpeechSynthesisUtterance(VIEW.currSecs);
      msg.volume = .25;
      window.speechSynthesis.speak(msg);
    } else if (VIEW.currSecs === target.totalSec) {
      var msg = new SpeechSynthesisUtterance(target.title);
      window.speechSynthesis.speak(msg);
    }
  }
  
  VIEW.timerID = setTimeout(function () {
    VIEW.currSecs -= 1;

    if (VIEW.currSecs === 0) {
      nextStage();
      if (VIEW.finish) {
        var msg = new SpeechSynthesisUtterance('Done. Great Job!');
        msg.volume = .25;
        window.speechSynthesis.speak(msg);
        VIEW.isPlaying = !VIEW.isPlaying;
      } else {
        var target = APP.sessions[APP.activeSession].stack[VIEW.currRow];
        var msg = new SpeechSynthesisUtterance(target.title);
        msg.volume = .25;
        window.speechSynthesis.speak(msg);
      }
      
    } else if (VIEW.currSecs <= 5) {
      var msg = new SpeechSynthesisUtterance(VIEW.currSecs);
      msg.volume = .25;
      window.speechSynthesis.speak(msg);
    }

    VIEW.min = Math.floor(VIEW.currSecs / 60);
    VIEW.sec = VIEW.currSecs > 60 ? VIEW.currSecs % 60 : VIEW.currSecs;

    VIEW.render();
    if (!VIEW.finish) { timer(); }
  }, 1000);
};

var togglePlay = function () {
  if (VIEW.isPlaying) {
    clearTimeout(VIEW.timerID);
  } else {
    timer(true);
  }
  
  VIEW.isPlaying = !VIEW.isPlaying;
  VIEW.render();
};

var toggleLock = function () {
  VIEW.locked = !VIEW.locked;

  VIEW.render();
};

var closeTimerView = function () {
  VIEW.sessionState = 0;

  if (VIEW.isPlaying) {
    clearTimeout(VIEW.timerID);
  } 

  VIEW.isPlaying = !VIEW.isPlaying;

  VIEW.render();
};

var startTimerView = function () {
  VIEW.sessionState = 1;
  clearTimeout(VIEW.timerID);

  // Timer View Init
  VIEW.locked = false;
  VIEW.isPlaying = false;
  VIEW.timerID = undefined;
  VIEW.currRow = 0;
  VIEW.currRound = 0;
  VIEW.currSecs = 5;
  VIEW.start = true;
  VIEW.finish = false;

  VIEW.render();
};

var toggleCollapse = function (i) {
  APP.sessions[APP.activeSession].stack[i].collapsed = !APP.sessions[APP.activeSession].stack[i].collapsed;
  VIEW.render();
};

var setTotalTime = function () {
  var totalSec = 0;

  APP.sessions[APP.activeSession].stack.forEach(function (row) {
    totalSec += row.sec;
    totalSec += (row.min * 60);
  });

  totalSec *= (APP.sessions[APP.activeSession].rounds + 1);

  APP.sessions[APP.activeSession].min = Math.floor(totalSec / 60);
  APP.sessions[APP.activeSession].sec = totalSec > 60 ? totalSec % 60 : totalSec;
  APP.sessions[APP.activeSession].totalSec = totalSec;
};

var newRow = function () {
  APP.sessions[APP.activeSession].stack.push({
    min: 0,
    sec: 0,
    totalSec: 0,
    title: 'Title',
    bgColor: '#2d98da',
    collapsed: false
  });

  setTotalTime();

  VIEW.render();
};

var deleteRow = function (i) {
  var confirm = window.confirm('Are you sure you want to delete?');
  
  if (confirm) {
    APP.sessions[APP.activeSession].stack.splice(i, 1);

    if (APP.sessions[APP.activeSession].stack.length === 0) {
      newRow();
    }

    setTotalTime();

    VIEW.render();
  }
};

var editTitle = function (e, i) {
  APP.sessions[APP.activeSession].stack[i].title = e.target.value;

  VIEW.render();
};

var editTimeInterval = function (minOrSec, e, i) {
  var val = parseInt(e.target.value);
  var target = APP.sessions[APP.activeSession].stack[i];

  if (val >= 0 && val <= 60) {
    target[minOrSec] = val;
    target['totalSec'] = (target.min * 60) + target.sec;
  }

  setTotalTime();

  VIEW.render();
};

var editColor = function (e, i) {
  var val = e.target.value;
  
  APP.sessions[APP.activeSession].stack[i].bgColor = e.target.value;
  setTotalTime();
  
  VIEW.render();
};

var editRounds = function (e) {
  var val = parseInt(e.target.value);
  
  APP.sessions[APP.activeSession].rounds = val;
  setTotalTime();

  VIEW.render();
};

var startDrag = function (e) {
  VIEW.drag.active = true;
  VIEW.drag.lastDropped = parseInt(e.target.dataset.startindex);
  APP.sessions[APP.activeSession].stack[VIEW.drag.lastDropped].collapsed = false;
  
  VIEW.render();
};

var resumeDrag = function (e) {
  var target = e.touches ? document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) : e.target;

  if (target.dataset.dropindex) {
    var lastDropped = VIEW.drag.lastDropped;
    var currDrop = parseInt(target.dataset.dropindex);
    
    if (lastDropped !== currDrop) {
      var temp = APP.sessions[APP.activeSession].stack[currDrop];
      APP.sessions[APP.activeSession].stack[currDrop] = APP.sessions[APP.activeSession].stack[lastDropped];
      APP.sessions[APP.activeSession].stack[lastDropped] = temp;

      VIEW.drag.lastDropped = currDrop;

      VIEW.render();
    }
  }
};

var endDrag = function () {
  VIEW.drag.active = false;
  VIEW.render();

  document.body.classList.remove('grabbing');
};

var View = /*@__PURE__*/(function (Component) {
  function View () {
    Component.apply(this, arguments);
  }

  if ( Component ) View.__proto__ = Component;
  View.prototype = Object.create( Component && Component.prototype );
  View.prototype.constructor = View;

  View.prototype.componentWillMount = function componentWillMount () {
    setTotalTime();
  };

  View.prototype.componentDidMount = function componentDidMount () {
    var this$1 = this;

    VIEW.render = function () {
      this$1.setState({}, function () {});
    };

    // Adding google analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-30199022-1');
  };

  View.prototype.render = function render () {
    return (
      h( 'div', { class: 'w-full h-full', style: VIEW.drag.active ? 'cursor: grabbing;' : 'auto' },
        VIEW.sessionState === 0 && h( 'div', {
          class: 'fl-column h-full', style: 'background: rgb(248, 248, 251);', onTouchStart: function (e) { if (e.target.dataset.draggable) { startDrag(e); } }, onMouseDown: function (e) { if (e.target.dataset.draggable) { startDrag(e); } }, onTouchMove: function (e) { if (VIEW.drag.active) { resumeDrag(e); } }, onMouseMove: function (e) { if (VIEW.drag.active) { resumeDrag(e); } }, onTouchEnd: function (e) { endDrag(); }, onMouseUp: function (e) { endDrag(); }, onMouseLeave: function (e) { endDrag(); } },
          h( 'div', { class: 'fl fl-justify-between', style: 'border-bottom: 1px solid #ced4da; background: white; min-height: 52px;' },
            h( 'div', { class: 'fl', style: 'padding-left: 15px;' },
              h( 'div', { class: 'fl fl-center-y p-v-15 p-h-5 w-full' },
                h( 'p', { class: 'p-0 m-0 txt-left fl-1 fl', style: 'pointer-events: none;' },
                  h( 'b', null, "Interval Timer" )
                ),
                h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "pencil-alt", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", class: "svg-inline--fa fa-pencil-alt fa-w-16 fa-3x" }, h( 'path', { fill: "currentColor", d: "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z", class: "" }))
              ),
              h( 'button', { class: 'p-h-5' },
                h( 'svg', { style: 'width: 20px; height: 20px;', 'aria-hidden': "true", focusable: "false", 'data-prefix': "fab", 'data-icon': "github", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 496 512", class: "svg-inline--fa fa-github fa-w-16 fa-3x" }, h( 'path', { fill: "currentColor", d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z", class: "" }))
              )
            ),
            
            h( 'button', {
              class: 'p-h-20', onClick: function () {
                startTimerView();
              } },
              h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "play", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-inline--fa fa-play fa-w-14 fa-3x" }, h( 'path', { fill: "currentColor", d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z", class: "" }))
            )
          ),
          h( 'div', { class: 'fl', style: 'border-bottom: 1px solid #ced4da; border-top: 1px solid #ced4da; background: white; min-height: 52px; margin: 10px 0px;' },
            h( 'div', { class: 'fl fl-center-y p-v-15 p-h-20 fl-1' },
              h( 'p', { class: 'p-0 m-0 txt-left fl', style: 'pointer-events: none;' },
                h( 'b', null, "Total: ", APP.sessions[APP.activeSession].min < 10 ? '0' + APP.sessions[APP.activeSession].min : APP.sessions[APP.activeSession].min, ":", APP.sessions[APP.activeSession].sec < 10 ? '0' + APP.sessions[APP.activeSession].sec : APP.sessions[APP.activeSession].sec
                )
              ),
              h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "pencil-alt", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", class: "svg-inline--fa fa-pencil-alt fa-w-16 fa-3x" }, h( 'path', { fill: "currentColor", d: "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z", class: "" }))
            ),
            h( 'div', { class: 'select', style: 'width: 115px;' },
              h( 'p', { style: 'margin-right: 5px;' }, "Rounds"),
              h( 'select', { class: 'b-r-4', style: 'border: 0px;', value: APP.sessions[APP.activeSession].rounds, onInput: function (e) { editRounds(e); } },
                h( 'option', { value: '0' }, "1"),
                h( 'option', { value: '1' }, "2"),
                h( 'option', { value: '2' }, "3"),
                h( 'option', { value: '3' }, "4"),
                h( 'option', { value: '4' }, "5")
              )
            ),
            h( 'button', {
              class: 'p-h-20', onClick: function () {
                newRow();
              } },
              h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "plus", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-inline--fa fa-plus fa-w-14 fa-3x" }, h( 'path', { fill: "currentColor", d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z", class: "" }))
            )
          ),
          h( 'div', { class: 'fl-1 fl-column hide-scroll', style: 'overflow-y: scroll; border-top: 1px solid #ced4da; background: white;' },
            APP.sessions[APP.activeSession].stack.map(function (row, i) {
                return h( 'div', { style: ("border-bottom: 1px solid #ced4da; " + (VIEW.drag.active && i === VIEW.drag.lastDropped  ? 'box-shadow: inset 0px 0px 2px 3px rgba(0, 0, 0, .1); background: rgba(0, 0, 0, .1); cursor: grabbing;' : 'background: white; cursor: auto;') + ";"), 'data-dropindex': i },
                  h( 'div', { class: 'fl', style: VIEW.drag.active ? 'pointer-events: none;' : '' },
                    h( 'button', { class: 'fl fl-center-y p-h-20 p-v-15 w-full', onClick: function () { toggleCollapse(i); } },
                      h( 'div', { style: ("background-color:" + (row.bgColor) + "; pointer-events: none; width: 11px; height: 11px; border-radius: 100%; margin-right: 15px;") }),
                      h( 'p', { class: 'p-0 m-0 txt-left fl-1 fl', style: 'pointer-events: none;' },
                        h( 'span', { style: 'width: 50px; pointer-events: none;' }, row.min < 10 ? '0' + row.min : row.min, ":", row.sec < 10 ? '0' + row.sec : row.sec),
                        row.title
                      ),
                      h( 'svg', { style: 'pointer-events: none;', 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "pencil-alt", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", class: "svg-inline--fa fa-pencil-alt fa-w-16 fa-3x" }, h( 'path', { fill: "currentColor", d: "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z", class: "" }))
                    ),
                    h( 'button', { class: 'p-h-20', style: ("cursor: grab; " + (VIEW.drag.active ? 'pointer-events: none;' : '')), 'data-draggable': true, 'data-startindex': i },
                      h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "bars", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-inline--fa fa-bars fa-w-14 fa-3x" }, h( 'path', { fill: "currentColor", d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z", class: "" }))
                    )
                  ),
                  
                  row.collapsed && h( 'div', { style: "padding: 0px 20px; border-top: 1px solid #ced4da; background: rgb(248, 248, 251);" },
                    h( 'div', { style: 'padding: 10px 0px;' },
                      h( 'div', { style: 'padding: 3px 0px;', class: 'fl fl-justify-between fl-center-y' },
                        h( 'p', { class: 'm-0', style: 'min-width: 100px; max-width: 100px;' }, "Time"),
                        h( 'div', { class: 'select fl-1', style: 'margin-right: -1px;' },
                          h( 'select', { class: 'b-r-l-4', value: row.min, onInput: function (e) { editTimeInterval('min', e, i); } },
                            VIEW.timeIncrement.map(function (step, i) {
                                return h( 'option', { value: i }, i)
                              })
                          )
                        ),
                        h( 'div', { class: 'select fl-1' },
                          h( 'select', { class: 'b-r-r-4', value: row.sec, onInput: function (e) { editTimeInterval('sec', e, i); } },
                            VIEW.timeIncrement.map(function (step, i) {
                                return h( 'option', { value: i }, i)
                              })
                          )
                        )
                      ),
                      h( 'div', { style: 'padding: 3px 0px;', class: 'fl fl-justify-between fl-center-y' },
                        h( 'p', { class: 'm-0', style: 'width: 100px;' }, "Name"),
                        h( 'input', { class: 'fl-1 b-r-4', onInput: function (e) { editTitle(e, i); }, value: row.title })
                      )
                      /* <div style='padding: 3px 0px;' class='fl fl-justify-between fl-center-y'>
                        <p class='m-0' style='width: 100px;'>Song</p>
                        <input class='fl-1 b-r-4' />
                      </div> */,
                      h( 'div', { style: 'padding: 3px 0px;', class: 'fl fl-justify-between fl-center-y' },
                        h( 'p', { class: 'm-0', style: 'width: 100px;' }, "Color"),
                        h( 'div', { class: 'fl-1 fl' },
                          h( 'div', { class: 'b-r-l-4', style: ("width: 30px; margin-right: -1px; border: 1px solid #ced4da; background: " + (row.bgColor) + ";") }),
                          h( 'div', { class: 'select fl-1', style: 'margin-right: -1px;' },
                            h( 'select', { value: row.bgColor, class: 'b-r-r-4', style: ' text-transform: capitalize;', onInput: function (e) { editColor(e, i); } },
                              h( 'option', { value: '#1dd1a1' }, "green"),
                              h( 'option', { value: '#ff6b6b' }, "red"),
                              h( 'option', { value: '#feca57' }, "yellow"),
                              h( 'option', { value: '#2d98da' }, "blue"),
                              h( 'option', { value: '#f368e0' }, "pink"),
                              h( 'option', { value: '#a55eea' }, "purple")
                            )
                          )
                        )
                      ),
                      h( 'button', {
                        onClick: function () { deleteRow(i); }, style: 'margin: 3px 0px; min-width: 38px; min-height: 38px; background: white; border: 1px solid #ced4da; border-radius: 3px;' },
                        h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "trash", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-inline--fa fa-trash fa-w-14 fa-3x" }, h( 'path', { fill: "currentColor", d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z", class: "" }))
                      )
                    )
                  )
                )
              })
          )
        ),

        VIEW.sessionState === 1 && h( 'div', { class: 'fl-column h-full timerview', style: ("transition: background 300ms ease; background: " + (APP.sessions[APP.activeSession].stack[VIEW.currRow].bgColor) + ";") },
          h( 'div', { class: 'fl', style: "height: 25px; background: black;" },
            console.log(),
            new Array(APP.sessions[APP.activeSession].rounds + 1).fill(0).map(function (round, roundI) {
                return APP.sessions[APP.activeSession].stack.map(function (row, rowI) {
                  var session = APP.sessions[APP.activeSession];
                  var width = (row.totalSec / session.totalSec) * 100;
                  var isActive = roundI === VIEW.currRound && rowI === VIEW.currRow;

                  return h( 'div', { style: ("width: " + width + "%; " + (isActive ? ("opacity: 1; border-bottom: 1px solid " + (row.bgColor) + "; border-right: 1px solid white;") : 'opacity: .8; border-right: 1px solid white; border-bottom: 1px solid white;') + " background: " + (row.bgColor) + "; ") })
                })
              })
          ),
          h( 'div', { class: 'fl fl-justify-between p-h-20 p-v-10' }
            /* <div>
              <small>Elapsed</small>
              <h5 class='fl m-0' style='font-weight: 600;'>00<span class='txt-center' style='width: 10px;'>:</span>30</h5>
            </div> */,
            h( 'div', null,
              h( 'small', null, "Interval" ),
              h( 'h5', { class: 'fl m-0', style: 'font-weight: 600;' }, VIEW.currRow + 1, h( 'span', { class: 'txt-center', style: 'width: 20px;' }, "/"), APP.sessions[APP.activeSession].stack.length)
            ),
            h( 'div', null,
              h( 'small', null, "Round" ),
              h( 'h5', { class: 'fl m-0', style: 'font-weight: 600;' }, VIEW.currRound + 1, h( 'span', { class: 'txt-center', style: 'width: 20px;' }, "/"), APP.sessions[APP.activeSession].rounds + 1)
            )
            /* <div>
              <small>Remaining</small>
              <h5 class='fl m-0' style='font-weight: 600;'>29<span class='txt-center' style='width: 10px;'>:</span>30</h5>
            </div> */
          ),
          h( 'div', { class: 'fl-1 fl fl-center' },
            h( 'button', { class: 'timer-button', style: VIEW.locked ? 'pointer-events: none; opacity: .5;' : '', onClick: function () {
                if (APP.sessions[APP.activeSession].stack[VIEW.currRow].totalSec - VIEW.currSecs <= 2) {
                  lastStage();
                } else {
                  restartStage();
                }
              } },
              h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "chevron-left", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", class: "svg-inline--fa fa-chevron-left fa-w-10 fa-3x" }, h( 'path', { fill: "currentColor", d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z", class: "" }))
            ),
            h( 'div', { class: 'fl-1 fl fl-center' },
              h( 'div', { class: 'txt-center' },
                VIEW.start && h( 'h3', null, "Get Ready" ),
                VIEW.start && h( 'h1', null, VIEW.currSecs ),
                !VIEW.start && !VIEW.finish && VIEW.currSecs <= 5 && h( 'h1', null, VIEW.currSecs ),
                !VIEW.start && !VIEW.finish && VIEW.currSecs > 5 && h( 'h1', null, VIEW.min < 10 ? '0' + VIEW.min : VIEW.min, ":", VIEW.sec < 10 ? '0' + VIEW.sec : VIEW.sec ),
                !VIEW.start && !VIEW.finish && VIEW.currSecs > 5 && h( 'h3', null, APP.sessions[APP.activeSession].stack[VIEW.currRow].title ),
                VIEW.finish && h( 'h1', null, "Finished" )
              )
            ),
            h( 'button', { class: 'timer-button', style: VIEW.locked ? 'pointer-events: none; opacity: .5;' : '', onClick: function () { nextStage(true); } },
              h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "chevron-right", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", class: "svg-inline--fa fa-chevron-right fa-w-10 fa-3x" }, h( 'path', { fill: "currentColor", d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z", class: "" }))
            )
          ),
          h( 'div', { class: 'fl fl-justify-between' },
            h( 'button', {
              class: 'timer-button', style: VIEW.locked ? 'pointer-events: none; opacity: .5;' : '', onClick: function () { closeTimerView(); } },
              h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "times", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 352 512", class: "svg-inline--fa fa-times fa-w-11 fa-3x" }, h( 'path', { fill: "currentColor", d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z", class: "" }))
            ),
            h( 'div', { class: 'fl' },
              !VIEW.finish && h( 'button', {
                class: 'timer-button', style: VIEW.locked ? 'pointer-events: none; opacity: .5;' : '', onClick: function () { togglePlay(); } },
                VIEW.isPlaying && h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "pause", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-inline--fa fa-pause fa-w-14 fa-3x" }, h( 'path', { fill: "currentColor", d: "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z", class: "" })),
                !VIEW.isPlaying && h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "play", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-inline--fa fa-play fa-w-14 fa-3x" }, h( 'path', { fill: "currentColor", d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z", class: "" }))
              ),
              VIEW.finish && h( 'button', {
                class: 'timer-button', style: VIEW.locked ? 'pointer-events: none; opacity: .5;' : '', onClick: function () { startTimerView(); } },
                h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "redo", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", class: "svg-inline--fa fa-redo fa-w-16 fa-3x" }, h( 'path', { fill: "currentColor", d: "M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z", class: "" }))
              ),
              h( 'button', {
                class: 'timer-button', onClick: function () { toggleLock(); } },
                !VIEW.locked && h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "unlock", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-inline--fa fa-unlock fa-w-14 fa-3x" }, h( 'path', { fill: "currentColor", d: "M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z", class: "" })),
                VIEW.locked && h( 'svg', { 'aria-hidden': "true", focusable: "false", 'data-prefix': "fas", 'data-icon': "lock", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-inline--fa fa-lock fa-w-14 fa-3x" }, h( 'path', { fill: "currentColor", d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z", class: "" }))
              )
            )
          )
        )
      )
    )
  };

  return View;
}(m));

var loadData = function (ref) {
  var onLoaded = ref.onLoaded;
  var onError = ref.onError;

  //console.time('startRead')
  localforage.getItem('discotek').then(function (stored) {
    //console.timeEnd('startRead')
    for (var key in stored) {
      APP[key] = stored[key];
    }

    onLoaded();
  }).catch(function(err) {
    console.log(err);
    onError();
  });
};

var saveData = function () {
  setTimeout(function () {
    console.time('startwrite');
    localforage.setItem('discotek', APP).then(function(value) {
      console.timeEnd('startwrite');
    }).catch(function(err) {
      console.log(err);
    });
  }, 50);
};

var onProgramStart = function () {
  console.log('Program started.');

  newData();
  H(h( View, null ), document.body);
  
  loadData({
    onLoaded: function () {
      VIEW.render();
    },
    onError: function () {}
  });

  // setupKeyListeners()
  
  window.addEventListener('keyup', saveData);
  window.addEventListener('mouseup', saveData);
};

window.addEventListener('load', onProgramStart);
if (ENV === 'PROD') {
  window.addEventListener('beforeunload', function (event) {
    event.returnValue = "Are you sure you want to leave?";
  });
}
//# sourceMappingURL=bundle.js.map

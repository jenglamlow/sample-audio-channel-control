(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=(n(17),n(4)),l=n(5),u=n(9),s=n(6),d=n(10),m=(n(18),n(8)),f=n(1),b=n(7),v=n.n(b),p=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(1),n=Object(f.a)(t,2),o=n[0],r=n[1],i=Object(a.useState)(new(window.AudioContext||window.webkitAudioContext)),l=Object(f.a)(i,2),u=l[0],s=(l[1],Object(a.useState)(u.createGain())),d=Object(f.a)(s,2),b=d[0],p=(d[1],Object(a.useState)(Array(6).fill().map(function(e){return u.createGain()}))),j=Object(f.a)(p,2),h=j[0],w=(j[1],Object(a.useState)(Array(6).fill(!0))),E=Object(f.a)(w,2),g=E[0],y=E[1];Object(a.useEffect)(function(){var t=e.current;b.gain.value=o;var n=u.createChannelSplitter(6),a=u.createChannelMerger(6);t&&(console.log(t.audioTracks),u.createMediaElementSource(t).connect(b),b.connect(n),n.connect(h[0],0),n.connect(h[1],1),n.connect(h[2],2),n.connect(h[3],3),n.connect(h[4],4),n.connect(h[5],5),h[0].connect(a,0,0),h[1].connect(a,0,1),h[2].connect(a,0,2),h[3].connect(a,0,3),h[4].connect(a,0,4),h[5].connect(a,0,5),a.connect(u.destination))},[]),Object(a.useEffect)(function(){b.gain.value=o},[o]);var k=function(e,t){var n=Object(m.a)(g);n[e]=t,h[e].gain.value=t?1:0,y(n)};return c.a.createElement("div",null,c.a.createElement("video",{ref:e,src:v.a,width:"1000",controls:!0}),c.a.createElement("input",{style:{display:"block"},type:"range",step:"0.01",min:"0",max:"1",onChange:function(e){return r(e.target.value)},value:o}),Array(6).fill(0).map(function(e,t){return c.a.createElement(O,{key:t,idx:t,onChange:k})}),c.a.createElement("div",null,"1 - Left"),c.a.createElement("div",null,"2 - Right"),c.a.createElement("div",null,"3 - Center"),c.a.createElement("div",null,"4 - LFE"),c.a.createElement("div",null,"5 - Surround Left"),c.a.createElement("div",null,"6 - Surround Right"))},O=function(e){var t=e.idx,n=e.onChange,o=Object(a.useState)(!0),r=Object(f.a)(o,2),i=r[0],l=r[1];return c.a.createElement("button",{style:{width:"9rem",display:"block"},onClick:function(){var e=!i;l(e),n(t,e)}},"Channel ".concat(t+1,i?" ON":" OFF"))},j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports=n.p+"static/media/sample.c4f16254.mp4"}},[[11,1,2]]]);
//# sourceMappingURL=main.cff6de3f.chunk.js.map
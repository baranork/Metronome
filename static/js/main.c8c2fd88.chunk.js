(this["webpackJsonpreact-metronome"]=this["webpackJsonpreact-metronome"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/click1.7a7930a2.wav"},function(e,t,a){e.exports=a.p+"static/media/click2.fe0ded65.wav"},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),l=(a(14),a(3)),i=a(4),s=a(8),u=a(7),m=(a(15),a(5)),p=a.n(m),v=a(6),h=a.n(v),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).startStop=function(){n.state.playing?(clearInterval(n.timer),n.setState({playing:!1})):(n.timer=setInterval(n.playClick,60/n.state.bpm*1e3),n.setState({playing:!0,count:0},n.playClick))},n.playClick=function(){var e=n.state;e.count%e.beatsPerMeasure===0?n.click2.play():n.click1.play(),n.setState((function(e){return{count:(e.count+1)%e.beatsPerMeasure}}))},n.handleBpmChange=function(e){var t=e.target.value;n.state.playing?(clearInterval(n.timer),n.timer=setInterval(n.playClick,60/t*1e3),n.setState({count:0,bpm:t})):n.setState({bpm:t})},n.changeMeasure=function(e){var t=e.target.value;n.setState({beatsPerMeasure:t})},n.state={playing:!1,count:0,bpm:120,beatsPerMeasure:4},n.click1=new Audio(p.a),n.click2=new Audio(h.a),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.playing,a=e.bpm;return r.a.createElement("div",{className:"metronome"},r.a.createElement("div",null,r.a.createElement("div",{className:"title"},"Metronome"),r.a.createElement("div",{className:"bpm-slider"},r.a.createElement("div",null,a," BPM"),r.a.createElement("input",{type:"range",min:"50",max:"300",value:a,onChange:this.handleBpmChange})),r.a.createElement("button",{onClick:this.startStop},t?"Stop":"Start"),r.a.createElement("select",{className:"select-beat",value:this.state.beatsPerMeasure,onChange:this.changeMeasure},r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c8c2fd88.chunk.js.map
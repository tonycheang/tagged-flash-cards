(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),s=(n(15),n(2)),c=n(4),h=n(3),u=n(6),l=n(5),d=n(1),p=function(t){function e(){return Object(d.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{style:{fontSize:70,margin:"20px"}},this.props.data)}}]),e}(r.a.Component),m=function(t){function e(){return Object(d.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{minheight:"20%",style:{color:this.props.textColor,margin:"20px",fontSize:20}},""===this.props.data?"\xa0":this.props.data)}}]),e}(r.a.Component),y=function t(e,n){Object(d.a)(this,t),this.front=e,this.back=n},b=function(t){function e(t){var n;Object(d.a)(this,e),(n=Object(c.a)(this,Object(h.a)(e).call(this,t))).handleInput=n.handleInput.bind(Object(u.a)(n)),n.reportCorrectness=n.reportCorrectness.bind(Object(u.a)(n)),n.defaultColor="#888888";var a=["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","hu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","wo","n"];return n.cards=["\u3042","\u3044","\u3046","\u3048","\u304a","\u304b","\u304d","\u304f","\u3051","\u3053","\u3055","\u3057","\u3059","\u305b","\u305d","\u305f","\u3061","\u3064","\u3066","\u3068","\u306a","\u306b","\u306c","\u306d","\u306e","\u306f","\u3072","\u3075","\u3078","\u307b","\u307e","\u307f","\u3080","\u3081","\u3082","\u3084","\u3086","\u3088","\u3089","\u308a","\u308b","\u308c","\u308d","\u308f","\u3092","\u3093"].map(function(t,e){return new y(t,a[e])}),n.startText="type the phoentic translation",n.state={currentCard:n.cards[Math.floor(n.cards.length*Math.random())],showFront:!0,typed:n.startText,textColor:"rgba(230, 230, 230, 0.3)",backgroundColor:n.defaultColor},n}return Object(l.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleInput)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleInput)}},{key:"handleInput",value:function(t){this.state.typed===this.startText&&this.setState({typed:"",textColor:"#000000"});var e=this.state.typed;"Backspace"===t.key?e.length>0&&this.setState({typed:e.slice(0,e.length-1)}):/^\w$/.test(t.key)&&this.setState(function(e){return e.typed+=t.key}),this.state.typingTimer&&clearTimeout(this.state.typingTimer),this.setState({typingTimer:setTimeout(this.reportCorrectness,300)})}},{key:"reportCorrectness",value:function(){var t=this,e=this.state.currentCard.back,n=this.state.typed;n.length<e.length&&n===e.slice(0,n.length)||(this.state.typed===this.state.currentCard.back?(this.setState({backgroundColor:"#00BB00"}),this.setState({currentCard:this.cards[Math.floor(this.cards.length*Math.random())],typed:""})):this.setState({backgroundColor:"#BB0000"}),this.setState({typed:""}),setTimeout(function(){return t.setState({backgroundColor:t.defaultColor})},500),this.setState({typingTimer:null}))}},{key:"render",value:function(){var t=this.state.currentCard,e=this.state.showFront?t.front:t.back;return r.a.createElement("div",{align:"center",className:"App",style:{backgroundColor:this.state.backgroundColor,margin:"10px"}},r.a.createElement("header",{style:{fontSize:20}},"A Flash Card Mini-Game for Hiragana"),r.a.createElement(p,{data:e}),r.a.createElement(m,{data:this.state.typed,textColor:this.state.textColor}))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c4e25bbf.chunk.js.map
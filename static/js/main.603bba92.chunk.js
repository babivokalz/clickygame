(window.webpackJsonpclickygame=window.webpackJsonpclickygame||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"id":1,"name":"Grizz","image":"../images/grizz.png"},{"id":2,"name":"Ice Bear","image":"../images/iceBear.png"},{"id":3,"name":"Panda","image":"../images/panda.png"},{"id":4,"name":"Nom Nom","image":"../images/nomNom.png"},{"id":5,"name":"Captain Craboo","image":"../images/captainCraboo.png"},{"id":6,"name":"Ranger Tabes","image":"../images/tabes.png"},{"id":7,"name":"Charlie","image":"../images/charlie.png"},{"id":8,"name":"Ralph","image":"../images/ralph.jpg"},{"id":9,"name":"Chloe","image":"../images/chloe.png"}]')},22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),s=(a(27),a(12)),o=a(13),l=a(14),m=a(18),u=a(15),g=a(19),p=a(46),d=function(e){return r.a.createElement(p.a,e,e.children)},h=a(47),f=function(e){return r.a.createElement(h.a,null,e.children)},y=(a(32),function(e){var t=e.id,a=e.name,n=e.image,c=e.handlePicked;return r.a.createElement("div",null,r.a.createElement("div",{className:"card",key:t,"data-id":t,name:a,style:{backgroundImage:"url(".concat(n,")")},onClick:c}))}),b=(a(33),function(e){return r.a.createElement("div",{className:"score"},e.type,": ",e.score)}),k=(a(34),function(e){return r.a.createElement("div",{className:"default",style:e.style},e.message?r.a.createElement("p",null,e.message):r.a.createElement("p",{className:"default-msg black"},"Click an image to being"))}),E=a(17);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={characters:E,pickedCharacters:[],topScore:0,alertMessage:""},a.handlePicked=function(e){var t=e.target.attributes.getNamedItem("name").value;a.shuffleCharacters(),a.checkGuess(t,a.updateTopScore)},a.shuffleCharacters=function(){a.setState(a.state.characters=a.shuffleArray(a.state.characters))},a.shuffleArray=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},a.checkGuess=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state);n.pickedCharacters.includes(e)?(n.alertMessage="Sorry, you've already picked \"".concat(e.toUpperCase(),'"!'),n.pickedCharacters=[],a.setState(a.state=n)):(n.pickedCharacters.push(e),n.alertMessage="Way to go!",a.setState(a.state=n)),t(n,a.alertWinner)},a.updateTopScore=function(e,t){e.pickedCharacters.length>e.topScore&&(e.topScore++,a.setState(a.state=e)),t(e)},a.alertWinner=function(e){9===e.pickedCharacters.length&&(e.alertMessage="We have a Winner!",e.pickedCharacters=[],a.setState(a.state=e))},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d,{container:!0,direction:"column",style:{margin:"0 auto",maxWidth:945}},r.a.createElement(d,{item:!0,lg:12},r.a.createElement(f,null,"Excellent"===this.state.alertMessage?r.a.createElement(k,{message:this.state.alertMessage,style:{color:"purple"}}):r.a.createElement(k,{message:this.state.alertMessage,style:{color:"black"}}))),r.a.createElement(d,{container:!0,justify:"space-between"},r.a.createElement(d,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(f,null,r.a.createElement(b,{type:"Score",score:this.state.pickedCharacters.length}))),r.a.createElement(d,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(f,null,r.a.createElement(b,{type:"Top Score",score:this.state.topScore}))))),r.a.createElement(d,{container:!0,spacing:24,justify:"center",style:{maxWidth:945,margin:"0 auto"}},this.state.characters.map((function(t){return r.a.createElement(d,{item:!0,lg:3,md:3,sm:4,xs:6},r.a.createElement(y,{id:t.id,name:t.name,image:t.image,key:t.id,handlePicked:e.handlePicked}))}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.603bba92.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,r){},8:function(e,t,r){e.exports=r(9)},9:function(e,t,r){"use strict";r.r(t);var a=r(7),n=r(1),s=r(2),i=r(4),l=r(3),u=r(0),o=r.n(u),c=r(6),h=r.n(c);r(14);function m(e){}var d=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),r}(o.a.Component),p=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},a}return Object(s.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1],a=r.squares.slice();console.log("history: ",t),console.log("current: ",r),console.log("squares: ",a),console.log("history.length: ",t.length),console.log("---------------------------------------"),v(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],n=v(a.squares),s=r.map((function(e,t){}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(d,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null," ",e," "),o.a.createElement("ol",null,"  ",s,"  ")))}}]),r}(o.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(a.a)(t[r],3),s=n[0],i=n[1],l=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[l])return e[s]}return null}h.a.render(o.a.createElement(p,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.adbf4bf0.chunk.js.map
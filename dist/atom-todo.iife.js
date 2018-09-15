var atomTodo=function(t,e){"use strict";function o(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var n="input{background:rgba(0,0,0,.003);border:1px solid #ccc;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;color:inherit;font-size:24px;padding:6px;width:100%}";o(n);var r='input{-webkit-appearance:none;appearance:none;border:none;outline:none;padding:.2rem .5rem;text-align:center}input:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')}input:checked:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-0 0 100 100"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')}input:checked~.text{color:#d9d9d9;text-decoration:line-through}.group{align-items:center;display:flex}.text{flex:0%;font-size:24px;padding:1rem;text-align:left}button{background:none;border:0;color:#cc9a9a;font-size:30px;margin-right:1rem}';o(r);var a=":host{box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);display:block;width:100%}.group{background:#fff}";o(a);class i extends e.Element{constructor(){super(),this.attachShadow({mode:"open"}),this.state.list=[{text:"my initial todo",checked:!1},{text:"Learn about Web Components",checked:!0}]}render(){var t=this,o=this.state.list;return void 0===o&&(o=[]),e.h("div",{class:"group"},e.h("style",null,a),e.h("atom-todo-input",{placeholder:"What needs to be done?",create:function(e){var n=e.detail;t.setState({list:o.concat({text:n.text,checked:!1})})}}),e.h("div",null,o.map(function(n,r){var a=n.text,i=n.checked;return e.h("atom-todo-item",{text:a,checked:i,remove:function(){t.setState({list:o.filter(function(t,e){return e!==r})})},toggle:function(){t.setState({list:o.map(function(t,e){return e===r?Object.assign({},t,{checked:!t.checked}):t})})}})})))}}return customElements.define("atom-todo-item",class extends e.Element{constructor(){super(),this.attachShadow({mode:"open"})}static get props(){return["text","checked"]}render(){var t=this;return e.h("div",{class:"group"},e.h("style",null,r),e.h("input",{type:"checkbox",change:function(){t.dispatch("toggle")},checked:this.props.checked}),e.h("div",{class:"text"},this.props.text),e.h("button",{click:function(){t.dispatch("remove")}},"x"))}}),customElements.define("atom-todo-input",class extends e.Element{constructor(){super(),this.attachShadow({mode:"open"})}static get props(){return["placeholder"]}render(){var t=this;return e.h("form",{submit:function(e){e.preventDefault(),t.dispatch("create",{text:e.target.task.value}),e.target.reset()}},e.h("style",null,n),e.h("input",{name:"task",type:"text",placeholder:this.props.placeholder}))}}),customElements.define("atom-todo",i),t.TAG_TODO="atom-todo",t.TAG_ITEM="atom-todo-item",t.TAG_INPUT="atom-todo-input",t.default=i,t}({},atomico);
//# sourceMappingURL=atom-todo.iife.js.map

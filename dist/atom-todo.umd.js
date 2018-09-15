!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("atomico")):"function"==typeof define&&define.amd?define(["exports","atomico"],t):t(e.atomTodo={},e.atomico)}(this,function(e,t){"use strict";function o(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var n="input{background:rgba(0,0,0,.003);border:1px solid #ccc;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;color:inherit;font-size:24px;padding:6px;width:100%}";o(n);var i='input{-webkit-appearance:none;appearance:none;border:none;outline:none;padding:.2rem .5rem;text-align:center}input:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')}input:checked:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-0 0 100 100"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')}input:checked~.text{color:#d9d9d9;text-decoration:line-through}.group{align-items:center;display:flex}.text{flex:0%;font-size:24px;padding:1rem;text-align:left}button{background:none;border:0;color:#cc9a9a;font-size:30px;margin-right:1rem}';o(i);var r=":host{box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);display:block;width:100%}.group{background:#fff}";o(r);class a extends t.Element{constructor(){super(),this.attachShadow({mode:"open"}),this.state.list=[{text:"my initial todo",checked:!1},{text:"Learn about Web Components",checked:!0}]}render(){var e=this,o=this.state.list;return void 0===o&&(o=[]),t.h("div",{class:"group"},t.h("style",null,r),t.h("atom-todo-input",{placeholder:"What needs to be done?",create:function(t){var n=t.detail;e.setState({list:o.concat({text:n.text,checked:!1})})}}),t.h("div",null,o.map(function(n,i){var r=n.text,a=n.checked;return t.h("atom-todo-item",{text:r,checked:a,remove:function(){e.setState({list:o.filter(function(e,t){return t!==i})})},toggle:function(){e.setState({list:o.map(function(e,t){return t===i?Object.assign({},e,{checked:!e.checked}):e})})}})})))}}customElements.define("atom-todo-item",class extends t.Element{constructor(){super(),this.attachShadow({mode:"open"})}static get props(){return["text","checked"]}render(){var e=this;return t.h("div",{class:"group"},t.h("style",null,i),t.h("input",{type:"checkbox",change:function(){e.dispatch("toggle")},checked:this.props.checked}),t.h("div",{class:"text"},this.props.text),t.h("button",{click:function(){e.dispatch("remove")}},"x"))}}),customElements.define("atom-todo-input",class extends t.Element{constructor(){super(),this.attachShadow({mode:"open"})}static get props(){return["placeholder"]}render(){var e=this;return t.h("form",{submit:function(t){t.preventDefault(),e.dispatch("create",{text:t.target.task.value}),t.target.reset()}},t.h("style",null,n),t.h("input",{name:"task",type:"text",placeholder:this.props.placeholder}))}}),customElements.define("atom-todo",a),e.TAG_TODO="atom-todo",e.TAG_ITEM="atom-todo-item",e.TAG_INPUT="atom-todo-input",e.default=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=atom-todo.umd.js.map

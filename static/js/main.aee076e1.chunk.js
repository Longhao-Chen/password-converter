(this["webpackJsonppassword-converter"]=this["webpackJsonppassword-converter"]||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){},131:function(e,t){},133:function(e,t){},143:function(e,t){},145:function(e,t){},172:function(e,t){},174:function(e,t){},175:function(e,t){},180:function(e,t){},182:function(e,t){},188:function(e,t){},190:function(e,t){},209:function(e,t){},221:function(e,t){},224:function(e,t){},228:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(111),i=n.n(s),r=(n(121),n(112)),o=n(113),u=n(27),d=n(116),l=n(115),h=(n(122),n(114)),j=n(230),f=n(126);function p(e){return f.createHash("sha512").update(e).digest("base64")}var b=function(e){for(var t=e,n=0;n<50;++n)t=p(e+t+e);return t=t.slice(0,4)+":"+t.slice(4,8)+"$"+t.slice(8,12)},v=n(5),O=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={value:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.cleanPassword=a.cleanPassword.bind(Object(u.a)(a)),a.inputRef=c.a.createRef(),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState({password:b(e.target.value),value:e.target.value,copied:!1})}},{key:"cleanPassword",value:function(){this.setState({value:"",password:"",copied:!1}),this.inputRef.current.focus()}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"\u5728\u6b64\u8f93\u5165\u60a8\u7684\u5bc6\u7801\uff1a"}),Object(v.jsx)("input",{autoFocus:"autofocus",type:"password",value:this.state.value,onChange:this.handleChange,ref:this.inputRef}),Object(v.jsx)(j.a,{variant:"danger",onClick:this.cleanPassword,children:"\u6e05\u9664\u5bc6\u7801"}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"\u8f6c\u6362\u540e\u7684\u5bc6\u7801\uff1a"}),Object(v.jsx)("input",{readOnly:"readonly",type:"text",value:this.state.password}),Object(v.jsx)(h.CopyToClipboard,{text:this.state.password,onCopy:function(){return e.setState({copied:!0})},children:Object(v.jsx)(j.a,{children:this.state.copied?"\u5df2\u590d\u5236":"\u590d\u5236\u5bc6\u7801"})})]})}}]),n}(c.a.Component);var x=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"\u5bc6\u7801\u8f6c\u6362\u5668"}),Object(v.jsx)("hr",{}),Object(v.jsx)(O,{})]})};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(x,{})}),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.aee076e1.chunk.js.map
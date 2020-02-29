(this.webpackJsonpsorting_project=this.webpackJsonpsorting_project||[]).push([[0],[,,,,function(e,t,a){"use strict";a.r(t),a.d(t,"algos",(function(){return u}));var n=a(1),r=a(5),c=a(0),l=a.n(c),o=Object(c.memo)(Object(c.lazy)((function(){return a.e(3).then(a.bind(null,14))}))),u=["bubble sort","quick sort","merge sort","heap sort"],s=u.reduce((function(e,t){return[].concat(Object(r.a)(e),[{value:t,label:t}])}),[]),i=function(e){return l.a.createElement("div",{className:"group-styles"},l.a.createElement("span",null,e.label),l.a.createElement("span",{className:"group-badge-styles"},e.options.length))};t.default=function(e){var t=e.setArraySize,a=e.setSpeed,r=e.setMax,u=e.setOption,m=e.regenerate,d=e.defaultSpeed,b=e.defaultSize,p=e.defaultMax,v=Object(c.useState)(d),f=Object(n.a)(v,2),g=f[0],E=f[1],h=Object(c.useState)(b),j=Object(n.a)(h,2),O=j[0],S=j[1],y=Object(c.useState)(p),N=Object(n.a)(y,2),k=N[0],x=N[1],z=Object(c.useState)(s[0]),w=Object(n.a)(z,2),C=w[0],M=w[1],A=Object(c.useCallback)((function(e){var a=+e<10?10:+e>100?100:+e;S(a),t(a)}),[t]),q=Object(c.useCallback)((function(e){var t=e<20?20:e>500?500:e;x(t),r(t)}),[r]);return l.a.createElement("div",{className:"setting-container"},l.a.createElement("div",{className:"sorting-speed"},l.a.createElement("label",{htmlFor:"speed"},"Speed:"),l.a.createElement("input",{name:"speed",type:"range",min:10,max:1e3,value:g,onChange:function(e){E(+e.target.value),a(+e.target.value)}})),l.a.createElement("div",{className:"input-size"},l.a.createElement("input",{type:"text",name:"arraySize",value:O,onChange:function(e){return S(isNaN(+e.target.value)?b:+e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&A(+e.currentTarget.value)},required:!0}),l.a.createElement("label",{htmlFor:"arraySize"},"Size (10 or above):")),l.a.createElement("div",{className:"max-number"},l.a.createElement("input",{type:"text",value:k,onChange:function(e){return x(isNaN(+e.target.value)?p:+e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&q(+e.currentTarget.value)},name:"maxNumber",required:!0}),l.a.createElement("label",{htmlFor:"maxNumber"},"Max value (20 or above):")),l.a.createElement("div",{className:"select-class"},l.a.createElement(o,{className:"select-class",placeholder:"Algorithms:",value:C,onChange:function(e){M(e),e&&u(e.value)},options:s,formatGroupLabel:i})),l.a.createElement("div",null,l.a.createElement("button",{className:"setting-button",onClick:function(){A(O),q(k),m(O,k)}},"Regenerate!!")))}},,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),o=(a(11),function(e){var t=e.title,a=e.text;return r.a.createElement("div",{className:"header"},r.a.createElement("header",{className:"header-content"},r.a.createElement("h2",{className:"header-title"},t),a&&a.map((function(e,t){return r.a.createElement("div",{key:t},e)}))))}),u=a(1),s=a(4),i=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,23))})),m=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,4))})),d=function(){var e=Object(n.useState)(50),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(500),o=Object(u.a)(l,2),d=o[0],b=o[1],p=Object(n.useState)(250),v=Object(u.a)(p,2),f=v[0],g=v[1],E=Object(n.useState)(s.algos[0]),h=Object(u.a)(E,2),j=h[0],O=h[1],S=Object(n.useState)([]),y=Object(u.a)(S,2),N=y[0],k=y[1],x=function(e,t){for(var a=[],n=0;n<e;++n){var r=Math.floor(Math.random()*t);a.push(r<20?20:r)}k(a)};return Object(n.useEffect)((function(){x(a,f)}),[a,f,d,j]),r.a.createElement(n.Suspense,{fallback:function(){return r.a.createElement("h3",null,"Loading...")}},r.a.createElement("div",{className:"container"},r.a.createElement(m,{setArraySize:c,setSpeed:b,setMax:g,regenerate:x,setOption:O,defaultSize:50,defaultMax:250,defaultSpeed:500}),r.a.createElement(i,{array:N,speed:d,setArray:k,algoOption:j}),r.a.createElement("div",{className:"modal","aria-hidden":"true","data-backdrop":"true","data-keyboard":"true"},"Done!!!")))},b=(a(12),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,{title:"Sorting Algo project"}),r.a.createElement(d,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.99cc1542.chunk.js.map
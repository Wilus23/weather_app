(this.webpackJsonpapka_pogodowa=this.webpackJsonpapka_pogodowa||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(4),i=n.n(s),c=(n(9),n(3)),o=(n(10),n(0)),u=function(e){return Object(o.jsxs)("form",{onSubmit:e.submit,children:[Object(o.jsx)("input",{type:"text",value:e.value,onChange:e.change,placeholder:"Wpisz miasto"}),Object(o.jsx)("button",{children:"Wyszukaj miasta"})]})},h=function(e){var t=e.weather,n=t.date,a=t.main,r=t.sunrise,s=t.sunset,i=t.temp,c=t.pressure,u=t.wind,h=t.city,d=null;if(!t.err&&h){var j=new Date(1e3*r).toLocaleTimeString(),l=(new Date(1e3*s).toLocaleTimeString(),i-273.15);d=Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{children:["Wyszukiwanie dla miasta ",h.slice(0,1).toUpperCase()+h.slice(1,h.lenght)]}),Object(o.jsxs)("h4",{children:["Dane dla dnia i godziny: ",n]}),Object(o.jsxs)("h4",{children:["Temperatura: ",l]}),Object(o.jsxs)("h4",{children:["Stan: ",a]}),Object(o.jsxs)("h4",{children:["Wsch\xf3d s\u0142o\u0144ca: ",j]}),Object(o.jsxs)("h4",{children:["Ci\u015bnienie ",c]}),Object(o.jsxs)("h4",{children:["Wiatr: ",u,"km/h"]})]})}return Object(o.jsx)("div",{className:"result",children:e.error?"Nie mam w bazie ".concat(h):d})};var d=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)({date:"",main:"",sunrise:"",sunset:"",temp:"",pressure:"",wind:"",city:"",err:!1}),i=Object(c.a)(s,2),d=i[0],j=i[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{value:n,change:function(e){r(e.target.value)},submit:function(e){e.preventDefault();var t="http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat("aad516aaf5fcc1091dab2233f2e03817");fetch(t).then((function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119")})).then((function(e){return e.json()})).then((function(e){var t=(new Date).toLocaleString();j({error:!1,date:t,main:e.weather[0].main,sunrise:e.sys.sunrise,sunset:e.sys.sunset,temp:e.main.temp,pressure:e.main.pressure,wind:e.wind.speed,city:n})})).catch((function(e){j({error:!0,city:n})}))}}),Object(o.jsx)(h,{weather:d,error:d.error})]})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b11e732c.chunk.js.map
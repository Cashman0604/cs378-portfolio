(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(3),c=t.n(n);t(13),t(14),t(2);var i=e=>{let{id:a,title:t,description:l,price:n,imageName:c,order:i,setOrder:o}=e;return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{src:"images/"+c,className:"card-img-top",alt:t})),r.a.createElement("div",{className:"col-1"}),r.a.createElement("div",{className:"col-7"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"row"},r.a.createElement("p",null,l)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("p",null,"$"+n)),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{onClick:()=>{if(Array.isArray(i)&&i[a-1]>0){var e=i.slice();e[a-1]-=1,o(e)}},className:"btn btn-secondary"},"-"),r.a.createElement("span",null,Array.isArray(i)?i[a-1]:0),r.a.createElement("button",{onClick:()=>{if(Array.isArray(i)){var e=i.slice();e[a-1]+=1,o(e)}},className:"btn btn-secondary"},"+")))))};const o=[{id:1,title:"Gyoza",description:"Japanese dumplings",imageName:"gyoza.png",price:5.99},{id:2,title:"Sushi",description:"Japanese rice rolls",imageName:"sushi.png",price:6.99},{id:3,title:"Ramen",description:"Japanese noodle soup",imageName:"ramen.png",price:7.99},{id:4,title:"Matcha Cake",description:"Japanese green tea cake",imageName:"matcha-cake.png",price:4.99},{id:5,title:"Mochi",description:"Japanese rice cake",imageName:"mochi.png",price:3.99},{id:6,title:"Yakitori",description:"Japanese skewered chicken",imageName:"yakitori.png",price:2.99},{id:7,title:"Takoyaki",description:"Japanese octopus balls",imageName:"takoyaki.png",price:5.99},{id:8,title:"Sashimi",description:"Japanese raw fish",imageName:"sashimi.png",price:8.99},{id:9,title:"Okonomiyaki",description:"Japanese savory pancake",imageName:"okonomiyaki.png",price:6.99},{id:10,title:"Katsu Curry",description:"Japanese curry with fried pork",imageName:"katsu-curry.png",price:9.99}];function s(){const[e,a]=Object(l.useState)(new Array(o.length).fill(0));return r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:"images/shoplogo.png",alt:"logo"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row flavor-txt-1"},r.a.createElement("h3",null," The Best Japanese Food This Side of the Colorado River")),r.a.createElement("div",{className:"row flavor-txt-2"},r.a.createElement("h3",null," Our Menu"))),r.a.createElement("div",{className:"menu"},o.map(t=>r.a.createElement(i,{id:t.id,title:t.title,description:t.description,price:t.price,imageName:t.imageName,order:e,setOrder:a}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement("div",{className:"row bottom-bar"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h3",null,"Total: $",e.reduce((e,a,t)=>e+a*o[t].price,0).toFixed(2))),r.a.createElement("div",{className:"col-2"},r.a.createElement("button",{className:"order-button",onClick:()=>{var e=document.querySelector(".overlay");e.style.display&&"none"!==e.style.display?e.style.display="none":e.style.display="block",document.querySelector(".order-button").disabled=!0,document.querySelector(".clear-button").disabled=!0,document.querySelectorAll(".btn-secondary").forEach(e=>{e.disabled=!0}),document.body.style.overflow="hidden"}},"Order")),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{className:"clear-button",onClick:()=>a(new Array(o.length).fill(0))},"Clear All"))),r.a.createElement("div",{className:"overlay",style:{display:"none"}},r.a.createElement("div",{className:"order-popup"},e.every(e=>0===e)?r.a.createElement("h2",null,"No items in cart"):r.a.createElement("h2",null,"Order Placed!"),e.map((e,a)=>e>0&&r.a.createElement("p",null,e," ",o[a].title)),r.a.createElement("button",{onClick:()=>{document.querySelector(".overlay").style.display="none",document.querySelector(".order-button").disabled=!1,document.querySelector(".clear-button").disabled=!1,document.querySelectorAll(".btn-secondary").forEach(e=>{e.disabled=!1}),document.body.style.overflow="scroll"}},"Close"))))}var m=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then(a=>{let{getCLS:t,getFID:l,getFCP:r,getLCP:n,getTTFB:c}=a;t(e),l(e),r(e),n(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null))),m()},4:function(e,a,t){e.exports=t(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.d5c61979.chunk.js.map
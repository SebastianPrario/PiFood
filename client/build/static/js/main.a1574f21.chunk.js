(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){e.exports={searchBox:"SearchBar_searchBox__roLPD",searchInput:"SearchBar_searchInput__2wR25",titulo:"SearchBar_titulo__mevHM"}},159:function(e,t,n){},16:function(e,t,n){e.exports={container:"Form_container__3VM1V",form:"Form_form__3axRl",nombre:"Form_nombre__2S7il",img:"Form_img__17mqw",nivel:"Form_nivel__LZYbs",errornivel:"Form_errornivel__32ZAA",pasos:"Form_pasos__3PLar",resumen:"Form_resumen__1e3VW",textarea:"Form_textarea__23dIU",diets:"Form_diets__frIR3",buttons:"Form_buttons__3A7R1",button:"Form_button__Rxpo9"}},160:function(e,t,n){},168:function(e,t,n){},170:function(e,t){},175:function(e,t){},177:function(e,t){},188:function(e,t){},190:function(e,t){},217:function(e,t){},219:function(e,t){},220:function(e,t){},225:function(e,t){},227:function(e,t){},233:function(e,t){},235:function(e,t){},254:function(e,t){},266:function(e,t){},269:function(e,t){},273:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(64),i=n.n(r),s=(n(159),n(160),n(4)),o=n(21),l=n(46),u=n.n(l),b=n(1);function d(){return Object(b.jsxs)("div",{className:u.a.box,children:[Object(b.jsx)("h1",{className:u.a.titulo,children:"Qu\xe9 comemos hoy? "}),Object(b.jsx)("div",{className:u.a.button,children:Object(b.jsx)(o.b,{className:u.a.link,to:"/home",children:"ingresar"})}),Object(b.jsx)("h1",{className:u.a.mensaje,children:"elige entre miles de recetas que vas a preparar hoy!! "})]})}var j=n(8),p=n(14),m=n.p+"static/media/pizza.3811df2f.jpg",O=n(47),_=n.n(O);function v(e){var t=e.id,n=e.diet,a=e.nombre,c=e.image,r=e.closeButton,i=null===n||void 0===n?void 0:n.map((function(e){return e+" - "})),s=t>1e7;return Object(b.jsxs)("div",{className:_.a.container,children:[s&&Object(b.jsx)("button",{className:_.a.close,onClick:function(){return r(t)},children:"X"}),Object(b.jsxs)(o.b,{to:"/detail/".concat(t),className:_.a.title,children:[Object(b.jsx)("img",{className:_.a.image,src:c||m,alt:a}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:a})}),Object(b.jsx)("div",{className:_.a.dietsList,children:i})]})]})}var h=n(32),f=n.n(h),x=n(5),g=n(12),N=n(276),y=n(28),C=n.n(y);console.log(C.a),console.log(C.a);var R="ORDER_RECIPES",E="ORDER_BY_HEALTHSCORE",D="DELETE_RECIPE",S=function(){try{return function(){var e=Object(g.a)(Object(x.a)().mark((function e(t){var n,a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("".concat(C.a,"/recipes/"));case 2:return n=e.sent,a=n.data,e.abrupt("return",t({type:"GET_RECIPE",payload:a}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){alert(e)}},I=function(e){return function(){var t=Object(g.a)(Object(x.a)().mark((function t(n){var a,c;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("".concat(C.a,"/recipes?name=").concat(e));case 3:return a=t.sent,c=a.data,t.abrupt("return",n({type:"GET_RECIPE_NAME",payload:c}));case 8:t.prev=8,t.t0=t.catch(0),alert("no hay recetas con ese nombre");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e){try{return function(){var t=Object(g.a)(Object(x.a)().mark((function t(n){var a,c;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("".concat(C.a,"/recipes/").concat(e));case 2:return a=t.sent,c=a.data,t.abrupt("return",n({type:"GET_RECIPE_ID",payload:c}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){alert(t)}},F=function(e){var t="".concat(C.a,"/recipes/");try{return console.log(e),function(){var n=Object(g.a)(Object(x.a)().mark((function n(a){var c,r;return Object(x.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N.a.post(t,e);case 2:return c=n.sent,r=c.data,n.abrupt("return",a({type:"ADD_RECIPE",payload:r}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}catch(n){console.log(n)}},T=function(){var e="".concat(C.a,"/diets/");try{return function(){var t=Object(g.a)(Object(x.a)().mark((function t(n){var a,c;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.get(e);case 2:return a=t.sent,c=a.data,t.abrupt("return",n({type:"GET_DIETS",payload:c}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){console.log(t)}},L=function(e){return{type:"FILTER_DIETS",payload:e}},A=function(e){return{type:"FILTER_BDD",payload:e}};n(168);function B(e){var t=e.setCurrentPage,n=e.setSortBy,a=Object(p.b)(),c=Object(p.c)((function(e){return e.recipes})).filter((function(e){return e.id>1e7})),r=Object(p.c)((function(e){return e.diets})),i=null===r||void 0===r?void 0:r.map((function(e){return e.nombre})),s=function(e){var c;"A-z"===e.target.value||"Z-a"===e.target.value?(a((c=e.target.value,{type:R,payload:c})),t(0),n(e.target.value)):(a(function(e){return{type:E,payload:e}}(e.target.value)),t(0),n(e.target.value))};return Object(b.jsxs)("div",{className:"toolbar",children:[Object(b.jsxs)("div",{className:"orderContainer",children:[Object(b.jsx)("span",{children:"Ordenar por:"}),Object(b.jsxs)("select",{onChange:function(e){return s(e)},defaultValue:"default",className:"selectMain",children:[Object(b.jsx)("option",{value:"default",children:"Ordenar por..."}),Object(b.jsx)("option",{value:"A-z",children:"A-z"}),Object(b.jsx)("option",{value:"Z-a",children:"Z-a"}),Object(b.jsx)("option",{value:"L-H",children:"Lower"}),Object(b.jsx)("option",{value:"H-L",children:"Higher"})]})]}),Object(b.jsxs)("div",{className:"filterContainer",children:[Object(b.jsx)("span",{children:"Filtrar dietas:"}),Object(b.jsxs)("select",{onChange:function(e){return a(L(e.target.value)),void t(0)},className:"selectMain",children:[Object(b.jsx)("option",{value:"allDiets",children:"Todas las dietas"}),null===i||void 0===i?void 0:i.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Filtrar por Origen:"}),Object(b.jsxs)("select",{onChange:function(e){return a(A(e.target.value)),void t(0)},className:"selectMain",children:[Object(b.jsx)("option",{value:"TODAS",children:"Todas"}),Object(b.jsx)("option",{value:"Bdd",disabled:!c.length>0,children:"Propias"},"Bdd"),Object(b.jsx)("option",{value:"Api",children:"API"},"Api")]})]})]})}var k=n(99),P=n.n(k);function H(){return Object(b.jsx)("div",{className:P.a.loaderWrapper,children:Object(b.jsx)("div",{className:P.a.loader})})}function M(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.recipes})),n=Object(a.useState)(""),c=Object(j.a)(n,2),r=c[0],i=c[1];Object(a.useEffect)((function(){e(S()),e(T())}),[e]);var s=Object(a.useState)(0),o=Object(j.a)(s,2),l=o[0],u=o[1],d=Math.ceil((null===t||void 0===t?void 0:t.length)/9),m=Object(a.useMemo)((function(){return t.length>0?null===t||void 0===t?void 0:t.slice(9*l,9*(l+1)):[]}),[t,l,r]);function O(t){e(function(e){var t="".concat(C.a,"/recipes/").concat(e);try{return function(){var n=Object(g.a)(Object(x.a)().mark((function n(a){return Object(x.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N.a.delete(t);case 2:return n.sent.data,n.abrupt("return",a({type:D,payload:e}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}catch(n){console.log(n)}}(t)),u(0)}return t.length>0?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:f.a.tooBar,children:Object(b.jsx)(B,{setSortBy:i,setCurrentPage:u})}),Object(b.jsxs)("div",{className:f.a.paginado,children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:f.a.buttonpag,onClick:function(){u(l-1)},disabled:0===l,children:"Anterior"})}),Object(b.jsxs)("div",{className:f.a.page,children:["p\xe1gina ",l+1," de ",d]}),Object(b.jsx)("div",{className:f.a.un,children:Object(b.jsx)("button",{className:f.a.buttonpag,onClick:function(){u(l+1)},disabled:l===d-1,children:" Siguiente "})})]}),Object(b.jsx)("div",{className:f.a.cardsContainer,children:m.map((function(e){return Object(b.jsx)(v,{id:e.id,nombre:e.nombre,image:e.image,diet:e.diets,closeButton:O},e.id)}))})]}):Object(b.jsx)(H,{})}var W=n(100),G=n.n(W),Z=n.p+"static/media/search.945f1b66.png";function z(){var e=Object(p.b)(),t=Object(a.useState)(""),n=Object(j.a)(t,2)[1];return Object(b.jsxs)("div",{className:G.a.searchBox,children:[Object(b.jsx)("input",{type:"search",className:G.a.searchInput,placeholder:"Buscar Recetas...",onChange:function(t){return function(t){t.preventDefault(),n(t.target.value),e(I(t.target.value))}(t)},autoComplete:"off"}),Object(b.jsx)("img",{src:Z,alt:"search",height:40,width:30})]})}var V=n(37),Y=n.n(V);var X=function(){return Object(b.jsx)("nav",{className:Y.a.nav,children:Object(b.jsxs)("div",{className:Y.a.div,children:[Object(b.jsx)(o.b,{to:"/dietas",className:Y.a.button,children:Object(b.jsx)("button",{className:Y.a.button,children:"dietas"})}),Object(b.jsx)(z,{}),Object(b.jsx)(o.b,{to:"/form",className:Y.a.button,children:Object(b.jsx)("button",{className:Y.a.button,children:"crear"})})]})})},q=n(48),J=n.n(q);function U(){return Object(b.jsxs)("div",{className:J.a.body,children:[Object(b.jsxs)("header",{className:J.a.header,children:[Object(b.jsx)(X,{}),Object(b.jsx)("div",{className:J.a.div,children:Object(b.jsx)("div",{className:J.a.titulo,children:"Qu\xe9 comemos hoy?"})})]}),Object(b.jsx)("div",{className:J.a.recipesContainer,children:Object(b.jsx)(M,{})})]})}var K=n(20),Q=n(11),$=n(10),ee=n(16),te=n.n(ee);function ne(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.recipes})),n=Object(p.c)((function(e){return e.diets}));Object(a.useEffect)((function(){e(T()),e(S())}),[e]);var c=Object(s.n)(),r=Object(a.useState)({nombre:"",image:"",nivel_saludable:"",resumen:"",pasos:"",diets:[]}),i=Object(j.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)({nombre:"Debe ingresar un nombre",image:"",nivel_saludable:"",resumen:"Debe escribir un resumen de al menos 150 caracteres",pasos:"Debe escribir los pasos para preparar",diets:[]}),d=Object(j.a)(u,2),m=d[0],O=d[1],_=o.nombre,v=o.image,h=o.nivel_saludable,f=o.resumen,x=o.pasos,g=o.diets;function N(e){var t={};return e.nombre||(t.nombre="Debe ingresar un nombre"),e.resumen.length<150&&(t.resumen="Debe escribir un resumen de al menos 150 caracteres"),e.pasos||(t.pasos="Debe escribir los pasos para preparar"),e.nivel_saludable||(t.nivel_saludable="Debe ingresar el Nivel Saludable"),t}var y=null===n||void 0===n?void 0:n.map((function(e){return e}));function C(e){var t=e.target.name,n=e.target.value;l(Object($.a)(Object($.a)({},o),{},Object(Q.a)({},t,n))),O(N(Object($.a)(Object($.a)({},o),{},Object(Q.a)({},t,n))))}function R(n){return n.preventDefault(),t.filter((function(e){return e.nombre===o.nombre})).length>0?alert("Receta Repetida"):Object.keys(m).length?alert("Faltan datos en la receta"):o.diets<=1?alert("Seleccionar al menos una dieta"):(e(F(o)),l({nombre:"",image:"",nivel_saludable:"",resumen:"",pasos:"",diets:[]}),O({nombre:"Debe ingresar un nombre",image:"",nivel_saludable:"",resumen:"Debe escribir un resumen de al menos 150 caracteres",pasos:"Debe escribir los pasos para preparar",diets:[]}),void alert("tu receta ha sido creada con exito"))}return Object(b.jsx)("div",{className:te.a.container,children:Object(b.jsxs)("form",{className:te.a.form,onSubmit:function(e){return R(e)},children:[Object(b.jsxs)("div",{className:te.a.nombre,children:[Object(b.jsx)("label",{htmlFor:"name"}),Object(b.jsx)("input",{name:"nombre",type:"text",value:_,autoComplete:"off",onChange:function(e){C(e)}}),Object(b.jsx)("span",{children:m.nombre})]}),Object(b.jsxs)("div",{className:te.a.img,children:[Object(b.jsx)("label",{htmlFor:"image"}),Object(b.jsx)("input",{type:"text",name:"image",value:v,autoComplete:"off",onChange:function(e){C(e)}})]}),Object(b.jsxs)("div",{className:te.a.nivel,children:[Object(b.jsx)("label",{htmlFor:"nivel_saludable"}),Object(b.jsx)("input",{type:"number",name:"nivel_saludable",min:1,max:100,value:h,onChange:function(e){C(e)}})]}),Object(b.jsx)("span",{className:te.a.errornivel,children:m.nivel_saludable}),Object(b.jsxs)("div",{className:te.a.resumen,children:[Object(b.jsx)("label",{htmlFor:"resumen"}),Object(b.jsx)("textarea",{className:te.a.textarea,type:"text",name:"resumen",value:f,onChange:function(e){C(e)}}),Object(b.jsx)("span",{children:m.resumen})]}),Object(b.jsxs)("div",{className:te.a.pasos,children:[Object(b.jsx)("label",{htmlFor:"paso",children:" "}),Object(b.jsx)("textarea",{className:te.a.textarea,type:"text",name:"pasos",value:x,onChange:function(e){C(e)}}),Object(b.jsx)("span",{children:m.pasos})]}),Object(b.jsx)("div",{children:m.diets}),Object(b.jsxs)("div",{className:te.a.diets,children:["                       ",Object(b.jsx)("span",{children:"Seleccionar dietas"}),Object(b.jsx)("select",{onChange:function(e){return function(e){l(Object($.a)(Object($.a)({},o),{},{diets:[].concat(Object(K.a)(o.diets),[e.target.value])})),O(N(Object($.a)(Object($.a)({},o),{},{diets:e.target.value})))}(e)},defaultValue:"0",children:y.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.nombre},e.id)}))}),Object(b.jsx)("div",{children:g&&g.map((function(e){var t=y.filter((function(t){return t.id===Number(e)}));return Object(b.jsxs)("div",{className:te.a.listItem,children:[t[0].nombre,Object(b.jsx)("button",{type:"button",onClick:function(){return e=t[0].id,void l(Object($.a)(Object($.a)({},o),{},{diets:g.filter((function(t){return t!==String(e)}))}));var e},children:"X"})]},t[0].nombre)}))})]}),Object(b.jsxs)("div",{className:te.a.buttons,children:[Object(b.jsx)("button",{className:te.a.button,type:"button",onClick:function(e){return R(e)},children:"Crear Receta"}),Object(b.jsx)("button",{className:te.a.button,type:"button",onClick:function(){return c("/home")},children:"Atras"})]})]})})}var ae=n(38),ce=n.n(ae);function re(){var e=Object(p.c)((function(e){return e.recipeDetail})),t=Object(s.p)().id,n=Object(s.n)(),c=Object(p.b)();return Object(a.useEffect)((function(){c(w(t))}),[]),Object(b.jsxs)("div",{className:ce.a.container,children:[Object(b.jsx)("img",{className:ce.a.img,src:null!==e&&void 0!==e&&e.image?e.image:m,alt:e.nombre}),Object(b.jsx)("div",{className:ce.a.title,children:Object(b.jsx)("h1",{children:e.nombre})}),Object(b.jsxs)("h3",{children:["Nivel Saludable:",e.nivel_saludable]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{className:ce.a.resumen,children:[Object(b.jsx)("strong",{children:"Resumen:  "}),e.resumen]}),Object(b.jsxs)("p",{className:ce.a.resumen,children:[Object(b.jsx)("strong",{children:"Pasos:  "}),e.pasos]})]}),Object(b.jsx)("button",{type:"button",className:ce.a.button,onClick:function(){n("/Home")},children:"Back"})]})}var ie=n(72),se=n.n(ie),oe=n.p+"static/media/listado de dietas.2d88e8c3.jpg";function le(){var e=Object(s.n)();return Object(b.jsxs)("div",{className:se.a.container,children:[Object(b.jsx)("div",{className:se.a.image,children:Object(b.jsx)("img",{src:oe,alt:"listadodietas"})}),Object(b.jsx)("button",{type:"button",className:se.a.button,onClick:function(){e("/Home")},children:"Back"})]})}var ue=function(){return Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:"/",element:Object(b.jsx)(d,{})}),Object(b.jsx)(s.a,{path:"/home",element:Object(b.jsx)(U,{})}),Object(b.jsx)(s.a,{path:"/form",element:Object(b.jsx)(ne,{})}),Object(b.jsx)(s.a,{path:"/dietas",element:Object(b.jsx)(le,{})}),Object(b.jsx)(s.a,{path:"/detail/:id",element:Object(b.jsx)(re,{})})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,277)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},de=n(73),je={recipes:[],allRecipe:[],diets:[],recipeDetail:{},dietsOrdered:[]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RECIPE":return Object($.a)(Object($.a)({},e),{},{recipes:t.payload});case"GET_DIETS":return Object($.a)(Object($.a)({},e),{},{diets:t.payload});case"GET_RECIPE_NAME":return Object($.a)(Object($.a)({},e),{},{recipes:t.payload});case"GET_RECIPE":return Object($.a)(Object($.a)({},e),{},{allRecipe:t.payload,recipes:t.payload});case"GET_RECIPE_ID":return Object($.a)(Object($.a)({},e),{},{recipeDetail:t.payload});case"FILTER_DIETS":var n=e.allRecipe,a=n.filter((function(e){var n;return null===(n=e.diets)||void 0===n?void 0:n.includes(t.payload)}));return Object($.a)(Object($.a)({},e),{},{recipes:"allDiets"===t.payload?n:a});case"FILTER_BDD":var c=e.allRecipe,r=[];return"TODAS"===t.payload&&(r=c),"Api"===t.payload&&(r=c.filter((function(e){return e.id<1e7}))),"Bdd"===t.payload&&(r=c.filter((function(e){return e.id>1e7}))),Object($.a)(Object($.a)({},e),{},{recipes:r});case R:var i=[];return"A-z"===t.payload&&(i=e.allRecipe.sort((function(e,t){return e.nombre.toLowerCase()>t.nombre.toLowerCase()?1:-1}))),"Z-a"===t.payload&&(i=e.allRecipe.sort((function(e,t){return t.nombre.toLowerCase()>e.nombre.toLowerCase()?1:-1}))),Object($.a)(Object($.a)({},e),{},{recipes:i});case E:var s=(t.payload,e.allRecipe.sort((function(e,t){return e.nivel_saludable-t.nivel_saludable<0?1:-1})));return Object($.a)(Object($.a)({},e),{},{recipes:s});case D:var o=e.recipes.filter((function(e){return e.id!==t.payload}));return Object($.a)(Object($.a)({},e),{},{recipes:o});default:return e}},me=n(154),Oe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.b,_e=Object(de.c)(pe,Oe(Object(de.a)(me.a)));n(169).config(),i.a.render(Object(b.jsx)(p.a,{store:_e,children:Object(b.jsx)(o.a,{children:Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(ue,{})})})}),document.getElementById("root")),be()},28:function(e,t){e.exports="https://api-food-3z4m.onrender.com"},32:function(e,t,n){e.exports={paginado:"RecipeContainer_paginado__2t7-P",page:"RecipeContainer_page__GjuZy",cardsContainer:"RecipeContainer_cardsContainer__1iBr1",buttonpag:"RecipeContainer_buttonpag__12WB_",active:"RecipeContainer_active__DdCHq",norecipe:"RecipeContainer_norecipe__cZoVR",norecipetitle:"RecipeContainer_norecipetitle__3PR3x"}},37:function(e,t,n){e.exports={Nav:"Nav_Nav__1kJPA",div:"Nav_div__2fpNR",button:"Nav_button__1qZPW"}},38:function(e,t,n){e.exports={container:"RecipeDetail_container__3bwrN",img:"RecipeDetail_img__2FD1A",title:"RecipeDetail_title__2kh8J",resumen:"RecipeDetail_resumen__3-slC",button:"RecipeDetail_button__23IRm"}},46:function(e,t,n){e.exports={box:"Welcome_box__1DDat",container:"Welcome_container__pDpIM",titulo:"Welcome_titulo__2WAXa",button:"Welcome_button__3-Slk",link:"Welcome_link__11THF",mensaje:"Welcome_mensaje__2f6-h"}},47:function(e,t,n){e.exports={container:"RecipeCard_container__3Bxqv",title:"RecipeCard_title__1S50S",image:"RecipeCard_image__2hKQ9",dietsList:"RecipeCard_dietsList__1YDK-",close:"RecipeCard_close__pE9wK"}},48:function(e,t,n){e.exports={body:"Home_body__rYMgL",header:"Home_header__34w75",recipesContainer:"Home_recipesContainer__2YrAX",div:"Home_div__3TOYL",titulo:"Home_titulo__3L430"}},72:function(e,t,n){e.exports={container:"Dietas_container__whM6Y",image:"Dietas_image__2UEUT",button:"Dietas_button__3CAbR"}},99:function(e,t,n){e.exports={loaderWrapper:"Loader_loaderWrapper__9vsAl",loader:"Loader_loader__1zerS",spin:"Loader_spin__2BxHm"}}},[[273,1,2]]]);
//# sourceMappingURL=main.a1574f21.chunk.js.map
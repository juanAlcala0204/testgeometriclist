(this.webpackJsonptestgeometriclist=this.webpackJsonptestgeometriclist||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),r=c(10),i=c.n(r),l=c(7);var n=Object(s.createContext)(),o=function(e){var t=e.children,c=function(){var e=Object(s.useState)({open:!1,typeModal:!1}),t=Object(l.a)(e,2),c=t[0],a=t[1];return{stateModal:c,openModal:function(e){a({open:!0,typeModal:e})},closeModal:function(){a({open:!1,typeModal:!1})}}}(),r=c.stateModal,i=c.openModal,o=c.closeModal;return Object(a.jsx)(n.Provider,{value:{stateModal:r,openModal:i,closeModal:o},children:t})},d=n,j=[{id:1,title:"Triangulo",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5kxMFNzZI5W9JfetBPISbeXv96y-SmMU5lA&usqp=CAU",description:"Triangulo descripcion g\xe9nerica",tags:"tags tags tags"},{id:2,title:"Cuadrado",imageUrl:"https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45894/black-small-square-emoji-clipart-md.png",description:"Cuadrado descripcion g\xe9nerica",tags:"tags tags tags"},{id:3,title:"Cuadrado",imageUrl:"https://img.freepik.com/vector-gratis/cubo-3d-oro-cuadrado-geometrico-oro-aislado-realista-sobre-fondo-transparente-brillante-banner-rectangulo-aislado_173043-280.jpg?size=338&ext=jpg",description:"Cuadrado descripcion g\xe9nerica",tags:"tags tags tags"}],m=c(21),b=c(4),u=c(44);var g=Object(s.createContext)(),x=function(e){var t=e.children,c=function(e){var t=Object(s.useState)(e),c=Object(l.a)(t,2),a=c[0],r=c[1],i=Object(s.useState)({title:"",imageUrl:"",description:"",tags:""}),n=Object(l.a)(i,2),o=n[0],d=n[1];return{geometricFigures:a,addGeometricFigure:function(e){e.id=Object(u.a)(),r([].concat(Object(b.a)(a),[e]))},selectGeometricFigure:function(e){var t={id:e.id,title:e.title,description:e.description,imageUrl:e.imageUrl,tags:e.tags};d(Object(m.a)({},t))},updateGeometricFigure:function(e,t){var c=a.map((function(c){return c.id===e?t:c}));r(c)},geometricFigureSelected:o,deleteGeometricFigure:function(e){var t=a.filter((function(t){return t.id!==e.id}));r(t)}}}(j),r=c.geometricFigures,i=c.addGeometricFigure,n=c.updateGeometricFigure,o=c.geometricFigureSelected,d=c.selectGeometricFigure,x=c.deleteGeometricFigure;return Object(a.jsx)(g.Provider,{value:{geometricFigures:r,addGeometricFigure:i,updateGeometricFigure:n,geometricFigureSelected:o,selectGeometricFigure:d,deleteGeometricFigure:x},children:t})},O=g;function p(e){var t=e.geometricFigure,c=Object(s.useContext)(d).openModal,r=Object(s.useContext)(O),i=r.selectGeometricFigure,l=r.deleteGeometricFigure;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"card",style:{marginTop:"20px"},children:[Object(a.jsx)("div",{className:"card-header bg-dark border-bottom-0",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-2",children:Object(a.jsx)("button",{className:"btn btn-warning",onClick:function(){return i(t),void c("edit")},children:Object(a.jsx)("span",{"aria-hidden":"true",children:Object(a.jsx)("i",{className:"fas fa-edit"})})})}),Object(a.jsx)("div",{className:"col-md-7"}),Object(a.jsx)("div",{className:"col-md-3",children:Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){return e=t,console.log(e),void l(e);var e},children:Object(a.jsx)("span",{"aria-hidden":"true",children:Object(a.jsx)("i",{className:"fas fa-trash-alt"})})})})]})}),Object(a.jsx)("img",{src:t.imageUrl,alt:t.title,className:"card-img-top",style:{height:"200px",objectFit:"cover"}}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h4",{children:t.title}),Object(a.jsx)("p",{children:t.tags})]})]})})}var h=c(43),v=c(41),f=c(42),N=c(14);function F(){var e=Object(s.useContext)(d),t=e.stateModal,c=e.closeModal,r=Object(s.useContext)(O),i=r.updateGeometricFigure,l=r.geometricFigureSelected,n=Object(N.a)({defaultValues:l}),o=n.register,j=n.handleSubmit,m=n.setValue,b=n.reset;m("title",l.title),m("imageUrl",l.imageUrl),m("description",l.description),m("tags",l.tags),Object(s.useEffect)((function(){b(l)}),[l,b]);return Object(a.jsxs)(h.a,{isOpen:"edit"===t.typeModal&&t.open,size:"lg",children:[Object(a.jsx)(v.a,{children:"Editar Figura."}),Object(a.jsx)(f.a,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("form",{onSubmit:j((function(e){e.id=l.id,console.log(l),i(e.id,e),c()})),children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"T\xedtulo Figura"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Escriba el nombre de la figura.",name:"title",ref:o})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"imageUrl",children:"Imagen URL Figura:"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Escriba el url de la imagen de la figura.",name:"imageUrl",ref:o})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"description",children:"Descripci\xf3n"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Escriba una breve descripci\xf3n de la figura.",name:"description",ref:o})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"tags",children:"Tags Figura"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Escriba los tags de la figura.",name:"tags",ref:o})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("button",{type:"submit",className:"btn btn-success",children:"Guardar Figura"})]})})})})})]})}function y(e){var t=e.results;console.log(t);var c=t||[];return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("div",{className:"row",children:c.map((function(e){return Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)(p,{geometricFigure:e})},e.id)}))})})}),Object(a.jsx)(F,{})]})}function G(){var e=Object(s.useContext)(d),t=e.stateModal,c=e.closeModal,r=Object(s.useContext)(O).addGeometricFigure,i=Object(N.a)(),l=i.register,n=i.handleSubmit;return Object(a.jsxs)(h.a,{isOpen:"register"===t.typeModal&&t.open,size:"lg",children:[Object(a.jsx)(v.a,{children:"Registrar Figura."}),Object(a.jsx)(f.a,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("form",{onSubmit:n((function(e){console.log(e),r(e),c()})),children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"T\xedtulo Figura"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Escriba el nombre de la figura.",name:"title",ref:l})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"imageUrl",children:"Imagen URL Figura:"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Escriba el url de la imagen de la figura.",name:"imageUrl",ref:l})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"description",children:"Descripci\xf3n"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Escriba una breve descripci\xf3n de la figura.",name:"description",ref:l})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"tags",children:"Tags Figura"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Escriba los tags de la figura.",name:"tags",ref:l})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("button",{type:"submit",className:"btn btn-success",children:"Guardar Figura"})]})})})})})]})}function M(){return Object(a.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(a.jsx)("a",{className:"navbar-brand",children:"Welcome to Testing Task!"})})}c(38);function C(){var e=Object(s.useContext)(d).openModal,t=Object(s.useState)(""),c=Object(l.a)(t,2),r=c[0],i=c[1],n=Object(s.useContext)(O).geometricFigures,o=r?n.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())})):n;return Object(a.jsxs)("div",{children:[Object(a.jsx)(M,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsx)("div",{className:"card",style:{marginTop:"50px"},children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-3"}),Object(a.jsx)("div",{className:"col-md-7",children:Object(a.jsx)("h1",{className:"title-custom",children:"Geometric Figures List"})}),Object(a.jsx)("div",{className:"col-md-2"})]}),Object(a.jsxs)("div",{className:"row",style:{marginTop:"30px",marginBottom:"30px"},children:[Object(a.jsx)("div",{className:"col-md-3"}),Object(a.jsx)("div",{className:"col-md-3",children:Object(a.jsxs)("button",{className:"btn btn-lg btn-success",onClick:function(){return e("register")},children:["Agregar Figura  ",Object(a.jsx)("i",{className:"fas fa-plus-circle"})]})}),Object(a.jsx)("div",{className:"col-md-3",children:Object(a.jsxs)("div",{className:"input-group input-group-lg",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-lg",children:Object(a.jsx)("i",{className:"fas fa-search"})})}),Object(a.jsx)("input",{className:"form-control",type:"text",placeholder:"Search","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",defaultValue:r,onChange:function(e){!function(e){i(e.target.value)}(e)}})]})}),Object(a.jsx)("div",{className:"col-md-3"})]}),Object(a.jsxs)("div",{className:"row",style:{marginTop:"50px",marginBottom:"30px"},children:[Object(a.jsx)("div",{className:"col-md-1"}),Object(a.jsx)("div",{className:"col-md-10",children:Object(a.jsx)(y,{results:o})}),Object(a.jsx)("div",{className:"col-md-1"})]})]})})})})})})}),Object(a.jsx)(G,{})]})}var U=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(x,{children:Object(a.jsx)(o,{children:Object(a.jsx)(C,{})})})})};i.a.render(Object(a.jsx)(U,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.041c3bdd.chunk.js.map
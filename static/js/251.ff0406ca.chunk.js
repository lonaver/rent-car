"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[251],{4778:function(e,r,t){t.d(r,{Z:function(){return S}});var n=t(2791),a=t(3433),i=t(1413),s=t(5861),l=t(9439),c=t(4687),o=t.n(c),_=t(4164),u={conteiner:"modal_conteiner__CMbRh",overlay:"modal_overlay__D1Rh8",modal:"modal_modal__XhTq8",close_btn:"modal_close_btn__i2MLm",close:"modal_close__MkPJ0",card_car:"modal_card_car__ol7sr",container_img:"modal_container_img__u8dtP",wrapper_text:"modal_wrapper_text__4tcVu",button_card:"modal_button_card__dPB9V",wrap_subtitle:"modal_wrap_subtitle__AI8EU",options:"modal_options__OA9qW",options_func:"modal_options_func__X9UEL",description_subtitle:"modal_description_subtitle__E7EYb",description:"modal_description__tR1uE",wrap_options_rent:"modal_wrap_options_rent__EGOie",options_rent_array:"modal_options_rent_array__qFrD6",options_rent:"modal_options_rent__TO7I5"};var d=t.p+"static/media/close.deb20e5da737e93121346cb3855e8f21.svg",m="buttonLink_link__h3l3b",p=t(184),h=function(e){var r=e.title;return(0,p.jsx)("a",{href:"tel:+380730000000",className:m,children:r})},f=document.getElementById("modal-root"),x=function(e){var r=e.carCard,t=e.onClose,n=r.id,a=r.make,i=r.model,s=r.year,l=r.type,c=r.img,o=r.description,m=r.rentalPrice,x=r.rentalCompany,j=r.mileage,b=r.functionalities,v=r.address,N=r.rentalConditions,g=v.split(", "),y=g[g.length-1],w=g[g.length-2],C=N.split(/\r\n|\r|\n/g),S=C[0];var k=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}(j);return(0,_.createPortal)((0,p.jsx)("div",{className:u.overlay,onClick:t,children:(0,p.jsxs)("div",{className:u.modal,children:[(0,p.jsx)("button",{type:"button",onClick:t,className:u.close_btn,children:(0,p.jsx)("img",{className:u.close,src:d,alt:"Icon close",onClick:t})}),(0,p.jsxs)("div",{className:u.card_car,children:[(0,p.jsx)("div",{className:u.wrap_button_fav}),(0,p.jsx)("div",{className:u.container_img,children:(0,p.jsx)("img",{src:c,alt:i})}),(0,p.jsxs)("div",{className:u.wrapper_text,children:[(0,p.jsx)("div",{className:u.wrap_subtitle,children:(0,p.jsxs)("p",{className:u.subtitle,children:[a," ",(0,p.jsx)("span",{children:i}),", ",s]})}),(0,p.jsxs)("ul",{className:u.options,children:[(0,p.jsx)("li",{children:y}),(0,p.jsx)("li",{children:w}),(0,p.jsx)("li",{children:x}),(0,p.jsx)("li",{children:l}),(0,p.jsx)("li",{children:i}),(0,p.jsx)("li",{children:n})]}),(0,p.jsx)("p",{className:u.description_subtitle,children:o}),(0,p.jsx)("h3",{className:u.description,children:"Accessories and functionalities:"}),(0,p.jsx)("ul",{className:u.options_func,children:b.map((function(e,r){return(0,p.jsx)("li",{children:e},r)}))}),(0,p.jsx)("h3",{className:u.description_subtitle,children:"Rental Conditions: "}),(0,p.jsxs)("div",{className:u.wrap_options_rent,children:[(0,p.jsx)("ul",{className:u.options_rent_array,children:C.map((function(e,r){return 0===r?(0,p.jsxs)("li",{children:[S.slice(0,S.length-2)," ",(0,p.jsx)("span",{children:S.slice(S.length-2,S.length)})]}):(0,p.jsx)("li",{children:e},r)}))}),(0,p.jsxs)("p",{className:u.options_rent,children:["mileage: ",(0,p.jsx)("span",{children:k})]}),(0,p.jsxs)("p",{className:u.options_rent,children:["price: ",(0,p.jsx)("span",{children:m})]})]})]}),(0,p.jsx)(h,{title:"Rental car"})]})]})}),f)},j={conteiner:"galleryItem_conteiner__EgqgD",card_car:"galleryItem_card_car__XMiqD",wrap_button_fav:"galleryItem_wrap_button_fav__WPwRo",container_img:"galleryItem_container_img__1F2oj",wrapper_text:"galleryItem_wrapper_text__0OgUm",button_card:"galleryItem_button_card__PjqaH",wrap_subtitle:"galleryItem_wrap_subtitle__OSK7k",options:"galleryItem_options__rGp7J"},b=t(2134),v="buttonFavorite_btn_favorite__tii43",N="buttonFavorite_btn_favorite_active__1VUty",g=function(e){var r=e.onClick,t=e.favorite;return(0,p.jsx)("button",{type:"button",className:t?N:v,onClick:r,children:t?(0,p.jsx)(b.M_L,{size:18}):(0,p.jsx)(b.lo,{size:18})})},y=t(7361),w=function(e){var r=e.car,t=r.id,c=r.make,_=r.model,u=r.year,d=r.type,m=r.img,h=r.rentalPrice,f=r.rentalCompany,b=r.functionalities,v=r.address,N=(0,n.useState)(!1),w=(0,l.Z)(N,2),C=w[0],S=w[1],k=function(){S(!1)},I=(0,n.useState)(!1),E=(0,l.Z)(I,2),P=E[0],F=E[1];(0,n.useEffect)((function(){var e=function(e){"Escape"===e.code&&k()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]);var M=function(){var e=(0,s.Z)(o().mark((function e(t){var n,s,l,c,_;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.parse(localStorage.getItem(y.jP))||[],s=n.some((function(e){return e.id===t})),s?(_=n.filter((function(e){return e.id!==t})),localStorage.setItem(y.jP,JSON.stringify(_))):(l=(0,i.Z)({},r),c=[].concat((0,a.Z)(n),[l]),localStorage.setItem(y.jP,JSON.stringify(c))),F(!s);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();(0,n.useEffect)((function(){var e=(JSON.parse(localStorage.getItem(y.jP))||[]).some((function(e){return e.id===t}));F(e)}),[t]);var O=v.split(", "),Z=O[O.length-1],B=O[O.length-2],J=b[0].split(" ")[0];return(0,p.jsxs)("li",{className:j.card_car,children:[(0,p.jsx)("div",{className:j.wrap_button_fav,children:(0,p.jsx)(g,{onClick:function(){return M(t)},favorite:P})}),(0,p.jsx)("div",{className:j.container_img,children:(0,p.jsx)("img",{src:m,alt:_})}),(0,p.jsxs)("div",{className:j.wrapper_text,children:[(0,p.jsxs)("div",{className:j.wrap_subtitle,children:[(0,p.jsxs)("p",{className:j.subtitle,children:[c," ",(0,p.jsx)("span",{children:_}),", ",u]}),(0,p.jsx)("p",{children:h})]}),(0,p.jsxs)("ul",{className:j.options,children:[(0,p.jsx)("li",{children:Z}),(0,p.jsx)("li",{children:B}),(0,p.jsx)("li",{children:f}),(0,p.jsx)("li",{children:d}),(0,p.jsx)("li",{children:_}),(0,p.jsx)("li",{children:t}),(0,p.jsx)("li",{children:J})]})]}),(0,p.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),S(!0)},className:j.button_card,children:"Learn more"}),C&&(0,p.jsx)(x,{onClose:function(e){e.target!==e.currentTarget&&"Escape"!==e.code||k()},carCard:r},t)]},t)},C="carsGallery_ImageGallery__l1B6P",S=function(e){var r=e.arrayCars;return(0,p.jsx)("ul",{className:C,children:r.map((function(e){return(0,p.jsx)(w,{car:e},e.id)}))})}},8572:function(e,r,t){t.d(r,{Z:function(){return h}});t(2791);var n="form_form_wrapper__ZVHW9",a="form_select_brand__kC7du",i="form_select_price__-mdMK",s="form_input_start__onFt7",l="form_input_end__cggjD",c="form_text_select__ii4Jt",o="form_text_placeholder__1r3a+",_="form_btn_filter__fKq36",u="form_label__UGexp",d="form_label_empty__kTWhr",m="form_wrap_input__4n+dm",p=t(184),h=function(e){var r=e.onSubmit,t=e.brandCar,h=e.priceFilter;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("form",{onSubmit:r,children:(0,p.jsxs)("div",{className:n,children:[(0,p.jsxs)("label",{className:u,children:["Car brand",(0,p.jsxs)("select",{name:"brand",className:a,children:[(0,p.jsx)("option",{value:"",className:o,children:"Enter the text"}),t.map((function(e,r){return(0,p.jsx)("option",{value:e,className:c,children:e},r)}))]})]}),(0,p.jsxs)("label",{className:u,children:["Price/1 hour",(0,p.jsxs)("select",{name:"priceHour",className:i,children:[(0,p.jsx)("option",{value:"",className:o,children:"To $"}),h.map((function(e,r){return(0,p.jsx)("option",{value:e,className:c,children:e},r)}))]})]}),(0,p.jsxs)("div",{className:m,children:[(0,p.jsxs)("label",{htmlFor:"input_start",className:u,children:["\u0421ar mileage / km",(0,p.jsx)("input",{className:s,htmlFor:"input_start",type:"text",autoComplete:"off",placeholder:"From",name:"milageStart"})," "]}),(0,p.jsxs)("label",{htmlFor:"input_end",className:d,children:[" ",(0,p.jsx)("input",{className:l,htmlFor:"input_end",type:"text",autoComplete:"off",placeholder:"To",name:"milageEnd"})]})]}),(0,p.jsx)("button",{className:_,type:"submit",children:"Search"})]})})})}},7361:function(e,r,t){t.d(r,{iB:function(){return n},jP:function(){return i},yo:function(){return s}});for(var n=[],a=10;a<=110;a+=10)n.push(a);var i="KEY_FAVORITE_CARS",s="https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/aston_martin_dbs.webp"},5251:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(3433),a=t(9439),i=t(2791),s=t(4778),l=t(7361),c=t(8524),o=t(8572),_="FavoritePage_car_container__1On44",u=t(184),d=function(){var e=(0,i.useState)(JSON.parse(localStorage.getItem(l.jP))||[]),r=(0,a.Z)(e,2),t=r[0],d=r[1];(0,i.useEffect)((function(){var e=JSON.parse(localStorage.getItem(l.jP))||[];d(e)}),[]);return(0,u.jsxs)("div",{className:_,children:[(0,u.jsx)(o.Z,{onSubmit:function(e){e.preventDefault();var r=e.currentTarget,a=r.elements.brand.value,i=r.elements.priceHour.value,s=r.elements.milageStart.value,c=r.elements.milageEnd.value,o=(0,n.Z)(t);if(a||i||s||c)a&&(o=o.filter((function(e){return e.make===a}))),Number(i)>0&&(o=o.filter((function(e){return Number(e.rentalPrice.replace("$",""))===Number(i)}))),Number(s)>0&&0===Number(c)&&(o=o.filter((function(e){return Number(e.mileage)>=Number(s)}))),Number(c)>0&&0===Number(s)&&(o=o.filter((function(e){return Number(e.mileage)<=Number(c)}))),Number(s)>0&&Number(c)>0&&(o=o.filter((function(e){return Number(e.mileage)>=Number(s)&&Number(e.mileage)<=Number(c)}))),d(o);else{var _=JSON.parse(localStorage.getItem(l.jP))||[];d(_)}},brandCar:c,priceFilter:l.iB}),t.length>0?(0,u.jsx)(s.Z,{arrayCars:t}):(0,u.jsx)("h2",{children:"You don`t have favorites car"})]})}},8524:function(e){e.exports=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]')}}]);
//# sourceMappingURL=251.ff0406ca.chunk.js.map
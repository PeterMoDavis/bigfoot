(this.webpackJsonpbigfoot=this.webpackJsonpbigfoot||[]).push([[0],{21:function(e,t,o){},23:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o(8),c=o.n(r),s=o(9),i=o(10),a=o(14),u=o(12),l=o(0),d=function(e){Object(a.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(s.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).styles={header:{fontFamily:"Squada One",fontSize:"100px"}},e}return Object(i.a)(o,[{key:"getBigfoot",value:function(){fetch("https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json").then((function(e){return e.json()})).then((function(e){}))}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"d-flex flex-column flex-sm-row justify-content-center ",children:Object(l.jsx)("h1",{className:"text-center",style:this.styles.header,children:"BIGFOOT ENCOUNTERS"})})})}}]),o}(n.Component),m=o(6),f=o.n(m),b=o(11),j=o(7),y=o(13),p=o(2),g=o.n(p),h=o.p+"static/media/bigfoot.3045098c.png",v=o.p+"static/media/roar.d34f8a59.wav";o(21);g.a.accessToken="pk.eyJ1IjoicG1vZGF2aXMiLCJhIjoiY2twZDAzam80MGl4eDJucjNja3F0eWt6YyJ9.pDCggo-HzdU4pDYxaUT3Tw";var x=function(){var e=Object(n.useState)(3),t=Object(y.a)(e,2),o=(t[0],t[1],[]),r=[],c=[],s=function(){var e=Object(b.a)(f.a.mark((function e(){var t,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector(".mapboxgl-ctrl-geolocate"),(n=new Audio(v)).volume=.05,r=new Event("click"),t.dispatchEvent(r),document.querySelector("body").style.backgroundColor="#830303",document.querySelector("button").innerText="Loading...",document.querySelector("#bigfoot").style.display="block",document.querySelector("#bigfoot").style.opacity="0",document.querySelector("#bigfoot").style.opacity=".8",e.next=12,new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}));case 12:e.sent,document.querySelector("body").classList.add("shake"),document.querySelector("button").innerText="Here we are.",document.querySelector("#bigfoot").style.opacity=".0",n.play(),setTimeout((function(){document.querySelector("button").innerText="Get Encounters",document.querySelector("body").style.backgroundColor="white",document.querySelector("#bigfoot").style.display="none",document.querySelector("body").classList.remove("shake")}),3e3),console.log(o);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){fetch("https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json&resultOffset=0&resultRecordCount=2000").then((function(e){return e.json()})).then((function(e){o=e.features.map((function(e){return{description:e.attributes.descriptio,title:e.attributes.name,geometry:{coordinates:[e.geometry.x,e.geometry.y]}}})),console.log(e)})),fetch("https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json&resultOffset=2000&resultRecordCount=3200").then((function(e){return e.json()})).then((function(e){r=e.features.map((function(e){return{description:e.attributes.descriptio,title:e.attributes.name,geometry:{coordinates:[e.geometry.x,e.geometry.y]}}}))})).then((function(){c=[].concat(Object(j.a)(o),Object(j.a)(r)),i()})),console.log(o),console.log(o)}),[]);var i=function(){var e=new g.a.Map({container:a.current,style:"mapbox://styles/pmodavis/ckpeh637y08xj18qrb14covxq",center:[-95.712891,37.09024],zoom:3});return c.forEach((function(t){var o=document.createElement("div");o.className="marker",new g.a.Marker(o).setLngLat(t.geometry.coordinates).setPopup(new g.a.Popup({offset:25}).setHTML("<h3>"+t.title+"</h3><p>"+t.description+"</p>")).addTo(e)})),e.addControl(new g.a.NavigationControl,"bottom-right"),e.addControl(new g.a.GeolocateControl,"top-right",{positionOptions:{enableHighAccuracy:!0},fitBoundsOptions:{maxZoom:15},showAccuracyCircle:!0,trackUserLocation:!0}),function(){return e.remove()}},a=Object(n.useRef)(null);return Object(l.jsxs)("div",{className:"d-flex flex-column align-items-center main-container",children:[Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("button",{onClick:function(){return s()},children:"Get Encounters"})}),Object(l.jsx)("p",{className:"mt-3",children:"Turn Down Volume!"}),Object(l.jsxs)("div",{className:"bigfoot-parent",children:[Object(l.jsx)("span",{children:Object(l.jsx)("div",{className:"map-container mt-3 d-flex flex-column justify-content-center align-content-center",ref:a})}),Object(l.jsx)("img",{src:h,alt:"",id:"bigfoot"})]})]})},O=o.p+"static/media/adult-bigfoot-costume.2dbdac02.png",S={costume:{width:"100px"}},w=function(){return Object(l.jsxs)("div",{className:"d-flex flex-column align-items-center mt-3 mb-3",children:[Object(l.jsx)("h3",{children:"BIGFOOT ENCOUNTERS"}),Object(l.jsx)("img",{style:S.costume,src:O,alt:""}),Object(l.jsx)("small",{children:"\xa9 2021 Peter MoDavis All Rights Reserved"})]})},q=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{}),Object(l.jsx)(x,{}),Object(l.jsx)(w,{})]})};o(22);c.a.render(Object(l.jsx)(q,{}),document.querySelector("#root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.2d7b7b56.chunk.js.map
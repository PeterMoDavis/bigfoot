(this.webpackJsonpbigfoot=this.webpackJsonpbigfoot||[]).push([[0],{46:function(e,t,o){},48:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o(16),c=o.n(r),i=o(17),s=o(18),a=o(22),u=o(20),l=o(0),d=function(e){Object(a.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).styles={header:{fontFamily:"Squada One",fontSize:"100px"}},e}return Object(s.a)(o,[{key:"getBigfoot",value:function(){fetch("https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json").then((function(e){return e.json()})).then((function(e){}))}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"d-flex justify-content-center",children:Object(l.jsx)("h1",{style:this.styles.header,children:"BIGFOOT ENCOUNTERS"})})})}}]),o}(n.Component),f=o(7),y=o.n(f),b=o(19),m=o(21),g=o(2),j=o.n(g),p=o.p+"static/media/bigfoot.3045098c.png",h=o.p+"static/media/roar.d34f8a59.wav";o(46);j.a.accessToken="pk.eyJ1IjoicG1vZGF2aXMiLCJhIjoiY2twZDAzam80MGl4eDJucjNja3F0eWt6YyJ9.pDCggo-HzdU4pDYxaUT3Tw";var v=function(){var e=Object(n.useState)(3),t=Object(m.a)(e,2),o=(t[0],t[1],[]),r=function(){var e=Object(b.a)(y.a.mark((function e(){var t,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector(".mapboxgl-ctrl-geolocate"),n=new Audio(h),r=new Event("click"),t.dispatchEvent(r),document.querySelector("body").style.backgroundColor="red",document.querySelector("button").innerText="Loading...",document.querySelector("#bigfoot").style.display="block",document.querySelector("#bigfoot").style.opacity="0",document.querySelector("#bigfoot").style.opacity=".8",e.next=11,new Promise((function(e,t){window.navigator.geolocation.getCurrentPosition(e,t)}));case 11:e.sent,document.querySelector("button").innerText="Here we are.",document.querySelector("#bigfoot").style.opacity=".0",n.play(),setTimeout((function(){document.querySelector("button").innerText="Get Encounters",document.querySelector("body").style.backgroundColor="white",document.querySelector("#bigfoot").style.display="none"}),3e3),console.log(o);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){fetch("https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json").then((function(e){return e.json()})).then((function(e){o=e.features.map((function(e){return{description:e.attributes.descriptio,title:e.attributes.name,geometry:{coordinates:[e.geometry.x,e.geometry.y]}}})),console.log(e)})).then((function(){c()})),console.log(o),console.log(o)}),[]);var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-95.712891,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:37.09024,o=new j.a.Map({container:i.current,style:"mapbox://styles/pmodavis/ckpeh637y08xj18qrb14covxq",center:[e,t],zoom:3});return o.addControl(new j.a.NavigationControl,"bottom-right"),o.addControl(new j.a.GeolocateControl,"top-right",{positionOptions:{enableHighAccuracy:!0},fitBoundsOptions:{maxZoom:15},showAccuracyCircle:!0,trackUserLocation:!0}),function(){return o.remove()}},i=Object(n.useRef)(null);return Object(l.jsxs)("div",{className:"d-flex flex-column align-items-center main-container",children:[Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("button",{onClick:function(){return r()},children:"Get Encounters"})}),Object(l.jsx)("div",{className:"map-container mt-3",ref:i}),Object(l.jsx)("img",{src:p,alt:"",id:"bigfoot"})]})},x=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{}),Object(l.jsx)(v,{})]})};o(47);c.a.render(Object(l.jsx)(x,{}),document.querySelector("#root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.4b0e65c0.chunk.js.map
(function(t){function e(e){for(var s,a,i=e[0],c=e[1],u=e[2],p=0,h=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var s={},n={app:0},o=[];function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/piston_gas_expansion/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"06f8":function(t,e,r){"use strict";r("83c9")},"83c9":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("Controls",{staticClass:"controls"}),r("div",{staticClass:"results"},[t._v(t._s(t.pascals)+" Pa")]),r("div",{staticClass:"results"},[t._v(t._s(t.workDone)+" Joules")]),r("PvDiagram",{staticClass:"pv"})],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v(" Variables ")]),r("v-card-text",[r("v-row",{staticClass:"mb-4"},[r("v-col",{staticClass:"text-left"},[r("v-select",{attrs:{label:"Piston Shape",items:t.pistonShapeItems,filled:""},model:{value:t.$store.state.pistonShape,callback:function(e){t.$set(t.$store.state,"pistonShape",e)},expression:"$store.state.pistonShape"}})],1)],1),r("v-row",[r("v-col",[r("v-slider",{attrs:{min:"0",max:"50",label:"Stroke Length (mm)","thumb-label":"",color:t.green,"track-color":"grey"},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},model:{value:t.$store.state.piston.strokeLength,callback:function(e){t.$set(t.$store.state.piston,"strokeLength",e)},expression:"$store.state.piston.strokeLength"}})]},proxy:!0}]),model:{value:t.$store.state.piston.strokeLength,callback:function(e){t.$set(t.$store.state.piston,"strokeLength",e)},expression:"$store.state.piston.strokeLength"}})],1)],1),r("v-row",[r("v-col",[r("v-slider",{attrs:{min:"0",max:"50",label:"TDC Length (mm)","thumb-label":"",color:t.green,"track-color":"grey"},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},model:{value:t.$store.state.piston.tdcLength,callback:function(e){t.$set(t.$store.state.piston,"tdcLength",e)},expression:"$store.state.piston.tdcLength"}})]},proxy:!0}]),model:{value:t.$store.state.piston.tdcLength,callback:function(e){t.$set(t.$store.state.piston,"tdcLength",e)},expression:"$store.state.piston.tdcLength"}})],1)],1),r("v-row",[r("v-col",[r("v-slider",{attrs:{min:"0",max:"50",label:"Bore Width (mm)","thumb-label":"",color:t.green,"track-color":"grey"},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},model:{value:t.$store.state.piston.boreWidth,callback:function(e){t.$set(t.$store.state.piston,"boreWidth",e)},expression:"$store.state.piston.boreWidth"}})]},proxy:!0}]),model:{value:t.$store.state.piston.boreWidth,callback:function(e){t.$set(t.$store.state.piston,"boreWidth",e)},expression:"$store.state.piston.boreWidth"}})],1)],1),r("v-row",[r("v-col",[r("v-slider",{attrs:{min:"0",max:"250",label:"Bottle Pressure (PSI)","thumb-label":"",color:t.bottlePressureColor,"track-color":"grey"},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},model:{value:t.$store.state.bottle.pressure,callback:function(e){t.$set(t.$store.state.bottle,"pressure",e)},expression:"$store.state.bottle.pressure"}})]},proxy:!0}]),model:{value:t.$store.state.bottle.pressure,callback:function(e){t.$set(t.$store.state.bottle,"pressure",e)},expression:"$store.state.bottle.pressure"}})],1)],1),r("v-row",[r("v-col",[r("v-slider",{attrs:{min:"0",max:"2000",label:"Resevoir Capacity (mL)","thumb-label":"","track-color":"grey"},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},model:{value:t.$store.state.bottle.capacity,callback:function(e){t.$set(t.$store.state.bottle,"capacity",e)},expression:"$store.state.bottle.capacity"}})]},proxy:!0}]),model:{value:t.$store.state.bottle.capacity,callback:function(e){t.$set(t.$store.state.bottle,"capacity",e)},expression:"$store.state.bottle.capacity"}})],1)],1)],1)],1)},i=[],c=r("d4ec"),u=r("bee2"),l=r("262e"),p=r("2caf"),h=r("9ab4"),d=r("2fe1"),f=function(t){Object(l["a"])(r,t);var e=Object(p["a"])(r);function r(){var t;return Object(c["a"])(this,r),t=e.apply(this,arguments),t.pistonShapeItems=["Circular","Square"],t}return Object(u["a"])(r,[{key:"bottlePressureColor",get:function(){var t=this.$store.state.bottle.pressure;return t<60?"green":t<150?"orange":"red"}}]),r}(s["a"]);f=Object(h["a"])([d["a"]],f);var b=f,v=b,m=r("2877"),y=r("6544"),g=r.n(y),k=r("b0af"),x=r("99d9"),$=r("62ad"),w=r("0fd9"),S=r("b974"),C=r("ba0d"),O=r("8654"),j=Object(m["a"])(v,a,i,!1,null,null,null),P=j.exports;g()(j,{VCard:k["a"],VCardText:x["a"],VCardTitle:x["b"],VCol:$["a"],VRow:w["a"],VSelect:S["a"],VSlider:C["a"],VTextField:O["a"]});var L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Plotly",{attrs:{data:t.trace,layout:t.layout,"display-mode-bar":!1}})},_=[],M=r("b85c"),V=r("2909"),T=r("04d1"),I=6894.76,W=101325,D={psiToPascal:function(t){return t*I},pascalToPSI:function(t){return t/I}},A={millimetreToMetre:function(t){return t/1e3}},E={metersCubedToCubicCentimeters:function(t){return 1e3*t},cubicCentimetersToMetersCubed:function(t){return t/1e3}},J=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=[];"undefined"===typeof e&&(e=t,t=0);for(var n=t;n<e;n+=r)s.push(n);return s},R=s["a"].extend({components:{Plotly:T["Plotly"]}}),q=function(t){Object(l["a"])(r,t);var e=Object(p["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(u["a"])(r,[{key:"trace",get:function(){return[{x:this.volumesCmCubed,y:this.pressuresPSI,type:"line"}]}},{key:"layout",get:function(){return{title:"PV Diagram",xaxis:{title:"Cylinder Volume (cm^3)"},yaxis:{title:"Cylinder Pressure (PSI)",range:[this.minYAxis(),Math.max.apply(Math,Object(V["a"])(this.pressuresPSI))]}}}},{key:"minYAxis",value:function(){var t=Math.min.apply(Math,Object(V["a"])(this.pressuresPSI));return t<0?t:0}},{key:"volumes",get:function(){var t=this.$store.getters.piston.tdcVolume(),e=this.$store.getters.piston.bdcVolume(),r=(e-t)/200;return J(t,e,r)}},{key:"volumesCmCubed",get:function(){var t,e=this.volumes,r=[],s=Object(M["a"])(e);try{for(s.s();!(t=s.n()).done;){var n=t.value;r.push(E.metersCubedToCubicCentimeters(n))}}catch(o){s.e(o)}finally{s.f()}return r}},{key:"pressures",get:function(){var t,e=this.$store.getters.bottle.pressure,r=this.$store.getters.expansionMethod,s=this.$store.getters.piston.tdcVolume(),n=[],o=Object(M["a"])(this.volumes);try{for(o.s();!(t=o.n()).done;){var a=t.value;n.push(r.endPressure(e,s,a))}}catch(i){o.e(i)}finally{o.f()}return n}},{key:"pressuresPSI",get:function(){var t,e=[],r=Object(M["a"])(this.pressures);try{for(r.s();!(t=r.n()).done;){var s=t.value,n=s-W;e.push(D.pascalToPSI(n))}}catch(o){r.e(o)}finally{r.f()}return e}}]),r}(R);q=Object(h["a"])([d["a"]],q);var B=q,F=B,Y=Object(m["a"])(F,L,_,!1,null,null,null),z=Y.exports,G=function(t,e){return parseFloat(t.toPrecision(e))},H=function(){function t(){Object(c["a"])(this,t)}return Object(u["a"])(t,[{key:"endPressure",value:function(t,e,r){return t}},{key:"workDone",value:function(t,e,r){var s=r-e;return t*s}}]),t}(),K=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.4;Object(c["a"])(this,t),this.gamma=e}return Object(u["a"])(t,[{key:"endPressure",value:function(t,e,r){var s=e/r;return G(t*Math.pow(s,this.gamma),3)}},{key:"workDone",value:function(t,e,r){var s=this.endPressure(t,e,r),n=1/(1-this.gamma),o=r*s-e*t;return G(n*o,3)}}]),t}(),N=s["a"].extend({name:"App",components:{Controls:P,PvDiagram:z},computed:{pascals:function(){return this.$store.getters.bottle.pressure.toExponential(2)},workDone:function(){var t=new K,e=this.$store.getters.piston,r=this.$store.getters.bottle.pressure;return t.workDone(r,e.tdcVolume(),e.bdcVolume())}}}),Q=N,U=(r("06f8"),r("7496")),X=r("f6c4"),Z=Object(m["a"])(Q,n,o,!1,null,"411b815a",null),tt=Z.exports;g()(Z,{VApp:U["a"],VMain:X["a"]});var et=r("2f62"),rt=function(){function t(e){Object(c["a"])(this,t),this.diameter=e}return Object(u["a"])(t,[{key:"width",get:function(){return this.diameter}},{key:"area",value:function(){return Math.pow(.5*this.diameter,2)*Math.PI}},{key:"perimeter",value:function(){return this.diameter*Math.PI}}]),t}(),st=function(){function t(e){Object(c["a"])(this,t),this.width=e}return Object(u["a"])(t,[{key:"area",value:function(){return Math.pow(this.width,2)}},{key:"perimeter",value:function(){return 4*this.width}}]),t}(),nt=function(){function t(e,r,s){Object(c["a"])(this,t),this.crossSection=e,this.tdcLength=r,this.strokeLength=s}return Object(u["a"])(t,[{key:"strokeVolume",value:function(){return this.crossSection.area()*this.strokeLength}},{key:"tdcVolume",value:function(){return this.crossSection.area()*this.tdcLength}},{key:"bdcVolume",value:function(){return this.crossSection.area()*(this.tdcLength+this.strokeLength)}},{key:"compressionRatio",value:function(){return this.bdcVolume()/this.tdcVolume()}}]),t}();s["a"].use(et["a"]);var ot=new et["a"].Store({state:{bottle:{pressure:120,capacity:2e3},piston:{boreWidth:16,tdcLength:4,strokeLength:10},expansionMethod:"Adiabatic",pistonShape:"Circular"},mutations:{},actions:{},modules:{},getters:{bottle:function(t){return{pressure:D.psiToPascal(t.bottle.pressure)+101325,capacity:1e-6*t.bottle.capacity}},boreWidth:function(t){return A.millimetreToMetre(t.piston.boreWidth)},tdcLength:function(t){return A.millimetreToMetre(t.piston.tdcLength)},strokeLength:function(t){return A.millimetreToMetre(t.piston.strokeLength)},piston:function(t,e){var r=e.boreWidth,s=t.pistonShape.toLowerCase(),n=new rt(r);"square"===s&&(n=new st(r));var o=e.tdcLength,a=e.strokeLength;return new nt(n,o,a)},expansionMethod:function(t){switch(t.expansionMethod.toLowerCase()){default:return new K;case"isobaric":return new H}}}}),at=r("f309");s["a"].use(at["a"]);var it=new at["a"]({});s["a"].config.productionTip=!1,new s["a"]({store:ot,vuetify:it,render:function(t){return t(tt)}}).$mount("#app")}});
//# sourceMappingURL=app.4c928175.js.map
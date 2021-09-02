(function(t){function e(e){for(var r,s,a=e[0],u=e[1],c=e[2],p=0,h=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/piston_gas_expansion/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"2fde":function(t,e,n){},"36e8":function(t,e,n){"use strict";n("2fde")},c6f0:function(t,e,n){"use strict";n("e340")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("Controls",{staticClass:"controls",on:{piston:t.onPistonUpdate,bottle:t.onBottleUpdate}}),n("v-card",{staticClass:"grey lighten-3 background data"},[n("PvDiagram",{staticClass:"pv",attrs:{pistonBore:t.pistonBore,expansion:t.expansion,bottle:t.bottleSi,height:300,width:200}}),n("TorqueDiagram",{staticClass:"tq",attrs:{pistonBore:t.pistonBore,expansion:t.expansion,bottle:t.bottleSi,height:300,width:200}})],1)],1)],1)},i=[],s=n("d4ec"),a=n("bee2"),u=n("262e"),c=n("2caf"),l=n("9ab4"),p=n("2fe1"),h=6894.76,b=101325,f={psiToPascal:function(t){return t*h},pascalToPSI:function(t){return t/h}},d={millimetreToMetre:function(t){return t/1e3}},m={metersCubedToCubicCentimeters:function(t){return 1e3*t},cubicCentimetersToMetersCubed:function(t){return t/1e3}},v=function(){function t(e){Object(s["a"])(this,t),this.diameter=e}return Object(a["a"])(t,[{key:"width",get:function(){return this.diameter}},{key:"area",value:function(){return Math.pow(.5*this.diameter,2)*Math.PI}},{key:"perimeter",value:function(){return this.diameter*Math.PI}}]),t}(),y=function(){function t(e){Object(s["a"])(this,t),this.width=e}return Object(a["a"])(t,[{key:"area",value:function(){return Math.pow(this.width,2)}},{key:"perimeter",value:function(){return 4*this.width}}]),t}(),g=function(t){return t/180*Math.PI},k=function(){function t(e,n,r){Object(s["a"])(this,t),this.crossSection=e,this.tdcLength=n,this.strokeLength=r}return Object(a["a"])(t,[{key:"strokeVolume",value:function(){return this.crossSection.area()*this.strokeLength}},{key:"tdcVolume",value:function(){return this.crossSection.area()*this.tdcLength}},{key:"bdcVolume",value:function(){return this.crossSection.area()*(this.tdcLength+this.strokeLength)}},{key:"compressionRatio",value:function(){return this.bdcVolume()/this.tdcVolume()}},{key:"pistonTravel",value:function(t){var e=g(t),n=.5*(1-Math.cos(e));return n*this.strokeLength}},{key:"torque",value:function(t,e){var n=this.crossSection.area()*t,r=g(e),o=.5*Math.sin(r)*this.strokeLength;return n*o}},{key:"volume",value:function(t){if(t>1||t<0)throw new RangeError;return this.crossSection.area()*this.strokeLength*t+this.tdcVolume()}}]),t}(),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[t._v(" Variables ")]),n("v-card-text",[n("v-row",{staticClass:"mb-4"},[n("v-col",{staticClass:"text-left"},[n("v-select",{attrs:{label:"Piston Shape",items:t.pistonShapeItems,filled:""},on:{input:t.emitPiston},model:{value:t.piston.shape,callback:function(e){t.$set(t.piston,"shape",e)},expression:"piston.shape"}})],1)],1),n("v-row",[n("v-col",[n("v-slider",{attrs:{min:"0",max:"50",label:"Stroke Length (mm)","thumb-label":"","track-color":"grey"},on:{input:t.emitPiston},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},on:{input:t.emitPiston},model:{value:t.piston.strokeLength,callback:function(e){t.$set(t.piston,"strokeLength",e)},expression:"piston.strokeLength"}})]},proxy:!0}]),model:{value:t.piston.strokeLength,callback:function(e){t.$set(t.piston,"strokeLength",e)},expression:"piston.strokeLength"}})],1)],1),n("v-row",[n("v-col",[n("v-slider",{attrs:{min:"0",max:"50",label:"TDC Length (mm)","thumb-label":"","track-color":"grey"},on:{input:t.emitPiston},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},on:{input:t.emitPiston},model:{value:t.piston.tdcLength,callback:function(e){t.$set(t.piston,"tdcLength",e)},expression:"piston.tdcLength"}})]},proxy:!0}]),model:{value:t.piston.tdcLength,callback:function(e){t.$set(t.piston,"tdcLength",e)},expression:"piston.tdcLength"}})],1)],1),n("v-row",[n("v-col",[n("v-slider",{attrs:{min:"0",max:"50",label:"Bore Width (mm)","thumb-label":"","track-color":"grey"},on:{input:t.emitPiston},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},on:{input:t.emitPiston},model:{value:t.piston.boreWidth,callback:function(e){t.$set(t.piston,"boreWidth",e)},expression:"piston.boreWidth"}})]},proxy:!0}]),model:{value:t.piston.boreWidth,callback:function(e){t.$set(t.piston,"boreWidth",e)},expression:"piston.boreWidth"}})],1)],1),n("v-row",[n("v-col",[n("v-slider",{attrs:{min:"0",max:"250",label:"Bottle Pressure (PSI)","thumb-label":"",color:t.bottlePressureColor,"track-color":"grey"},on:{input:t.emitBottle},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},on:{input:t.emitBottle},model:{value:t.bottle.pressure,callback:function(e){t.$set(t.bottle,"pressure",e)},expression:"bottle.pressure"}})]},proxy:!0}]),model:{value:t.bottle.pressure,callback:function(e){t.$set(t.bottle,"pressure",e)},expression:"bottle.pressure"}})],1)],1),n("v-row",[n("v-col",[n("v-slider",{attrs:{min:"0",max:"2000",label:"Resevoir Capacity (mL)","thumb-label":"","track-color":"grey"},on:{input:t.emitBottle},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},on:{input:t.emitBottle},model:{value:t.bottle.capacity,callback:function(e){t.$set(t.bottle,"capacity",e)},expression:"bottle.capacity"}})]},proxy:!0}]),model:{value:t.bottle.capacity,callback:function(e){t.$set(t.bottle,"capacity",e)},expression:"bottle.capacity"}})],1)],1)],1)],1)},O=[],j=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.pistonShapeItems=["Circular","Square"],t.bottle={pressure:120,capacity:2e3},t.piston={shape:"Circular",boreWidth:16,tdcLength:4,strokeLength:10},t.expansionMethod="Adiabatic",t}return Object(a["a"])(n,[{key:"emitBottle",value:function(){this.$emit("bottle",this.bottle)}},{key:"emitPiston",value:function(){this.$emit("piston",this.piston)}},{key:"bottlePressureColor",get:function(){var t=this.bottle.pressure;return t<60?"green":t<150?"orange":"red"}}]),n}(r["a"]);j=Object(l["a"])([p["a"]],j);var C=j,w=C,P=n("2877"),S=n("6544"),L=n.n(S),_=n("b0af"),M=n("99d9"),V=n("62ad"),T=n("0fd9"),B=n("b974"),$=n("ba0d"),q=n("8654"),I=Object(P["a"])(w,x,O,!1,null,null,null),W=I.exports;L()(I,{VCard:_["a"],VCardText:M["a"],VCardTitle:M["b"],VCol:V["a"],VRow:T["a"],VSelect:B["a"],VSlider:$["a"],VTextField:q["a"]});var A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-3 blue",attrs:{elevation:"3"}},[n("Plotly",{staticClass:"chart",attrs:{data:t.trace,layout:t.layout,responsive:!0}})],1)},D=[],E=n("b85c"),z=n("2909"),R=n("04d1"),U=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];"undefined"===typeof e&&(e=t,t=0);for(var o=t;o<=e;o+=n)r.push(o);return r},Y=r["a"].extend({props:{pistonBore:k,expansion:Object,bottle:Object},components:{Plotly:R["Plotly"]}}),F=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(a["a"])(n,[{key:"trace",get:function(){return[{x:this.volumesCmCubed,y:this.pressuresPSI,fill:"tozeroy",type:"line",marker:{color:"white",line:{color:"white"}}}]}},{key:"layout",get:function(){return{title:"Pressure-Volume Diagram",autosize:!0,plot_bgcolor:"rgba(0, 0, 0, 0)",paper_bgcolor:"rgba(0, 0, 0, 0)",xaxis:{title:"Cylinder Volume (cm^3)"},yaxis:{title:"Cylinder Pressure (PSI)",range:[this.minYAxis(),Math.max.apply(Math,Object(z["a"])(this.pressuresPSI))]}}}},{key:"minYAxis",value:function(){var t=Math.min.apply(Math,Object(z["a"])(this.pressuresPSI));return t<0?t:0}},{key:"volumes",get:function(){var t=this.pistonBore.tdcVolume(),e=this.pistonBore.bdcVolume(),n=(e-t)/1e3;return U(t,e,n)}},{key:"volumesCmCubed",get:function(){var t,e=this.volumes,n=[],r=Object(E["a"])(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.push(m.metersCubedToCubicCentimeters(o))}}catch(i){r.e(i)}finally{r.f()}return n}},{key:"pressures",get:function(){var t,e=this.bottle.pressure,n=this.expansion,r=this.pistonBore.tdcVolume(),o=[],i=Object(E["a"])(this.volumes);try{for(i.s();!(t=i.n()).done;){var s=t.value;o.push(n.endPressure(e,r,s))}}catch(a){i.e(a)}finally{i.f()}return o}},{key:"pressuresPSI",get:function(){var t,e=[],n=Object(E["a"])(this.pressures);try{for(n.s();!(t=n.n()).done;){var r=t.value,o=r-b;e.push(f.pascalToPSI(o))}}catch(i){n.e(i)}finally{n.f()}return e}}]),n}(Y);F=Object(l["a"])([p["a"]],F);var J=F,N=J,G=(n("deb3"),Object(P["a"])(N,A,D,!1,null,"3acbdc22",null)),H=G.exports;L()(G,{VCard:_["a"]});var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-3 red",attrs:{elevation:"3"}},[n("Plotly",{staticClass:"chart",attrs:{data:t.trace,layout:t.layout,responsive:!0}})],1)},Q=[],X=function(t,e){return parseFloat(t.toPrecision(e))},Z=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.4;Object(s["a"])(this,t),this.gamma=e}return Object(a["a"])(t,[{key:"endPressure",value:function(t,e,n){var r=e/n;return X(t*Math.pow(r,this.gamma),3)}},{key:"workDone",value:function(t,e,n){var r=this.endPressure(t,e,n),o=1/(1-this.gamma),i=n*r-e*t;return X(o*i,3)}}]),t}(),tt=function(){function t(e,n,r){Object(s["a"])(this,t),this._piston=e,this._expansion=n,this._bottle=r}return Object(a["a"])(t,[{key:"piston",get:function(){return this._piston}},{key:"expansion",get:function(){return this._expansion}},{key:"bottle",get:function(){return this._bottle}},{key:"pressure",value:function(t){var e=this.bottle.pressure,n=this.piston.tdcVolume(),r=this.piston.volume(t);return this.expansion.endPressure(e,n,r)}},{key:"volume",value:function(t){return this.piston.volume(t)}},{key:"torque",value:function(t){var e=this.piston.pistonTravel(t)/this.piston.strokeLength,n=this.pressure(e)-b;return this.piston.torque(n,t)}}]),t}(),et=r["a"].extend({props:{pistonBore:k,expansion:Object,bottle:Object},components:{Plotly:R["Plotly"]}}),nt=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(a["a"])(n,[{key:"angles",get:function(){return U(0,180,.1)}},{key:"trace",get:function(){return[{x:this.angles,y:this.torques,fill:"tozeroy",type:"line",marker:{color:"white",line:{color:"white"}}}]}},{key:"layout",get:function(){return{title:"Torque vs Crank Angle",autosize:!0,plot_bgcolor:"rgba(0, 0, 0, 0)",paper_bgcolor:"rgba(0, 0, 0, 0)",xaxis:{title:"Crank Angle (°)"},yaxis:{title:"Crankshaft Torque (Nm)",range:[this.minYAxis(),Math.max.apply(Math,Object(z["a"])(this.torques))]}}}},{key:"minYAxis",value:function(){var t=Math.min.apply(Math,Object(z["a"])(this.torques));return t<0?t:0}},{key:"torques",get:function(){var t,e=[],n=new tt(this.pistonBore,this.expansion,this.bottle),r=Object(E["a"])(this.angles);try{for(r.s();!(t=r.n()).done;){var o=t.value;e.push(n.torque(o))}}catch(i){r.e(i)}finally{r.f()}return e}}]),n}(et);nt=Object(l["a"])([p["a"]],nt);var rt=nt,ot=rt,it=(n("c6f0"),Object(P["a"])(ot,K,Q,!1,null,"e86ed142",null)),st=it.exports;L()(it,{VCard:_["a"]});var at=r["a"].extend({name:"App",components:{Controls:W,PvDiagram:H,TorqueDiagram:st}}),ut=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.piston={shape:"Circular",boreWidth:16,tdcLength:4,strokeLength:10},t.bottle={pressure:120,capacity:2e3},t.expansion=new Z,t}return Object(a["a"])(n,[{key:"onPistonUpdate",value:function(t){this.piston=t}},{key:"onBottleUpdate",value:function(t){this.bottle=t}},{key:"pistonSi",get:function(){return{shape:this.piston.shape,boreWidth:d.millimetreToMetre(this.piston.boreWidth),tdcLength:d.millimetreToMetre(this.piston.tdcLength),strokeLength:d.millimetreToMetre(this.piston.strokeLength)}}},{key:"pistonBore",get:function(){var t=new v(this.pistonSi.boreWidth);return"square"===this.piston.shape.toLowerCase()&&(t=new y(this.pistonSi.boreWidth)),new k(t,this.pistonSi.tdcLength,this.pistonSi.strokeLength)}},{key:"bottleSi",get:function(){return{pressure:f.psiToPascal(this.bottle.pressure),capacity:m.cubicCentimetersToMetersCubed(this.bottle.capacity)}}},{key:"pascals",get:function(){return this.bottleSi.pressure}},{key:"workDone",get:function(){return this.expansion.workDone(this.bottleSi.pressure,this.pistonBore.tdcVolume(),this.pistonBore.bdcVolume())}}]),n}(at);ut=Object(l["a"])([p["a"]],ut);var ct=ut,lt=ct,pt=(n("36e8"),n("7496")),ht=n("f6c4"),bt=Object(P["a"])(lt,o,i,!1,null,"ad021442",null),ft=bt.exports;L()(bt,{VApp:pt["a"],VCard:_["a"],VMain:ht["a"]});var dt=n("2f62");r["a"].use(dt["a"]);var mt=new dt["a"].Store({state:{},mutations:{},actions:{},modules:{},getters:{}}),vt=n("f309");r["a"].use(vt["a"]);var yt=new vt["a"]({});r["a"].config.productionTip=!1,new r["a"]({store:mt,vuetify:yt,render:function(t){return t(ft)}}).$mount("#app")},db01:function(t,e,n){},deb3:function(t,e,n){"use strict";n("db01")},e340:function(t,e,n){}});
//# sourceMappingURL=app.07cbf80b.js.map
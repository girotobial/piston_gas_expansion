(function(t){function e(e){for(var r,a,s=e[0],u=e[1],l=e[2],p=0,h=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/piston_gas_expansion/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"06dd":function(t,e,n){},"3a53":function(t,e,n){"use strict";n("06dd")},"9a65":function(t,e,n){},bc7f:function(t,e,n){},c8ca:function(t,e,n){"use strict";n("bc7f")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("Controls",{staticClass:"controls",on:{piston:t.onPistonUpdate,bottle:t.onBottleUpdate}}),n("v-card",{staticClass:"grey lighten-3 background data"},[n("PvDiagram",{staticClass:"pv",attrs:{model:this.model,height:300,width:200}}),n("TorqueDiagram",{staticClass:"tq",attrs:{model:this.model,height:300,width:200}})],1)],1)],1)},i=[],a=n("d4ec"),s=n("bee2"),u=n("262e"),l=n("2caf"),c=n("9ab4"),p=n("2fe1"),h=6894.76,f=101325,b={psiToPascal:function(t){return t*h},pascalToPSI:function(t){return t/h}},m={millimetreToMetre:function(t){return t/1e3}},d={metersCubedToCubicCentimeters:function(t){return 1e3*t},cubicCentimetersToMetersCubed:function(t){return t/1e3}},v=function(){function t(e){Object(a["a"])(this,t),this.diameter=e}return Object(s["a"])(t,[{key:"width",get:function(){return this.diameter}},{key:"area",value:function(){return Math.pow(.5*this.diameter,2)*Math.PI}},{key:"perimeter",value:function(){return this.diameter*Math.PI}}]),t}(),y=function(){function t(e){Object(a["a"])(this,t),this.width=e}return Object(s["a"])(t,[{key:"area",value:function(){return Math.pow(this.width,2)}},{key:"perimeter",value:function(){return 4*this.width}}]),t}(),g=function(t){return t/180*Math.PI},k=function(){function t(e,n,r){Object(a["a"])(this,t),this.crossSection=e,this.bumpClearanceLength=n,this.strokeLength=r}return Object(s["a"])(t,[{key:"strokeVolume",value:function(){return this.crossSection.area()*this.strokeLength}},{key:"bumpClearanceVolume",value:function(){return this.crossSection.area()*this.bumpClearanceLength}},{key:"bdcVolume",value:function(){return this.crossSection.area()*(this.bumpClearanceLength+this.strokeLength)}},{key:"compressionRatio",value:function(){return this.bdcVolume()/this.bumpClearanceVolume()}},{key:"pistonTravel",value:function(t){var e=g(t),n=.5*(1-Math.cos(e));return n*this.strokeLength}},{key:"torque",value:function(t,e){var n=this.crossSection.area()*t,r=g(e),o=.5*Math.sin(r)*this.strokeLength;return n*o}},{key:"volume",value:function(t){if(t>1||t<0)throw new RangeError;return this.crossSection.area()*this.strokeLength*t+this.bumpClearanceVolume()}},{key:"cutoffVolume",value:function(t){return t<0&&(t=0),t>1&&(t=1),this.bumpClearanceVolume()+t*this.strokeLength*this.crossSection.area()}}]),t}(),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[t._v(" Variables ")]),n("v-card-text",[n("v-row",{staticClass:"mb-4"},[n("v-col",{staticClass:"text-left"},[n("v-select",{attrs:{label:"Piston Shape",items:t.pistonShapeItems,filled:""},on:{input:t.emitPiston},model:{value:t.piston.shape,callback:function(e){t.$set(t.piston,"shape",e)},expression:"piston.shape"}})],1)],1),n("v-row",[n("v-col",[n("v-slider",{attrs:{min:"0",max:"250",label:"Stroke Length (mm)","thumb-label":"","track-color":"grey"},on:{input:t.emitPiston},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},on:{input:t.emitPiston},model:{value:t.piston.strokeLength,callback:function(e){t.$set(t.piston,"strokeLength",e)},expression:"piston.strokeLength"}})]},proxy:!0}]),model:{value:t.piston.strokeLength,callback:function(e){t.$set(t.piston,"strokeLength",e)},expression:"piston.strokeLength"}})],1)],1),n("v-row",[n("v-col",[n("v-slider",{attrs:{min:"0",max:"250",label:"Bump Clearance Length (mm)","thumb-label":"","track-color":"grey"},on:{input:t.emitPiston},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},on:{input:t.emitPiston},model:{value:t.piston.bumpClearanceLength,callback:function(e){t.$set(t.piston,"bumpClearanceLength",e)},expression:"piston.bumpClearanceLength"}})]},proxy:!0}]),model:{value:t.piston.bumpClearanceLength,callback:function(e){t.$set(t.piston,"bumpClearanceLength",e)},expression:"piston.bumpClearanceLength"}})],1)],1),n("v-row",[n("v-col",[n("v-slider",{attrs:{min:"0",max:"100",label:"Bore Width (mm)","thumb-label":"","track-color":"grey"},on:{input:t.emitPiston},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},on:{input:t.emitPiston},model:{value:t.piston.boreWidth,callback:function(e){t.$set(t.piston,"boreWidth",e)},expression:"piston.boreWidth"}})]},proxy:!0}]),model:{value:t.piston.boreWidth,callback:function(e){t.$set(t.piston,"boreWidth",e)},expression:"piston.boreWidth"}})],1)],1),n("v-row",[n("v-col",[n("v-slider",{attrs:{min:"0",max:"100",label:"Inlet valve cuttoff point (%)","thumb-label":"","track-color":"grey"},on:{input:t.emitPiston},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},on:{input:t.emitPiston},model:{value:t.piston.cutOffPoint,callback:function(e){t.$set(t.piston,"cutOffPoint",e)},expression:"piston.cutOffPoint"}})]},proxy:!0}]),model:{value:t.piston.cutOffPoint,callback:function(e){t.$set(t.piston,"cutOffPoint",e)},expression:"piston.cutOffPoint"}})],1)],1),n("v-row",[n("v-col",[n("v-slider",{attrs:{min:"0",max:"250",label:"Bottle Pressure (PSI)","thumb-label":"",color:t.bottlePressureColor,"track-color":"grey"},on:{input:t.emitBottle},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},on:{input:t.emitBottle},model:{value:t.bottle.pressure,callback:function(e){t.$set(t.bottle,"pressure",e)},expression:"bottle.pressure"}})]},proxy:!0}]),model:{value:t.bottle.pressure,callback:function(e){t.$set(t.bottle,"pressure",e)},expression:"bottle.pressure"}})],1)],1),n("v-row",[n("v-col",[n("v-slider",{attrs:{min:"0",max:"4000",label:"Resevoir Capacity (mL)","thumb-label":"","track-color":"grey"},on:{input:t.emitBottle},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},on:{input:t.emitBottle},model:{value:t.bottle.capacity,callback:function(e){t.$set(t.bottle,"capacity",e)},expression:"bottle.capacity"}})]},proxy:!0}]),model:{value:t.bottle.capacity,callback:function(e){t.$set(t.bottle,"capacity",e)},expression:"bottle.capacity"}})],1)],1)],1)],1)},C=[],O=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.pistonShapeItems=["Circular","Square"],t.bottle={pressure:60,capacity:2e3},t.piston={cutOffPoint:25,shape:"Circular",boreWidth:16,bumpClearanceLength:4,strokeLength:10},t.expansionMethod="Adiabatic",t}return Object(s["a"])(n,[{key:"emitBottle",value:function(){this.$emit("bottle",this.bottle)}},{key:"emitPiston",value:function(){this.$emit("piston",this.piston)}},{key:"bottlePressureColor",get:function(){var t=this.bottle.pressure;return t<=60?"green":t<=150?"orange":"red"}}]),n}(r["a"]);O=Object(c["a"])([p["a"]],O);var P=O,j=P,w=n("2877"),S=n("6544"),L=n.n(S),_=n("b0af"),M=n("99d9"),V=n("62ad"),T=n("0fd9"),$=n("b974"),q=n("ba0d"),B=n("8654"),I=Object(w["a"])(j,x,C,!1,null,null,null),W=I.exports;L()(I,{VCard:_["a"],VCardText:M["a"],VCardTitle:M["b"],VCol:V["a"],VRow:T["a"],VSelect:$["a"],VSlider:q["a"],VTextField:B["a"]});var A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-3 blue",attrs:{elevation:"3"}},[n("Plotly",{staticClass:"chart",attrs:{data:t.trace,layout:t.layout,responsive:!0}})],1)},D=[],E=n("b85c"),z=n("2909"),R=n("04d1"),U=function(t,e){return parseFloat(t.toPrecision(e))},Y=function(){function t(){Object(a["a"])(this,t)}return Object(s["a"])(t,[{key:"endPressure",value:function(t,e,n){return t}},{key:"workDone",value:function(t,e,n){var r=n-e;return t*r}}]),t}(),F=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.4;Object(a["a"])(this,t),this.gamma=e}return Object(s["a"])(t,[{key:"endPressure",value:function(t,e,n){var r=e/n;return U(t*Math.pow(r,this.gamma),3)}},{key:"workDone",value:function(t,e,n){var r=this.endPressure(t,e,n),o=1/(1-this.gamma),i=n*r-e*t;return U(o*i,3)}}]),t}(),J=function(){function t(e,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.25;Object(a["a"])(this,t),this._piston=e,this._expansion=n,this._bottle=r,this.cutOffPoint=o}return Object(s["a"])(t,[{key:"piston",get:function(){return this._piston}},{key:"expansion",get:function(){return this._expansion}},{key:"bottle",get:function(){return this._bottle}},{key:"pressure",value:function(t){var e,n=this.bottle.pressure+f,r=this.piston.bumpClearanceVolume(),o=this.piston.volume(t);return t<this.cutOffPoint?e=new Y:(r=this.piston.cutoffVolume(this.cutOffPoint),e=this.expansion),e.endPressure(n,r,o)}},{key:"volume",value:function(t){return this.piston.volume(t)}},{key:"torque",value:function(t){var e=this.piston.pistonTravel(t)/this.piston.strokeLength,n=this.pressure(e)-f;return this.piston.torque(n,t)}}]),t}(),N=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];"undefined"===typeof e&&(e=t,t=0);for(var o=t;o<=e;o+=n)r.push(o);return r},G=r["a"].extend({props:{model:J},components:{Plotly:R["Plotly"]}}),H=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"trace",get:function(){return[{x:this.volumesCmCubed,y:this.pressuresPSI,fill:"tozeroy",type:"line",marker:{color:"white",line:{color:"white"}}}]}},{key:"layout",get:function(){return{title:"Pressure-Volume Diagram",autosize:!0,plot_bgcolor:"rgba(0, 0, 0, 0)",paper_bgcolor:"rgba(0, 0, 0, 0)",xaxis:{title:"Cylinder Volume (cm^3)"},font:{color:"#f7f7f8"},yaxis:{title:"Cylinder Pressure (PSI)",range:[this.minYAxis(),Math.max.apply(Math,Object(z["a"])(this.pressuresPSI))]}}}},{key:"minYAxis",value:function(){var t=Math.min.apply(Math,Object(z["a"])(this.pressuresPSI));return t<0?t:0}},{key:"volumes",get:function(){var t,e=N(0,1,.001),n=[],r=Object(E["a"])(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.push(this.model.volume(o))}}catch(i){r.e(i)}finally{r.f()}return n}},{key:"volumesCmCubed",get:function(){var t,e=this.volumes,n=[],r=Object(E["a"])(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.push(d.metersCubedToCubicCentimeters(o))}}catch(i){r.e(i)}finally{r.f()}return n}},{key:"pressures",get:function(){var t,e=N(0,1,.001),n=[],r=Object(E["a"])(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.push(this.model.pressure(o))}}catch(i){r.e(i)}finally{r.f()}return n}},{key:"pressuresPSI",get:function(){var t,e=[],n=Object(E["a"])(this.pressures);try{for(n.s();!(t=n.n()).done;){var r=t.value,o=r-f;e.push(b.pascalToPSI(o))}}catch(i){n.e(i)}finally{n.f()}return e}}]),n}(G);H=Object(c["a"])([p["a"]],H);var K=H,Q=K,X=(n("c8ca"),Object(w["a"])(Q,A,D,!1,null,"215d4733",null)),Z=X.exports;L()(X,{VCard:_["a"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-3 red",attrs:{elevation:"3"}},[n("Plotly",{staticClass:"chart",attrs:{data:t.trace,layout:t.layout,responsive:!0}})],1)},et=[],nt=r["a"].extend({props:{model:J},components:{Plotly:R["Plotly"]}}),rt=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"angles",get:function(){return N(0,180,.1)}},{key:"trace",get:function(){return[{x:this.angles,y:this.torques,fill:"tozeroy",type:"line",marker:{color:"white",line:{color:"white"}}}]}},{key:"layout",get:function(){return{title:"Torque vs Crank Angle",autosize:!0,plot_bgcolor:"rgba(0, 0, 0, 0)",paper_bgcolor:"rgba(0, 0, 0, 0)",xaxis:{title:"Crank Angle (°)"},font:{color:"#f7f7f8"},yaxis:{title:"Crankshaft Torque (Nm)",range:[this.minYAxis(),Math.max.apply(Math,Object(z["a"])(this.torques))]}}}},{key:"minYAxis",value:function(){var t=Math.min.apply(Math,Object(z["a"])(this.torques));return t<0?t:0}},{key:"torques",get:function(){var t,e=[],n=this.model,r=Object(E["a"])(this.angles);try{for(r.s();!(t=r.n()).done;){var o=t.value;e.push(n.torque(o))}}catch(i){r.e(i)}finally{r.f()}return e}}]),n}(nt);rt=Object(c["a"])([p["a"]],rt);var ot=rt,it=ot,at=(n("e7d5"),Object(w["a"])(it,tt,et,!1,null,"4db4b6b5",null)),st=at.exports;L()(at,{VCard:_["a"]});var ut=r["a"].extend({name:"App",components:{Controls:W,PvDiagram:Z,TorqueDiagram:st}}),lt=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.piston={cutOffPoint:25,shape:"Circular",boreWidth:16,bumpClearanceLength:4,strokeLength:10},t.bottle={pressure:120,capacity:2e3},t.expansion=new F,t}return Object(s["a"])(n,[{key:"onPistonUpdate",value:function(t){this.piston=t}},{key:"onBottleUpdate",value:function(t){this.bottle=t}},{key:"model",get:function(){return new J(this.pistonBore,this.expansion,this.bottleSi,this.pistonSi.cutOffPoint)}},{key:"pistonSi",get:function(){return{cutOffPoint:this.piston.cutOffPoint/100,shape:this.piston.shape,boreWidth:m.millimetreToMetre(this.piston.boreWidth),bumpClearanceLength:m.millimetreToMetre(this.piston.bumpClearanceLength),strokeLength:m.millimetreToMetre(this.piston.strokeLength)}}},{key:"pistonBore",get:function(){var t=new v(this.pistonSi.boreWidth);return"square"===this.piston.shape.toLowerCase()&&(t=new y(this.pistonSi.boreWidth)),new k(t,this.pistonSi.bumpClearanceLength,this.pistonSi.strokeLength)}},{key:"bottleSi",get:function(){return{pressure:b.psiToPascal(this.bottle.pressure),capacity:d.cubicCentimetersToMetersCubed(this.bottle.capacity)}}},{key:"pascals",get:function(){return this.bottleSi.pressure}},{key:"workDone",get:function(){return this.expansion.workDone(this.bottleSi.pressure,this.pistonBore.bumpClearanceVolume(),this.pistonBore.bdcVolume())}}]),n}(ut);lt=Object(c["a"])([p["a"]],lt);var ct=lt,pt=ct,ht=(n("3a53"),n("7496")),ft=n("f6c4"),bt=Object(w["a"])(pt,o,i,!1,null,"7caa145c",null),mt=bt.exports;L()(bt,{VApp:ht["a"],VCard:_["a"],VMain:ft["a"]});var dt=n("2f62");r["a"].use(dt["a"]);var vt=new dt["a"].Store({state:{},mutations:{},actions:{},modules:{},getters:{}}),yt=n("f309");r["a"].use(yt["a"]);var gt=new yt["a"]({});r["a"].config.productionTip=!1,new r["a"]({store:vt,vuetify:gt,render:function(t){return t(mt)}}).$mount("#app")},e7d5:function(t,e,n){"use strict";n("9a65")}});
//# sourceMappingURL=app.a5281f2f.js.map
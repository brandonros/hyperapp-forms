!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e["hyperapp-forms"]=t()}(this,function(){"use strict";function e(e,t){for(var n=arguments,i=[],r=[],l=arguments.length;l-- >2;)i.push(n[l]);for(;i.length;){var o=i.pop();if(o&&o.pop)for(l=o.length;l--;)i.push(o[l]);else null!=o&&!0!==o&&!1!==o&&r.push(o)}return"function"==typeof e?e(t||{},r):{nodeName:e,attributes:t||{},children:r,key:t&&t.key}}function t(t){var n=t.id,i=t.title,r=t.value,l=t.disabled,o=t.style,d=t.onChange;return function(t,a){return e("div",{class:"form-group"},e("label",null,i),e("input",{class:"form-control",type:"checkbox",id:n,style:o,checked:r?"checked":"",disabled:l?"disabled":"",onchange:d}))}}function n(t){var n=t.id,i=t.title,r=t.value,l=t.disabled,o=t.style,d=t.onChange;return function(t,a){return e("div",{class:"form-group"},e("label",null,i),e("input",{class:"form-control",type:"number",id:n,value:r,style:o,disabled:l?"disabled":"",onkeyup:d}))}}function i(t){var n=t.id,i=t.title,r=t.value,l=t.options,o=t.render,d=t.disabled,a=t.style,u=t.onChange;return function(t,s){return"function"==typeof o&&(l=o(t)),console.log(n,o,t,l),e("div",{class:"form-group"},e("label",null,i),e("select",{class:"form-control",id:n,style:a,disabled:d?"disabled":"",onchange:u},[].concat("",l).map(function(t){return e("option",{value:"object"==typeof t?t.name:t,selected:("object"==typeof t?t.name:t)===r?"selected":""},"object"==typeof t?t.name:t)})))}}function r(t){var n=t.id,i=t.title,r=t.value,l=t.render,o=t.style;return function(t,d){return"function"==typeof l&&(r=l(t)),e("div",{class:"form-group"},e("label",null,i),e("span",{class:"static-field",style:o,id:n},r))}}function l(t){var n=t.id,i=t.title,r=t.value,l=t.disabled,o=t.style,d=t.onChange;return function(t,a){return e("div",{class:"form-group"},e("label",null,i),e("input",{class:"form-control",type:"text",id:n,value:r,onkeyup:d,style:o,disabled:l?"disabled":""}))}}function o(o){var d=o.id,a=o.type,u=o.title,s=o.value,c=o.options,f=o.disabled,p=o.style,v=o.render,y=o.onChange;return function(o,b){return"static"===a?e(r,{id:d,title:u,value:s,style:p}):"text"===a?e(l,{id:d,title:u,value:s,disabled:f,style:p,onChange:y}):"checkbox"===a?e(t,{id:d,title:u,value:s,disabled:f,style:p,onChange:y}):"number"===a?e(n,{id:d,title:u,value:s,disabled:f,style:p,onChange:y}):"select"===a?e(i,{id:d,title:u,value:s,disabled:f,options:c,render:v,style:p,onChange:y}):void 0}}return{addObjectToArray:function(e){return function(t,n){var i=JSON.parse(JSON.stringify(t));return i.model[e].push({}),i}},removeObjectFromArray:function(e){var t=e.key,n=e.index;return function(e,i){var r=JSON.parse(JSON.stringify(e));return r.model[t].length>1&&r.model[t].splice(n,1),r}},updateArrayField:function(e){var t=e.key,n=e.id,i=e.index;return function(e,r){var l=JSON.parse(JSON.stringify(e));return l.model[t][i][n]="checkbox"===event.target.type?event.target.checked:event.target.value,l}},updateField:function(e){var t=e.key,n=e.id;return function(e,i){var r=JSON.parse(JSON.stringify(e));return r.model[t][n]="checkbox"===event.target.type?event.target.checked:event.target.value,r}},CheckboxField:t,NumberField:n,SelectField:i,StaticField:r,TextField:l,Field:o,Fields:function(t){var n=t.model,i=t.fields,r=t.onChange,l=t.key;return function(t,d){return e("div",{class:"form-inline"},i.map(function(t,i){var d=t.id,a=t.type,u=t.title,s=(t.value,t.options),c=t.disabled,f=t.style,p=t.render;return"divider"===a?e("br",null):e(o,{id:d,type:a,title:u,value:n[d],options:s,render:p,disabled:c,style:f,onChange:"static"===a?void 0:function(){return r({id:d,key:l})}})}))}},FieldsArray:function(t){var n=t.model,i=t.fields,r=t.onChange,l=t.remove,d=t.key;return function(t,a){return e("div",{class:"form-inline"},n.map(function(t,n){return e("div",null,i.map(function(i){var l=i.id,a=i.type,u=i.title,s=(i.value,i.disabled),c=i.style,f=i.options,p=i.render;return"divider"===a?e("br",null):e(o,{id:l,type:a,title:u,value:t[l],render:p,options:f,disabled:s,style:c,onChange:function(){return r({id:l,index:n,key:d})}})}),e("div",{class:"text-right"},e("button",{type:"button",class:"btn btn-link",onclick:function(){return l({key:d,index:n})}},"Remove")))}))}}}});
//# sourceMappingURL=index.js.map

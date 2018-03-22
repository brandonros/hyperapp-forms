!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e["hyperapp-forms"]=t()}(this,function(){"use strict";function e(e,t){for(var n=arguments,i=[],l=[],r=arguments.length;r-- >2;)i.push(n[r]);for(;i.length;){var o=i.pop();if(o&&o.pop)for(r=o.length;r--;)i.push(o[r]);else null!=o&&!0!==o&&!1!==o&&l.push(o)}return"function"==typeof e?e(t||{},l):{nodeName:e,attributes:t||{},children:l,key:t&&t.key}}function t(t){var n=t.id,i=t.title,l=t.value,r=t.disabled,o=t.style,a=t.onChange;return function(t,d){return e("div",{class:"form-group"},e("label",null,i),e("input",{class:"form-control",type:"checkbox",id:n,style:o,checked:l?"checked":"",disabled:r?"disabled":"",onchange:a}))}}function n(t){var n=t.id,i=t.title,l=t.value,r=t.disabled,o=t.style,a=t.onChange;return function(t,d){return e("div",{class:"form-group"},e("label",null,i),e("input",{class:"form-control",type:"number",id:n,value:l,style:o,disabled:r?"disabled":"",onkeyup:a}))}}function i(t){var n=t.id,i=t.title,l=t.value,r=t.options,o=t.disabled,a=t.style,d=t.onChange;return function(t,u){return"function"==typeof r&&(r=r(t)),e("div",{class:"form-group"},e("label",null,i),e("select",{class:"form-control",id:n,style:a,disabled:o?"disabled":"",onchange:d},[].concat("",r).map(function(t){return e("option",{value:"object"==typeof t?t.name:t,selected:("object"==typeof t?t.name:t)===l?"selected":""},"object"==typeof t?t.name:t)})))}}function l(t){var n=t.id,i=t.title,l=t.value,r=t.style;return function(t,o){return"function"==typeof l&&(l=l(t)),e("div",{class:"form-group"},e("label",null,i),e("span",{class:"static-field",style:r,id:n},l))}}function r(t){var n=t.id,i=t.title,l=t.value,r=t.disabled,o=t.style,a=t.onChange;return function(t,d){return e("div",{class:"form-group"},e("label",null,i),e("input",{class:"form-control",type:"text",id:n,value:l,onkeyup:a,style:o,disabled:r?"disabled":""}))}}function o(o){var a=o.id,d=o.type,u=o.title,s=o.value,c=o.options,f=o.disabled,p=o.style,v=o.onChange;return function(o,y){return"static"===d?e(l,{id:a,title:u,value:s,style:p}):"text"===d?e(r,{id:a,title:u,value:s,disabled:f,style:p,onChange:v}):"checkbox"===d?e(t,{id:a,title:u,value:s,disabled:f,style:p,onChange:v}):"number"===d?e(n,{id:a,title:u,value:s,disabled:f,style:p,onChange:v}):"select"===d?e(i,{id:a,title:u,value:s,disabled:f,options:c,style:p,onChange:v}):void 0}}return{addObjectToArray:function(e){return function(t,n){var i=JSON.parse(JSON.stringify(t));return i.model[e].push({}),i}},removeObjectFromArray:function(e){var t=e.key,n=e.index;return function(e,i){var l=JSON.parse(JSON.stringify(e));return l.model[t].length>1&&l.model[t].splice(n,1),l}},updateArrayField:function(e){var t=e.key,n=e.id,i=e.index;return function(e,l){var r=JSON.parse(JSON.stringify(e));return r.model[t][i][n]="checkbox"===event.target.type?event.target.checked:event.target.value,r}},updateField:function(e){var t=e.key,n=e.id;return function(e,i){var l=JSON.parse(JSON.stringify(e));return l.model[t][n]="checkbox"===event.target.type?event.target.checked:event.target.value,l}},CheckboxField:t,NumberField:n,SelectField:i,StaticField:l,TextField:r,Field:o,Fields:function(t){var n=t.model,i=t.fields,l=t.onChange,r=t.key;return function(t,a){return e("div",{class:"form-inline"},i.map(function(t,i){var a=t.id,d=t.type,u=t.title,s=(t.value,t.options),c=t.disabled,f=t.style,p=t.render;return"divider"===d?e("br",null):e(o,{id:a,type:d,title:u,value:p||n[a],options:s,disabled:c,style:f,onChange:"static"===d?void 0:function(){return l({id:a,key:r})}})}))}},FieldsArray:function(t){var n=t.model,i=t.fields,l=t.onChange,r=t.remove,a=t.key;return function(t,d){return e("div",{class:"form-inline"},n.map(function(t,n){return e("div",null,i.map(function(i){var r=i.id,d=i.type,u=i.title,s=(i.value,i.disabled),c=i.style,f=i.options,p=i.render;return"divider"===d?e("br",null):e(o,{id:r,type:d,title:u,value:p||t[r],options:f,disabled:s,style:c,onChange:function(){return l({id:r,index:n,key:a})}})}),e("div",{class:"text-right"},e("button",{type:"button",class:"btn btn-link",onclick:function(){return r({key:a,index:n})}},"Remove")))}))}}}});
//# sourceMappingURL=hyperapp-forms.js.map
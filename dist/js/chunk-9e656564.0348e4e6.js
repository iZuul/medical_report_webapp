(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e656564"],{"31aa":function(e,t,a){"use strict";var i=a("9a32"),n=a.n(i);n.a},"9a32":function(e,t,a){},d831:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navigation"),a("v-content",[a("v-container",[a("v-row",[a("v-fab-transition",[a("v-btn",{staticStyle:{color:"black"},attrs:{color:"white",dark:"",fixed:"",right:"",title:"Kembali"},on:{click:function(t){return e.$router.go(-1)}}},[a("v-icon",[e._v("mdi-arrow-left")])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"title"},[e._v("Nama Pasien : "+e._s(e.getPasientName))]),a("TableRecap")],1)],1)],1)],1)],1)},n=[],r=(a("a4d3"),a("4de4"),a("4160"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),c=a("f4dd"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Cari Rekap"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,loading:e.loading,items:this.recaps,search:e.search,"item-key":"id","loading-text":"Menunggu data pasien......."},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.dialog_edit_recap,callback:function(t){e.dialog_edit_recap=t},expression:"dialog_edit_recap"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Edit Recap")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{name:"diagnosa",label:"Diagnosa"},model:{value:e.edited_recap.diagnosa,callback:function(t){e.$set(e.edited_recap,"diagnosa",t)},expression:"edited_recap.diagnosa"}})],1),a("v-col",[a("v-label",{staticStyle:{"font-size":"16px"}},[e._v("Therapy")]),e._l(e.edited_recap.therapy,(function(t,i){return a("div",{key:i},[a("div",{staticClass:"v-input theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--is-booted v-text-field--enclosed"},[a("div",{staticClass:"v-input__control"},[a("div",{staticClass:"v-input__slot"},[a("div",{staticClass:"v-text-field__slot"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"i.type"}],attrs:{type:"text"},domProps:{value:t.type},on:{input:function(a){a.target.composing||e.$set(t,"type",a.target.value)}}})]),a("div",{staticClass:"v-input__append-inner"},[a("i",{staticClass:"v-icon notranslate v-icon--link mdi mdi-plus theme--light green--text",attrs:{role:"button"},on:{click:e.newEditTherapy}}),a("i",{staticClass:"v-icon notranslate v-icon--link mdi mdi-minus theme--light red--text",attrs:{role:"button"},on:{click:e.deleteEditTherapy}})])])])])])}))],2)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveEdit}},[e._v("Save")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.dialog_delete_recap,callback:function(t){e.dialog_delete_recap=t},expression:"dialog_delete_recap"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Konfirmasi")]),a("v-card-text",[e._v(" Yakin menghapus rekap "+e._s(e.data_recap.date_checkup)+" pukul "+e._s(e.data_recap.time_checkup)+"? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.close}},[e._v("Batal")]),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.deleteItem(e.data_recap.id)}}},[e._v("Hapus")])],1)],1)],1)]},proxy:!0},{key:"item.therapy",fn:function(t){var i=t.item;return[a("v-list-item",[a("v-list-item-content",e._l(i.therapy,(function(t){return a("v-list-item-title",{key:t.id},[a("div",[e._v("- "+e._s(t.type))])])})),1)],1)]}},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-btn",{staticClass:"btn-action",attrs:{small:"",color:"info"},on:{click:function(t){return e.editRecap(i)}}},[e._v("Ubah")]),a("v-btn",{staticClass:"btn-action",attrs:{small:"",color:"error"},on:{click:function(t){return e.deleteRecap(i)}}},[e._v("Hapus")])]}},{key:"footer",fn:function(){return[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[a("v-btn",e._g({attrs:{color:"pink",dark:"",fixed:"",bottom:"",right:"",fab:"",title:"Tambah Rekap"}},i),[a("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog_add,callback:function(t){e.dialog_add=t},expression:"dialog_add"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Rekap Baru")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{name:"diagnosa",label:"Diagnosa"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addPasient(t)}},model:{value:e.data_recap.diagnosa,callback:function(t){e.$set(e.data_recap,"diagnosa",t)},expression:"data_recap.diagnosa"}})],1),a("v-col",[a("v-label",{staticStyle:{"font-size":"16px"}},[e._v("Therapy")]),e._l(e.data_recap.therapy,(function(t,i){return a("div",{key:i},[a("div",{staticClass:"v-input theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--is-booted v-text-field--enclosed"},[a("div",{staticClass:"v-input__control"},[a("div",{staticClass:"v-input__slot"},[a("div",{staticClass:"v-text-field__slot"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"item.type"}],attrs:{type:"text"},domProps:{value:t.type},on:{input:function(a){a.target.composing||e.$set(t,"type",a.target.value)}}})]),a("div",{staticClass:"v-input__append-inner"},[a("i",{staticClass:"v-icon notranslate v-icon--link mdi mdi-plus theme--light green--text",attrs:{role:"button"},on:{click:e.newTherapy}}),a("i",{staticClass:"v-icon notranslate v-icon--link mdi mdi-minus theme--light red--text",attrs:{role:"button"},on:{click:e.deleteTherapy}})])])])])])}))],2)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dialog_add=!1}}},[e._v("Batal")]),a("v-btn",{attrs:{color:"success"},on:{click:e.addRecap}},[e._v("Simpan")])],1)],1)],1)]},proxy:!0}])})],1)},o=[],l=(a("c740"),a("a434"),a("498a"),a("2f62"));function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={computed:p({},Object(l["b"])("recaps",{getRecapsPasient:"getRecapsPasient"}),{recaps:function(){return this.getRecapsPasient}}),data:function(){return{dialog_add:!1,dialog_edit_recap:!1,dialog_delete_recap:!1,search:"",loading:!0,form_title:"Tambah Rekap",data_recap:{diagnosa:"",therapy:[{type:""}]},headers:[{text:"Tanggal Periksa",align:"left",value:"date_checkup",sortable:!0},{text:"Pukul",value:"time_checkup",sortable:!0},{text:"Diagnosa",value:"diagnosa",sortable:!1},{text:"Terapi",value:"therapy",sortable:!1},{text:"Aksi",value:"actions",sortable:!1}],detil:[{date_checkup:2019,diagnosa:"ketiduran",therapy:"olahraga"},{date_checkup:2019,diagnosa:"ketiduran",therapy:"olahraga"},{date_checkup:2019,diagnosa:"ketiduran",therapy:"olahraga"}],edited_recap:{}}},created:function(){},mounted:function(){this.fetchRecapsPasient()},destroyed:function(){this.$store.dispatch("recaps/emptyCacheRecaps")},methods:{fetchRecapsPasient:function(){var e=this;JSON.parse(localStorage.getItem("store"));this.loading=!0,this.$store.dispatch("recaps/retrieveRecapsPasient",this.$route.params.id),setTimeout((function(){e.loading=!1}),3e3)},newTherapy:function(){this.data_recap.therapy.push({type:""}),console.log("new clicked")},deleteTherapy:function(e){this.data_recap.therapy.splice(e,1),console.log("delet clicked")},newEditTherapy:function(){this.edited_recap.therapy.push({type:""}),console.log("new clicked")},deleteEditTherapy:function(e){this.edited_recap.therapy.splice(e,1),console.log("delet clicked")},addRecap:function(){this.$store.dispatch("recaps/addRecap",{id_pasient:this.$route.params.id,recap:{diagnosa:this.data_recap.diagnosa.trim(),therapy:this.data_recap.therapy}}),this.dialog_add=!1,this.fetchRecapsPasient()},editRecap:function(e){this.edited_recap=Object.assign({},e),this.dialog_edit_recap=!0,console.log(this.edited_recap)},close:function(){this.dialog_edit_recap=!1,this.dialog_delete_recap=!1},saveEdit:function(){this.$store.dispatch("recaps/updateRecap",{id_pasient:this.$route.params.id,id_recap:this.edited_recap.id,diagnosa:this.edited_recap.diagnosa,therapy:this.edited_recap.therapy}),this.dialog_edit_recap=!1},deleteRecap:function(e){this.dialog_delete_recap=!0,this.data_recap=Object.assign({},e),console.log(e)},deleteItem:function(e){var t=this.recaps.findIndex((function(t){return t.id===e}));console.log(t,e),this.$store.dispatch("recaps/deleteRecap",{id_pasient:this.$route.params.id,index:t,id_recap:e}),this.dialog_delete_recap=!1}}},v=u,h=(a("31aa"),a("2877")),f=a("6544"),_=a.n(f),g=a("8336"),m=a("b0af"),b=a("99d9"),y=a("62ad"),k=a("a523"),x=a("8fea"),O=a("169a"),w=a("132d"),C=a("24c9"),P=a("da13"),R=a("5d23"),j=a("0fd9"),V=a("2fa4"),T=a("8654"),$=a("a844"),D=Object(h["a"])(v,s,o,!1,null,null,null),E=D.exports;function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}_()(D,{VBtn:g["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VCol:y["a"],VContainer:k["a"],VDataTable:x["a"],VDialog:O["a"],VIcon:w["a"],VLabel:C["a"],VListItem:P["a"],VListItemContent:R["a"],VListItemTitle:R["b"],VRow:j["a"],VSpacer:V["a"],VTextField:T["a"],VTextarea:$["a"]});var B={components:{Navigation:c["a"],TableRecap:E},computed:I({},Object(l["b"])("pasients",{pasientByID:"getPasientByID"}),{getPasientName:function(){return this.pasientByID.name}}),mounted:function(){},beforeMount:function(){this.$store.dispatch("pasients/retrievePasientByID",this.$route.params.id)},beforeDestroy:function(){this.$store.dispatch("recaps/emptyCacheRecaps")},methods:{}},N=B,L=a("a75b"),J=a("0789"),z=Object(h["a"])(N,i,n,!1,null,null,null);t["default"]=z.exports;_()(z,{VBtn:g["a"],VCol:y["a"],VContainer:k["a"],VContent:L["a"],VFabTransition:J["c"],VIcon:w["a"],VRow:j["a"]})}}]);
//# sourceMappingURL=chunk-9e656564.0348e4e6.js.map
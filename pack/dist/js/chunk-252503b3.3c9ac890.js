(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-252503b3"],{"06b9":function(a,e,t){"use strict";var o=t("5817"),l=t.n(o);l.a},5817:function(a,e,t){},"8ff6":function(a,e,t){"use strict";t.r(e);var o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("page-header-wrapper",[t("a-card",{staticStyle:{width:"100%"},attrs:{bordered:!1}},[t("help"),t("div",[t("a-form",{attrs:{layout:"horizontal"}},[t("div",{staticClass:"fold"},[t("a-row",[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{labelCol:{span:8},wrapperCol:{span:16},label:"快速搜索"}},[t("a-input",{attrs:{placeholder:"请输入：姓名\\公民身份号码"},on:{blur:a.searchClick},model:{value:a.selectValue,callback:function(e){a.selectValue=e},expression:"selectValue"}})],1)],1),t("a-col",{attrs:{md:10,sm:24}},[t("a-form-item",{attrs:{labelCol:{span:8},wrapperCol:{span:16},label:"受理时间"}},[t("a-range-picker",{on:{change:a.onChange},model:{value:a.pickerValue,callback:function(e){a.pickerValue=e},expression:"pickerValue"}})],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{labelCol:{span:8},wrapperCol:{span:16},label:"状态"}},[t("a-select",{attrs:{placeholder:"请选择",allowClear:!0},on:{change:a.searchClick},model:{value:a.statevalue,callback:function(e){a.statevalue=e},expression:"statevalue"}},a._l(a.statelist,(function(e,o){return t("a-select-option",{key:o,attrs:{value:e.value}},[a._v(a._s(e.text))])})),1)],1)],1)],1)],1),t("span",{staticStyle:{float:"right","margin-top":"3px"}},[t("a-button",{attrs:{type:"primary"},on:{click:a.getList}},[a._v("查询")]),t("a-button",{staticStyle:{"margin-left":"10px"},on:{click:function(e){return a.resert()}}},[a._v("重置")])],1)])],1),t("a-table",{attrs:{columns:a.columns,dataSource:a.dataSource,pagination:a.pagination},scopedSlots:a._u([{key:"allname",fn:function(e,o){return t("span",{},[a._v(a._s(o.surname+o.name))])}},{key:"cardID",fn:function(e,o){return t("span",{},[a._v(a._s(a._f("cardIDShade")(o.cardID)))])}},{key:"state",fn:function(e){return t("span",{},[t("a-badge",{attrs:{color:a._f("statebageFilter")(e),text:a._f("stateFilter")(e)}})],1)}},{key:"consentLetter",fn:function(e){return t("span",{},[a._v(a._s(a._f("consentLetter")(e)))])}},{key:"action",fn:function(e,o){return t("span",{staticClass:"action"},[[t("a",{on:{click:function(e){return a.showmodal(o)}}},[a._v("详细")]),t("a",{directives:[{name:"show",rawName:"v-show",value:o.attachPDF,expression:"record.attachPDF"}],on:{click:function(e){return a.showPDF(o)}}},[a._v("附件")])]],2)}}])}),t("a-modal",{attrs:{title:a.modalTitle,width:"1200px",footer:null},model:{value:a.visible,callback:function(e){a.visible=e},expression:"visible"}},[t("a-form-model",{ref:"modalForm",attrs:{layout:"horizontal","label-col":{span:6},"wrapper-col":{span:16},model:a.modalForm}},[t("a-row",[t("a-col",{attrs:{span:12}},[t("a-form-model-item",{attrs:{label:"单据编号:"}},[t("a-input",{attrs:{placeholder:"系统自动分配",disabled:""},model:{value:a.modalForm.orderNo,callback:function(e){a.$set(a.modalForm,"orderNo",e)},expression:"modalForm.orderNo"}})],1),t("a-row",[t("a-col",{attrs:{span:24}},[t("a-form-model-item",{attrs:{label:"姓名:","label-col":{span:6},"wrapper-col":{span:16}}},[t("a-input",{attrs:{placeholder:"请输入姓名",disabled:""},model:{value:a.modalForm.fullName,callback:function(e){a.$set(a.modalForm,"fullName",e)},expression:"modalForm.fullName"}})],1)],1)],1),t("a-form-model-item",{attrs:{label:"性别:"}},[t("a-radio-group",{attrs:{disabled:""},model:{value:a.modalForm.sex,callback:function(e){a.$set(a.modalForm,"sex",e)},expression:"modalForm.sex"}},[t("a-radio",{attrs:{value:"男"}},[a._v("男")]),t("a-radio",{attrs:{value:"女"}},[a._v("女")]),t("a-radio",{attrs:{value:"未知"}},[a._v("未知")])],1)],1),t("a-form-model-item",{attrs:{label:"公民身份号码:"}},[t("a-input",{attrs:{placeholder:"请输入公民身份号码",disabled:""},model:{value:a.modalForm.cardID,callback:function(e){a.$set(a.modalForm,"cardID",e)},expression:"modalForm.cardID"}})],1),t("a-form-model-item",{attrs:{label:"本人手机号码:"}},[t("a-input",{attrs:{placeholder:"请输入本人手机号码",disabled:""},model:{value:a.modalForm.myPhone,callback:function(e){a.$set(a.modalForm,"myPhone",e)},expression:"modalForm.myPhone"}})],1),t("a-row",[t("a-col",{attrs:{span:13}},[t("a-form-model-item",{attrs:{label:"民族:","label-col":{span:11},"wrapper-col":{span:13}}},[t("a-input",{attrs:{disabled:""},model:{value:a.modalForm.nation,callback:function(e){a.$set(a.modalForm,"nation",e)},expression:"modalForm.nation"}})],1)],1),t("a-col",{attrs:{span:11}},[t("a-form-model-item",{attrs:{label:"籍贯:","label-col":{span:9},"wrapper-col":{span:11}}},[t("a-input",{attrs:{disabled:""},model:{value:a.modalForm.nativePlace,callback:function(e){a.$set(a.modalForm,"nativePlace",e)},expression:"modalForm.nativePlace"}})],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:13}},[t("a-form-model-item",{attrs:{label:"出生日期:","label-col":{span:11},"wrapper-col":{span:13}}},[t("a-date-picker",{attrs:{disabled:""},model:{value:a.modalForm.birthday,callback:function(e){a.$set(a.modalForm,"birthday",e)},expression:"modalForm.birthday"}})],1)],1),t("a-col",{attrs:{span:11}},[t("a-form-model-item",{attrs:{label:"健康状况:","label-col":{span:9},"wrapper-col":{span:11}}},[t("a-input",{attrs:{disabled:""},model:{value:a.modalForm.health,callback:function(e){a.$set(a.modalForm,"health",e)},expression:"modalForm.health"}})],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:13}},[t("a-form-model-item",{attrs:{label:"参加党团时间:","label-col":{span:11},"wrapper-col":{span:13}}},[t("a-date-picker",{attrs:{disabled:""},model:{value:a.modalForm.joinPartyDay,callback:function(e){a.$set(a.modalForm,"joinPartyDay",e)},expression:"modalForm.joinPartyDay"}})],1)],1),t("a-col",{attrs:{span:11}},[t("a-form-model-item",{attrs:{label:"学历:","label-col":{span:9},"wrapper-col":{span:11}}},[t("a-select",{attrs:{allowClear:"",disabled:"",placeholder:"请选择学历"},model:{value:a.modalForm.education,callback:function(e){a.$set(a.modalForm,"education",e)},expression:"modalForm.education"}},a._l(a.educationList,(function(e){return t("a-select-option",{key:e.label,attrs:{value:e.value}},[a._v(a._s(e.label))])})),1)],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:13}},[t("a-form-model-item",{attrs:{label:"参加工作时间:","label-col":{span:11},"wrapper-col":{span:13}}},[t("a-date-picker",{attrs:{disabled:""},model:{value:a.modalForm.workday,callback:function(e){a.$set(a.modalForm,"workday",e)},expression:"modalForm.workday"}})],1)],1),t("a-col",{attrs:{span:11}},[t("a-form-model-item",{attrs:{label:"何时离(退)休:","label-col":{span:9},"wrapper-col":{span:11}}},[t("a-input",{attrs:{disabled:""},model:{value:a.modalForm.retirementTime,callback:function(e){a.$set(a.modalForm,"retirementTime",e)},expression:"modalForm.retirementTime"}})],1)],1)],1),t("a-form-model-item",{attrs:{label:"单位:"}},[t("a-input",{attrs:{disabled:""},model:{value:a.modalForm.workUnit,callback:function(e){a.$set(a.modalForm,"workUnit",e)},expression:"modalForm.workUnit"}})],1),t("a-form-model-item",{attrs:{label:"单位职务:",prop:"professionalPost"}},[t("a-select",{attrs:{disabled:""},model:{value:a.modalForm.professionalPost,callback:function(e){a.$set(a.modalForm,"professionalPost",e)},expression:"modalForm.professionalPost"}},a._l(a.professionalList,(function(e,o){return t("a-select-option",{key:o,attrs:{value:e.value}},[a._v(a._s(e.label))])})),1)],1),t("a-row",[t("a-col",{attrs:{span:12}},[t("a-form-model-item",{attrs:{label:"国外通讯处:","label-col":{span:12},"wrapper-col":{span:12},prop:"zhAddress"}},[t("a-input",{attrs:{disabled:""},model:{value:a.modalForm.zhAddress,callback:function(e){a.$set(a.modalForm,"zhAddress",e)},expression:"modalForm.zhAddress"}})],1)],1),t("a-col",{attrs:{span:3}},[t("span",{staticStyle:{"line-height":"40px"}},[a._v("（中文）")])]),t("a-col",{attrs:{span:6}},[t("a-form-model-item",{staticClass:"enAddress",attrs:{prop:"enAddress"}},[t("a-input",{attrs:{disabled:""},model:{value:a.modalForm.enAddress,callback:function(e){a.$set(a.modalForm,"enAddress",e)},expression:"modalForm.enAddress"}})],1)],1),t("a-col",{attrs:{span:3}},[t("span",{staticStyle:{"line-height":"40px"}},[a._v("（英文）")])])],1),t("a-form-model-item",{attrs:{label:"代办人姓名:",prop:"attorneys"}},[t("a-input",{attrs:{placeholder:"请输入代办人姓名","max-lenght":32,disabled:""},model:{value:a.modalForm.attorneys,callback:function(e){a.$set(a.modalForm,"attorneys",e)},expression:"modalForm.attorneys"}})],1),t("a-form-model-item",{attrs:{label:"代办人手机:",prop:"attorneysPhone"}},[t("a-input",{attrs:{placeholder:"请输入代办人手机","max-length":11,disabled:""},model:{value:a.modalForm.attorneysPhone,callback:function(e){a.$set(a.modalForm,"attorneysPhone",e)},expression:"modalForm.attorneysPhone"}})],1),t("a-form-model-item",{attrs:{label:"出国（境）目的地:",prop:"destination","label-col":{span:7},"wrapper-col":{span:14}}},[t("a-input",{attrs:{placeholder:"请输入出国（境）目的地","max-lenght":128,disabled:""},model:{value:a.modalForm.destination,callback:function(e){a.$set(a.modalForm,"destination",e)},expression:"modalForm.destination"}})],1),t("a-form-model-item",{attrs:{label:"出国（境）时间:",prop:"toAbroadTime","label-col":{span:7},"wrapper-col":{span:12}}},[t("a-date-picker",{attrs:{disabled:""},model:{value:a.modalForm.toAbroadTime,callback:function(e){a.$set(a.modalForm,"toAbroadTime",e)},expression:"modalForm.toAbroadTime"}})],1),t("a-form-model-item",{attrs:{label:"停留时间:",prop:"residenceTime"}},[t("a-input",{attrs:{"max-length":4,type:"number",disabled:""},model:{value:a.modalForm.residenceTime,callback:function(e){a.$set(a.modalForm,"residenceTime",e)},expression:"modalForm.residenceTime"}})],1),t("a-form-model-item",{attrs:{label:"同行人员:",prop:"accompanier"}},[t("a-input",{attrs:{placeholder:"请输入同行人员","max-lenght":32,disabled:""},model:{value:a.modalForm.accompanier,callback:function(e){a.$set(a.modalForm,"accompanier",e)},expression:"modalForm.accompanier"}})],1)],1),t("a-col",{attrs:{span:12}},[t("div",{staticClass:"rightcol"},[t("a-form-model-item",{attrs:{label:"上次因私出国（境）地点:",prop:"lastTimeToAbroad",labelCol:{span:6},"wrapper-col":{span:12,offset:1}}},[t("a-input",{staticStyle:{"margin-top":"20px"},attrs:{placeholder:"请输入上次因私出国（境）地点","max-lenght":128,disabled:""},model:{value:a.modalForm.lastTimeToAbroad,callback:function(e){a.$set(a.modalForm,"lastTimeToAbroad",e)},expression:"modalForm.lastTimeToAbroad"}})],1),t("a-form-model-item",{attrs:{label:"上次因私出国（境）时间:",prop:"lastTimeToAbroadTime","wrapper-col":{span:12,offset:1}}},[t("a-date-picker",{staticStyle:{"margin-top":"20px"},attrs:{disabled:""},model:{value:a.modalForm.lastTimeToAbroadTime,callback:function(e){a.$set(a.modalForm,"lastTimeToAbroadTime",e)},expression:"modalForm.lastTimeToAbroadTime"}})],1)],1),t("a-form-model-item",{attrs:{label:"申请出国（境）事由",prop:"abroadReason","wrapper-col":{span:15,offset:1}}},[t("a-textarea",{attrs:{rows:4,"max-lenght":512,disabled:""},model:{value:a.modalForm.abroadReason,callback:function(e){a.$set(a.modalForm,"abroadReason",e)},expression:"modalForm.abroadReason"}})],1),t("a-form-model-item",{attrs:{label:"费用自理情况",prop:"selfCare","wrapper-col":{span:15,offset:1}}},[t("a-textarea",{attrs:{rows:4,disabled:""},model:{value:a.modalForm.selfCare,callback:function(e){a.$set(a.modalForm,"selfCare",e)},expression:"modalForm.selfCare"}})],1),t("a-form-model-item",{attrs:{label:"工作简历",prop:"resume","wrapper-col":{span:15,offset:1}}},[t("a-textarea",{attrs:{rows:4,disabled:""},model:{value:a.modalForm.resume,callback:function(e){a.$set(a.modalForm,"resume",e)},expression:"modalForm.resume"}})],1),t("a-form-model-item",{attrs:{label:"国内直系亲属及主要社会关系情况",prop:"domesticRelatives","wrapper-col":{span:15,offset:1}}},[t("a-textarea",{attrs:{rows:4,disabled:""},model:{value:a.modalForm.domesticRelatives,callback:function(e){a.$set(a.modalForm,"domesticRelatives",e)},expression:"modalForm.domesticRelatives"}})],1),t("a-form-model-item",{attrs:{label:"国外直系亲属及主要社会关系情况",prop:"abroadRelatives","wrapper-col":{span:15,offset:1}}},[t("a-textarea",{attrs:{rows:4,disabled:""},model:{value:a.modalForm.abroadRelatives,callback:function(e){a.$set(a.modalForm,"abroadRelatives",e)},expression:"modalForm.abroadRelatives"}})],1),t("a-form-model-item",{attrs:{label:"政治表现",prop:"political","wrapper-col":{span:15,offset:1}}},[t("a-textarea",{attrs:{rows:4,disabled:""},model:{value:a.modalForm.political,callback:function(e){a.$set(a.modalForm,"political",e)},expression:"modalForm.political"}})],1),t("a-form-model-item",{staticClass:"credentials",attrs:{label:"需领证件",prop:"credentials","wrapper-col":{span:15,offset:1}}},[t("a-radio-group",{attrs:{name:"checkboxgroup",options:a.plainOptions,disabled:""},on:{change:a.checkboxonChange},model:{value:a.modalForm.credentials,callback:function(e){a.$set(a.modalForm,"credentials",e)},expression:"modalForm.credentials"}})],1),t("a-form-model-item",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t("a-button",{staticStyle:{"margin-left":"10px"},on:{click:a.closemodal}},[a._v("返回")])],1)],1)],1)],1)],1),t("a-modal",{attrs:{title:"附件",width:"1000px"},model:{value:a.visiblePDF,callback:function(e){a.visiblePDF=e},expression:"visiblePDF"}},[t("embed",{attrs:{src:a.PDFURL,width:"100%",height:"700"}}),t("template",{slot:"footer"},[t("a-button",{key:"back",on:{click:a.handlePDFCancel}},[a._v("关闭")])],1)],2)],1)],1)],1)},l=[],r=(t("99af"),t("7db0"),t("b0c0"),t("a9e3"),t("07ac"),t("5530")),s=t("ca00"),i=t("6262"),n=t("a383"),d=t("6250"),m=t("e56e"),c=[{title:"单据编号",width:100,align:"center",dataIndex:"orderNo"},{title:"姓名",width:100,align:"center",dataIndex:"allname",scopedSlots:{customRender:"allname"}},{title:"公民身份号码",dataIndex:"cardID",width:100,align:"center",scopedSlots:{customRender:"cardID"}},{title:"前往国家(地区)",dataIndex:"destination",width:100,align:"center"},{title:"出国(境)时间",dataIndex:"toAbroadTime",width:100,align:"center"},{title:"上次因私出国(境)时间",dataIndex:"lastTimeToAbroadTime",width:120,align:"center"},{title:"停留时间(天)",dataIndex:"residenceTime",width:100,align:"center"},{title:"同行人员",dataIndex:"accompanier",width:100,align:"center"},{title:"同意函",dataIndex:"consentLetter",width:100,align:"center",scopedSlots:{customRender:"consentLetter"}},{title:"状态",dataIndex:"state",width:100,align:"center",scopedSlots:{customRender:"state"}},{title:"操作",dataIndex:"action",width:100,align:"center",scopedSlots:{customRender:"action"}}],p=[],u={components:{help:d["a"]},data:function(){var a=this;return{visiblePDF:!1,PDFURL:"",selectValue:"",pickerValue:void 0,statevalue:void 0,dateString:[],direction:"1",visible:!1,modalForm:{},modalTitle:"",statelist:n["a"],plainOptions:[{label:"普通护照",value:"1"},{label:"往来港澳通行证及香港签注",value:"2"},{label:"往来台湾通行证及签注",value:"3"}],columns:c,dataSource:p,pagination:{current:1,pageSize:10,total:0,showSizeChanger:!0,pageSizeOptions:["10","20","30","40"],showQuickJumper:!0,showTotal:function(e){return"共 ".concat(e," 条记录 第").concat(a.pagination.current,"/").concat(Math.ceil(a.pagination.total/a.pagination.pageSize),"页")},onChange:function(e,t){a.pagination.current=e,a.getList()},onShowSizeChange:function(e,t){a.pagination.current=e,a.pagination.pageSize=t,a.getList()}},professionalList:[],educationList:[]}},computed:{},created:function(){var a=this;this.statelist=Object(r["a"])({},n["a"]),delete this.statelist.PACKED,Object(m["c"])().then((function(e){a.professionalList=e.data.list})),this.getDictionaryEducation(),this.searchClick()},filters:{stateFilter:function(a){return Object.values(n["a"]).find((function(e){return e.value===a})).text},statebageFilter:function(a){return Object.values(n["a"]).find((function(e){return e.value===a})).color},consentLetter:function(a){return a?"有":"无"},cardIDShade:s["a"]},methods:{resert:function(){this.selectValue="",this.pickerValue=void 0,this.statevalue=void 0,this.dateString[0]="",this.dateString[1]="",this.searchClick()},showPDF:function(a){this.PDFURL=this.$store.state.app.picturePrefixAddress+a.attachPDF,this.visiblePDF=!0},handlePDFCancel:function(){this.PDFURL="",this.visiblePDF=!1},onChange:function(a,e){this.dateString=e,this.dateString[0]=a[0]?a[0].startOf("day").valueOf():"",this.dateString[1]=a[1]?a[1].endOf("day").valueOf():"",this.searchClick()},getDictionaryEducation:function(){var a=this;Object(m["a"])().then((function(e){var t=e.data;a.educationList=t.list&&t.list.length?t.list:[]}))},getList:function(){var a=this;Object(i["d"])({pageNo:this.pagination.current,pageSize:this.pagination.pageSize,selectValue:this.selectValue,beginTime:this.dateString[0],endTime:this.dateString[1],direction:this.direction,state:this.statevalue}).then((function(e){e&&e.data.data?e.data.data.length>0&&(a.dataSource=e.data.data,a.pagination.total=Number(e.data.total)):a.dataSource=[]}))},searchClick:function(){this.pagination.current=1,this.getList()},showmodal:function(a){var e=this,t=new Date;Object(s["j"])(t);this.modalForm=Object(r["a"])({},a),this.modalForm.fullName=this.modalForm.surname+this.modalForm.name,this.modalTitle="出国（境）审批表详细信息--"+Object.values(n["a"]).find((function(a){return a.value===e.modalForm.state})).text,this.modalForm.professionalPost=Object.values(this.professionalList).find((function(a){return a.value===e.modalForm.professionalPost})).label,this.visible=!0},closemodal:function(){this.visible=!1},checkboxonChange:function(a){}},watch:{}},b=u,f=(t("06b9"),t("2877")),h=Object(f["a"])(b,o,l,!1,null,"7c2d82ac",null);e["default"]=h.exports},a383:function(a,e,t){"use strict";e["a"]={ADD:{value:"1",text:"新增",color:"gold"},EDITED:{value:"2",text:"已编辑",color:"gold"},PACKED:{value:"3",text:"已组包",color:"gold"},PRINTED:{value:"4",text:"已打印",color:"gold"},COLLECTED:{value:"5",text:"已采集",color:"gold"},SUBMITTED:{value:"6",text:"已提交",color:"gold"},DISMISSED:{value:"7",text:"被驳回",color:"red"},SUCCESSFUL_FILING:{value:"8",text:"上报成功",color:"green"}}}}]);
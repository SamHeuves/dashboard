"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[845],{2419:function(e,l,t){t.d(l,{Z:function(){return k}});var a=t(6252),n=t(2262),o=t(3577),r=t(2119),s=t(5317),u=t(3239),i=t(744);const d={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},m=(0,a._)("span",{class:"md:mr-3"},"Please star this project on",-1),c={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-600",target:"_blank"},p=(0,a._)("span",null,"GitHub",-1),f={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},w=(0,a.Uk)(" Check out other components and layouts at"),_=(0,a._)("br",null,null,-1),b=(0,a.Uk)(" , "),y=(0,a._)("br",null,null,-1),g=(0,a.Uk)(" screen samples "),v=(0,a._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[(0,a.Uk)(" Get more with "),(0,a._)("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",target:"_blank",class:"text-blue-600"},"Premium version")],-1);var x={__name:"BottomOtherPagesSection",setup(e){const l=(0,r.tv)(),t=l.getRoutes(),x=[];for(const a in t){const e=t[a].path,l=t[a].meta&&t[a].meta.title?t[a].meta.title:null;l&&x.push({path:e,title:l})}return(e,l)=>{const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.j4)(u.Z,{last:""},{default:(0,a.w5)((()=>[(0,a._)("h1",d,[m,(0,a._)("a",c,[(0,a.Wm)(i.Z,{path:(0,n.SU)(s.LcO),size:"36",class:"mr-1"},null,8,["path"]),p])]),(0,a._)("h1",f,[w,_,((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(x,((e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e.path},[(0,a.Wm)(t,{to:e.path,class:"text-blue-600"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.title),1)])),_:2},1032,["to"]),l+1<x.length?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[b],64)):(0,a.kq)("",!0)],64)))),64)),y,g]),v])),_:1})}}};const h=x;var k=h},2618:function(e,l,t){t.d(l,{Z:function(){return c}});var a=t(6252),n=t(3577),o=t(2262),r=t(9963);const s=["type","name","value"],u=(0,a._)("span",{class:"check"},null,-1),i={class:"control-label"};var d={__name:"CheckRadioPicker",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,d=(0,a.Fl)({get:()=>t.modelValue,set:e=>{l("update:modelValue",e)}}),m=(0,a.Fl)((()=>"radio"===t.type?"radio":"checkbox"));return(l,t)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.options,((l,c)=>((0,a.wg)(),(0,a.iD)("label",{key:c,class:(0,n.C_)([e.type,"mr-6 mb-3 last:mr-0"])},[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>(0,o.dq)(d)?d.value=e:null),type:(0,o.SU)(m),name:e.name,value:c},null,8,s),[[r.YZ,(0,o.SU)(d)]]),u,(0,a._)("span",i,(0,n.zw)(l),1)],2)))),128))],2))}};const m=d;var c=m},5690:function(e,l,t){t.d(l,{Z:function(){return m}});var a=t(6252),n=t(3577),o=t(2262);const r={class:"mb-6 last:mb-0"},s=["for"],u={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};var i={__name:"Field",props:{label:{type:String,default:null},labelFor:{type:String,default:null},help:{type:String,default:null}},setup(e){const l=(0,a.Rr)(),t=(0,a.Fl)((()=>{const e=[],t=l.default().length;return t>1&&e.push("grid grid-cols-1 gap-3"),2===t&&e.push("md:grid-cols-2"),e}));return(l,i)=>((0,a.wg)(),(0,a.iD)("div",r,[e.label?((0,a.wg)(),(0,a.iD)("label",{key:0,for:e.labelFor,class:"block font-bold mb-2"},(0,n.zw)(e.label),9,s)):(0,a.kq)("",!0),(0,a._)("div",{class:(0,n.C_)((0,o.SU)(t))},[(0,a.WI)(l.$slots,"default")],2),e.help?((0,a.wg)(),(0,a.iD)("div",u,(0,n.zw)(e.help),1)):(0,a.kq)("",!0)]))}};const d=i;var m=d},4012:function(e,l,t){t.d(l,{Z:function(){return w}});var a=t(6252),n=t(3577),o=t(5317),r=t(2262),s=t(1388);const u={class:"flex items-stretch justify-start relative"},i={class:"inline-flex"},d=["accept"],m={key:0},c={class:"inline-flex px-4 py-2 justify-center bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border rounded-r"};var p={__name:"FilePicker",props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:"Upload"},icon:{type:String,default:o.xyB},accept:{type:String,default:null},color:{type:String,default:"info"}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,o=(0,r.iH)(null),p=(0,r.iH)(t.modelValue),f=(0,a.Fl)((()=>t.modelValue));(0,a.YP)(f,(e=>{p.value=e,e||(o.value.input.value=null)}));const w=e=>{const t=e.target.files||e.dataTransfer.files;p.value=t[0],l("update:modelValue",p.value)};return(l,t)=>((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("label",i,[(0,a.Wm)(s.Z,{as:"a",label:e.label,icon:e.icon,color:e.color,class:(0,n.C_)({"rounded-r-none":p.value})},null,8,["label","icon","color","class"]),(0,a._)("input",{ref_key:"root",ref:o,type:"file",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:e.accept,onInput:w},null,40,d)]),p.value?((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("span",c,(0,n.zw)(p.value.name),1)])):(0,a.kq)("",!0)]))}};const f=p;var w=f},3239:function(e,l,t){t.d(l,{Z:function(){return u}});var a=t(6252),n=t(3577);const o={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"};var r={__name:"TitledSection",props:{custom:Boolean,first:Boolean,last:Boolean},setup(e){return(l,t)=>((0,a.wg)(),(0,a.iD)("section",{class:(0,n.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":e.first,"-mt-6":e.last,"-my-6":!e.first&&!e.last}])},[e.custom?(0,a.WI)(l.$slots,"default",{key:0}):((0,a.wg)(),(0,a.iD)("h1",o,[(0,a.WI)(l.$slots,"default")]))],2))}};const s=r;var u=s},2781:function(e,l,t){t.r(l),t.d(l,{default:function(){return P}});var a=t(6252),n=t(2262),o=t(9963),r=t(2355),s=t(5317),u=t(7315),i=t(9890),d=t(3045),m=t(5693),c=t(5690),p=t(2213),f=t(4012),w=t(1388),_=t(2419),b=t(6373),y=t(3577),g=t(9622),v=t(968),x=t(2618),h=t(2385);const k={class:"space-y-3 text-center md:text-left lg:mx-12"},Z={class:"flex justify-center md:block"},W={class:"text-2xl"},U=(0,a.Uk)(" Howdy, "),S=(0,a.Uk)("! "),V=(0,a._)("p",null,[(0,a.Uk)("Last login "),(0,a._)("b",null,"12 mins ago"),(0,a.Uk)(" from "),(0,a._)("b",null,"127.0.0.1")],-1),j={class:"flex justify-center md:block"};var q={__name:"UserCard",setup(e){const l=(0,r.h)(),t=(0,a.Fl)((()=>l.userName)),o=(0,n.iH)([]);return(e,l)=>((0,a.wg)(),(0,a.j4)(i.Z,{rounded:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g.Z,{type:"justify-around lg:justify-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(v.Z,{class:"lg:mx-12"}),(0,a._)("div",k,[(0,a._)("div",Z,[(0,a.Wm)(x.Z,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e),name:"sample-switch",type:"switch",options:{one:"Notifications"}},null,8,["modelValue"])]),(0,a._)("h1",W,[U,(0,a._)("b",null,(0,y.zw)((0,n.SU)(t)),1),S]),V,(0,a._)("div",j,[(0,a.Wm)(h.Z,{text:"Verified",type:"info",icon:(0,n.SU)(s.UY8)},null,8,["icon"])])])])),_:1})])),_:1}))}};const D=q;var C=D;const H={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"};var Y={__name:"Profile",setup(e){const l=(0,r.h)(),t=(0,n.iH)(["Admin","Profile"]),y=(0,n.qj)({name:l.userName,email:l.userEmail}),g=(0,n.qj)({password_current:"",password:"",password_confirmation:""}),v=()=>{l.setUser(y)},x=()=>{};return(e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(d.Z,{"title-stack":t.value},null,8,["title-stack"]),(0,a.Wm)(C),(0,a.Wm)(u.Z,null,{default:(0,a.w5)((()=>[(0,a._)("div",H,[(0,a.Wm)(i.Z,{title:"Edit Profile",icon:(0,n.SU)(s.wJe),form:"",onSubmit:(0,o.iM)(v,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,{label:"Avatar",help:"Max 500kb"},{default:(0,a.w5)((()=>[(0,a.Wm)(f.Z)])),_:1}),(0,a.Wm)(c.Z,{label:"Name",help:"Required. Your name"},{default:(0,a.w5)((()=>[(0,a.Wm)(p.Z,{modelValue:y.name,"onUpdate:modelValue":l[0]||(l[0]=e=>y.name=e),icon:(0,n.SU)(s.rI3),name:"username",required:"",autocomplete:"username"},null,8,["modelValue","icon"])])),_:1}),(0,a.Wm)(c.Z,{label:"E-mail",help:"Required. Your e-mail"},{default:(0,a.w5)((()=>[(0,a.Wm)(p.Z,{modelValue:y.email,"onUpdate:modelValue":l[1]||(l[1]=e=>y.email=e),icon:(0,n.SU)(s.xaU),type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue","icon"])])),_:1}),(0,a.Wm)(m.Z),(0,a.Wm)(b.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w.Z,{color:"info",type:"submit",label:"Submit"}),(0,a.Wm)(w.Z,{color:"info",label:"Options",outline:""})])),_:1})])),_:1},8,["icon","onSubmit"]),(0,a.Wm)(i.Z,{title:"Change Password",icon:(0,n.SU)(s.d5D),form:"",onSubmit:(0,o.iM)(x,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(c.Z,{label:"Current password",help:"Required. Your current password"},{default:(0,a.w5)((()=>[(0,a.Wm)(p.Z,{modelValue:g.password_current,"onUpdate:modelValue":l[2]||(l[2]=e=>g.password_current=e),icon:(0,n.SU)(s.AD$),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue","icon"])])),_:1}),(0,a.Wm)(m.Z),(0,a.Wm)(c.Z,{label:"New password",help:"Required. New password"},{default:(0,a.w5)((()=>[(0,a.Wm)(p.Z,{modelValue:g.password,"onUpdate:modelValue":l[3]||(l[3]=e=>g.password=e),icon:(0,n.SU)(s.$_S),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])])),_:1}),(0,a.Wm)(c.Z,{label:"Confirm password",help:"Required. New password one more time"},{default:(0,a.w5)((()=>[(0,a.Wm)(p.Z,{modelValue:g.password_confirmation,"onUpdate:modelValue":l[4]||(l[4]=e=>g.password_confirmation=e),icon:(0,n.SU)(s.$_S),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])])),_:1}),(0,a.Wm)(m.Z),(0,a.Wm)(b.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w.Z,{type:"submit",color:"info",label:"Submit"}),(0,a.Wm)(w.Z,{color:"info",label:"Options",outline:""})])),_:1})])),_:1},8,["icon","onSubmit"])])])),_:1}),(0,a.Wm)(_.Z)],64))}};const F=Y;var P=F}}]);
//# sourceMappingURL=profile.a80c845a.js.map
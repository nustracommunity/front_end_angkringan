import{Q as s,a as m}from"./QForm.03574897.js";import{Q as n}from"./QBtn.823a7a40.js";import{Q as p}from"./QPage.a76913c3.js";import{api as d}from"./axios.677b864d.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{o as f,c,w as l,a}from"./index.5fdea38f.js";import"./use-dark.c267975c.js";import"./render.74f566f9.js";import"./dom.b338bb0f.js";const g={data(){return{email:"",password:""}},methods:{async onLogin(){try{const{data:t}=await d.post("login",{email:this.email,password:this.password});localStorage.setItem("token",t.access_token),this.$router.push("/")}catch{this.$q.notify({type:"negative",message:"Login failed!"})}}}};function w(t,o,y,_,e,i){return f(),c(p,{class:"flex flex-center"},{default:l(()=>[a(m,{onSubmit:i.onLogin},{default:l(()=>[a(s,{modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=r=>e.email=r),label:"Email",type:"email"},null,8,["modelValue"]),a(s,{modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=r=>e.password=r),label:"Password",type:"password"},null,8,["modelValue"]),a(n,{label:"Login",type:"submit",color:"primary"})]),_:1},8,["onSubmit"])]),_:1})}var S=u(g,[["render",w]]);export{S as default};
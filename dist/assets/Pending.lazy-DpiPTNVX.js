import{c as m,r,u,a as b,j as l,F as f,b as e,L as c,d as g}from"./index-DPt1qdLq.js";import{B as N,a as w}from"./index-CgHI0dvs.js";const C=m("/Pending")({component:v});function v(){const[n,d]=r.useState(""),[k,o]=r.useState("all"),s=u(t=>t.todos),i=b(),p=s.filter(t=>t.completed),a=s.filter(t=>!t.completed),x=t=>{d(t.target.value)},h=()=>{n&&(i(g(n)),d(""))};return l(f,{children:[l("div",{id:"darkmode",className:"flex justify-end mr-[50px] font-bold text-3xl",children:[e("div",{className:"mr-[700px] font-poppins",children:e("h1",{children:"TODO-LIST"})}),e("input",{type:"checkbox",className:"checkbox opacity-0 absolute",id:"checkbox"}),l("label",{htmlFor:"checkbox",className:"label w-[49px] h-[24px] bg-black flex border m-2 rounded-2xl items-center justify-between p-1 relative cursor-pointer",children:[e(N,{color:"white"}),e(w,{color:"yellow"}),e("div",{className:"ball w-[22px] h-[22px] bg-white absolute top-0 left-0.5 border rounded-3xl"})]})]}),e("div",{children:l("div",{className:"max-w-[485px] m-[15px_auto] bg-white rounded-[7px] p-[25px_0] shadow-2xl",children:[e("div",{className:"h-[52px] p-[0_25px] relative",children:e("input",{type:"text",value:n,onChange:x,placeholder:"Add a new task",className:"h-full w-full text-[18px] rounded-[5px] border border-[#999] p-[0_10px_0_13px] placeholder:text-[#bfbfbf]"})}),l("div",{className:"flex justify-between items-center p-[18px_25px] border-b border-[#ccc]",children:[l("div",{className:"flex",children:[e(c,{to:"/",children:l("span",{id:"all",className:"cursor-pointer mx-2 text-[17px] text-[#3c87ff]",onClick:()=>o("all"),children:["All(",s.length,")"]})}),e(c,{to:"/Pending",children:l("span",{id:"pending",className:"cursor-pointer mx-2 text-[17px]",onClick:()=>o("pending"),children:["Pending(",a.length,")"]})}),e(c,{to:"/Complete",children:l("span",{id:"completed",className:"cursor-pointer mx-2 text-[17px]",onClick:()=>o("completed"),children:["Completed(",p.length,")"]})})]}),e("button",{onClick:h,className:"outline-none border-none text-white cursor-pointer text-[13px] rounded-[4px] p-[7px_13px] bg-[#3c87ff]",children:"Add"})]}),e("ul",{className:"m-[20px_25px]",children:a.map(t=>e("li",{className:"flex justify-between items-center p-2 border-b border-[#ccc]",children:e("div",{className:"flex items-center gap-2",children:e("span",{children:t.text})})},t.id))})]})})]})}export{C as Route,v as default};

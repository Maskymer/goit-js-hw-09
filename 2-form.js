import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a={email:"",message:""},e=document.querySelector(".feedback-form");e.style.display="flex";e.style.flexDirection="column";e.style.width="360px";e.style.gap="10px";e.style.padding="20px";e.style.margin="auto";const l=JSON.parse(localStorage.getItem("feedback-form-state"));l&&(a.email=l.email||"",a.message=l.message||"",e.email.value=a.email,e.message.value=a.message);e.addEventListener("input",t=>{const{name:s,value:m}=t.target;a[s]=m.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))});e.addEventListener("submit",t=>{if(t.preventDefault(),!a.email||!a.message){alert("Fill please all fields");return}console.log(a),localStorage.removeItem("feedback-form-state"),a.email="",a.message="",e.email.value="",e.message.value=""});
//# sourceMappingURL=2-form.js.map

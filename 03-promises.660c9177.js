let e,t,o;function n(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>o?n(e,t):l(e,t)))}document.querySelector(".form").addEventListener("submit",(function(l){l.preventDefault();const{delay:r,step:u,amount:m}=l.target.elements;e=Number(r.value),t=Number(u.value),o=Number(m.value);for(let l=1,r=e;l<=o;l+=1,r+=t)console.log(r),setTimeout((()=>{n(l,r).then(((e,t)=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch(((e,t)=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}),r)}));
//# sourceMappingURL=03-promises.660c9177.js.map
let e,t,o;function n(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{o?n({position:e,delay:t}):l({position:e,delay:t})}))}document.querySelector(".form").addEventListener("submit",(function(l){l.preventDefault();const{delay:i,step:s,amount:r}=l.target.elements;e=Number(i.value),t=Number(s.value),o=Number(r.value);for(let l=1,i=e;l<=o;l+=1,i+=t)setTimeout((()=>{n(l,i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}),i)}));
//# sourceMappingURL=03-promises.8e0d4256.js.map

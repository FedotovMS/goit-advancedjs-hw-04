import{a as w,i as u,S as v}from"./assets/vendor-89c3e674.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const p=40;async function L(t,e){const s="https://pixabay.com/api/",n="34617221-40fb3a679d52688cd42ce20c8",r=new URLSearchParams({key:n,q:t,page:e,per_page:p}),{data:o}=await w.get(`${s}?${r}`);return o}function C(t){return t.map(({webformatURL:e,largeImageURL:s,tags:n,likes:r,views:o,comments:i,downloads:b})=>`
      <div class="photo-card">
      <a href="${s}" class="image-link">
       <img src="${e}" alt="${n}" loading="lazy" class="image"/>
      </a
      <div class="info">
          <p class="info-item">
              <b>Likes: ${r}</b>
          </p>
              <p class="info-item">
          <b>Views: ${o}</b>
          </p>
          <p class="info-item">
              <b>Comments: ${i}</b>
          </p>
          <p class="info-item">
              <b>Downloads: ${b}</b>
          </p>
      </div>
  </div>`).join("")}const f={timeout:3e3,close:!1,closeOnClick:!0,icon:null,position:"topLeft"};class a{static success(e){u.success({title:"Success",titleColor:"green",message:e,messageColor:"green",progressBarColor:"green",...f})}static error(e){u.error({title:"Error",titleColor:"red",message:e,messageColor:"red",progressBarColor:"red",...f})}static warning(e){u.warning({title:"Warning",message:e,titleColor:"red",messageColor:"red",progressBarColor:"red",...f})}}const y=document.querySelector(".search-form"),m=document.querySelector(".gallery");let c=1,l="",d=0,g=1;const $={rootMargin:"200px",threshold:.1},S=new v(".gallery a",{});function E(t,e){t.forEach(async s=>{s.isIntersecting&&(e.unobserve(s.target),await h())})}const P=new IntersectionObserver(E,$);async function q(t){t.preventDefault();const e=t.target.elements.searchQuery.value.trim();if(e==="")return a.error("Please enter a search query!");if(e===l)return a.warning("Please enter a new search query! Or scroll down");await h()}function M(){const t=y.elements.searchQuery.value.trim();return t!==l?(c=1,g=1,l=t,!0):(c+=1,!1)}async function h(){const t=M();if(t&&(m.innerHTML=""),c>g){a.warning("No more images");return}let e;try{const s=await L(l,c);e=s.hits,d=s.totalHits,g=Math.ceil(d/p)}catch(s){a.error(s.message)}if(!e.length){a.error("Sorry, there are no images matching your search query. Please try again.");return}if(t){const s=`"Hooray! We found ${d} images."`;a.success(s)}m.insertAdjacentHTML("beforeend",C(e)),P.observe(m.lastElementChild),S.refresh()}y.addEventListener("submit",q);
//# sourceMappingURL=commonHelpers.js.map

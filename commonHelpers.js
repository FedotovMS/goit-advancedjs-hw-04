import{a as v,i as u,S as L}from"./assets/vendor-89c3e674.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const y=40;async function C(t,e){const o="https://pixabay.com/api/",a="34617221-40fb3a679d52688cd42ce20c8",r=new URLSearchParams({key:a,image_type:"photo",orientation:"horizontal",safesearch:"true",q:t,page:e,per_page:y}),{data:s}=await v.get(`${o}?${r}`);return s}function E(t){return t.map(({webformatURL:e,largeImageURL:o,tags:a,likes:r,views:s,comments:c,downloads:b})=>`
      <div class="photo-card">
      <a href="${o}" class="image-link">
       <img src="${e}" alt="${a}" loading="lazy" class="image"/>
      </a
      <div class="info">
          <p class="info-item">
              <b>Likes: ${r}</b>
          </p>
              <p class="info-item">
          <b>Views: ${s}</b>
          </p>
          <p class="info-item">
              <b>Comments: ${c}</b>
          </p>
          <p class="info-item">
              <b>Downloads: ${b}</b>
          </p>
      </div>
  </div>`).join("")}const d={timeout:3e3,close:!1,closeOnClick:!0,icon:null,position:"topLeft"};class n{static success(e){u.success({title:"Success",titleColor:"green",message:e,messageColor:"green",progressBarColor:"green",...d})}static error(e){u.error({title:"Error",titleColor:"red",message:e,messageColor:"red",progressBarColor:"red",...d})}static warning(e){u.warning({title:"Warning",message:e,titleColor:"red",messageColor:"red",progressBarColor:"red",...d})}}const w=document.querySelector(".search-form"),m=document.querySelector(".gallery");let i=1,l="",f=0,g=1;const $={rootMargin:"200px",threshold:.1},S=new L(".gallery a",{});function P(t,e){t.forEach(async o=>{o.isIntersecting&&(e.unobserve(o.target),await p())})}const H=new IntersectionObserver(P,$);async function T(t){t.preventDefault();const e=t.target.elements.searchQuery.value.trim();if(e==="")return n.error("Please enter a search query!");if(e===l)return n.warning("Please enter a new search query! Or scroll down");await p()}function q(){const t=w.elements.searchQuery.value.trim();return t!==l?(i=1,g=1,l=t,!0):(i+=1,!1)}async function p(){const t=q();if(t&&(m.innerHTML=""),i>g){n.warning("No more images");return}let e;try{const o=await C(l,i);e=o.hits,f=o.totalHits,g=Math.ceil(f/y)}catch(o){n.error(o.message)}if(!e.length){n.error("Sorry, there are no images matching your search query. Please try again.");return}if(t){const o=`"Hooray! We found ${f} images."`;n.success(o)}m.insertAdjacentHTML("beforeend",E(e)),H.observe(m.lastElementChild),S.refresh()}w.addEventListener("submit",T);let h;window.addEventListener("scroll",async()=>{clearTimeout(h),h=setTimeout(async()=>{if(document.documentElement.offsetHeight-(window.scrollY+window.innerHeight)<10){const o=i;await p(),o===i&&(n.warning("No more images"),window.removeEventListener("scroll"))}},200)});
//# sourceMappingURL=commonHelpers.js.map

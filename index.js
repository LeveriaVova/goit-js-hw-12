import{a as v,S as b,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const S="54778423-d145f1f321679e99c9163e3ff",d=async(r,e)=>{const a=new URLSearchParams({key:S,q:r,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return(await v.get(`https://pixabay.com/api/?${a}`)).data}catch(o){throw o}},m=document.querySelector(".gallery"),h=document.querySelector(".loader"),f=document.querySelector(".btn"),q=new b(".gallery a",{captions:!0,captionPosition:"bottom",captionsData:"alt",captionDelay:250});function y(r){const e=P(r);m.insertAdjacentHTML("beforeend",e),q.refresh()}function P(r){return r.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-img"
                src="${e.webformatURL}"
                alt="${e.tags}">
            </a>
            <ul class="list-ue">
                <li class="item-ue">
                <h2 class="item-title">likes</h2>
                <p class="item-value">${e.likes}</p>
                </li>
                <li class="item-ue">
                <h2 class="item-title">views</h2>
                <p class="item-value">${e.views}</p>
                </li>
                <li class="item-ue">
                <h2 class="item-title">comments</h2>
                <p class="item-value">${e.comments}</p>
                </li>
                <li class="item-ue">
                <h2 class="item-title">downloads</h2>
                <p class="item-value">${e.downloads}</p>
                </li>
            </ul>
        </li>`).join("")}function $(){m.innerHTML=""}function p(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}function w(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}const B=document.querySelector(".form"),M=document.querySelector(".btn");M.addEventListener("click",O);B.addEventListener("submit",E);let i=1,L="",u=0;async function E(r){r.preventDefault();const a=r.target.elements["search-text"].value.trim();if(a.length===0)return n.show({title:"Hey",message:"Please enter a search query"});p(),i=1,L=a,$(),c();try{const o=await d(a,i);if(o.hits.length===0){n.show({title:"Sorry",message:"No images found"});return}y(o.hits),u=o.totalHits,i*15<u?w():(c(),n.show({message:"We're sorry, but you've reached the end of search results."}))}catch{n.show({title:"Error",message:"Something went wrong"})}finally{g()}}async function O(){try{i+=1,p();const r=await d(L,i);y(r.hits);const e=document.querySelector(".gallery-item");if(e){const{height:a}=e.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}i*15<u?w():(c(),n.show({message:"We're sorry, but you've reached the end of search results."}))}catch{n.show({title:"Error",message:"Something went wrong"})}finally{g()}}
//# sourceMappingURL=index.js.map

customElements.get("pickup-availability")||customElements.define("pickup-availability",class extends HTMLElement{constructor(){super();!this.hasAttribute("available")||(this.errorHtml=this.querySelector("template").content.firstElementChild.cloneNode(!0),this.onClickRefreshList=this.onClickRefreshList.bind(this),this.fetchAvailability(this.dataset.variantId))}fetchAvailability(e){const t=`${this.dataset.baseUrl}variants/${e}/?section_id=pickup-availability`;fetch(t).then(i=>i.text()).then(i=>{const r=new DOMParser().parseFromString(i,"text/html").querySelector(".shopify-section");this.renderPreview(r)}).catch(i=>{const r=this.querySelector("button");r&&r.removeEventListener("click",this.onClickRefreshList),this.renderError()})}onClickRefreshList(e){this.fetchAvailability(this.dataset.variantId)}renderError(){this.innerHTML="",this.appendChild(this.errorHtml),this.querySelector("button").addEventListener("click",this.onClickRefreshList)}renderPreview(e){const t=document.querySelector("pickup-availability-drawer");if(t&&t.remove(),!e.querySelector("pickup-availability-preview")){this.innerHTML="",this.removeAttribute("available");return}this.innerHTML=e.querySelector("pickup-availability-preview").outerHTML,this.setAttribute("available",""),document.body.appendChild(e.querySelector("pickup-availability-drawer")),this.querySelector("button").addEventListener("click",i=>{document.querySelector("pickup-availability-drawer").show(i.target)})}}),customElements.get("pickup-availability-drawer")||customElements.define("pickup-availability-drawer",class extends HTMLElement{constructor(){super();this.onBodyClick=this.handleBodyClick.bind(this),this.querySelector("button").addEventListener("click",()=>{this.hide()}),this.addEventListener("keyup",()=>{event.code.toUpperCase()==="ESCAPE"&&this.hide()})}handleBodyClick(e){const t=e.target;t!=this&&!t.closest("pickup-availability-drawer")&&t.id!="ShowPickupAvailabilityDrawer"&&this.hide()}hide(){this.removeAttribute("open"),document.body.removeEventListener("click",this.onBodyClick),document.body.classList.remove("overflow-hidden"),removeTrapFocus(this.focusElement)}show(e){this.focusElement=e,this.setAttribute("open",""),document.body.addEventListener("click",this.onBodyClick),document.body.classList.add("overflow-hidden"),trapFocus(this)}});
//# sourceMappingURL=/s/files/1/0433/3790/8380/t/28/assets/pickup-availability.js.map?v=10650376893278288582

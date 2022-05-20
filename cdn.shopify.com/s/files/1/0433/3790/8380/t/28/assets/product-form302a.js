customElements.get("product-form")||customElements.define("product-form",class extends HTMLElement{constructor(){super();this.form=this.querySelector("form"),this.form.querySelector("[name=id]").disabled=!1,this.form.addEventListener("submit",this.onSubmitHandler.bind(this)),this.cartNotification=document.querySelector("cart-notification")}onSubmitHandler(t){t.preventDefault();const r=this.querySelector('[type="submit"]');if(r.classList.contains("loading"))return;this.handleErrorMessage(),r.setAttribute("aria-disabled",!0),r.classList.add("loading");const s=fetchConfig("javascript");s.headers["X-Requested-With"]="XMLHttpRequest",delete s.headers["Content-Type"];const o=new FormData(this.form);o.append("sections",this.cartNotification.getSectionsToRender().map(e=>e.id)),o.append("sections_url",window.location.pathname),s.body=o,fetch(`${routes.cart_add_url}`,s).then(e=>e.json()).then(e=>{if(e.status){this.handleErrorMessage(e.description);return}window.scrollTo({top:0,behavior:"smooth"}),this.cartNotification.renderContents(e)}).catch(e=>{console.error(e)}).finally(()=>{r.classList.remove("loading"),r.removeAttribute("aria-disabled")})}handleErrorMessage(t=!1){this.errorMessageWrapper=this.errorMessageWrapper||this.querySelector(".product-form__error-message-wrapper"),this.errorMessage=this.errorMessage||this.errorMessageWrapper.querySelector(".product-form__error-message"),this.errorMessageWrapper.toggleAttribute("hidden",!t),t&&(this.errorMessage.textContent=t)}});
//# sourceMappingURL=/s/files/1/0433/3790/8380/t/28/assets/product-form.js.map?v=6145633377487508990

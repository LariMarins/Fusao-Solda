import "./assets";

import { Router } from "@vaadin/router";
import { initRouter } from "./assets/router";
import { animarScrollNavbar } from "./modules/animarScrollNavbar";

export let navbar;
let dialog;
let router;

document.addEventListener("DOMContentLoaded", function () {
  router = initRouter();

 
  navbar = document.querySelector("app-navbar");

  dialog = document
    .querySelector("menu-section")
    .shadowRoot.querySelector("dialog");
});


export const nav = {
  abrir: function () {
    navbar.classList.add("escondido");
    dialog.showModal();
  },
  rolarPara: function (secao) {
    Router.go("/");
    router.ready.then(() => {

      document
      .querySelector("home-page")
      .shadowRoot.querySelector(secao)
      .scrollIntoView();

      this.fechar()
    });
  },
  fechar: function () {
    dialog.close();
  },
};

/* Navbar dinâmica ao scroll */
//janeçla. ao rolar= animar SrcollNavbar
window.onscroll = animarScrollNavbar;

"use strict";var e=document.getElementById("burgerBtnOpen"),t=document.getElementById("burgerBtnClose"),c=document.getElementById("btnSearchOpen"),n=document.getElementById("btnSearchClose"),d=document.getElementById("mapContentClose"),r=document.querySelector(".header"),a=document.querySelector(".contacts__grid-left-blok"),s=document.querySelector(".header__center"),i=document.querySelector(".header__right");e.addEventListener("click",(function(){s.classList.add("header__center--active"),r.classList.add("header--background")})),t.addEventListener("click",(function(){s.classList.remove("header__center--active"),r.classList.remove("header--background")})),c.addEventListener("click",(function(){i.classList.add("header__right--active")})),n.addEventListener("click",(function(){i.classList.remove("header__right--active")})),d.addEventListener("click",(function(){a.classList.add("contacts__grid-left-blok--close")}));
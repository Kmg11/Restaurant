$((function(){let s=!1,o=$(".nav-btn");navItems=$(".list-item"),o.on("click",(function(){s||(s=!0,$(this).toggleClass("show"),$(".nav-list").toggleClass("show"),navItems.each((function(){$(this).toggleClass("show")})),setTimeout((()=>{s=!1}),900))})),$(window).on("resize",(function(){navItems.hasClass("show")&&(o.removeClass("show"),$(".nav-list").removeClass("show"),navItems.each((function(){$(this).removeClass("show")})))}));let l=$(".navbar");$("html, body").scrollTop()>=100?l.addClass("scroll"):l.removeClass("scroll"),$(window).on("scroll",(function(){$("html, body").scrollTop()>=100?l.addClass("scroll"):l.removeClass("scroll")})),$(".nav-list, .nav-btn").on("click",(function(s){s.stopPropagation()})),$(document).on("click",(function(s){navItems.hasClass("show")&&s.target!==$(".nav-list")&&s.target!==o&&(o.removeClass("show"),$(".nav-list").removeClass("show"),navItems.each((function(){$(this).removeClass("show")})))}))}));
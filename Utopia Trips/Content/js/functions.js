function toggleChevron(e){$(e.target).prev(".panel-heading").find("i.indicator").toggleClass("icon-plus icon-minus")}$(window).load(function(){$("#status").fadeOut(),$("#preloader").delay(350).fadeOut("slow"),$("body").delay(350).css({overflow:"visible"}),$(window).scroll()}),$(window).scroll(function(){"use strict";$(this).scrollTop()>1?$("header").addClass("sticky"):$("header").removeClass("sticky")}),$("a.open_close").on("click",function(){$(".main-menu").toggleClass("show"),$(".layer").toggleClass("layer-is-visible")}),$("a.show-submenu").on("click",function(){$(this).next().toggleClass("show_normal")}),$("a.show-submenu-mega").on("click",function(){$(this).next().toggleClass("show_mega")}),$(window).width()<=480&&$("a.open_close").on("click",function(){$(".cmn-toggle-switch").removeClass("active")}),$(window).bind("resize load",function(){$(this).width()<991?($(".collapse#collapseFilters").removeClass("in"),$(".collapse#collapseFilters").addClass("out")):($(".collapse#collapseFilters").removeClass("out"),$(".collapse#collapseFilters").addClass("in"))}),$(".expose").on("click",function(e){"use strict";$(this).css("z-index","4"),$("#overlay").fadeIn(300)}),$("#overlay").click(function(e){"use strict";$("#overlay").fadeOut(300,function(){$(".expose").css("z-index","3")})}),$(".tooltip-1").tooltip({html:!0}),$(".panel-group").on("hidden.bs.collapse shown.bs.collapse",toggleChevron),$(".btn_map").on("click",function(){var e=$(this);e.text()==e.data("text-swap")?e.text(e.data("text-original")):e.text(e.data("text-swap"))}),(new WOW).init(),$(function(){"use strict";$(".video").magnificPopup({type:"iframe"}),$(".parallax-window").parallax({}),$(".magnific-gallery").each(function(){$(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})}),$(".dropdown-menu").on("click",function(e){e.stopPropagation()}),$("ul#top_tools li .dropdown").hover(function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(50).fadeIn(300)},function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(50).fadeOut(300)});for(var e=document.querySelectorAll(".cmn-toggle-switch"),o=e.length-1;o>=0;o--){var a=e[o];a.addEventListener("click",function(e){e.preventDefault(),!0===this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")})}$(window).scroll(function(){0!=$(this).scrollTop()?$("#toTop").fadeIn():$("#toTop").fadeOut()}),$("#toTop").on("click",function(){$("body,html").animate({scrollTop:0},500)}),$(".numbers-row").append('<div class="inc button_inc">+</div><div class="dec button_inc">-</div>'),$(".button_inc").on("click",function(){var e=$(this),o=e.parent().find("input").val();if("+"==e.text())var a=parseFloat(o)+1;else if(o>1)a=parseFloat(o)-1;else a=0;e.parent().find("input").val(a)})}),$("ul#cat_nav li a").on("click",function(){$("ul#cat_nav li a.active").removeClass("active"),$(this).addClass("active")}),$("#map_filter ul li a").on("click",function(){$("#map_filter ul li a.active").removeClass("active"),$(this).addClass("active")}),$(function(){"use strict";$("#range").ionRangeSlider({hide_min_max:!0,keyboard:!0,min:0,max:150,from:30,to:100,type:"double",step:1,prefix:"$",grid:!0})}),$("footer.revealed").footerReveal({shadow:!1,opacity:.6,zIndex:0}),$(".search-overlay-menu-btn").on("click",function(e){$(".search-overlay-menu").addClass("open"),$('.search-overlay-menu > form > input[type="search"]').focus()}),$(".search-overlay-close").on("click",function(e){$(".search-overlay-menu").removeClass("open")}),$(".search-overlay-menu, .search-overlay-menu .search-overlay-close").on("click keyup",function(e){(e.target==this||"search-overlay-close"==e.target.className||27==e.keyCode)&&$(this).removeClass("open")});
jQuery(document).ready(function($) {
  $(".phone-mask").mask("(999) 999-9999");
  $("#my-menu").mmenu({ pageScroll: true, extensions: ["position-right", "theme-dark", "pagedim-black"], navbar: { add: false } }, { clone: true });
  // scroll to
  jQuery("#page a.scroll-to").on("click", function() {
    var page_width = document.body.clientWidth;
    var top_offset = 0;
    var _top = $($(this).attr("href")).offset().top - top_offset;
    $("html, body").animate({ scrollTop: _top });
    return false;
  });
});
// get current year
(function() {
  var now = new Date();
  var year = now.getUTCFullYear();
  var yearHolder = document.getElementById("currentYear");
  yearHolder.innerText = year;
  document.addEventListener(
    "wpcf7mailsent",
    function(event) {
      location = "/thank-you";
    },
    false
  );
})();
// accordion
(function() {
  var accItem = document.getElementsByClassName("faq-item");
  var accHD = document.getElementsByClassName("faq-item__head");
  for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener("click", toggleItem, false);
  }
  function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
      accItem[i].className = "faq-item close";
    }
    if (itemClass == "faq-item close") {
      this.parentNode.className = "faq-item open";
    }
  }
})();
// (function() {
//   var switcher = document.getElementById("menu-switcher");
//   switcher.addEventListener("click", toggleSwitcherClass, false);
//   function toggleSwitcherClass(e) {
//     this.classList.toggle("opened");
//     //console.log(this);
//   }
// })();

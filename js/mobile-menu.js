(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

      mobileMenuRef.classList.toggle("is-open"); 
  });
    
  // Close the mobile menu on wider screens if the device orientation changes
     window.matchMedia('(min-width: 1199px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
     });
  // // close menu
  //   var mobileMenuOutsideClick = function() {
  //   $(document).click(function (e) {
  //     var container = $("#data-menu, .js-fh5co-nav-toggle");
  //     if (!container.is(e.target) && container.has(e.target).length === 0) {
  //       if ( $('body').hasClass('is-open') ) {
  //       $('body').removeClass('is-open');
  //     }
  //     }
  //   });
  // };
})();
$(function () {

  //Sidebar Filter Hide & Show Child Items
  $(".sidebar ul>li.header").click(function (e) {
    if ($(this).hasClass("closed")) $(this).siblings().show();
    else $(this).siblings().hide();
    $(this).toggleClass("closed");
  });
  $(".sidebar ul>li:not(.header)").click(function (e) {
    if (!$(this).hasClass("active") && $(this).find("input").length == 0) {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    }
  });

  //Readmore Shows Detail
  $(".read-more").click(function (e) {
    if ($(this).hasClass("hide")) {
      $(this).removeClass("hide");
      $(this).siblings(".detail").hide();
    }
    else {
      $(this).addClass("hide");
      $(this).siblings(".detail").show();
    }
  });

  //Collapsing
  $(".collapse .header").click(function () {
    if (!$(this).parent().hasClass("active")) {
      $(this).parent().siblings().removeClass("active")
      $(this).parent().addClass("active");
      //Auto return element when user pass the element on view
      if ($(window).scrollTop() > $(this).parent().offset().top)
        $(this).parent().get(0).scrollIntoView();
    }
  });

  //Menu
  $(".menu").click(function (e) {
    $(this).toggleClass("active");
  });

  //Pagination
  //Create Page
  $(".carousel .page").each((i) => {
    $(".navigation ul").append(i == 0 ? $("<li>").addClass("active") : $("<li>"));
  })
  //Change Page
  $(".navigation ul li").click(function (e, i) {
    if (!$(this).hasClass("active")) {
      $(".carousel .page").removeClass("active");
      $(".carousel .page").eq($(this).index()).addClass("active");
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    }
  });
  //Auto Change Page
  setInterval(() => {
    let next = ($(".navigation ul li.active").index() + 1) % $(".navigation ul li").length;
    $(".navigation ul li").eq(next).click();
  }, 2000);

  //Listing Buttons
  $(".listing-styles i").click(function (e) {
    if (!$(this).hasClass("active")) {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
      if (e.target.nextElementSibling != null) $(".items").addClass("list");
      else $(".items").removeClass("list");
    }
  })
});

//Lazy Loading https://web.dev/native-lazy-loading/
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
  document.body.appendChild(script);
}
//////////////////////////////////////////////////////
// 001
// জেকুয়েরী দিয়ে কোন কিছুর হাইট মাপার ফাংশন। rrf class-069
$(function () {
  var footerHeight = $(".site-footer").height();
  $("site-main-wrapper").css('margin-bottom', footerHeight + 'px');
});



//////////////////////////////////////////////////////
// 002
// জেকুয়েরী দিয়ে কোন কিছুকে হোবার করলে ক্লাস এড করার ফাংশন।
$(function () {
  $('.flipbox__item').hover(function(){
    $(this).addClass('flip');
  },function(){
    $(this).removeClass('flip');
  });
});



//////////////////////////////////////////////////////
// 003
// জেকুয়েরী দিয়ে on click এর মাধ্যমে ক্লাস এড করার ফাংশন।
$(function () {
  $(".menu-trigger").on('click', function() {
    $(".off-canvas-menu").addClass("show-off-canvas-menu");
  });
});



//////////////////////////////////////////////////////
// 004
// জেকুয়েরী দিয়ে on click এর মাধ্যমে ক্লাস এড এবং রিমুভ করার ফাংশন।
$(function () {
  $(".menu-trigger").on('click', function() {
    $(".off-canvas-menu").addClass("show-off-canvas-menu");
  });
  $(".menu-close").on('click', function() {
    $(".off-canvas-menu").removeClass("show-off-canvas-menu");
  });
});



//////////////////////////////////////////////////////
// 005 
// bootstrap এর modal close করার সাথে সাথে ভিডিও বন্ধ করার ফাংশন।
$(function () {
  $(".modal").on('hidden.bs.modal', function (e) {
    $(".modal iframe").attr("src", $(".modal iframe").attr("src"));
  });
});



//////////////////////////////////////////////////////
// 006
// নির্দিষ্ট কিছু মিডিয়া কোয়েরিতে কোন js কিংবা css কে কাজ করানোর ফাংশন।
if (screen.width >= 600) {
	// scripts
};

// অথবা
if (document.documentElement.clientWidth < 900) {
	// scripts js
};

@media all and (max-width: 900px) {
	// styles css
}

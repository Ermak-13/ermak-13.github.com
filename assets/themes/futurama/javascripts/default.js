$(function() {
  $('.tooltip-enabled').tooltip();
  $('.tooltip-disabled').tooltip({ disabled: true });

  $('.nav .nav-element').hover(
    function() {
      $(this).find('p').show('slide', 'slow');
    },
    function() {
      $(this).find('p').hide('slide', 'slow');
    }
  );
});
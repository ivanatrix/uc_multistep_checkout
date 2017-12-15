/**
 * @file
 * JS for Multistep Checkout (uc_multistep_checkout) module.
 */

/*Drupal.behaviors.ucMultistepCheckout = function (context) {

};*/

$(document).ready(function() {
  $('#checkout-form-bottom').appendTo('#step_3');
  $('#checkout-instructions').parent().attr('id', 'checkout-multistep');
  $('#checkout-navigation').prependTo('#checkout-multistep');
  $('#checkout-instructions').insertBefore('#checkout-multistep');
  $('.item-list:empty').remove();
  var tabs = $('#checkout-multistep').tabs({active: 1});
  $('.checkout-next').click(function() {
    var current = tabs.tabs('option', 'selected');
    tabs.tabs('option', 'selected', current + 1);
    tabs.tabs('refresh');
    $(document).scrollTop(0);
  });
});


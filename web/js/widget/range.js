jQuery('input[type=range]').change(function() {
  var rangeValue = jQuery(this).val();
  jQuery('span.range').html(rangeValue);
});
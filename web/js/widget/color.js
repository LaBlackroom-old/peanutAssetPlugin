if(!Modernizr.inputtypes.color)
{
  jQuery('.colorSelector').ColorPicker({
	onShow: function (colpkr) {
      jQuery(colpkr).fadeIn(500);
      return false;
	},
	onHide: function (colpkr) {
      jQuery(colpkr).fadeOut(500);
      return false;
	},
	onChange: function(hsb, hex, rgb, el) {
      jQuery('input[type=color]').val('#' + hex);
      jQuery(el).ColorPickerHide();
	}
  })
}
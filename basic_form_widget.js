/// <reference path="jquery-1.12.4.js" />
/// <reference path="jquery-ui-1.8.16.custom.min.js" />

$.widget('Shurns.simpleValid', {

  options: {
    itemNames: []
  },

  _create: function () {

    if (this.options.itemNames) {
      this._addClass(this.element, 'form-default');
      this._createItems();
    }
  },

  _createDivWrapper: function () {

  },

  _createItems: function () {
    var items = this.options.itemNames,
        textBox;

    $.each(items, function (index, item) {

      textBox = $('<input>', { type: 'text' }).appendTo(this.element);
      this._addClass(textBox, 'form-default', 'form-textbox');

    }.bind(this));
  }
});

$(document).ready(function () {
  //Simple Validation Widget goes here...
});
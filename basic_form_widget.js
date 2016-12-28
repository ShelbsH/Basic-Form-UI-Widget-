$.widget('Shurns.basicForm', {

  options: {
    itemNames: [],
    perColumn: 2
  },

  _create: function () {
    this._createData();
    this.element.append(this.uiFormBasic);
  },

  _columnToClass: function () {

    var column = this.options.perColumn;

    //Four columns per row is the maximum amount of columns to be inserted.
    var cols = {
      1: 'twelve',
      2: 'six',
      3: 'four',
      4: 'three'
    }

    return cols[column] + ' columns';

    // ex. this._addClass(this._div, column);
  },

  _createData: function () {
    var inputNames = this.options.itemNames,
        formData = '';

    this.uiFormBasic = $('<div>');
    this._addClass(this.uiFormBasic, 'form-default');

    if ($.isArray(inputNames) && inputNames.length) {
      $.each(inputNames, function (num, names) {
        formData += '<div><label>' + names + ':</label><input type="text"></div>';
      });
    }

    this.uiFormBasic.append(formData);

    this._addClass(this.uiFormBasic.find('div'), 'form-default', this._columnToClass());
    this._addClass(this.uiFormBasic.find('label'), 'form-default', 'labels');
    this._addClass(this.uiFormBasic.find('input'), 'form-default');

    return formData;
  },

  _setOption: function (key, value) {

  },

  _renderRows: function () {
    //Each row should append nth elements from the "perColumn" option.
  }
});

$(document).ready(function () {
  $('#divTest').basicForm({
    itemNames: ['First Name', 'Last Name', 'Occupation']
  });
});
$.widget('Shurns.basicForm', {

  options: {
    itemNames: [],
    perColumn: 2
  },

  _create: function () {
    this._renderRows();
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
        formData = '',
        storeInputs = [];

    if ($.isArray(inputNames) && inputNames.length) {
      $.each(inputNames, function (num, names) {
        storeInputs.push('<div><label>' + names + ':</label><input type="text"></div>');
      });
    }

    return storeInputs;
  },

  _setOption: function (key, value) {

  },

  _renderRows: function () {
    //Each row should append nth elements from the "perColumn" option.
    var columns = this.options.perColumn,
        htmlInputs = this._createData(),
        newInputs = [],
        rows = '',
        uiForm;

    this.uiFormBasic = $('<div>');
    this._addClass(this.uiFormBasic, 'form-default');

    uiForm = this.uiFormBasic;

    for (var x = 0; x < htmlInputs.length; x += columns) {
      newInputs.push(htmlInputs.slice(x, x + columns));
    }
    for (var i = 0; i < newInputs.length; i += 1) {
      rows += '<div class="rows">' + newInputs[i] + '</div>';
    }
    this.uiFormBasic.append(rows.split(',').join(''));

    this._addClass(this.uiFormBasic.find('div').find('div'), 'form-default', this._columnToClass());
    this._addClass(this.uiFormBasic.find('label'), 'form-default', 'labels');
    this._addClass(this.uiFormBasic.find('input'), 'form-default');
  }
});

$(document).ready(function () {
  $('#divTest').basicForm({
    itemNames: ['First Name', 'Last Name', 'Occupation']
  });
});
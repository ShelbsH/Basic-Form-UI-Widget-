$.widget('Shurns.basicForm', {

  options: {
    itemNames: [],
    perColumn: 2
  },

  _create: function () {
    var items = this.options.itemNames;
    
    if ($.isArray(items) && items.length) {
      this._createData();
      this._columnToClass();
      this.element.append(this.uiFormBasic);
    }
  },

  _createData: function () {
    var inputNames = this.options.itemNames,
        columns = this.options.perColumn,
        formData = '',
        storeInputs = [],
        x = 0;

    this.uiFormBasic = $('<div>');
    this._addClass(this.uiFormBasic, 'form-default');
    
    $.each(inputNames, function (num, names) {
      storeInputs.push('<div><label>' + names + ':</label><input type="text"></div>');
    });

    //Each row class will append the number of elements based on the "perColumn" option
    while (x < storeInputs.length) {
      formData += '<div class ="rows">' + storeInputs.slice(x, x + columns) + '</div>';
      x += columns;
    }

    this.uiFormBasic.append(formData.split(',').join(''));
  },

  _columnToClass: function () {

    var column = this.options.perColumn,
        uiFormBasic = this.uiFormBasic;

    //Four columns per row is the maximum amount of columns to be inserted.
    var cols = {
      1: 'twelve',
      2: 'six',
      3: 'four',
      4: 'three'
    }

    this._addClass(uiFormBasic.find('div.rows').find('div'), 'form-default', cols[column] + ' columns');
    this._addClass(uiFormBasic.find('label'), 'form-default', 'labels');
    this._addClass(uiFormBasic.find('input'), 'form-default');
  },

  _setOption: function (key, value) {

  }
});

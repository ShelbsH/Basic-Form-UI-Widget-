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

    while (x < storeInputs.length) {
      formData += '<div class ="rows">' + storeInputs.slice(x, x + columns) + '</div>';
      x += columns;
    }

    this.uiFormBasic.append(formData.split(',').join(''));
  },

  _columnToClass: function () {

    var column = this.options.perColumn,
    uiFormBasic = this.uiFormBasic,
    $rows = uiFormBasic.find('div.rows'),
    $lastRow,
    $prevRows;

    //Four columns per row is the maximum amount of columns to be inserted.
    var cols = {
      1: 'twelve',
      2: 'six',
      3: 'four',
      4: 'three'
    }

    if($rows.length > 1) {
      $lastRow = $rows.last();
      $prevRows = $lastRow.prevAll();

      if($lastRow.children().length < $prevRows.children().length) {
        this._addClass($lastRow.find('div'), 'form-default', cols[$lastRow.length + 1] + ' columns');
        this._addClass($lastRow.find('label'), 'form-default', 'labels');
        this._addClass($lastRow.find('input'), 'form-default');
      }
     
      this._addClass($prevRows.find('div'), 'form-default', cols[column] + ' columns');
      this._addClass($prevRows.find('label'), 'form-default', 'labels');
      this._addClass($prevRows.find('input'), 'form-default');
          
    }
    this._addClass(uiFormBasic.find('div.rows').find('div'), 'form-default', cols[column] + ' columns');
    this._addClass(uiFormBasic.find('label'), 'form-default', 'labels');
    this._addClass(uiFormBasic.find('input'), 'form-default');
    // ex. this._addClass(this._div, column);
  },

  _setOption: function (key, value) {

  }
});
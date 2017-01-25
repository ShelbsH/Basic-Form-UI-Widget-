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
        uiFormBasic = this.uiFormBasic.find('div.rows'),
        $prevRows = uiFormBasic.last().prevAll(),
        $lastRow = uiFormBasic.last(),
        cols = {1: 'twelve', 2: 'six', 3: 'four', 4: 'three'},
        $sizeEl = $lastRow.children().length < $prevRows.children().length ? cols[$lastRow.children().length] : cols[column];    
    

    this._addClass(uiFormBasic.find('label'), 'labels');
    this._addClass(uiFormBasic.find('input'), 'form-default');
    
    if(uiFormBasic.length > 1) {
      this._addClass($prevRows.children(), cols[column] + ' columns');

      //Bottom column(s) needs to match the same previous elements via stretch.
      this._addClass(uiFormBasic.last().children(), $sizeEl + ' columns');
    }
    else {
      this._addClass(uiFormBasic.find('div'), cols[column] + ' columns');
    }
  },

  _setOption: function (key, value) {

  }
});

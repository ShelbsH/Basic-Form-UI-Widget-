$.widget('Shurns.basicForm', {

  options: {
    itemNames: [],
    perColumn: 2
  },

  _create: function() {
    this.element.append('<form>');
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
        labels = '',
        textBoxes;

    this.columnDiv = $('div');

    if ($.isArray(inputNames) && inputNames.length) {
      $.each(inputNames, function (num, names) {
        if (typeof names === 'string') {
          //This code won't work.
          labels = $('<label></label>').text(names).insertBefore('<input>', { type: 'text' });
        }

        //Div columns has to append every boxes and labels.
      });
    }
  },
 
  _appendRows: function() {
    //Each row should append nth elements from the "perColumn" option.
  }
});
describe('Basic Form Widget', function () {

  var formBasic;

  beforeEach(function () {
    setFixtures('<div id="basicFormWidget"></div>');
    formBasic = $('#basicFormWidget');
  });

  /*
   * Quick test warmup...
   * Make sure everything is set up correctly for widget testing...
   */
  it('should have a basic working widget', function () {
    expect(formBasic.basicForm()).toExist();  //Work successful!
  });

  describe('There should be working form options from the widget factory', function () {

    it('should convert values being passed from the "perColumn" property into class columns', function () {
      formBasic.basicForm({
        perColumn: 3
      });

      expect(formBasic.find('div')).toHaveClass('four columns');
    });

    it('should have textboxes with named labels attached with them.', function () {
      //Do something here.
    });
  });

});
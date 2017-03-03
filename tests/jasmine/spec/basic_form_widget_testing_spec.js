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

   describe('There should be working form options from the basic form ui widget', function () {

    it('should convert values being passed from the "perColumn" property into class columns', function () {
      formBasic.basicForm({
        itemNames: ['First Name', 'Middle Name', 'Last Name'],
        perColumn: 3
      });

      expect(formBasic.find('div')).toHaveClass('four columns');
    });

    it('should have of equal size if the "allRowSameSize" option is set to true', function() {

      formBasic.basicForm({
        itemNames: ['First Name', 'Middle Name', 'Last Name', 'Skills', 'City', 'State'],
        perColumn: 4,
        allRowSameSize: true
      });

      expect(formBasic.find('div').last()).toHaveClass('six columns');
    });

    it('should not have of equal size if the "allRowSameSize" option is set to false', function() {

      formBasic.basicForm({
        itemNames: ['First Name', 'Middle Name', 'Last Name', 'Skills', 'City', 'State'],
        perColumn: 4,
        allRowSameSize: false
      });

      expect(formBasic.find('div').last()).toHaveClass('three columns');
    });

    describe('All inputs needs to have working field options that provides validaiton properties', function() {

      it('needs to have errors when the input has a required property that\'s set to true', function() {

        formBasic.basicForm({
          itemNames: ['First Name', 'Middle Name', 'Last Name'],
          field: {
            'firstName': {
              required: true,
              message: 'First Name is required'
            },
            'lastName': {
              required: true,
              message: 'Last Name is required'
            }
          }
        });
 
        formBasic.find('button').trigger('submit'); 

        //Checks for the input to have a new class added.
        expect(formBasic.find('input[name$="Name"]')).toHaveClass('invalidInput');

        //Get the span elements to check whether the errorMessage class is inserted.
        expect(formBasic.find('input[name$="Name"]').next()).toHaveClass('errorMessage');
        expect(formBasic.find('input[name^="first"]').next()).toContainText('First Name is required');
        expect(formBasic.find('input[name^="last"]').next()).toContainText('Last Name is required');
      });

      it('needs to have errors when the input has a "validType" property set to the validation value', function() {

        formBasic.basicForm({
          itemNames: ['First Name', 'Last Name', 'Phone Number', 'Email'],
          field: {
            'phoneNumber': {
              validType: 'phone',
              message: 'Phone number is invalid'
            },
            'email': {
              validType: 'email',
              message: 'The email address provided is invalid'
            }
          }
        });

        formBasic.find('button').trigger('submit');

        expect(formBasic.find('input[name="phoneNumber"]')).toHaveClass('invalidInput');
        expect(formBasic.find('input[name="phoneNumber"]').next()).toContainText('Phone number is invalid');

      })

    });
  });
 });
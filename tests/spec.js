describe('Filters', function(){ //describe your object type
    beforeEach(module('myApp')); //load module
    describe('validate',function(){ //describe your app name
        var validate;
        beforeEach(inject(function($filter){ //initialize your filter
            validate = $filter('validate',{});
        }));
        it('Should Detect a Visa Card', function(){  //write tests
            expect(validate('4111111111111111')).toBe('background: url(img/visa_logo_3.gif) no-repeat scroll 7px 7px'); //pass
        });
        it('Should Detect a American Express Card', function(){  //write tests
            expect(validate('371449635398431')).toBe("background: url(img/american_express_logo_3.gif) no-repeat scroll 7px 7px"); //pass           
        });
        it('Should Detect a Discover Card', function(){  //write tests
            expect(validate('6011111111111117')).toBe('background: url(img/discover_logo_3.gif) no-repeat scroll 7px 7px'); //pass            
        });
        it('Should Detect a MasterCard', function(){  //write tests
            expect(validate('5555555555554444')).toBe('background: url(img/mastercard_logo_3.gif) no-repeat scroll 7px 7px'); //pass           
        });
        it('Should Detect a Maestro Card', function(){  //write tests
            expect(validate('6759649826438453')).toBe('background: url(img/maestro.gif) no-repeat scroll 7px 7px'); //pass
        });
        it('Should show DefaultCard if it is Misclenaeous CreditCard', function(){  //write tests
            expect(validate('30569309025904')).toBe('background: url(img/default_card.jpeg) no-repeat scroll 7px 7px'); //pass
            expect(validate('411111')).toBe('background: url(img/default_card.jpeg) no-repeat scroll 7px 7px'); //pass
        });        
    });
});
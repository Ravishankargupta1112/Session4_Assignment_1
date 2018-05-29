var AppValidator;
(function (AppValidator) {
    var usernameRegexp = /^[A-Za-z]+$/;
    var pincodeRegexp = /^[0-9]+$/;
    var UserNameValidator = /** @class */ (function () {
        function UserNameValidator() {
        }
        UserNameValidator.prototype.isValid = function (s) {
            return usernameRegexp.test(s);
        };
        return UserNameValidator;
    }());
    AppValidator.UserNameValidator = UserNameValidator;
    var pinValidator = /** @class */ (function () {
        function pinValidator() {
        }
        pinValidator.prototype.isValid = function (s) {
            return s.length == 6 && pincodeRegexp.test(s);
        };
        return pinValidator;
    }());
    AppValidator.pinValidator = pinValidator;
})(AppValidator || (AppValidator = {}));
var v1 = new AppValidator.UserNameValidator();
console.log('username validator : ', v1.isValid('Sessionfour'));
var v2 = new AppValidator.pinValidator();
console.log('pincode validator : ', v2.isValid('123456'));

namespace AppValidator{
    interface StringValidator{
        isValid(s: string): boolean;
    }

    const usernameRegexp = /^[A-Za-z]+$/;
    const pincodeRegexp = /^[0-9]+$/;

    export class UserNameValidator implements StringValidator{
        isValid(s: string): boolean{
            return usernameRegexp.test(s);
        }
    }

    export class pinValidator implements StringValidator{
        isValid(s: string): boolean{
            return s.length == 6 && pincodeRegexp.test(s);
        }
    }
}

const v1 = new AppValidator.UserNameValidator();
console.log('username validator : ',v1.isValid('Sessionfour'));
const v2 = new AppValidator.pinValidator();
console.log('pincode validator : ',v2.isValid('123456'));
/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:numbers" from the command line to test).
 */
class NumberDrills {
    /**
     * Takes in one parameter (number) and returns it
     */
    identity(num) {
        return num;
    }

    /**
     * Takes in two parameters, adds them, and returns the result
     */
    add(num1, num2) {
        return num1 + num2;
    }

    /**
     * Takes in two parameters, subtracts them, and returns the result
     */
    subtract(x, y) {
        return x - y;
    }

    /**
     * Takes in two parameters, multiplies them, and returns the result
     */
    multiply(x, y) {
        return x * y;
    }

    /**
     * Takes in two parameters, divides them, and returns the result
     */
    divide(x, y) {
        return x / y;
    }

    /**
     * Takes in two parameters, returns the result of the modulus
     */
    mod(x, y) {
        return x % y;
    }

    /**
     * Takes in two parameters, returns true if the first parameter is
     * greater than the second, false otherwise.
     */
    isGreater(x, y) {
        if (x > y) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Takes in two parameters, returns true if the first parameter is
     * less than the second, false otherwise.
     */
    isLess(x, y) {
        if (x < y) {
            return true;
        } else {
            return false;
        }

    }

    /**
     * Takes in one parameter, returns true if it is even, false otherwise.
     */
    isEven(x) {
        if ( x % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Takes in one parameter, returns true if it is odd, false otherwise.
     */
    isOdd(x) {
        if (x % 2 != 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Takes in two parameters, returns true if the first parameter is
     * evenly divisible by the second.
     */
    isDivisibleBy(x, y) {
        if (x % y == 0) {
            return true;
        } else {
            return false;
        }

    }
}

module.exports = new NumberDrills();

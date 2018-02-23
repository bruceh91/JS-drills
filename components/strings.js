/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:strings" from the command line to test).
 */
class StringDrills {
    /**
     * Takes in one parameter (strings) and returns it
     */
    identity(str) {
        return str;
    }

    /**
     * Takes in two parameters (string), concatenate (merges) them together and
     * returns them.
     */
    combine(str1, str2) {
        return str1 + str2
    }

    /**
     * Takes in one parameter (string), returns its length
     */
    length(str) {
        return str.length;
    }

    /**
     * Takes in one parameter (string), returns true if it is empty, false otherwise
     */
    isEmpty(str) {
        if (str.length > 0) {
            return false;
        } else {
            return true;
        }

    }

    /**
     * Takes in one parameter (string), returns an Array of strings that
     * contains only the words in the string (no spaces)
     */
    toArray(str) {
        return str.split(' ');

    }

    /**
     * Takes in two parameters, a string and a number (in that order).
     * Returns a string that only contains the first X number of characters
     * based on the number parameter.
     */
    clip(str, num) {
        return (str.substring(0, num))
    }

    /**
     * Takes in one parameter (string), returns a new string with the characters
     * in the reverse order
     */
    reverse(str) {
        let answer = [];
        for (let i = str.length - 1; i >= 0; i--) {
            answer.push(str[i]);
        }
        return answer.join('');
    }

    /**
     * Takes in two parameters, a string and a number (in that order). Similar to
     * the clip method, only it will only truncate if the string is long enough.
     * All strings that are truncated should have an elipsis ('...') appended to
     * them. The final string should not be longer than the number passed in! If the number passed in is less than or equal to 3,
     * return the string as-is.
     */
    truncate(str, num) {
        let tail = ''
        if (str.length >= num) {
            tail = '...'
        }
        if (num <= 3) {
            return str
        } else {
            return (str.substring(0, num - 3) + tail)
        }
    }

    /**
     * Takes in one parameter (string), returns a new string that has no leading or
     * trailing spaces.
     */
    strip(str) {
        return str.trim()
    }

    /**
     * Takes in two parameters, a string and a number (in that order). Returns
     * a string that is repeated X number of times depending upon the number
     * passed in.
     */
    repeat(str, num) {
        let tempArr = []
        for (let i = num; i > 0; i--) {
            tempArr.push(str)
        }
        return tempArr.join('')
    }

    /**
     * Takes in two paramters (strings), returns true if the second string is
     * contained within the first string, false otherwise.
     */
    contains(str1, str2) {
        let indexVal = str1.indexOf(str2)
        if (indexVal >= 0) {
            return true
        } else {
            return false
        }
    }

    /**
     * Takes in two paramters (strings), returns true if the strings are
     * the same, false otherwise. (case-sensitive)
     */
    isEqual(str1, str2) {
        res = str1.match(str2)
        if (res == str1) {
            return true
        } else {
            return false
        }
    }

    /**
     * Takes in two paramters (strings), returns true if the strings have the
     * same letters (case-insensitive), false otherwise.
     */
    isSimilar(str1, str2) {

        function strVal(s) {
            codeVal = 0
            for (let i = s.length; i > 0; i--) {
                let val = s.charCodeAt(i)
                if (val > 96) {
                    codeVal += (val + (val - 32))
                } else {
                    codeVal += (val + (val + 32))
                }
            }
            return codeVal
        }

        if (str1.length != str2.length) {
            return false
        } else {
            if (strVal(str1) == strVal(str2)) {
                return true
            } else {
                return false
            }
        }
    }
}

module.exports = new StringDrills();

function isPalindrome(string) {
    if(string.length <= 1){
        return true;
    }

    if(string[0] !== string[string.length - 1]){
        return false;
    }

    return isPalindrome(string.slice(1, -1));
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Hello'));
console.log(isPalindrome('a'));
console.log(isPalindrome(''));
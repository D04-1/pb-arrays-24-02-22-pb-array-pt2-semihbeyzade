// 1

function findGreatest(arr, zahl){
    return arr.filter(e => e > zahl);
}

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

// 2

function longestWord (str){
    let arr = str.split(" ");
arr.sort(function (a,b){
    return b.length - a.length; 
})
return arr[0]; // büyükten kücüge dogru siralanir
}

console.log(longestWord("this is a web development course"));

// 3



function reverse(num){
    let numAlsString = num.toString().split('').reverse().join('') * Math.sign(num);

    return numAlsString;

}

console.log(reverse(34532));

// 2.Methode

function getReverseNumber(number){
    const string = number.toString();
    const array = string.split("");
    let returnable = "";

    array.forEach((element) => {
        returnable = element +returnable;
       
    });

    return parseInt(returnable) * Math.sign(number);
}

console.log(getReverseNumber(123456));


// 4

function getNumberOfVowels(string) {
    const array = string.split("");
    const vowels = "aeiou";
    let returnable = 0;

    array.forEach((element) => {
        if (vowels.indexOf(element.toLowerCase()) > -1) {
            returnable++;
        }
    });

    return returnable;
}

console.log(getNumberOfVowels("this is a string"));


// 5

function missingNums (arr){
    let completeZahl = [1,2,3,4,5,6,7,8,9,10];
    let returnable;

    completeZahl.forEach((e) => {
     if(!arr.includes(e)) returnable = e;
    });

    return returnable;
}

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// 6

function sumOfCubes(arr){
    let returnable = 0;
    arr.forEach((e) => {
        returnable += e**3;
    });

    return returnable;
}

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));


// 7

const searchWordsInWordsArray = (arrWords, strSearchWordBegin) => {
    const arrWordsSearch = arrWords.filter((word) => {
        return word.startsWith(strSearchWordBegin)
    })

    return arrWordsSearch
}

const arrWords = ["button", "breakfast", "border"];
const strSearchWordBegin = 'bu';

const arrWordsSearch = searchWordsInWordsArray(arrWords, strSearchWordBegin);

console.log(arrWordsSearch);
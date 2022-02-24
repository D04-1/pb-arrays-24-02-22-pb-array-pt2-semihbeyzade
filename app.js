// 1

function findGreatest (array, zahl){
   const gefiltertesArray = array.filter((element) => {
       if(element > zahl) return true;
       return false;
   });

   return gefiltertesArray;

}

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12) );
console.log(findGreatest([0, 10, 3], 4) );


console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// 2



// 3

function getReverseNumber(number){
    const string = number.toString();
    const array = string.split("");
    let returnable = "";

    array.forEach((element) => {
        returnable = element + returnable;
       
    });

    return parseInt(returnable) * Math.sign(number);
}

console.log(getReverseNumber(123456));


// 4 

function getNumberOfVowels(string){
    const array = string.split("");
    const vowels = "aeiou";
    let returnable = 0;

    array.forEach((element)) => {
        if(vowels.indexOf(element.toLowerCase()) > -1){
           returnable ++;
        }
    }

    return returnable;
}


console.log(getNumberOfVowels('this is a string'));


// 5

function getMissingNumber(array){
    const arrayComplete = [1,2,3,4,5,6,7,8,9,10];
    let returnable;

    array.forEach(element => {
        if(array.includes(element)) returnable = element;
    });

   return returnable;
}

console.log(getMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]) );
console.log(getMissingNumber([7, 2, 3, 6, 5, 9, 1, 4, 18]) );


// 6

function getSumOfCubes(array){
    let returnable = 0;
     array.forEach(element) => {
         returnable += Math.pow(element, 3);
     }

    return returnable;
}

console.log(getSumOfCubes([1, 5, 9]));
console.log(getSumOfCubes([2]));
console.log(getSumOfCubes([]));







// 7


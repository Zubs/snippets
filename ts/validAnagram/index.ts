function validAnagram (word1: string, word2: string): boolean {

    let arr1 = word1.split('');
    let arr2 = word2.split('');

    let str1 = arr1.sort().join('');
    let str2 = arr2.sort().join('');

    return str1 === str2;
}

console.log(validAnagram('cinema', 'iceman'));
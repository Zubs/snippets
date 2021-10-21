function diffArray(arr1: any, arr2: any) {
    
    var newArr: any = []

    arr1.forEach((element: any) => {
        if (!arr2.includes(element)) {
            newArr.push(element)
        }
    });

    arr2.forEach((element: any) => {
        if (!arr1.includes(element)) {
            newArr.push(element)
        }
    })
    
    return newArr
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))

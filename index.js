const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
const arr2 = [2, 1, 4, 3, 9, 6]

// [2,2,2,1,4,3,3,9,6,7,19]

function sortRelative(arr1, arr2) {
    const subArr1 = arr1.filter((num) => arr2.includes(num))
    const subArr2 = arr1.filter((num) => !arr2.includes(num))
    subArr1.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b))
    subArr2.sort((a, b) => a - b)

    return [...subArr1, ...subArr2]

}

console.log(sortRelative(arr1, arr2))

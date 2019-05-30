/**
 * Реализовать такие методы работы над массивами
 */

/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */
function difference(arr, itemsToExclude) {
    return arr.filter(e => itemsToExclude.indexOf(e) === -1)
}

// console.log(difference([2, 1, 5], [2, 3]));

// => [1, 5]

/**
 * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
 */
function groupBy(array, value) {
    return array.reduce((item, e) => {
        if (!item[e[value]]) {
            item[e[value]] = []
            item[e[value]].push(e)
        } else {
            item[e[value]] = item[e[value]]
            item[e[value]].push(e)
        }
        return item;
    }, {})
}

// console.log(groupBy([{gender: 'male', name: 'Max'}, {gender: 'female', name: 'Freda'}, {
//     gender: 'male',
//     name: 'Fred'
// }, {gender: 'male', name: 'Freddie'}, {gender: 'male', name: 'Frank'}, {
//     gender: 'female',
//     name: 'Jane'
// }], 'gender'));


/**
 * => {
 *  male: [{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}],
 *  female: [{ gender: 'female', name: 'Jane'}]
 * }
 */

/**
 *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение
 */
function flatten(array) {
    let result = [];
    if (Array.isArray(array)) {
        array.forEach(e => {
            result = result.concat(flatten(e));
        })
    } else {
        result.push(array);
    }
    return result;
}

// console.log(flatten([1, [2, [3, [4]], 5]]));
// => [1, 2, [3, [4]], 5]

// console.log(flatten([1, 2, 3, 4, 5]));
// => [1, 2, 3, 4, 5]

// console.log(flatten([1, [2, 3], 4, 5]));

// => [1, 2, 3, 4, 5]

/**
 * метод должен убрать все повторяющиеся элементы из массива
 */
function uniq(array) {
    return array.filter((e, index) => (
        array.indexOf(e) === index
    ))
}

// console.log(uniq([2, 1, 2, 1, 5, 5, 5, 3, 1, 7, 99, 7, 6, 0]));

// => [2, 1]

/**
 *
 * метод должен собирать элементы массива в группы с заданным размером
 */
function chunk(array, size) {
    const result = [];
    let arr = [];
    array.forEach((e, index) => {
        if ((index + 1) % size === 0 || index+1 === array.length) {
            arr.push(e);
            result.push(arr)
            arr = [];
        } else {
            arr.push(e)
        }
    })

    return result;
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd','e','f','g'], 2));
// => [['a', 'b'], ['c', 'd']]

console.log(chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]
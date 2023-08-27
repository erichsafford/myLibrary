//Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted)
//Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining.  This will be the sorted list.

test = [3246,347,234,1246092834,4345,6734,668,2234,7348,1123,998]

function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(middle))

    return merge(left, right)
}

function merge(left, right) {
    const result = []
    let x = 0
    let y = 0

    while (x < left.length && y < right.length) {
        if (left[x] <= right[y]) {
            result.push(left[x])
            x++
        } else {
            result.push(right[y])
            y++
        }
    }

    while (x < left.length) {
        result.push(left[x])
        x++
    }

    while (y < right.length) {
        result.push(right[y])
        y++
    }
    return result
}

const div = document.querySelector('div')
const result = mergeSort(test)
result.forEach(element => {
    const line = document.createElement('p')
    line.innerText = element
    div.appendChild(line)

});

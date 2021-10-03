// vars
let newBox = []
const CAPACITY_BOX = 10


/**
* find the number and convinations that add up to 10, recursive
* @param {Array <Number>} list of numbers of the number to check to add 10
* @param {Array <Number>} partial numbers possible your sum 10
* @returns {boolean} is the sum 10 or not
*/
const sumThen = (numbers = [], partial) => {

    let capacity, target_number, remaining;

    partial = partial || [];

    // calculate capacity
    capacity = partial.reduce(function (a, b) {
        return a + b;
    }, 0);

    // check if the partial sum is equals to CAPACITY_BOX
    if (capacity === CAPACITY_BOX) {
        newBox.push(...partial)
        return true;
    }

    // if we reach the number continue
    if (capacity >= CAPACITY_BOX) {
        return false;
    }

    // find all posible convinations sum CAPACITY_BOX
    for (var i = 0; i < numbers.length; i++) {
        target_number = numbers[i];
        remaining = numbers.slice(i + 1);
        const result = sumThen(remaining, partial.concat([target_number]));
        if (result) return true
    }
    return false
}


/**
 * relocate the number or put in new box
 * @param {Number} value number to relocate
 * @param {Array<Number>} boxes boxes to the line
 * @returns void
 */
const relocateBox = (value, boxes) => {
    for (const box of boxes) {
        const box_capacity = box.reduce((a, b) => a + b)

        // if the value can insert into the box
        if (box_capacity < 10 && box_capacity + value < 10) {
            box.push(value)
            return;
        }
    }
    // create new box with the number
    boxes.push([value])
}

/**
 * Execute the production line to calculate the boxes need 
 * @param {string} line 
 */
const productionLine = (line) => {
    /* 
   1 - convert the string into a matrix of the number 
   2 - order from highest to lowest, this is for optimization the filling of the boxes 
   Example 
    
    ----- unorden -----       ----- orden -----
    
    0: (3) [1, 6, 3]            0: (2) [9, 1]
    1: (2) [8, 2]               1: (2) [8, 2]
    2: (3) [4, 1, 5]            2: (2) [7, 3]
    3: (2) [7, 3]               3: (2) [7, 3]
    4: [6]                      4: (2) [6, 4]
    5: [8]                      5: (2) [5, 5]
    6: [9]                      6: (2) [8, 1]
    7: [5]                      7: [6]
    8: [7]                      
    */

    let boxes = []

    // convert to Array and sort to optimise
    let findNo = line.split('').map(e => parseInt(e)).sort((a, b) => b - a)

    while (findNo.length) {
        //find the combinations of sum to 10
        const issum = sumThen(findNo)
        if (issum) {
            newBox.forEach(e => {
                findNo.splice(findNo.findIndex(i => i == e), 1)
            })
            boxes.push(newBox)
        } else {
            // relocate the product
            relocateBox(findNo.shift(), boxes)
        }
        newBox = []
    }

    console.log(`Production line <<< ${line} >>>`);
    console.log('Boxes > ', boxes);

    return { line, boxes }
}

/**
 * html representing the boxes of the line
 * @param {*} prodLine line and boxes
 */
const boxesToHTML = (prodLine) => {

    const { line, boxes } = prodLine
    return `<div>
                <h2> Line : ${line} </h2>       
                <div> <b> BOX: </b> ${boxes.join("</div> <div><b>BOX: </b>")} </div>            
            </div> 
            `
}

module.exports = { productionLine, boxesToHTML }


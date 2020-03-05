// numberArray = [1,2,3,4]

export const originalArray = (arr) => {
  return arr 
}

// return array with double values in array
export const doubleArray = (arr) => {
  return arr.map(num => {
  return num * 2 
})
}
// => [2,4,6,8];  hint use map 

// // return array with all even numbers
export const evensOnlyArray= (arr) => {
  return arr.filter(num => {
  return num % 2 === 0 
  })
  }
 // => [2,4,6,8];  hint use filter 

// // return array with sum of numbers
export const arraySum =(arr) => {
  return arr.reduce((accumulator, currentValue) =>  {
  return accumulator + currentValue
  })
  }
  // => 10;  hint use reduce

// // return true if every item greater than 0
export const allNumbersGreaterThanZero=(arr) => {
  return arr.every((element, index, array) => {
    return element >= 0 
  })
  }
 // => true; use every

// // return true if some item greater than 0
export const someNumbersGreaterThanZero=(arr) => {
  return arr.some((element, index, array) => {
    return element >= 0
  })
}

export const someNumbersAreOdd=(arr) => {
  return arr.some((element, index, array) => {
    return element % 2 !== 0 
})
} // => true; use some


// // return array double and even
export const evensOnlyAndDoubleArray=(arr) => {
    const x = evensOnlyArray(arr) 
    const y = doubleArray(x)
    return y 
}
//[4,8] // use map and filter


// // find an item method return 'not found' if not found
export const findItem=(arr) => {
  if (arr.indexOf("5") !== -1){
    return("found")
  } else {
    return("not found")
  }
}

export const sortArray=(arr) => {
  return arr.sort((a,b) => {
    return b-a
  })
}
 //=> [4,3,2,1] *desc*

// doubles likes of artist
export const doubleLikes=(arr) => {
  return arr.map((element) => {
    return {name: element.name, likes: element.likes * 2} 
  })
}

export const moreThan100Likes=(arr) => {
  return arr.filter((element)=> {
    return element.name, element.likes >100
    })
}

// get total number of likes fo all artists
// export const numberOfLikes=(artists) => {
//   return artists.reduce((accumulator, currentValue, element) =>  {
//     return accumulator + currentValue element.likes
//     })
//     }
//=> 300; // get all likes

// returns array of artist sorted by likes
export const sortArtistByName=(arr) => {
  return arr.sort((a,b) (element) => {
    return {name: element.name, likes: element.likes (a-b)}
  })
}
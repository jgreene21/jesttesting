import {
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray, 
  findItem,
  sortArray,
  doubleLikes,
  moreThan100Likes,
  numberOfLikes,
  sortArtistByName
} from '../app'




describe('original array test', () => {
  test('original array should return itself', () => {
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('testing double array', () => {
  test('original array should double', () => {
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8])
  })
})

describe('testing for even numbers', () => {
  test('original array should return only even numbers', () => {
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4])
  })
})

describe('testing for sum', () => {
  test('original array should return the sum', () => {
    expect(arraySum([1,2,3,4])).toEqual(10)
  })
})

describe('testing all numbers greater than zero', () => {
  test('original array should return true', () => {
    expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true)
  })
})

describe('testing some numbers greater than zero', () => {
  test('original array should return true', () => {
    expect(someNumbersGreaterThanZero([1,2,3,4])).toEqual(true)
  })
})

describe('testing some numbers are odd', () => {
  test('original array should return true', () => {
    expect(someNumbersAreOdd([1,2,3,4])).toEqual(true)
  })
})

describe('testing evens only and double array', () => {
  test('original array should double and then return only evens', () => {
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8])
  })
})

describe('testing if not found method', () => {
  test('original array should return not found', () => {
    expect(findItem([1,2,3,4])).toEqual("not found")
  })
})

describe('testing descending sort of array', () => {
  test('original array should sort in descending order', () => {
    expect(sortArray([1,2,3,4])).toEqual([4,3,2,1])
  })
})

describe('testing doubling likes', () => {
  test('original array should return double the likes', () => {
    expect(doubleLikes([
        {name: 'a', likes:100},
        {name: 'c', likes:99},
        {name: 'c', likes:101}])).toEqual([
          {name: 'a', likes:200},
          {name: 'c', likes:198},
          {name: 'c', likes:202}])
  })
})

describe('testing for more than 100 likes', () => {
  test('original array should return double the likes', () => {
    expect(moreThan100Likes([
        {name: 'a', likes:100},
        {name: 'c', likes:99},
        {name: 'c', likes:101}])).toEqual(
          [{name: 'c', likes:101}])
  })
})

// describe('testing for more than 100 likes', () => {
//   test('original array should return double the likes', () => {
//     expect(numberOfLikes([
//         {name: 'a', likes:100},
//         {name: 'c', likes:99},
//         {name: 'c', likes:101}])).toEqual(300)
//   })
// })


describe('testing for sorting by likes', () => {
  test('original array should sort by most likes to least', () => {
    expect(moreThan100Likes([
        {name: 'a', likes:100},
        {name: 'c', likes:99},
        {name: 'c', likes:101}])).toEqual(
          [{name: 'c', likes:101},
          {name: 'a', likes:100},
          {name: 'c', likes:99}])
        
  })
})
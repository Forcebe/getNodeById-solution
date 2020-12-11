const { test, expect } = require('@jest/globals')
const getElementById = require('./exercise')

//Define shape for testing
class Node {
  constructor(id = null, children = []) {
    this.id = id
    this.children = children
  }
}

//Testing for base cases
test('if parent id equals search id, return parent node', () => {
  const parent = new Node('abc')
  expect(getElementById(parent, 'abc')).toBe(parent)
})

test('if no children & parent id != search id, return null', () => {
  const parent = new Node('123')
  expect(getElementById(parent, 'abc')).toBe(null)
})

test('if no children & parent id === null, return null', () => {
  const parent = new Node()
  expect(getElementById(parent, 'abc')).toBe(null)
})

test('if only child id === id, return first child', () => {
  const onlyChild = new Node('abc', null)
  const parent = new Node(null, [onlyChild])
  expect(getElementById(parent, 'abc')).toBe(onlyChild)
})

test('if only child id !== id, return null', () => {
  const onlyChild = new Node('123')
  const parent = new Node(null, [onlyChild])
  expect(getElementById(parent, 'abc')).toBe(null)
})

test('if first child id === id, return first child', () => {
  const firstChild = new Node('abc')
  const secondChild = new Node()
  const parent = new Node(null, [firstChild, secondChild])
  expect(getElementById(parent, 'abc')).toBe(firstChild)
})

test('if second child id === id, return second child', () => {
  const firstChild = new Node('123')
  const secondChild = new Node('abc')
  const parent = new Node(null, [firstChild, secondChild])
  expect(getElementById(parent, 'abc')).toBe(secondChild)
})

test('if all child ids === null, return null', () => {
  const firstChild = new Node()
  const secondChild = new Node()
  const parent = new Node(null, [firstChild, secondChild])
  expect(getElementById(parent, 'abc')).toBe(null)
})

test('if only child of only child id === id, return third-layer child', () => {
  const onlySubChild = new Node('abc')
  const onlyChild = new Node(null, [onlySubChild])
  const parent = new Node(null, [onlyChild])
  expect(getElementById(parent, 'abc')).toBe(onlySubChild)
})

test('if only child of second child id === id, return third-layer child', () => {
  const onlySubChild = new Node('abc')
  const firstChild = new Node()
  const secondChild = new Node(null, [onlySubChild])
  const parent = new Node(null, [firstChild, secondChild])
  expect(getElementById(parent, 'abc')).toBe(onlySubChild)
})

//Boundary Case testing
test('if node has a value of null, return null', () => {
  const parent = null
  expect(getElementById(parent, 'abc')).toBe(null)
})

test('if node is not an object, return null', () => {
  const parent = 'chicken'
  const parent2 = 42
  expect(getElementById(parent, 'abc')).toBe(null)
  expect(getElementById(parent2, 'abc')).toBe(null)
})

test('if id is not a string, return null', () => {
  const parent = new Node('123')
  expect(getElementById(parent, 123)).toBe(null)
})

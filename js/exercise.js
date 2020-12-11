function getElementById(node, id) {
  //Boundary case: what if node is null
  if (node === null || typeof node !== 'object') {
    console.error('Node must be an object')
    return null
  }
  if (typeof id !== 'string') {
    console.error('ID must be a string')
    return null
  }
  //Base case: if we find it, return it
  if (node.id === id) {
    return node
  }

  for (let i = 0; i < node.children.length; i++) {
    const childNode = getElementById(node.children[i], id)
    if (childNode !== null) {
      return childNode
    }
  }
  //Base case: it's not there; return null
  return null
}

module.exports = getElementById

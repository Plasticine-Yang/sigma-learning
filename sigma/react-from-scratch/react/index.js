function createElement(type, props, ...children) {
  const resolvedChildren = children.map((item) => {
    if (typeof item === 'string' || typeof item === 'number') {
      return {
        type: 'TEXT_ELEMENT',
        props: {
          nodeValue: item,
          children: [],
        },
      }
    }

    return item
  })

  return {
    type,
    props: {
      ...props,
      children: resolvedChildren,
    },
  }
}

const isProperty = (key) => key !== 'children'
function render(element, container) {
  if (element.type === 'TEXT_ELEMENT') {
    container.appendChild(document.createTextNode(element.props.nodeValue))
    return
  }

  const node = document.createElement(element.type)
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      node[name] = element.props[name]
    })

  for (const child of element.props.children) {
    render(child, node)
  }

  container.appendChild(node)
}

export default {
  createElement,
  render,
}

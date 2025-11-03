export function splitWords(element: HTMLElement) {
  const text = element.textContent || ''
  const words = text.split(' ')
  element.innerHTML = ''
  
  words.forEach((word, index) => {
    const span = document.createElement('span')
    span.textContent = word
    span.className = 'inline-block will-change-transform'
    element.appendChild(span)
    
    if (index < words.length - 1) {
      element.appendChild(document.createTextNode(' '))
    }
  })
  
  return element.querySelectorAll('span')
}


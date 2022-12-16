function wrapping(gifts) {
  list = []
  let paper = '*'
  gifts.forEach(element => {
    let size = element.length + 2
    list.push(paper.repeat(size)+'/n'+element +'/n' +paper.repeat(size))
  })
  return list
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
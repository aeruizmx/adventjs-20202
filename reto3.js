function distributeGifts(packOfGifts, reindeers) {
  let packWeight = 0
  let reindeersWeight = 0
  packOfGifts.forEach(gift => {
    packWeight += gift.length
  })
  reindeers.forEach(reindeer => {
    reindeersWeight += (reindeer.length * 2)
  })
  return Math.trunc(reindeersWeight / packWeight)
}
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2
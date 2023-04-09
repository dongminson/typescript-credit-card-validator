import { CardType, cardTypes } from './cardTypes'

function getCardType(cardNumber: string) {
    for (let i = 0; i < cardTypes.length; i++) {
      if (cardNumber.match(cardTypes[i].pattern)) {
        return cardTypes[i].type
      }
    }
    return CardType.Unknown
  }
  
  
function isCardValid(cardNumber: string) {
    let sum = 0
    let digit
    let even = false
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      digit = parseInt(cardNumber.charAt(i), 10)
      if (even) {
        digit *= 2
        if (digit > 9) {
          digit -= 9
        }
      }
      sum += digit
      even = !even
    }
    return sum % 10 === 0
}

export function isValidCreditCard(cardNumber: string) {
    const cardType = getCardType(cardNumber)
    return cardType !== CardType.Unknown && isCardValid(cardNumber)
}
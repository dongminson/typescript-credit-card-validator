export enum CardType {
    Visa,
    Mastercard,
    AmericanExpress,
    Discover,
    Unknown
}

export const cardTypes = [
    {
      type: CardType.Visa,
      pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
    },
    {
      type: CardType.Mastercard,
      pattern: /^5[1-5][0-9]{14}$/,
    },
    {
      type: CardType.AmericanExpress,
      pattern: /^3[47][0-9]{13}$/,
    },
    {
      type: CardType.Discover,
      pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    },
]
  
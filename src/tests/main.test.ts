import { isValidCreditCard } from '../main'

test('invalid number', () => {
  expect(isValidCreditCard('1')).toBe(false)
})

test('Visa card number', () => {
    expect(isValidCreditCard('4111111111111111')).toBe(true)
})

test('Mastercard card number', () => {
    expect(isValidCreditCard('5555555555554444')).toBe(true)
})

test('American Express card number', () => {
    expect(isValidCreditCard('378282246310005')).toBe(true)
})

test('Discover card number', () => {
    expect(isValidCreditCard('6011111111111117')).toBe(true)
})
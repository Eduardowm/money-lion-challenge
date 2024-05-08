import { notEmpty } from '../helpers/filters'

describe('notEmpty', () => {
  it('returns true when value is not empty', () => {
    expect(notEmpty('hello')).toBe(true)
    expect(notEmpty(123)).toBe(true)
    expect(notEmpty([1, 2, 3])).toBe(true)
    expect(notEmpty({ name: 'John', age: 30 })).toBe(true)

    // Falsy values also return true because they are not null or undefined.
    expect(notEmpty(0)).toBe(true)
    expect(notEmpty('')).toBe(true)
    expect(notEmpty([])).toBe(true)
    expect(notEmpty({})).toBe(true)
  })

  it('returns false when value is null or undefined', () => {
    expect(notEmpty(null)).toBe(false)
    expect(notEmpty(undefined)).toBe(false)
  })
})

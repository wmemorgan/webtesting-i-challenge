const enhancer = require('./enhancer.js');
const { succeed, fail, repair, get } = enhancer

describe('the repair(item) method', () => {
  const item = {}
  it('confirm object has a durability property', () => {
    expect(Object.keys(repair(item)).includes('durability'))
      .toBeTruthy()
  })
  
  it('confirm durability property equals 100', () => {
    expect(repair(item).durability).toBe(100)
  })
})

describe('the succeed(item) method', () => {
  const item = {}
  it('confirm object has an enhancement property', () => {
    expect(Object.keys(succeed(item)).includes('enhancement'))
      .toBeTruthy()
  })

  it('confirm enhancement level increments by 1', () => {
    item.enhancement = 2
    expect(succeed(item).enhancement).toBe(3)
  })

  it('confirm enhancement level does not go over 20', () => {
    item.enhancement = 22
    expect(succeed(item).enhancement).toBe(20)
  })
})

describe('the fail(item) method', () => {
  const item = {}
  it('confirm object has durability and enhancement properties', () => {
    const requiredProperties = ['durability', 'enhancement']
    expect(Object.keys(fail(item)).every(v => requiredProperties.includes(v))).toBeTruthy()
  })

  it('confirm durability level decreases by 5 if enhancement is less than 15', () => {
    item.enhancement = 9
    item.durability = 50
    expect(fail(item).durability).toBe(45)
  })

  it('confirm durability level decreases by 10 enhancement is greater than or equal to 15',
    () => {
      item.enhancement = 16
      item.durability = 50
      expect(fail(item).durability).toBe(40)
    }
  )

  it('confirm enhancement level decreases by 1 if it is greater than 16',
    () => {
      // Test decrease
      item.enhancement = 18
      expect(fail(item).enhancement).toBe(17)
      
      // Test waiver
      item.enhancement = 7
      expect(fail(item).enhancement).toBe(7)
    }
  )
})


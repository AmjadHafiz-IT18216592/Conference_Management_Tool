import  {checkAmount} from './HelperFunction';

test("CheckAmountWithValid",()=>{
    expect(checkAmount(50)).toBe(50)
})

test("CheckAmountWithInvalid-01",()=>{
    expect(checkAmount(-3)).toBe(-1)
})

test("CheckAmountWithInvalid-02",()=>{
    expect(checkAmount(1001)).toBe(-1)
})

test("CheckAmountWithInvalid-03",()=>{
    expect(checkAmount(4)).toBe(-1)
})

test("CheckAmountWithInvalid-04",()=>{
    expect(checkAmount(-3)).toBe(50)
})
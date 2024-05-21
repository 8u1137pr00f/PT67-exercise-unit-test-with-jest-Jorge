
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test ("One dollar should be 146.17 yens", function () {
    expect(fromDollarToYen(3.5)).toBe(511.595); // 1 dollar is 146.16 yens, then 3.5 dollars should be = (3.5 * 146.16)
})

test ("1000 yens should be 5.556 pounds", function () {
    expect(fromYenToPound(1000)).toBe(5.556); //1 yen equals 0.00555 pounds, then 1000 yens should be = (1000 * 0.00555 = 1000 / 179.98)
})
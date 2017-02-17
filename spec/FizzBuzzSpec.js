describe("FizzBuzz", function() {
  var number;

  beforeEach(function() {
    number = new FizzBuzz({first_number: 3});
  });

  it("it should have a number of 3", function() {
    expect(number.first_number).toEqual(3);
  });

});


describe("calculateValue", function() {
    it('should return 12 for 4 days by 3', function() {
      expect(calculateValue(4, 3)).toEqual(12);
    });

    it('should return 124 for 31 days by 4', function() {
      expect(calculateValue(31, 4)).toEqual(124);
    });

    it('should return 350 for 70 days by 5', function() {
      expect(calculateValue(70, 5)).toEqual(350);
    });

    it('should return 360 for 120 days by 3', function() {
      expect(calculateValue(120, 3)).toEqual(360);
    });
});


describe("calculateTotalValue", function() {
    it('should return 39 when value 1 is 4, value 2 is 31 and value 3 is 12', function() {
      expect(calculateTotalValue(4, 31, 12)).toEqual(39);
    });

    it('should return 287 when value 1 is 93, value 2 is 200 and value 3 is 180', function() {
      expect(calculateTotalValue(93, 200, 180)).toEqual(287);
    });

    it('should return 256 when value 1 is 171, value 2 is 172 and value 3 is 255', function() {
      expect(calculateTotalValue(171, 172, 255)).toEqual(256);
    });

    it('should return -897 when value 1 is 1020, value 2 is 3 and value 3 is 120', function() {
      expect(calculateTotalValue(1020, 3, 120)).toEqual(-897);
    });
});
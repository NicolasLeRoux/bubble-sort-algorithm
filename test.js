var chai = require('chai');
var Sort = require('./');

chai.should();

describe.skip("A", function () {
	var sequence;

	beforeEach(function () {
		sequence = sort();
	});

	it("Should...", function () {
		sequence.next().should.deep.equal({
			value: 1,
			done: false
		});
		sequence.next().should.deep.equal({
			value: 2,
			done: false
		});
		sequence.next().should.deep.equal({
			value: 3,
			done: false
		});
		sequence.next().should.deep.equal({
			value: undefined,
			done: true
		});
	});

	it("Should...", function () {
		[...sequence].should.deep.equal([1, 2, 3]);
	});
});

describe("TODO", function () {
	var sort,
		array = [1, 3, 6, 2, 5, 4];

	beforeEach(function () {
		sort = new Sort([1, 3, 6, 2, 5, 4]);
		sort.compute();
	});

	it("Should...", function () {
		sort.array.should.deep.equal(array);
	});

	it("Should...", function () {
		sort.result.should.deep.equal([1, 2, 3, 4, 5, 6]);
	});
});

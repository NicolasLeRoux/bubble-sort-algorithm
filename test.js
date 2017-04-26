var chai = require('chai'),
	expect = chai.expect,
	Sort = require('./');

chai.should();

describe("TODO A", function () {
	var sort,
		array = [1, 3, 6, 2, 5, 4];

	beforeEach(function () {
		sort = new Sort(array);
	});

	it("Should...", function () {
		expect(sort.result).to.be.undefined;
	});

	it("Should...", function () {
		sort.steps.should.deep.equal([]);
	});
});

describe("TODO B", function () {
	var sort,
		array = [1, 3, 6, 2, 5, 4];

	beforeEach(function () {
		sort = new Sort(array);
		sort.compute();
	});

	it("Should...", function () {
		sort.array.should.deep.equal(array);
	});

	it("Should...", function () {
		sort.result.should.deep.equal([1, 2, 3, 4, 5, 6]);
	});

	it("Should...", function () {
		sort.getStep(3).should.deep.equal([1, 3, 2, 5, 6, 4]);
	});

	it("Should...", function () {
		sort.getStep(6).should.deep.equal([1, 2, 3, 5, 4, 6]);
	});

	it("Should...", function () {
		sort.getStep(9).should.deep.equal([1, 2, 3, 4, 5, 6]);
	});

	it("Should...", function () {
		expect(sort.getStep(20)).to.be.undefined;
	});

	it("Should...", function () {
		console.log(sort.steps);
	});
});

describe("TODO C", function () {
	var sort,
		array = [1, 3, 6, 2, 5, 4];

	beforeEach(function () {
		sort = new Sort(array);
	});

	it("Should...", function () {
		sort.next().should.deep.equal({
			value: [1, 3, 6, 2, 5, 4],
			done: false
		});
	});

	it("Should...", function () {
		sort.next();
		sort.next().should.deep.equal({
			value: [1, 3, 6, 2, 5, 4],
			done: false
		});
	});

	it("Should...", function () {
		sort.next();
		sort.next();
		sort.next().should.deep.equal({
			value: [1, 3, 2, 6, 5, 4],
			done: false
		});
	});

	it("Should...", function () {
		sort.next();
		sort.next();
		sort.next();
		sort.next();
		sort.next().should.deep.equal({
			value: [1, 3, 2, 5, 4, 6],
			done: false
		});
	});
});

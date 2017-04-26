'use strict';

var generator = function* (array, comparator) {
	let clone = array.slice(0);

	for (let i = 0, length_i = clone.length; i < length_i; i++) {
		let hasChange = false;
		for (let j = 0, length_j = clone.length - 1; j < length_j; j++) {
			if (comparator(clone[j], clone[j+1])) {
				let tmp = clone[j];
				clone[j] = clone[j+1];
				clone[j+1] = tmp;
				hasChange = true;
			}

			yield clone.slice(0);
		}

		if (!hasChange) {
			break;
		}
	}
};

var defaultComparator = function (itemA, itemB) {
	return itemA > itemB;
};

module.exports = class BubbleSort {
	constructor(array, comparator) {
		this._array = array;
		this._comparator = comparator || defaultComparator;
		this._steps = [];
	}

	compute() {
		var genObj = generator(this._array, this._comparator);

		this._steps = [...genObj];
	}

	next() {
		if (!this._genObj) {
			this._genObj = generator(this._array, this._comparator);
		}
		return this._genObj.next();
	}

	getStep(no) {
		return this._steps[no];
	}

	get array() {
		return this._array;
	}

	get result() {
		return this._steps[this._steps.length - 1];
	}

	get steps() {
		return this._steps;
	}
};

/**
 * TODO...
 */

'use strict';

const generator = function* generator(array, comparator) {
	const clone = array.slice(0);

	for (let i = 0, iLength = clone.length; i < iLength; i++) {
		let hasChange = false;
		for (let j = 0, jLength = clone.length - 1; j < jLength; j++) {
			if (comparator(clone[j], clone[j + 1])) {
				const tmp = clone[j];
				clone[j] = clone[j + 1];
				clone[j + 1] = tmp;
				hasChange = true;
			}

			yield {
				array: clone.slice(0),
				selected: j + 1
			};
		}

		if (!hasChange) {
			break;
		}
	}
};

const defaultComparator = function defaultComparator(itemA, itemB) {
	return itemA > itemB;
};

module.exports = class BubbleSort {
	constructor(array, comparator) {
		this._array = array;
		this._comparator = comparator || defaultComparator;
		this._steps = [];
	}

	compute() {
		const genObj = generator(this._array, this._comparator);

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
		const lastStep = this._steps[this._steps.length - 1];

		return lastStep ? lastStep.array : undefined;
	}

	get steps() {
		return this._steps;
	}
};

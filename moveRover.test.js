import moveRover from './problem.js';
const obstacles = [[1, 4], [3, 5], [7, 4]];
import chai from 'chai'
const assert = require ( 'chai').assert;
const expect = chai.expect

describe('moveRover', function () {
    it('should move the rover correctly without obstacles', function () {
      const result = moveRover('FFFFF', 3, 5, 'east');
      const expected = '(8, 5) east';
      assert.strictEqual(result, expected);
    });
    });
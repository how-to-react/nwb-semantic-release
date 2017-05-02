import expect from 'expect';

import { mapToArray } from 'src/index';

describe('Map to template', () => {
  it('should create an array from a map', () => {
    expect(mapToArray({
      'one': { name: "something" },
      'two': { name: "something else" },
    }).length).toBe(2);
    expect(mapToArray({
      'one': { name: "something" },
      'two': { name: "something else" },
      'three': { name: "something else" },
    })[2].name).toContain('something else');
  });
});

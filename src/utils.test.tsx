import { utils } from './utils';

test('checkGrid returns true for full', () => {
  const grid = [[1, 2, 3], [4, 5, 6]]
  const full = utils.checkGrid(grid);
  expect(full).toBeTruthy();
});

test('checkGrid returns falls with zeros', () => {
  const grid = [[1, 2, 3], [4, 0, 6]]
  const full = utils.checkGrid(grid);
  expect(full).toBeTruthy();
});

test('checkRows finds no dupes', () => {
  const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const dupes = utils.checkRows(grid);
  expect(dupes).toEqual([undefined, undefined, undefined]);
})

test('checkRows finds dupes', () => {
  const grid = [[1, 2, 2], [4, 4, 6], [3, 1, 3]]
  const dupes = utils.checkRows(grid);
  expect(dupes).toEqual([2, 4, 3]);
})

test('checkColumns finds dupes', () => {
  const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const dupes = utils.checkColumns(grid);
  expect(dupes).toEqual([undefined, undefined, undefined]);
})

test('checkColumns finds dupes', () => {
  const grid = [[1, 2, 3], [4, 5, 6], [1, 2, 3]]
  const dupes = utils.checkColumns(grid);
  expect(dupes).toEqual([1, 2, 3]);
})

const grid = [[1,2,3,4,5,6,7,8,9],
              [2,3,4,5,6,7,8,9,1],
              [3,4,5,6,7,8,9,1,2],
              [4,5,6,7,8,9,1,2,3],
              [5,6,7,8,9,1,2,3,4],
              [6,7,8,9,1,2,3,4,5],
              [7,8,9,1,2,3,4,5,6],
              [8,9,1,2,3,4,5,6,7],
              [9,1,2,3,4,5,6,7,8]];

test('getQuadrant returns first quadrant', () => {
   const quadrant = utils.getQuadrant(grid, 0, 0);
   expect(quadrant).toEqual([[1, 2, 3], [2, 3, 4], [3, 4, 5]]);
})

test('getQuadrant returns top middle quadrant', () => {
   const quadrant = utils.getQuadrant(grid, 1, 0);
   expect(quadrant).toEqual([[4, 5, 6], [5, 6, 7], [6, 7, 8]]);
})

test('getQuadrant returns bottom middle quadrant', () => {
   const quadrant = utils.getQuadrant(grid, 0, 2);
   expect(quadrant).toEqual([[7, 8, 9], [8, 9, 1], [9, 1, 2]]);
})

test('checkQuadrant returns no error', () => {
   const results = utils.checkQuadrant([[1,2,3], [4,5,6], [7,8,9]]);
   expect(results).toEqual(undefined);
})

test('checkQuadrant returns error', () => {
   const results = utils.checkQuadrant([[1,2,3], [4,2,6], [7,8,9]]);
   expect(results).toEqual(2);
})

test('checkQuadrants returns no error', () => {
   const results = utils.checkQuadrants(grid);
   expect(results).toEqual([2, 5, 1, 5, 1, 2, 1, 2, 5]);
})
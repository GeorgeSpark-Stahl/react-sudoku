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
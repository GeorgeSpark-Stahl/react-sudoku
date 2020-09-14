import { utils } from './utils';

test('checkGrid returns true for full', () => {
  let grid = [[1, 2, 3], [4, 5, 6]]
  let full = utils.checkGrid(grid);
  expect(full).toBeTruthy();
});

test('checkGrid returns falls with zeros ', () => {
  let grid = [[1, 2, 3], [4, 0, 6]]
  let full = utils.checkGrid(grid);
  expect(full).toBeTruthy();
});
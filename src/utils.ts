import { access } from "fs";

// Math science
export class utils {
  // Sum an array
  static sum(arr: Array<number>) {
      return arr.reduce((acc, curr) => acc + curr, 0)
  }

  // create an array of numbers between min and max (edges included)
  static range(min: number, max: number){
    return Array.from({length: max - min + 1}, (_, i) => min + i)
  } 

  static checkGrid(grid: Array<Array<number>>) {
    for(let row of grid) {
      if (row.find(box => box === 0)) {
        return false;
      }
    }
    return true;
  }

  static reduce(accumulator:number[], currentValue:number) {
    if (currentValue > 0) {
      accumulator[currentValue - 1] += 1;
    }     
    return accumulator
  }

  static checkRows(grid: Array<Array<number>>) {
  return grid.map(row => {
      const countArray = row.reduce<number[]>(this.reduce, [0, 0, 0, 0, 0, 0, 0, 0, 0])
      const index = countArray.findIndex(count => count > 1);
      return index >= 0 ? index + 1 : -1;
    });
  }

  static checkColumns(grid: Array<Array<number>>) {
    const transposed = grid[0].map((_, colIndex) => grid.map(row => row[colIndex]));
    return this.checkRows(transposed);
  }

  static getQuadrant(grid: Array<Array<number>>, x: number, y: number) {
    return utils.range(3 * y, (3 * y) + 2).map(
      y_index => utils.range(3 * x, (3 * x) + 2).map(
      x_index => grid[y_index][x_index]))
  }

  static checkQuadrant(grid: Array<Array<number>>) {
    const row = grid.reduce<number[]>((acc, cur) => acc.concat(cur), []);
    const countArray = row.reduce<number[]>(this.reduce, [0, 0, 0, 0, 0, 0, 0, 0])
    const index = countArray.findIndex(count => count > 1);
    return index >= 0 ? index + 1 : -1;
  }

  static checkQuadrants(grid: Array<Array<number>>) {
    return [[0,0],[1,0],[2,0], [0,1],[1,1],[2,1], [0,2],[1,2],[2,2]].map(quadrant => {
      return this.checkQuadrant(this.getQuadrant(grid, quadrant[0], quadrant[1]));
    })
  }

  // pick a random number between min and max (edges included)
  //random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  /*
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
  */
};


const getTotalIsles = function (grid) {
  if  (grid === null || grid.length === 0) {
      return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let numIsles = 0;

  function dfs(row, col) {
     
      if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'W') {
          return;
      }

      
      grid[row][col] = 'W';

      
      dfs(row - 1, col); 
      dfs(row + 1, col); 
      dfs(row, col - 1); 
      dfs(row, col + 1); 
  }

  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          if (grid[row][col] === 'L') {
              numIsles++;
              dfs(row, col);
          }
      }
  }

  return numIsles;
};

module.exports = getTotalIsles;

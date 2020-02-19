
const model = [
    [0,0,0,2,6,0,7,0,1],
    [6,8,0,0,7,0,0,9,0],
    [1,9,0,0,0,4,5,0,0],
    [8,2,0,1,0,0,0,4,0],
    [0,0,4,6,0,2,9,0,0],
    [0,5,0,0,0,3,0,2,8],
    [0,0,9,3,0,0,0,7,4],
    [0,4,0,0,5,0,0,3,6],
    [7,0,3,0,1,8,0,0,0]];

    sudokusol(model);
    console.log(model);
    function isVal(mod, row, col, k) {
        for (let i = 0; i < 9; i++) {
            const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const n = 3 * Math.floor(col / 3) + i % 3;
            if (mod[row][i] == k || mod[i][col] == k || mod[m][n] == k) {
              return false;
            }
        }
        return true;
      }
      
      
      function sudokusol(data) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (data[i][j] == 0) {
            for (let k = 1; k <= 9; k++) {
              if (isVal(data, i, j, k)) {
                data[i][j] = k;
              if (sudokusol(data)) {
               return true;
              } else {
               data[i][j] = 0;
              }
             }
           }
           return false;
         }
       }
      }
      return true;
      }
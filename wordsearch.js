const wordSearch = (letters, word) => {
  if (letters.length < 1 || word.length < 1) return false;
    
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  //Transposing the matrix as doen in last pair Assignment
  const verticalMatrix = [];

  for (let i = 0; i < letters[0].length; i++) {
    verticalMatrix.push([]);
  }
  for (let row = 0; row < letters.length; row++) {
    for (let col = 0; col < letters[row].length; col++) {
      verticalMatrix[col][row]  = letters[row][col];
    }
  }
            
  const verticalJoin = verticalMatrix.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
        
  return false;
};


module.exports = wordSearch;

/*
****Output****
  #wordSearch()
    ✓ should return false if the word is not present
    ✓ should return true if the word is present
    ✓ should return true if the word is present vertically
    ✓ should return false if word is an empty string


  4 passing (4ms)
  */
const decodeTheRing = (message, pattern) => {
    
    const memo = new Map();
  
    
    const match = (i, j) => {
      
      const key = `${i}-${j}`;
      if (memo.has(key)) return memo.get(key);
  
      
      if (i === message.length && j === pattern.length) return true;
     
       
      if (j === pattern.length) return false;
  
     
      if (i === message.length) return pattern[j] === '*' ? match(i, j + 1) : false;
  
      let result = false;
  
      if (message[i] === pattern[j] || pattern[j] === '?') {
        result = match(i + 1, j + 1);
      }
     
      if (pattern[j] === '*') {
        result = match(i, j + 1) || match(i + 1, j);
      }
  
      
      memo.set(key, result);
      return result;
    };
  
    return match(0, 0);
  };
  
  module.exports = decodeTheRing;
  
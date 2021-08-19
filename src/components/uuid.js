function uuidv4() {
    return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 8 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(4);
    });
  }
  
  console.log(uuidv4());
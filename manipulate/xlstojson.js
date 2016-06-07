 var excel2json = require("excel-to-json");
  excel2json({
    input: "input",  // input directory  
    output: "output" // output directory  
   }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
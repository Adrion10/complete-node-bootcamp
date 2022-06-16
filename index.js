const fs = require("fs");

const textIn = fs.readFileSync("/txt/final.txt", "utf-8");
console.log(textIn);

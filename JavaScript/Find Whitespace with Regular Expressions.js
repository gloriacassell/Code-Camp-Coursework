// JavaScript source code
var testString = "How many spaces are there in this sentence?";



var expression = /\s+/g;  




var spaceCount = testString.match(expression).length;

// JavaScript source code

var testString = "How many non-space characters are there in this sentence?";



var expression = /.+/g;  


var nonSpaceCount = testString.match(expression).length;


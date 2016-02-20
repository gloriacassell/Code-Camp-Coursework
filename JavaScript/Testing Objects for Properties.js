// JavaScript source code
//Testing Objects for Properties//

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
   

    if (myObj.hasOwnProperty("gift"))
    { return "pony"; }
    else if (myObj.hasOwnProperty("pet"))
    { return ""; }
    else
    { return "Not Found"; }
}

let fs = require("fs");

let demodata = "[{\"LOGO\":\"fortran\",\"LOGONAME\":\"Fortran\",\"LOGOCOLOR\":\"#734F96\"},{\"LOGO\":\"gatsby\",\"LOGONAME\":\"Gatsby\",\"LOGOCOLOR\":\"#663399\"},{\"LOGO\":\"scaleway\",\"LOGONAME\":\"Scaleway\",\"LOGOCOLOR\":\"#4F0599\"}]";
// console.log(demodata);
let json = JSON.parse(demodata);
// console.log(json);
let compiledcode = [];
json.forEach((element) => {
  let LOGONAME1 = element.LOGONAME;
  let LOGONAME = element.LOGONAME.replace(/ /g, "%20").replace(/-/g, "--");
  let BG = element.LOGOCOLOR.split("#")[1];
  // let LOGO = element.LOGO;
  let LOGO = element.LOGONAME.toLowerCase().replace(/ /g, "-");
  let LOGOCOLOR = "white";

  if (LOGO != undefined && LOGONAME != undefined && BG != undefined) {
    let code = `![${LOGONAME1}](https://img.shields.io/badge/${LOGONAME}-${BG}?style=for-the-badge&logo=${LOGO}&logoColor=${LOGOCOLOR})`;
    compiledcode.push(code);
  }
});

console.log(compiledcode[0]);

// console.log(compiledcode);

fs.writeFile("output.md", compiledcode, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //file written successfully
});

// Above data was extracted with below code on website https://simpleicons.org/
// Below code needs to be executed in console
// let logos = document.getElementsByClassName("grid-item");
// let compiledJson = [];
// for (let i = 0; i < logos.length; i++) {
//   let curr = {};
//   if (logos[i]?.children[0]?.href != undefined) {
//     curr["LOGO"] = logos[i]?.children[0]?.href
//       ?.split("https://simpleicons.org/icons/")[1]
//       ?.split(".svg")[0];
//   }
//   if (logos[i]?.children[0]?.innerText != undefined) {
//     curr["LOGONAME"] = logos[i]?.children[0]?.innerText;
//   }
//   if (logos[i]?.children[1]?.innerText != undefined) {
//     curr["LOGOCOLOR"] = logos[i]?.children[1]?.innerText;
//   }
//   compiledJson.push(curr);
// }
// JSON.stringify(compiledJson)
// then copy and pass the data in demodata variable set above
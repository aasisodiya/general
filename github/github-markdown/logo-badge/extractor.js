let fs = require("fs");

let demodata = "[{\"LOGONAME\":\"\",\"LOGOCOLOR\":\"Limited time offer: Get 10 free Adobe Stock images.\\nADS VIA CARBON\"},{\"LOGO\":\"fortran\",\"LOGONAME\":\"Fortran\",\"LOGOCOLOR\":\"#734F96\"},{\"LOGO\":\"gatsby\",\"LOGONAME\":\"Gatsby\",\"LOGOCOLOR\":\"#663399\"},{\"LOGO\":\"scaleway\",\"LOGONAME\":\"Scaleway\",\"LOGOCOLOR\":\"#4F0599\"},{\"LOGO\":\"pusher\",\"LOGONAME\":\"Pusher\",\"LOGOCOLOR\":\"#300D4F\"}]";
// console.log(demodata);
let json = JSON.parse(demodata);


let interestedData = ["adobecreativecloud",
  "adobeillustrator",
  "adobeaftereffects",
  "adobexd",
  "adobeindesign",
  "alpinedotjs",
  "amazonalexa",
  "amazonaws",
  "amazondynamodb",
  "amazons3",
  "anaconda",
  "android",
  "arduino",
  "artstation",
  "atlassian",
  "bitbucket",
  "brave",
  "chart-dot-js",
  "coronaengine",
  "curl",
  "dialogflow",
  "eclipseide",
  "epicgames",
  "fastapi",
  "figma",
  "filezilla",
  "firebase",
  "flutter",
  "fontawesome",
  "git",
  "gitlfs",
  "gitea",
  "githubactions",
  "gitlab",
  "gitkraken",
  "go",
  "googleanalytics",
  "googlefonts",
  "jira",
  "jquery",
  "jsfiddle",
  "jsonwebtokens",
  "kibana",
  "laravel",
  "linux",
  "logstash",
  "mocha",
  "mysql",
  "okta",
  "p5-dot-js",
  "postgresql",
  "postman",
  "qwiklabs",
  "raspberrypi",
  "serverless",
  "sketchfab",
  "swagger",
  "terraform",
  "three-dot-js",
  "unrealengine",
  "visualstudiocode"
];
// console.log(json);
let compiledcode = [];
json.forEach((element) => {
  let LOGONAME1 = element.LOGONAME;
  let LOGONAME = element.LOGONAME.replace(/ /g, "%20").replace(/-/g, "--");
  let BG = element.LOGOCOLOR.split("#")[1];
  // let LOGO = element.LOGO;
  let LOGO = element.LOGONAME.toLowerCase().replace(/ /g, "-");
  let LOGOCOLOR = "white";
  console.log(element.LOGO);
  if (interestedData.includes(element.LOGO)) {
  // if (!interestedData.includes(element.LOGO)) {
    if (LOGO != undefined && LOGONAME != undefined && BG != undefined) {
      let code = `![${LOGONAME1}](https://img.shields.io/badge/${LOGONAME}-${BG}?style=for-the-badge&logo=${LOGO}&logoColor=${LOGOCOLOR})`;
      compiledcode.push(code);
    }
  }
});

console.log(compiledcode.length);
console.log(interestedData.length);



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
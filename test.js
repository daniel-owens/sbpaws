// // Dependencies
// // =============================================================
// var path = require("path");


// var Nightmare = require("nightmare");

// var nightmare = Nightmare({show: true});

// nightmare
//     .goto("https://gentle-oasis-61959.herokuapp.com/adopt")
//     .type("#firstName", "Lora")
//     .type("#lastName", "Potaeva")
//     .type("#inputEmail", "lora@mail.ru")
//     .click("#submit")
//     .wait(20000)
//     .inject('js', '/assets/js/applications.js')
//       .evaluate(function() {
//         return document.querySelector("#links a").href;
//       })
//     .end()
//     .then(function (result) {
//         console.log("Result", result);
//     })
//     .catch(function (error) {
//         console.error("Search failed:", error);
//     });
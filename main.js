const express = require("express");
const app1 = express();

const demo = require("./demo.js");

app1.listen(8081, function () {
    console.log('server running at ', 8081);
});

app1.post(
    '/doPayment',demo.doPayment
);
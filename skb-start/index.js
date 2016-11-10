var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZDU1MzJmYjc0ZDAwMTFiZTdlOTIiLCJ1c2VybmFtZSI6ImlseWEtYXJ0QG1haWwucnUiLCJyb2xlIjoidXNlciIsImlhdCI6MTQ3ODAyMjQ4NX0.pEHZ-uhZ_oeM5kuRvkofe2qT_S2asl0dEvKk2IGh0xw';
var skb = new Skb(token);
skb.taskHelloWorld('Привет!!11');
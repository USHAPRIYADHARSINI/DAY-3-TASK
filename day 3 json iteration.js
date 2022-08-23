// A SIMPLE EXAMPLE
const a = [10, 20, 30];

for (const i in a) {
  console.log(i); 
}

for (const i of a) {
  console.log(i);
}
[5,6,7].forEach(function(n){
  console.log(n+2);
});

const ab = [345,786,784,876]
ab.forEach(function(m){
  console.log(m*m);
});

const student = [{
name :"USHAPRIYADHARSINI S K",
Class : "10",
Mark : "800"
},
{name : "HEENALISHA",
Class : "11",
Mark : "900"
},
{name : "siva",
Class : "12",
Mark :"950"
}]
student.forEach(function(w){
  console.log (w.name)
});
student.forEach(function(w){
  console.log (w.Class)
});
student.forEach(function(w){
  console.log (w.Mark)
});
student.forEach(function(w){
  console.log ("name :" ,w.name,"Class :", w.Class)
});
for (w in student){console.log(w)};
for (w of student){console.log(w)};
for (w of student){console.log(w.name)};
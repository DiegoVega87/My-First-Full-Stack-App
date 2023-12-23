const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});
/*
let votesInteresting = 23;
let votesMindBlowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindBlowing;
console.log("UpVotes:", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log("Is correct:", isCorrect);
*/

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  // 2023 - 2015
  const age = currentYear - year;
  if (age >= 0) return age;
  else return "Impossible year!";
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
console.log(calcFactAge(2037));

let votesInteresting = 20;
let votesMindBlowing = 0;

if (votesInteresting === votesMindBlowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindBlowing) {
  console.log("Interesting Fact!");
} else if (votesInteresting < votesMindBlowing) {
  console.log("Mindblowing Fact!");
}
// falsy values: 0, "", undefined, null, undefined
// truthy values: everything else
if (votesMindBlowing) {
  console.log("Mindblowing Fact!");
} else {
  console.log("Not so special...");
}

var names = new Array();
names[0] = "Aditya";
names[1] = "John";
names[2] = "jason";
names[3] = "rohan";
names[4] = "Ankit";
names[5] = "madhav";
names[6] = "Jackov";
names[7] = "jimmy";
names[8] = "paul";
names[9] = "riya";

for (var i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === "J" || names[i].charAt(0) === "j") {
    console.log("GoodBye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}

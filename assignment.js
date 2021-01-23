//gihub code link -
//kilometer to meter converter
function kilometerToMeter(kilometer) {
  var Meter = kilometer * 1000;
  return Meter;
}
var firstdistance = kilometerToMeter(1528);
console.log(firstdistance);

//mega friend finder
//find my mega friend name using MegaFriend function
function megaFriend(therirname) {
  var myfriendName = therirname;
  for (var i = 0; i < therirname.length; i++) {
    myfriendName = therirname[i];
    if (myfriendName.length > therirname.length) {
      var megaFriendName = myfriendName;
    }
  }
  return megaFriendName;
}
var megaFriendNameResult = megaFriend([
  "Sumaiya",
  "is",
  "programming-hero learner",
]);
console.log(megaFriendNameResult);

//budget calculator
function budgetCalculator(watch, mobile, laptop) {
  var allwatch = 50;
  var allmobile = 100;
  var alllaptop = 500;
  var totalbudget = "";
  if ((watch < 0, mobile < 0, laptop < 0)) {
    console.log("Enter a number");
  } else if ((watch == null, mobile == null, laptop == null)) {
    console.log("You must need to enter three value");
  } else {
    totalbudget = allwatch * watch + allmobile * mobile + alllaptop * laptop;
  }
  return totalbudget;
}
var count = budgetCalculator(1, 22, 3);
console.log(count);

//hotel cost
function hotelCost(alldays) {
  var tendaycost = "";
  var eleverndaysafter = "";
  if (alldays < 0) {
    console.log("Enter how many days you nend to stay");
  } else if ((alldays <= 1, alldays <= 10)) {
    tendaycost = alldays * 100;
  } else if ((alldays <= 11, alldays <= 20)) {
    var firsttendays = alldays * 1000;
    tendaycost = firsttendays * 80 + 1000;
    eleverndaysafter = firsttendays * 80 + 1000;
  } else if (alldays > 21) {
    var newtendays = alldays - 20;
    var anotherdays = 10 * 100 + 10 * 80;
    tendaycost = newtendays * 50 + anotherdays;
  }
  return tendaycost;
}
var allcost = hotelCost(100);
console.log(allcost);

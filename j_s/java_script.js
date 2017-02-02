
//
//

var firstName;
var birthDayObj;

var weekDays = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday']
//array values always start with an indes value of 0 (monday)

function calZodiac() {
  var outputArea = document.getElementById('displayMsg');

  firstName = document.getElementById('fname').value;

  lastname = document.getElementById('lname').value;

  birthDayObj = new Date(document.getElementById('bday').value);

  var whichDayNdx = birthDayObj.getDay();

  var monthNum = birthDayObj.getMonth();
  var dayNum = birthDayObj.getMonth();

  monthNum ++;
  dayNum ++;


  var astroSign;

  if ((monthNum == 12 && dayNum >= 22) || (monthNum == 1 && dayNum <= 19 )) {
    astroSign = 'Azorious Senate';
  } else if ((monthNum == 11 && dayNum >= 22) || (monthNum == 12 && dayNum <= 21)) {
    astroSign = 'Cult Of Rakdos';
  } else if ((monthNum == 10 && dayNum >= 24) || (monthNum == 11 && dayNum <= 21)) {
    astroSign = 'House Dimir';
  } else if ((monthNum == 9 && dayNum >= 23) || (monthNum == 10 && dayNum <= 23)) {
    astroSign = 'Selesnya Conclave';
  } else if ((monthNum == 8 && dayNum >= 23) || (monthNum == 9 && dayNum <= 22)) {
    astroSign = 'Orzhov Syndicate';
  } else if ((monthNum == 7 && dayNum >= 23) || (monthNum == 8 && dayNum <= 22)) {
    astroSign = 'Golgari Swarm';
  } else if ((monthNum == 6 && dayNum >= 22) || (monthNum == 7 && dayNum <= 22)) {
    astroSign = 'Simic Combine';
  } else if ((monthNum == 5 && dayNum >= 21) || (monthNum == 6 && dayNum <= 21)) {
    astroSign = 'Gruul clans';
  } else if ((monthNum == 4 && dayNum >= 20) || (monthNum == 5 && dayNum <= 20)) {
    astroSign = 'Boros Legion';
  } else if ((monthNum == 3 && dayNum >= 21) || (monthNum == 4 && dayNum <= 19)) {
    astroSign = 'Izzet League';
  } else if ((monthNum == 2 && dayNum >= 19) || (monthNum == 3 && dayNum <= 20)) {
    astroSign = 'Colorless';
  } else {
    astroSign = 'Five Color';
  }

  outputArea.innerHTML = 'Hello ' + firstName + '. You were born on a ' + weekDays[whichDayNdx] + '. Your Guild is ' + astroSign;


  return false;
}
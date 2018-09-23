console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {  
  const $middleEarth = $('<section id = middle-earth></section');
  $('body').append($middleEarth);
for (let i = 0; i < lands.length; i++) {
  const $article = $('<article/>')
  $article.attr('id',lands[i])
  const $landName = $('<h1/>');
  $landName.text(lands[i]);
  $article.append($landName);
  $middleEarth.append($article);

}


};

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');
  const $ul =  $('<ul/>');
  for (let i =0; i< hobbits.length; i++) {
    console.log(hobbits[i])
    const $li = $('<li/>');
    $li.text(hobbits[i])
    $li.addClass('hobbit');
    $ul.append($li);
  }
  $('#The-Shire').append($ul);

};



// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  console.log(hobbits[0])
  const $theRing = $('<div id= the-ring>The Ring</div>');
  $( "li:contains('Frodo Baggins')").append($theRing);
};


// ============
// Chapter 4
// ============
const makeBaddies = () => {

  const $ul = $('<ul/>');
  for (let i=0; i< baddies.length; i++) {
    const $li = $('<li/>');
    $li.text(baddies[i])
    $li.addClass('baddy');
    $ul.append($li);
    $('#Mordor').append($ul)
  }
};


// ============
// Chapter 5
// ============
const makeBuddies = () => {
  const $aside = $('<aside/>');
  $aside.append('<h1>Buddies</h1?')
  const $ul = $('<ul/>');
  for (let i = 0; i < buddies.length; i++){
    const $li = $('<li/>');
    $li.text(buddies[i]);
    $li.addClass('buddy');
    $ul.append($li);
    $aside.append($ul);


  }
  $('#middle-earth').append($aside);

};



// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  $('.hobbit').appendTo($("#Rivendell"));

 
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  $("li:contains('Strider')").text('Aragorn');

};


// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  const $newFellowship = $('<div id = the-fellowship></div>');
  $newFellowship.append('<h1>The Fellowship</h1>')
  $('#middle-earth').append($newFellowship);
  $('.hobbit').appendTo($("#the-fellowship"));
  $('.buddy').appendTo($("#the-fellowship"));


};


// ============
// Chapter 9
// ============
const theBalrog = () => {

  $("li:contains('Gandalf')").text('Gandalf the White');
  $("li:contains('Gandalf')").addClass('the-white');

};



// ============
// Chapter 10
// ============
const hornOfGondor = () => {
    alert("The horn of Gondor has been blown");
    $("li:contains('Boromir')").addClass('line-through');
    $("li:contains('The Uruk-hai')").remove();
   
};


// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  $('.hobbit').eq(0).appendTo($('#Mordor'));
  $('.hobbit').eq(1).appendTo($('#Mordor'));
  const $mountDoom = $('<div id=mount-doom></div>')
  $mountDoom.append('<h1>Mount Doom</h1>')
  $('#Mordor').append($mountDoom);
  
};


// ============
// Chapter 12
// ============
const weWantsIt = () => {
      const $gollum = $('<div id=gollum></div>');
      $gollum.append('<h1>Gollum</h1>')
     $('#Mordor').append($gollum);
     $('#the-ring').appendTo($gollum);

};


// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

    $('#gollum, #the-ring').remove();
    $('.baddy').remove();
    $('.hobbit').appendTo('#The-Shire');



  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});

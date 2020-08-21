$(document).ready(function(){

var word1 = [
  "China",
  "America",
  "Australia",
  "Indonesia",
  "Japan",
  "Greece",
  "Russia",
  "South Africa",
  "Scotland",
  "Ireland",
  "Canada",
  "Iraq",
  "Syria",
  "Lebanon", 
  "India",
  "Brazil"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "Great",
  "Catholic",
  "Protestant",
  "Communist",
  "Socialist",
  "Conservative",
  "Free",
  "Green",
  "Western",
  "Spanish",
  "Consumerist",
  "Peaceful", 
  "a War Zone",
  "One",
  "Fascist",
  "Rich"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "Winston Churchill",
  "Donald Trump",
  "Bill Clinton",
  "Hillary Clinton",
  "Abraham Lincoln",
  "Boris Johnson",
  "Theresa May",
  "David Cameron",
  "Xi Jinping",
  "Kim Jung-Un",
  "Tony Abbott",
  "Kevin Rudd",
  "John Howard", 
  "Julia Gillard",
  "Richard Nixon",
  "Bernie Sanders"
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);

});
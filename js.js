var worldCapitals = 
 {
  "Brazil" : 
  { capital: "Brasília",
  animal: "Macaw", 
  language: "Brazilian portuguese",
  population: "200.4 million",
  link: "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=Brazil&safe=strict&tbm=nws",
  img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"
   
  },
  
  "Palestine":
  { capital: "Ramallah",
  animal: "Gazella gazella", 
  language: "Arabic",
  population: "1.715 million",
  link: "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#safe=strict&tbm=nws&q=Palestine",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/2000px-Flag_of_Palestine.svg.png"
   
  },
  
  
  "Italy" :
  { capital: "Rome",
  animal: "wolf",
  language: "Italian",
  population: "59.83 million",
  link: "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#safe=strict&tbm=nws&q=Italy",
  img: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
   
  } 
 };

 $(document).ready(function() {
  var search =$("#button");
  search.click(function(){
   var userChoice = $("#country").val();
   var info = worldCapitals[userChoice];
   
   if (userChoice == "Brazil" || userChoice == "Palestine" || userChoice =="Italy") {
    $('#results').append($('<li></li>')
     .text(
              "The Capital of " + userChoice + " is " + info["capital"] + ". The national animal is " + info["animal"] + " and the language is " + info["language"] + ". The population is of " + info["population"] + "."
       ));
    $('#results').append($('<li></li>')
     .html("<a href='" + info["link"] + "'>Check out what is going on there now!</a>"));

    $('#results').append($('<li></li>')
    .html( "<img src= '" + info["img"] + "'>"));
   } else {
    alert("try again!!");
   }
 
   
  });   
 
});

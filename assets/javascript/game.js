
      // Created an empty array to add all your words that the opponent might get. 
    //   var citiesList = [];
      var preCitiesList = ["barcelona","amsterdam", "kolkata", "newdelhi", "florence", "sanfrancisco", "newyork","helsinki","vacouver","toronto", "chicago","singapore", "kyoto", "reykjavik", "ulaanbaatar", "addisababa","havana","buenosaires","abuja","istanbul", "melbourne" ];
      
      var input;
      var city;
      var win =0;
      var loss = 0;

function updateScore() {
        document.querySelector("#win").innerHTML = win;
        document.querySelector("#loss").innerHTML = loss;
      }      

function myFunction() {
    var preRandomCity = preCitiesList[Math.floor(Math.random() * preCitiesList.length)];   
    // console.log(preRandomCity); 
    var answerArray = [];
    
    for (var i = 0; i < preRandomCity.length; i++) {
        answerArray[i] = "_";
        // console.log(answerArray);
        document.getElementById("guessWord").innerText = answerArray.join(" ");
        }

    var remainingLetters = preRandomCity.length;
    var guessAllowed = remainingLetters+5;
    // console.log(guessAllowed + " guesses allowed");
    document.getElementById("guessRemain").innerText = guessAllowed;
    
     var allTry = [];

        document.onkeypress = function(event) {  
            cityInput = event.key;
            input = cityInput.toLowerCase();
            allTry.push(input);
            // console.log (allTry +" list of all letters played");
            document.getElementById("status").innerText = allTry.join(" ");  
            document.getElementById("guessRemain").innerText = guessAllowed;
            for (var j = 0; j < (preRandomCity.length); j++) { 
                if (preRandomCity[j] === input) {
                    answerArray[j] = input;
                    document.getElementById("guessWord").innerText = answerArray.join(" ");
                    }
                var answerArrayString = answerArray.join('');
                // console.log(answerArrayString) ;
                
                // console.log(answerArray) ;
                var preRandomArray = preRandomCity.split(',');
                // console.log(preRandomArray) ;
                // console.log(preRandomCity) ;
                if (answerArrayString == preRandomCity) {
                        alert ("you are right! My favorite city is "+ preRandomCity);
                        win++;
                        updateScore();
                        break;
                    }    
                if (guessAllowed===0)    {
                    alert("no more guesses left to play. My favorite city is " + preRandomCity );
                    loss++;
                    updateScore();
                    break;
                }
                }
                guessAllowed--;
                // console.log(guessAllowed + " guesses allowed after typing");    
            
            
    }          
    }

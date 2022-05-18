  let flagsAndCountry = {}
  let newFlag;

  function setupFlags(){

fetch("https://restcountries.com/v3.1/all")
    .then( (response) => response.json() )
    .then((data) => {

      for(let i = 0; i < data.length; i++) {
        let flag = data[i].flags.png
        let country = data[i].name.common

        flagsAndCountry[flag] = country  

      }
      console.log(flagsAndCountry)
    })

  }



  function compareUserInput(){
    let barbados = "https://flagcdn.com/w320/bb.png"
    let userInput = (document.getElementById("country").value).toLowerCase()
    let answer = (flagsAndCountry[barbados]).toLowerCase()

    let isCorrect = userInput === answer
    console.log(userInput,answer, userInput === answer)
  
    if (isCorrect) {
      const keys = Object.keys(flagsAndCountry);

     let newFlag = keys[Math.floor(Math.random() * keys.length)];
      document.getElementById("flag").src=newFlag

    }
  }
  

    document.getElementById("flag").src="https://flagcdn.com/w320/bb.png"
  

  



setupFlags()

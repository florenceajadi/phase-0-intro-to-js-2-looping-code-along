// Code your solutions in this file
 let names = ["Guadalupe", "Ollie", "Aki"];
 let callCount = 10;
 

 function writeCards(names) {
     const newArray = [];
  for(let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)

  }
   return newArray
}

// function countDown(callCount) {
    /// for(let callCount = 4; callCount >= 4; i++) {
      ///  console.log()
      ///  return callCount//
// }} 
// } 

function countDown(number) {
    // for(let i = 0; i < number; i++) {
    //     console.log()
    // }
    while(number >= 0 ) {
        console.log(number)
    number--
    // number -= 1
    }
    // console.log(number)
}
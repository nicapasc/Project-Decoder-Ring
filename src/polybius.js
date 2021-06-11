// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const lib1 = [
      //library of symbols
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];
    const lib2 = [
      //library of letters
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    console.log(lib1.length);
    console.log(lib2.length);

    if (encode) {
      //this block of code encodes a message
      let result = ""; // this is where we will put the encoded message
      let message = input.toLowerCase();
      for (let text = 0; text < message.length; text++) {
        //loop through the message
        let letter = message[text];
        console.log(`letter is ${letter}`);
        if (letter.match(/[a-z]/)) {
          //if the character is a letter
          if (letter === "i" || letter === "j") {
            result += "42"; //return 42 for instances of i and j
          } else {
            let num = lib2.indexOf(letter); //look up index of letter
            result += lib1[num]; //add number with matching index to the code
          }
        } else {
          result += letter; //character is not a letter, use original character (maintain spaces)
        }
      }
      return result; //return code
    } else {
      //this block of code decodes a message
      let messageArr = input.split(" "); //split message into array by word
      console.log(messageArr);
      let lettersArr = [];
      for (word of messageArr) {
        lettersArr.push(word.match(/.{2}/g)); //new array where each index is an array
        //of number pairs representing each letter. each index of lettersArr is one
        //word of the message
      }
      let isEven = messageArr.every((word) => word.length % 2 === 0); //check if every word is made of even number of characters

      if (!isEven) {
        //if not, return false
        return false;
      }
      let finalArr = []; //this is where we will store the decoded letters
      //  console.log(lettersArr);
      for (word of lettersArr) {
        //decode the letters
        let tempArr = [];
        for (letter of word) {
          if (letter === "42") {
            tempArr.push("(i/j)"); //use i/j for 42
          } else {
            let num = lib1.indexOf(letter);
            let something = lib2[num];
            tempArr.push(something); //decode letters
          }
        }
        finalArr.push(tempArr);
      }
      //console.log(finalArr);
      let decodedArr = [];
      for (word of finalArr) {
        let val = word.join(""); //join letters of individual words
        decodedArr.push(val);
      }
      console.log(decodedArr);
      let final = decodedArr.join(" "); //join words back into sentence maintaining
      //spaces
      return final;
    }

    //console.log(`result is ${result}`);
  }

  polybius("jiggle", true);

  return {
    polybius,
  };
})();



module.exports = { polybius: polybiusModule.polybius };

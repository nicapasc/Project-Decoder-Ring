// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let doesRepeat = /(.).*\1/.test(alphabet);
    if (doesRepeat) return false; //returns false if any characters in alphabet repeat
    if (!alphabet || alphabet.length > 26 || alphabet.length < 26) return false;
    const lib1 = alphabet.split(""); //inputted alphabet to a library array
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
      "i",
      "j",
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
    console.log(lib1);
    console.log(lib2);

    function _translate(libA, libB) {
      //compares two libraries and encodes one to the other
      let result = ""; // this is where we will put the encoded/decoded message
      let message = input.toLowerCase();
      for (let text = 0; text < message.length; text++) {
        //loop through the message
        let letter = message[text];
        console.log(`letter is ${letter}`);
        if (letter.match(/[^ ]/)) {
          //if the character is any character but a space

          let num = libA.indexOf(letter); //look up index of letter
          result += libB[num]; //add number with matching index to the code
        } else {
          result += letter; //character is a space, maintain spaces
        }
      }
      return result; //return code
    }

    if (encode) {
      //this block encodes a message
      let final = _translate(lib2, lib1);
      return final;
    } else {
      //this block of code decodes a message
      let final = _translate(lib1, lib2);
      return final;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

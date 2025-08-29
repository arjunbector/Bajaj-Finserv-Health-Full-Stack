export function processData(data) {
    let odd = [];
    let even = [];
    let alphabets = [];
    let specials = [];
    let sum = 0;
    let alphaString = "";
  
    data.forEach((item) => {
      if (/^\d+$/.test(item)) {
        let num = parseInt(item, 10);
        if (num % 2 === 0) even.push(item);
        else odd.push(item);
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        alphaString += item;
      } else {
        specials.push(item);
      }
    });
  
    let concatString = "";
    let reversed = alphaString.split("").reverse().join("");
    for (let i = 0; i < reversed.length; i++) {
      concatString +=
        i % 2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
    }
  
    return { odd, even, alphabets, specials, sum: sum.toString(), concatString };
  }
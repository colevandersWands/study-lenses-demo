// prettier-ignore
{ // so prettier does not remove the extra spacing

'use strict';

let word = 'hello';


let mirrored = '|';


for (let char of word) {


    mirrored = char + mirrored + char;


}


console.log(word + ' -> ' + mirrored);


}

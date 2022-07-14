const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const space = "**********"
    let massWord = []
    let i = 0;
    let startPosition = 0
    let position = expr.indexOf(space)
    if(position === -1){
        massWord[i] = expr
    } else {
        while(position !==-1){
            massWord[i] = expr.slice(startPosition,position)
            startPosition = position+10
            position = expr.indexOf(space,position+1)
            i++
            if(position === -1){
                massWord[i] = expr.slice(startPosition)
            }
        }
    }
    let result = []

    for(let m = 0; m<massWord.length; m++){
        let name =""
        for(let z = 0; z<massWord[m].length;z = z+10){
            let word = massWord[m].slice(z,z+10)
            let index = word.indexOf(1)
            word = word.slice(index)
            let item = ""
            for(let f = 0; f<word.length;f +=2){
                if(word.slice(f,f+2) == '10'){
                    item += "."
                } else {
                    item +="-"
                }
            }
            name += MORSE_TABLE[item]
        }
        result[m] = name
    }


    
    
    return result.join(' ')
}

module.exports = {
    decode
}
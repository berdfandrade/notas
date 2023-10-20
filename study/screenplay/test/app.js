import { Fountain } from 'fountain-js';

let fountain = new Fountain();


const text = `.OPENING TITLES

            > BRICK & STEEL <
            > FULL RETIRED <

            SMASH CUT TO:`;

let output = fountain.parse(text)
let actual = output.html.script;

console.log(actual) 

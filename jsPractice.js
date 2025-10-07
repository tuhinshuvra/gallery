




const speech = 'I am good and heard working person';
const speech2 = ['Arun', 'Rahim', 'Karim', 'Bidhan', 'Jubin'];

// console.log(speech.split('a'));
// console.log(speech2.join('|'));

let reverse = '';
for (const letter of speech) {
    reverse = letter + reverse;
}
console.log(reverse);
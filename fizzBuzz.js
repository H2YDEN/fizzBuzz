// Write your solution below this line:
for (let i = 1; i < 51; i++) {
    switch(true) {
        case ((i % 3 === 0) && (i % 5 === 0)):
            console.log('fizzbuzz');
            break;
        case (i % 3 === 0):
            console.log('fizz');
            break;
        case (i % 5 === 0):
            console.log('buzz')
            break;
        default:
            console.log(i);
    }
}
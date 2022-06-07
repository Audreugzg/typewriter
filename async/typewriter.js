const sentence = "hello there from lighthouse labs";
let time = 0;
for (const char of sentence) {
  time += 50;
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, time) ;
  
}
setTimeout(() => {
  // print the char here
  process.stdout.write('\n');
}, time) ;

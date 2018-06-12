function repeat (fn, n) {
//fn type is function
//n type is number
//for every iteration of the loop, fn is called
  for (let i = 0; i < n; i++) {
    fn(n);
  }
};

function hello() {
  //logs Hello world to the console
  console.log("Hello world");
};

function goodbye() {
  //log Goodbye world
  console.log("Goodbye world");
};

repeat(hello, 5);
repeat(goodbye, 5);

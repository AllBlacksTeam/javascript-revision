//the this keyword

//3 main cases:
//1. Inside a normal function, it points to the global object
function myFunction() {
  console.log(this);
}

//2. Inside a normal object method, it points to the object
const persona {
  name: 'Julio',
  sayThis: function() {
    console.log(this);
  }
}


//3. WEIRD: Inside a function inside of a function method, it points to the
//global object
const persona {
  name: 'Julio',
  sayThis: function() {
    var inside = function() {
      console.log(this);
    };
    inside();
  }
}

//4. attention to the use of "this" in arrow functions
//In react, we use closures with arrow functions in the events when we want to
//avoid the use of bind.


//To avoid weird situations line the one above, use var self = this;

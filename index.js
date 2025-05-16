const person = {
  name: "",
  setName(n) {
    this.name = n;
    return this;  // return the object
  },
  sayHi() {
    console.log("Hi, I'm " + this.name);
    return this;
  }
};

// Use method chaining:
person.setName("Ali").sayHi();

  
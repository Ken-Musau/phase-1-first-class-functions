function receivesAFunction(spy) {
  return spy();
}

const addition = receivesAFunction((name) =>
  console.log(`Good Morning ${name}`)
);

function returnsANamedFunction() {
  return function introduction() {
    console.log(`My name is kenned`);
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("Good morning");
  };
}

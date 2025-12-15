class Car {
  drive() {
    // hit the gas
  }
}
class Golfer {
  drive() {
    // hit the ball far
  }
}
// No error?
let w: Car = new Golfer();

//Again, this isn’t an error because the structures of these classes are the same. While this may seem like a potential source of confusion, in practice, identical classes that shouldn’t be related are not common.
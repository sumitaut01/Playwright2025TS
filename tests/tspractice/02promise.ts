


function getUser(id: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve(`User with id ${id} found`);
      } else {
        reject("Invalid user id");
      }
    }, 1500);
  });
}

//promise chaining
// Using .then() / .catch()
getUser(1)
  .then(user => console.log(user))       // ✅ User with id 1 found
  .catch(err => console.error(err));

getUser(-5)
  .then(user => console.log(user))
  .catch(err => console.error("Error:", err)); // ❌ Error: Invalid user id
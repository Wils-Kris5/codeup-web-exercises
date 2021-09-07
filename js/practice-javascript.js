// function calculatePrice(price, taxes, description) {
//   taxes = taxes ?? 0.05
//   description = description ?? "default item"
//     const total = price * (1 + taxes)
//     console.log(`%c${description} With Tax:%c $$ {total}`, "font-weight: bold; font-size: 1.5rem", ""
//     )
// }
// calculatePrice(100, 0.07, "my item")
// calculatePrice(100, 0, 'My other item')
// calculatePrice(100, undefined, "")

class Person {
  constructor(name, address, hobbies) {
    this.name = name
    this.address = address
    this.hobbies = hobbies
  }

print(){
  console.log(this)
}
}
function printPersonsStreet(person) {

  console.log(person?.address?.street)
}
  const kris = new Person("Kristen", undefined, ["Bowling", "Watching Movies"])
  kristen.print()
   printPersonsStreet(undefined)
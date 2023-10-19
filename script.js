//Global access to all inputs
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)
// ** Calculates the total bill per person **
const calculateBill = () => {
    // Bill from user input & converting it into a number
    const bill = Number(billInput.value)
  
    // Tip from user & converting it into a percentage
    const tipPercentage = Number(tipInput.value)/100
  
    //The total tip amount
    const tipAmount = bill * tipPercentage
  
    // calculates the total
    const total = Number(bill + tipAmount)
  
    // calculates the per person total
  let perPersonTotal = total /numberOfPeople
  
    // updating the perPersonTotal on DOM
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increses the amount of people
  numberOfPeople += 1
  
    // updates the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople
  
    // calculates the bill based on the new number of people
    calculateBill()
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // if amount is 1 or less simply return bc i can't decrease the number of people to 0 or negative!)
    if (numberOfPeople <= 1) {
        return
    }
    // decreses the amount of people
   numberOfPeople -= 1
   
    // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople
    // calculates the bill based on the new number of people
    calculateBill()
}
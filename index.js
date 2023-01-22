// create an empty array
const toDoList = [];

// create a function that adds to the array.

function addTo(item) {
  toDoList.push(item);
  console.log(item, "has been added to the list")
};

// Function to remove an item from the to-do list
function removeTo(item) {
  let index = toDoList.indexOf(item);
  if (index !== -1) {
    toDoList.splice(index, 1);
    console.log(item + " has been removed from the list.");
  } else {
    console.log(item + " was not found on the list.");
  }
}
// Function to display the current to-do list
function displayToDoList() {
  console.log("CURRENT To-Do List:");
  toDoList.forEach((item) => {
    console.log(item);
  });
}

// Example usage:
addTo("Take out the trash ");
addTo("Do the dishes and laundry");
addTo("Vacuum the childrens room");
displayToDoList();
removeTo("Do the dishes");
displayToDoList();
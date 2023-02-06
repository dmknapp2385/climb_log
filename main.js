// global variables
var climbArray = JSON.parse(localStorage.getItem("Climbs")) || [];
var gradeArray = JSON.parse(localStorage.getItem("Grades")) || [];
var sendArray = JSON.parse(localStorage.getItem("Sends"))  || [];
console.log(climbArray)

//function to print input
function getInput() {
  // variabls to collect input
  var climb = document.getElementById("climb").value;
  var grade = document.getElementById("grade").value;
  var send = document.querySelector("#selection").value;
  // add items to the list
  climbArray.push(climb);
  gradeArray.push(grade);
  sendArray.push(send);

  // add to local storage
  localStorage.setItem("Climbs", JSON.stringify(climbArray));
  localStorage.setItem("Grades", JSON.stringify(gradeArray));
  localStorage.setItem("Sends", JSON.stringify(sendArray));
}

// prints climb list
function printClimbs() {
  climbArray.forEach((climb, index) => {
    var line = document.createElement("li");
    line.setAttribute('name', `${index}`)
    var lineText = document.createTextNode(climb);
    line.appendChild(lineText);
    document.getElementById("climbs").appendChild(line);
  });
  gradeArray.forEach((grade, index) => {
    var line = document.createElement("li");
    line.setAttribute('name', `${index}`)
    var lineText = document.createTextNode(grade);
    line.appendChild(lineText);
    document.getElementById("grades").appendChild(line);
  });
  sendArray.forEach((send, index) => {
    var line = document.createElement("li");
    line.setAttribute('name', `${index}`)
    var lineText = document.createTextNode(send);
    line.appendChild(lineText);
    
    document.getElementById("sends").appendChild(line);
  });

  for(var i = 0; i< climbArray.length; i++) {
    var delList = document.createElement('li');
    delList.setAttribute('name', `${i}`)
    var delbutton = document.createElement('button');
    var buttontext = document.createTextNode('Delete');
    delbutton.appendChild(buttontext);
    delList.appendChild(delbutton);
    document.getElementById('delete').appendChild(delList);
  }
}

function deleteItem() {
  var deleteBtn = event.target.closest('li');
  var index = deleteBtn.getAttribute('name');
  climbArray.splice(index, 1);
  gradeArray.splice(index, 1);
  sendArray.splice(index, 1)
  localStorage.setItem('Climbs', JSON.stringify(climbArray))
  localStorage.setItem('Grades', JSON.stringify(gradeArray))
  localStorage.setItem('Sends', JSON.stringify(sendArray))
  location.reload();
}

document.getElementById('delete').addEventListener("click", deleteItem);


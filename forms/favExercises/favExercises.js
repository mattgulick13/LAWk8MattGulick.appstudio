let exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
let coreExercises = ["situps", "plank"]
let selection = []

selExercises.onshow = function() {
  selExercise.clear()
  for (i = 0; i < exercises.length; i++)
    selExercise.addItem(exercises[i])
  for (i = 0; i < coreExercises.length; i++)
    selExercise.addItem(coreExercises[i])
}

selExercises.onclick=function(){
  selection.push(selExercise.value)
}

btnShowExercise.onclick = function() {
  if (selection[0] == "situps" && selection[1] == "plank") {
    lblExercises.value = (`You chose ${selection[0]} and ${selection[1]} - those are the two core exercises.`)
  } else if (selection[1] == "situps" && selection[0] == "plank") {
    lblExercises.value = (`You chose ${selection[0]} and ${selection[1]} - those are the two core exercises.`)
  } else {
    lblExercises.value = (`You did not pick the two core exercises.`)
  }
}
btnNav.onclick = function() {
  ChangeForm(mobileNav)
}

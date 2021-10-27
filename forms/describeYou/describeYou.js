rbtnCharacter.onchange=function(){
   let userChoice = $("input[name=rbtnCharacter]:checked").prop("value")
   lblResults.value = (`I would agree that you are a ${userChoice} person too!`)
}
btnExercise.onclick=function(){
  ChangeForm(favExercises)
}
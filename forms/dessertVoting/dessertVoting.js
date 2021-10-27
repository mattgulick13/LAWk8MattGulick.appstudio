let dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
    for (i = 0; i <= dessertList.length -1; i++)
      drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(){
    if (typeof(s) == "object")   
      return                    
    else {
        drpDesserts.value = s
        lblDessertChoice.value = (`You picked ${s} - that is a great choice`)
    }
}
btnMove.onclick=function(){
  ChangeForm(describeYou)
}

// Business name genrator 

let randomValue = Math.random(0,1)
let first , second , third 
if(randomValue<0.33) first = "Crazy"
else if(randomValue>=0.33&& randomValue<0.66) first = "Amazing"
else first= "Fine"

randomValue = Math.random(0,1)
if(randomValue<0.33) second = "Engine"
else if(randomValue>=0.33&& randomValue<0.66) second = "Foods"
else second= "Garments"

randomValue = Math.random(0,1)
if(randomValue<0.33) third = "Bros"
else if(randomValue>=0.33&& randomValue<0.66) third = "Limited"
else third= "Hub"

console.log("Welcome to Business name genrator ")
console.log("The name is :"+first +" "+second+" "+third);





// let price = 2;
// cost = (fuel * price)

//* yanacaq yoxlamaq

function carTest(fuel, distance) {
    let a = fuel;
    let b = distance;
    let result = (fuel / (distance / 100))
    console.log(result)
}
carTest (10,500)

//? tek,cut ededler

{
    let number = prompt("ədədi daxil edin")

    number % 2 === 0 ?
        console.log("cut ededdir") :
        console.log("tek ededdir")
}   
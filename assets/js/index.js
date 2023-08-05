

//* yanacaq yoxlamaq

function carTest(fuel, distance, price) {
    let a = fuel;
    let b = distance;
    let c = price;
    let result = (fuel / (distance / 100))
    let cost = (fuel * price)
    console.log(result)
    console.log(cost)

    fuel / distance < 0.037 ?
        console.log("kopolunun masini benzini iyliyir") :
        console.log("benzini su kimi icir ")
}
carTest(10, 500, 1.5)

//? tek,cut ededler

{
    let number = prompt("ədədi daxil edin")

    number % 2 === 0 ?
        console.log("cut ededdir") :
        console.log("tek ededdir")
}   
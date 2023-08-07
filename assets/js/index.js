

//* yanacaq yoxlamaq

function carTest(fuel, distance, price) {
    let a = fuel;
    let b = distance;
    let c = price;
    let result = (fuel / (distance / 100))
    let cost = (fuel * price)
    console.log(result)
    console.log(cost)

    if (fuel / distance < 0.037) {
        console.log("köpəyoğlunun maşını benzini iyliyir")
    }
    // if (fuel / distance > 0.037 && fuel / distance < 0.208) {
    //     console.log("normaldir")
    // }
    if (fuel / distance >= 0.208) {
        console.log("benzini su kimi içir")
    }

}
carTest(10, 100, 1.5)

//? tek,cut ededler

{
    let number = prompt("ədədi daxil edin")
    number % 2 === 0 ?
        console.log("cüt ədəddir") :
        console.log("tək ədəddir")
}   
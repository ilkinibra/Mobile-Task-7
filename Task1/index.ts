//2. Bir obyekt yaradıb başqa dəyişənə yeni obyekt kimi kopyala.

const carDimension ={
    width : 100,
    height : 130,
    length : 200,
    weight : 2000
};

const carView ={
    colour : "Black",
    motor : 5.5,
    speed : 400
}

const car ={
    ...carDimension,
    ...carView
}
console.log(`Colour: ${car.colour}\nMotor: ${car.motor}\nSpeed: ${car.speed}\nWidth: ${car.width}\nHeight: ${car.height}\nLength: ${car.length}\nWeight: ${car.weight}`)
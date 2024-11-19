// for in
let objArray = [
    {
        "id": "1",
        "image": "http://........1",
        "name": "Toyota",
        "year": 2015,
        "price": 1000000.00
    },
    {
        "id": "2",
        "image": "http://........2",
        "name": "Mercedes",
        "year": 2022,
        "price": 7000000.00
    },
    {
        "id": "3",
        "image": "http://........3",
        "name": "Honda",
        "year": 2009,
        "price": 4000000.00
    },
]

// for (obj of objArray) {
//     console.log(`ID: ${obj.id}`);
//     console.log(`Image: ${obj.image}`);
//     console.log(`Name: ${obj.name}`);
//     console.log(`Year: ${obj.year}`);
//     console.log(`Price: ${obj.price} \n\n`);
// }


// objArray.forEach((obj) => {
//     price = obj.price - ((10/100) * obj.price)
//     console.log(`
//         ID: ${obj.id}
//         Image: ${obj.image}
//         Name: ${obj.name}
//         Price: ${price} 10% discount
//     `);
// });


console.log(objArray.map((obj) => {
    let price = obj.price - ((10/100) * obj.price)
    return price;
}));
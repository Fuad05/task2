const cs401 = [
    {
        name: 'Fuad',
        age: 18
    },
    {
        name: "Ilkin",
        age: 18
    },
    {
        name: "Ulfat",
        age: 23
    },
    {
        name: "Anar",
        age: 22
    },
    {
        name: "Murad",
        age: 27
    },
    {
        name: "Parviz",
        age: 27
    },
    {
        name: "Narmin",
        age: 20
    },
    {
        name: "Gulshen",
        age: 35
    }
]
function sum(qrp) {
    let cem = 0;
    qrp.map((item) => {
        if (item)
            cem = cem + item.age;
        })
        return cem;
}
console.log(sum(cs401));

function sum1(qrp) {
    let hasil = 1;
    qrp.map((item) => {
        hasil = hasil * item.age;
    })
    return hasil;
}
console.log(sum1(cs401));


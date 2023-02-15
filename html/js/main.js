let square =  (a, b)=> {
    return a * b;
}
console.log(square(2 , 5));

let r = (r) =>{
    return 3.14*r*r
}
r(2);

console.log(r(2));

let cilinder =(r, h)=>{
    return (2*3.14*r*r)+(2*3.14*h)
}

console.log(cilinder(2,6));

let userArr = (user)=>{
    for (const userElement of user) {

    }


}
let users = [
    {name: 'Thomas',
        username: 'Price',
        password: '12345'
    },
    {name: 'Ann',
        username: 'White',
        password: '525521'
    },
    {name: 'Jahseh',
        username: 'Connor',
        password: '543543'
    }
]
userArr(users);
console.log(users);
let unOrderList = (txt)=>{
    document.write(`<div>
<ul>
<li>${txt}</li>
<li>${txt}</li>
<li>${txt}</li>
</ul>
</div>`)
}
unOrderList('okten');

let f=(text,count)=>{
    document.write(`<ul> `);
    for (let i = 0; i < count   ; i++) {
        document.write (`<div>${text}</div>`)

    }
    document.write(`</ul>`);
}

f('hello',3);

let listCreator =(arr)=>{
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}
listCreator([1,2,'arrr', true,false]);

let objectMassive =(object)=>{
    for (const objectElement of object) {
        document.write(`<div>${objectElement.name} ${objectElement.id} ${objectElement.age}</div>`)

    }
}

let minNum = (numbers)=>{
    let min =numbers[0];
    for (const number of numbers) {
        console.log(number)
        if (min>number){
            min=number
        }

    }
    return min;

}
minNum([-22,-231,-256]);

let sum =(numers)=>{
    let vidro = 0;
    for (const numer of numers) {
        vidro = vidro + numers;

    }
    return vidro;
}
console.log(sum([1,2,10]));



let swap = (arr,index1,index2)=>{
    let v1=arr[index1];
    let v2 = arr[index2];
    arr[index1]=v2;
    arr[index2]=v1;
    return arr;
}

console.log(swap([11,22,33,44,55],0,4));
let exchange = (uah,currencies,exitCurrency)=>{
    for (const item of currencies) {
        if (item.curency===exitCurrency){
           return  uah/item.value;

    }
}

}
exchange(
    1000,
    [
        {curency: 'USD', value:40},
        {curency: 'EUR', value:42},
        {curency: 'PLN', value:9}
    ]
    , 'USD'

)

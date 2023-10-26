let fullName = 'Fuad Rahimli Polad'
1
console.log(fullName.split(''))
2
function soyad(fulname){
    let fullName=fulname.split(' ')
    if(fullName.length===3){
        fullarr=fullName[1]+' '+fullName[0]+' '+fullName[2]
        return fullarr.split(' ')

    }
}
console.log(soyad(fullName))
3
let ad=soyad(fullName)
console.log(ad.join(' '))

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

4
let tekrarlananEded = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    tekrarlananEded++;
  }
}
console.log(tekrarlananEded)
5
let sum = 0 ;
for(i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum)
6
let tekrar = []
for (let i = 0; i <arr.length; i++) {
    let say = arr[i]
    if (tekrar.indexOf(say) === -1) {
        tekrar.push(say)
    }
}
 console.log(tekrar.sort())
7
let maxi = Math.max(...arr)
console.log(maxi)
let maxSayi = 0
for (i = 0; i < arr.length; i++) {
    if (arr[i] === maxi) {
        maxSayi++
    }
}
console.log(maxSayi)
8
let adim='Fuad'
let adSay=adim.split('')
console.log(adSay.length)
console.log(arr.includes(adSay.length))
9
let uceBolunQaliq=[]
for(i=0;i<arr.length;i++){
    if(arr[i]%3==2){
     uceBolunQaliq.push(arr[i])   
    }
}
console.log(uceBolunQaliq)
console.log(arr.findIndex((item)=>item==uceBolunQaliq[0]))
10
 let maxi = Math.max(...arr)
 console.log(arr.findIndex((item)=>item==maxi))
11
let index = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        index.push(i);
    }
}
console.log(index)
12
let index=[]
for(i=0;i<arr.length;i++){
    if(arr[i]===5){
index.push(i)
    }
}
let enKicik=Math.min(...index)
let enBoyuk=Math.max(...index)
console.log(enKicik,enBoyuk)
13
let boyuk=[]
for(i=0;i<arr.length;i++){
    if(arr[i]>2){
        boyuk.push(arr[i])
    }
}
console.log(boyuk)
console.log(boyuk.length-arr.length)
14
let index=0;
for(i=0;i<arr.length;i++){
    if(arr[i]==7){
        index+=i
    }
}
console.log(index)

let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]
16
function basherf(anyarray){
let basHerfiT= anyarray.filter((item) => item.name[0] === 't');
return basHerfiT
}
    console.log(basherf(arr2))
17
function task17(anyarray){
    return anyarray.filter((item) => {
        const name = item.name;
        return name[0] === 't' && name[name.length - 1] === 't';
    }).length;
}
console.log(task17(arr2))
18
function task18(anyarray) {
    let sum = 0
    anyarray.map((item) => {
        const name = item.name
        if (name[0] === 't' && name[name.length - 1] === 't') {
            sum += item.key
        }  
    })
    return sum;
}
console.log(task18(arr2))
19
function task19(anyarray) {
    let arr5 = anyarray.map((item) => {
        let name = item.name;
        if (name[name.length - 1] === 'e') {
            name = 'superdev';
            return name;
        }
        return item 
    });
    return arr5;
}
console.log(task19(arr2))
20
function task20(anyarray){
    let enUzun=0;
    let enUzunKey=0;
    anyarray.map((item)=>{
        if(item.name.length>enUzun){
            enUzun=item.name.length
            enUzunKey=item.key
        }
    })
    return enUzunKey ;
}
console.log(task20(arr2))
21
function task21(anyarray) {
    let enUzun = 0; 
    let enUzunIndex = 1; 
    let sum = 0;

    for (let i = 0; i < anyarray.length; i++) {
        let name = anyarray[i].name;

        if (name.length > enUzun) {
            enUzun = name.length;
            enUzunIndex = i;
        }
    }

    if (enUzunIndex !== -1) {
        sum = enUzunIndex * enUzunIndex; 
    }

    return sum;
}

console.log(task21(arr2));
22
function task22(anyarray){
    let yeniArray=[]
    anyarray.map((item)=>{
        if(item.name.length>4){
           yeniArray.push(item)
        }
    })
    return yeniArray
}
console.log(task22(arr2))
23
function task23(anyarray){
    let key=0
    anyarray.map((item)=>{
        if(item.key>key){
          key=item.key
        }
    })
    return key
}
console.log(task23(arr2))
24
function task24(anyarray) {
    let index = [];

    for (let i = 0; i < anyarray.length; i++) {
        const name = anyarray[i].name;
        let deyer = 0;

        for (let j = 0; j < name.length; j++) {
            if (name[j] === 'l') {
                deyer++;
            }
        }

        if (deyer === 2) {
            index.push(i);
        }
    }

    return index;
}

console.log(task24(arr2))
25
function task25(anyarray){
    let key=[]
    for(let i=0;i<anyarray.length;i++){
        const name=anyarray[i].name
        let say=0
        for(let j=0;j<name.length;j++){
            if(name[j]==='t'){
                say++;
            }
        }
        if(say===2){
            key.push(anyarray[i].key)
        }
    }
    return key;
}
console.log(task25(arr2))


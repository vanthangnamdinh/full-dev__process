
const products=[
    {
        id:1,
        name:'iPhone9',
        cost: 700
    },
    {
        id:2,
        name:'Samsung',
        cost: 400
    },
    {
        id:3,
        name:'Nokia',
        cost: 100
    },
    {
        id:4,
        name:'Sony',
        cost: 450
    },
    {
        id:5,
        name:'Motorola',
        cost: 180
    },
    {
        id:6,
        name:'oppo',
        cost: 600
    },
    {
        id:7,
        name:'bPhone',
        cost: 90
    }

]
function changed(name){
    const cname=name+"-check";
    const cnum=name+"-num"
    const check= document.getElementById(cname);
    if(check.checked==true){
        const cost=document.getElementById(name);
        const number=document.getElementById(cnum).value
        for (let i = 0; i < products.length; i++) {
            if (products[i].name==name){
                const sum=products[i].cost * number
                cost.innerText= sum+'';
                break
            }
        }
    }
}
function check(name){
    const cname=name+"-check";
    const cnum=name+"-num"
    const check= document.getElementById(cname);
    const cost=document.getElementById(name);
    const number=document.getElementById(cnum).value
    if(check.checked == true){
        cost.style.display="block"
        for (let i = 0; i < products.length; i++) {
            if (products[i].name==name){
                const sum=products[i].cost * number
                cost.innerText= sum+'';
                break
            }
        }
    }else{
        cost.style.display="none"
    }
}
function checkSum(){
    let SUM=0;
    for (let i = 0; i < products.length; i++) {
        let product =document.getElementById(products[i].name)
        if(product.style.display=='block'){
            SUM+=parseInt(product.innerText,10)
        }
    }
    const sum=document.getElementById('Sum')
    sum.innerHTML=SUM;
}

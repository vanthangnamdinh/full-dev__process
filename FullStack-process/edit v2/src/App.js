
import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';

const products=[
  {
      id:1,
      realname:'iPhone9',
      name:'iPhone9',
      cost: 700
  },
  {
      id:2,
      realname:'Samsung',
      name:'Samsung',
      cost: 400
  },
  {
      id:3,
      realname:'Nokia',
      name:'Nokia',
      cost: 100
  },
  {
      id:4,
      realname:'Sony Xperia',
      name:'Sony',
      cost: 450
  },
  {
      id:5,
      realname:'Motorola',
      name:'Motorola',
      cost: 180
  },
  {
      id:6,
      realname:'oppo',
      name:'oppo',
      cost: 600
  },
  {
      id:7,
      realname:'bPhone',
      name:'bPhone',
      cost: 90
  }

]

function App() {
    const [amount,setAmount]=useState([0,0,0,0,0,0,0,0])
    const [checkd,setCheckd]=useState([false,false,false,false,false,false,false])
        useEffect(()=>{
            const num=document.getElementById(`${products[index].name}-num`)
            if(checkd[index]=== true){
                const cost=document.getElementById(products[index].name);
                    const sum=products[index-1].cost * amount[index]
                    cost.innerText= sum+'';
                }
            },[amount]);
        useEffect(()=>{
            const cost=document.getElementById(products[index-1].name);
            if(checkd[index-1]== true){
                cost.style.display='block'
                const sum=products[index-1].cost * amount[index-1]
                cost.innerText= sum+'';      
            }else{
                cost.style.display='none'
            }
        },[checkd])
    
    
    function checkSum(){
        let SUM=0;
        for (let i = 0; i < products.length; i++) {
            let product =document.getElementById(products[i].name)
            if(product.style.display=="block"){
                SUM+=parseInt(product.innerText,10)
            }
        }
        const sum=document.getElementById('Sum')
        sum.innerHTML=SUM;
    }

    return (
        <div>
        <table class>
                <caption><div>Bán Hàng</div></caption>
                <tr>
                    <td class="box"><input type="checkbox"/></td>
                    <td>Hàng Hoá</td>
                    <td>Đơn Giá</td>
                    <td>Số Lượng</td>
                    <td>Thành tiền</td>
                </tr>
                {products.map(product=>
                <tr >
                    <td className={"box"}>
                        <input 
                        id={`${product.name}-check`}
                        type={"checkbox"}
                        onclick={setCheckd(!checkd[product.id-1])}
                        />
                    </td>
                    <td>{product.realname}</td>
                    <td>{product.cost}</td>
                    <td>
                    <input 
                    type="number"
                    id={`${product.name}-num`}
                    value="0"
                    onchange={(e)=>{ let newarr=[...amount];newarr[product.id]=e.target.value;setAmount(newarr)}}
                    /></td> 
                    <td>
                        <div 
                        id={`${product.name}`} 
                        style={{display: "none"}}></div>
                    </td>
                </tr>
                )}
                <tr>
                <td colspan ="4" style={{text_algin: "center"}} >
                    <button onclick={checkSum()} style={{width: "500px"}}>Tổng</button>
                </td>
                <td><div id="Sum"></div></td>
                </tr>
            </table>
        </div>
    );
}

export default App;


import './App.css';
import {useState,} from 'react';

const products=[
  {
      id:1,
      realname:'iPhone9',
      name:'iPhone9',
      cost: 700,
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
    const [amount,setAmount]=useState([0,0,0,0,0,0,0])
    const [checkd,setCheckd]=useState([false,false,false,false,false,false,false])
    const [sumproduct,setSumproduct]=useState([0,0,0,0,0,0,0])
    const [sum,setSum]=useState(0)
    
    const handleClickCheckbox =(e,id)=>{
        if(checkd[id-1]===false){
            setSumproduct(product=>{
                return[
                    ...product.slice(0,id-1),
                    products[id-1].cost * amount[id-1],
                    ...product.slice(id)
                ]
            })
            setCheckd(Amount=>{
                return[
                    ...Amount.slice(0,id-1),
                    e.target.checked,
                    ...Amount.slice(id)
                ]
            })
        }else{
            setSumproduct(product=>{
                return[
                    ...product.slice(0,id-1),
                    0,
                    ...product.slice(id)
                ]
            })
        }
        setSum(()=>{
            let Sum=0
            sumproduct.map((product)=>
                
                Sum+=product
            )
            return Sum
        })
    }
    const handleClickNumber=(e,id)=>{
        setAmount(Amount=>{
            return[
                ...Amount.slice(0,id-1),
                parseInt(e.target.value),
                ...Amount.slice(id)
            ]
        })
        setSum(()=>{
            let Sum=0
            sumproduct.map((product)=>
                Sum+=product
            )
            return Sum
        })
    }
    return (
        <div className='Container'>
            <table>
                <caption><div>Bán Hàng</div></caption>
                    <tbody>
                    <tr>
                        <td className="box"><input type="checkbox"/></td>
                        <td>Hàng Hoá</td>
                        <td>Đơn Giá</td>
                        <td>Số Lượng</td>
                        <td>Thành tiền</td>
                    </tr>
                    {products.map((product)=>
                    <tr key={product.id}>
                        <td className={"box"}>
                            <input 
                            id={`${product.name}-check`}
                            type={"checkbox"}
                            checked={false}
                            onChange={handleClickCheckbox(product.id)}
                            />
                            
                        </td>
                        <td>
                            {product.realname}
                        </td>
                        <td>
                            {product.cost}
                        </td>
                        <td>
                        {checkd[product.id-1]?(
                            <input 
                            type="number"
                            id={`${product.name}-num`}
                            onChange={handleClickNumber(product.id)}
                        />
                        ):null}    
                        
                        </td> 
                        <td>
                            {checkd[product.id-1]?( 
                            <div 
                                id={`${product.name}`} 
                            >{product.cost*amount[product.id-1]}
                            </div>)
                            :null}
                        </td>
                    </tr>
                    )}
                    <tr>
                    <td colSpan ="4" style={{alignItems: "center"}} >
                        <div style={{textAlign: "center"}}>
                            Tổng
                        </div>
                    </td>
                    <td>
                        <div style={{textAlign: "center"}} id="Sum">
                            {sum}
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;

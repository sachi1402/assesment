import React,{useState,useEffect} from 'react'

import { RiDeleteBinFill } from 'react-icons/ri';
import { SiAddthis } from 'react-icons/si';
import './form.css'
function Form() {
    const [Account, setAccount] = useState('sam');
    const [DebitAmount, setDebitAmount] = useState(0);
    const [CreditAmount, setCreditAmount] = useState(0);
    const [Data, setData] = useState([{id:0,Account:'sam',DebitAmount:100000,CreditAmount:10000},{id:1,Account:'sid',DebitAmount:100000,CreditAmount:10000},{id:2,Account:'vivek',DebitAmount:100000,CreditAmount:10000}]);
    const [totalCredit , settotalCredit ] = useState(0);
    const [totalDebit , settotalDebit ] = useState(0);
    let handelsubmitt=(e)=>{
        e.preventDefault();
        const data = {Account,DebitAmount,CreditAmount}
        setData(e=>[...e,{...data,id:Data.length}])
    }       
    let deletehaldler=(id)=>{
        console.log(id,Data.length,'sds');
        let data = Data
        data.splice(data.indexOf(id),1)
        setData([...data])
    }
    useEffect(() => {
        let tc=0,td=0
        for (let i = 0; i < Data.length; i++) {
            tc+=+Data[i].CreditAmount
            td+=+Data[i].DebitAmount 
        }
        console.log(tc,td);
        settotalDebit(td)
        settotalCredit(tc) 
       
    }, [Data]);
  return (
<div className="contaner">
    <div >
        <form onSubmit={(e)=>{handelsubmitt(e)}} className='form_contaner'>
            <div>
            {/* <label ></label> */}
            <label>Account : </lable>
            <select value = {Account}
            className='form_selectoc'
                    onChange ={(e)=>setAccount(e.target.value)}
            >
                <option value='jon'>user1</option>
                <option value='samantha'>user2</option>
                <option value='rahul'>user3</option>
                <option value='vivek'>user4</option>

            </select>
            </div>
            <div>
                <lable>DebitAmount : </lable>
                <input type='number' value={DebitAmount} onChange={(e)=>{setDebitAmount(e.target.value)}}/>
            </div>
            <div>
                <lable>CreditAmount : </lable>
                <input type='number' value={CreditAmount} onChange={(e)=>{setCreditAmount(e.target.value)}}/>
            </div>
            <button type='submit'><SiAddthis/></button>
        </form>
       
    </div>
    <div className="list" >
        {Data.map(e=>
        <div  key={e.id} className="list_item">
        <div>{+e.id+1}</div>
        <div>{e.Account}</div>
        <div>{Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(+e.CreditAmount)}₹</div>
        <div>{Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(+e.DebitAmount)}₹</div>
        {/* <p>  __ {+e.DebitAmount}</p> */}
        <button onClick={event=>deletehaldler(e)} ><RiDeleteBinFill/></button>
        </div >
        )}
    </div>
    <div className="totla">
        <div className="tcd">Total CreditAmount= <b>{Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(totalCredit)}₹</b></div>
        <div className="tdb">Total DebitAmount= <b>{Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(totalDebit)}₹</b></div>
    </div>
</div>
  )
}

export default Form
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ReactDom from 'react-dom';
import './Modal1.css'
// import { useNavigate } from 'react-router-dom'

// Line no 7 & 9 to 13 comment out krte hai to code give error "modle is not define"



const Modal = ({ setData, data, modelData, index, fakeString }) => {
    const navigate = useNavigate();

   


    const [cardName, setCardName] = useState('')
    const [cardNum, setCardNum] = useState('')
    const [cardExp, setCardExp] = useState('')
    const [cardCvv, setCardCvv] = useState('')
    // const [debitCardForm, setdebitCardForm] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        // debugger
        // alert("hello")
        // e.preventdefault()

        e.preventDefault()


        if (cardName.length == 0 || cardNum.length != 19 || cardExp.length == 0 || cardCvv.length == 0) {
            setError(true)
            return;
        }
        navigate('/modal2')

        console.log(cardName, cardNum, cardExp, cardCvv)
    }

    const cc_format =(value) => {
        const v = value
          .replace(/\s+/g, "")
          .replace(/[^0-9]/gi, "")
          .substr(0, 16);
        const parts = [];
      
        for (let i = 0; i < v.length; i += 4) {
          parts.push(v.substr(i, 4));
        }
      
        return parts.length > 1 ? parts.join(" ") : value;
      }
      
    

    const containtNum = (inputString) => {
        // Use a regular expression to check for digits (0-9)

        var digitPattern = /\d/;
        


        // Use the test method to check if the string contains digits

        return !digitPattern.test(inputString);
    }



    const cancel = () => {
        let list = [...data]
        list[index].isAnkur = !list[index].isAnkur
        setData(list)
    }
    //efine
    const tempnavi = useNavigate();
    // console.log(modelData)
    const [success, setSuccess] = useState(false);
    return (
        <>
            <div className='modalCss'>
                <div className='MMTmodal'>

                    <form onSubmit={handleSubmit}>
                        <div><h1 style={{ textAlign: "center" }}>Payment Method </h1></div>
                        <div className='PaymentInput'>
                            <input value={cardName} name='cardNumber'

                                onChange={(e) => { if (e.target.value.length <= 30 && containtNum(e.target.value) == true) setCardName(e.target.value) }}
                                type="text" placeholder='Name on Card' required maxLength={30} />
                        </div>
                        {error ?
                            <label>required</label> : ""}
                        <div className='PaymentInput'>
                            <input value={cc_format(cardNum)}
                                onChange={(e) => { if (e.target.value.length <= 19) setCardNum(e.target.value) }}
                                type="text" placeholder='0000 0000 0000 0000' required maxLength={19} />
                        </div>
                        {error ?
                            <label>required</label> : ""}
                        <div className='PaymentInput'>
                            <input value={cardExp}
                                onChange={(e) => { if (e.target.value.length <= 4) setCardExp(e.target.value) }}
                                type="year"  placeholder='MM/YY' required maxLength={4} />
                        </div>
                        {error ?
                            <label>required</label> : ""}
                        <div className='PaymentInput'>
                            <input value={cardCvv}
                                onChange={(e) => { if (e.target.value.length <= 3) setCardCvv(e.target.value) }}
                                type="number" placeholder='CVV' required maxLength={3} />
                        </div>
                        {error ?
                            <label>required</label> : ""}
                        <div className='btnPay'>
                            <button className='cancel' style={{ backgroundColor: "rgb(220,53,69)" }} onClick={cancel}>Cancel</button>


                            <button className='pay'>Pay</button>

                        </div>
                    </form>


                </div>
            </div >
        </>

    )
}

export default Modal
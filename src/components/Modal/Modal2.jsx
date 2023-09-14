import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ReactDom from 'react-dom';
import './Modal2.css'
import Payment from "../../Logo/payment.png"
const Modal2 = ({ setData, data, modelData, index, fakeString }) => {
    const cancel = () => {
        let list = [...data]
        list[index].isAnkur = !list[index].isAnkur
        setData(list)
    }
    //efine
    const tempnavi = useNavigate();
    // console.log(modelData)
    const [success, setSuccess] = useState(false);


   const localUserName =localStorage.getItem("userName");
        

    return (
        <>
            <div className='modalCss'>
                <div className='MMTmodal'>
                    {success && <h3 style={{ textAlign: "center", marginTop: "10px", }}> <img src={Payment} alt="Success" style={{ width: "30px", height: "30px", borderRadius: "20px" }} /> Payment Successfull</h3>}
                    <div><h1 style={{ textAlign: "center"}}>Fare Summary </h1></div>
                    <div className='Fare'>
                        <div className='baseFare'>
                            <div ><b>Base Fare </b></div>
                            <div id='numbers'>&#8377;{fakeString === "train" && modelData.price}{fakeString === "hotel" && modelData.price_per_night}{fakeString === "flight" && modelData.price}</div>
                        </div>
                        <div className='baseFare'>
                            <div style={{ marginLeft: "20px" }}><b>Fee & Surcharges</b></div>
                            <div style={{ marginRight: "20px" }}>&#8377;540</div>
                        </div>

                        <div className='baseFare'>
                            <div style={{ marginLeft: "5px" }}><b>Total Amount</b></div>
                            <div id='numbers'>&#8377;{fakeString === "train" && parseInt(modelData.price) + parseInt(540)}{fakeString === "flight" && parseInt(modelData.price) + parseInt(540)}{fakeString === "hotel" && parseInt(modelData.price_per_night) + parseInt(540)}</div>
                        </div>
                        <h4 style={{textAlign:"center"}}> {`Thank you choosing ${localUserName}`}</h4>
                   
                        
                    </div>
                    
                 <img className='conformation' src={Payment} />

                </div>
            </div>
        </>

    )

}

export default Modal2
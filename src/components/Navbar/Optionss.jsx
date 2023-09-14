import React, { useState } from 'react'
import { useEffect } from 'react'
import './SearchContent.css';

// import DatePicker from "react-datepicker"
// import 'react-datepicker/dist/react-datepicker.css'


// const [startDate, setStartDate] = useState(new Date()); 

const Optionss = ({ data, source, destination, setSource, setDestination }) => {
    const [url, setUrl] = useState('63b85b1209f0a79e89e17e3a/flights?')
    console.log('datatype in option-- ', data)
    const [values, setValues] = useState([])
    const [res, setRes] = useState([])

    useEffect(() => {
        if (data === 'Train') {
            setUrl('63b85e152cabb8fdea2673ee/trains')
        }
        else if (data === 'Flight') {
            setUrl('63b85b1209f0a79e89e17e3a/flights?')
        }
        else if (data === 'Hotel') {
            setUrl('63b85bcf735f93791e09caf4/hotels')
        }
        fetch(`https://content.newtonschool.co/v1/pr/${url}`)
            .then((res) => res.json())
            .then((val) => setValues(val))
    }, [data, url])

    useEffect(() => {

        console.log(values, "values")
    }, [data, values])

    return (
        <>
            {
                data === 'Hotel' ? <>
                    <div>
                        <label htmlFor="" className='labels'><b>City</b></label><br />

                        <select className='All' onChange={(e) => setSource(e.target.value)}>

                            {

                                values && values.map((opts, i) => <option key={i}>{opts.city}</option>)
                            }
                        </select>
                    </div>
                </> :
                    <>
                        <div>

                            <label htmlFor="" className='labels'><b>From</b></label><br />

                            <select className='All' onChange={(e) => setSource(e.target.value)}>
                                {
                                    values && values.map((opts, i) => <option key={i}>{opts.from}</option>)

                                }
                                
                            </select>

                        </div>

                        <div>
                        <label htmlFor="" className='labels'><b>To</b></label><br />

                        <select className='All' onChange={(e) => setDestination(e.target.value)}>
                            {
                                values && values.map((opts, i) => <option>{opts.to}</option>)

                            }
                        </select>
                        </div>
                    </>
            }

            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}

            <div className='Departure '>
                <label htmlFor="" className='labels'><b>Departure</b></label><br />
                <input type="date" className='All' />

            </div>

            <div className='Return_Date '>
                <label htmlFor="" className='labels'><b>Return</b></label><br />
                <input type="date" className='All' />
            </div>
        </>
    )
}

// const DatePick(){
//     const [date,setDate]=useState();

//     return(

//     )
// }

export default Optionss

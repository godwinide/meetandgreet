"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import Modal from '@/components/modal/modal'

const Buy = () => {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [airport, setAirport] = useState("");
    const [dob, setDob] = useState("");
    const [sex, setSex] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const [category, setCategory] = useState("");
    const [celename, setCeleName] = useState("");


    const handleSubmit = () => {
        if(loading){
            return false
        }

        setLoading(true);

        if(!name || !occupation || !celename || !address || !phone || !email || !state || !city || !country || !airport || !dob || !sex || !maritalStatus){
            alert("Please fill all fields correctly!");
            setLoading(false);
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                name,
                occupation,
                address, 
                phone,
                email,
                country,
                state,
                city,
                airport,
                dob,
                sex,
                maritalStatus,
                category,
                celename,
                couponCode
            })
          };

        const url = 'https://meetandgreetbooking.com/api/sendForm';
        // const url = 'http://localhost:2022/api/sendForm';
        
        // Make the POST request using fetch
    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) { // Check if the response status is not OK (200-299)
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse the JSON response body
        })
            .then(data => {
            setLoading(false)
            setOpen(true);
            console.log('Success:', data); // Handle the response data
        })
            .catch(error => {
            setLoading(false);
            alert("Network error");
            console.error('Error:', error); // Handle any errors
        });
    }

  return (
    <div className='container'>
        <div className={styles.form}>
            <h1 className={styles.title}>Fan Card, Ticket Form</h1>
            <p className={styles.para}>Fill the form below to request for fan card or ticket</p>
            <div className={styles.formgroup}>
                <label htmlFor="name">NAME(MR, MRS, DR & ENGR):</label>
                <input type="text" id='name' placeholder='Name(MR, MRS, DR & ENGR)'
                    value={name}
                    onInput={e => setName(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="occupation">OCCUPATION:</label>
                <input type="text" id='occupation' placeholder='Occupation'
                    value={occupation}
                    onInput={e => setOccupation(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="address">HOME ADDRESS:</label>
                <textarea name="address" id=""
                    value={address}
                    onInput={e => setAddress(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="occupation">PHONE NUMBER:</label>
                <input type="text" id='phone' placeholder='Phone number' 
                    value={phone}
                    onInput={e => setPhone(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="occupation">EMAIL:</label>
                <input type="email" id='email' placeholder='Email' 
                    value={email}
                    onInput={e => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="country">Country:</label>
                <input type="text" id='country' placeholder='Country' 
                    value={country}
                    onInput={e => setCountry(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="state">STATE:</label>
                <input type="text" id='state' placeholder='State' 
                    value={state}
                    onInput={e => setState(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="city">CITY:</label>
                <input type="text" id='city' placeholder='City' 
                    value={city}
                    onInput={e => setCity(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="airport">NEAREST AIRPORT:</label>
                <input type="text" id='airport' placeholder='Nearest Airport'
                    value={airport}
                    onInput={e => setAirport(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="dob">DATE OF BIRTH:</label>
                <input type="date" id='dob' placeholder='choose date' 
                    value={dob}
                    onInput={e => setDob(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="sex">SEX:</label>
                <select name="sex" id="sex"
                    value={sex}
                    onInput={e => setSex(e.target.value)}
                    required
                >
                    <option value="">select</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="marital">MARITAL STATUS:</label>
                <select name="marital" id="marital"
                    value={maritalStatus}
                    onInput={e => setMaritalStatus(e.target.value)}
                    required
                >
                    <option value="">select</option>
                    <option value="single">single</option>
                    <option value="married">married</option>
                    <option value="widowed">widowed</option>
                    <option value="divorced">divorced</option>
                    <option value="separated">separated</option>
                    <option value="rather not say">rather not say</option>
                </select>
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="celebrityName">CELEBRITY NAME:</label>
                <input type="text" id='celebrityName' placeholder='Celebrity Name'
                    value={celename}
                    onInput={e => setCeleName(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="cat">MEET AND GREET CATEGORY:</label>
                <select name="cat" id="cat"
                    value={category}
                    onInput={e => setCategory(e.target.value)}
                    required
                >
                    <option value="">select</option>
                    <option value="V.V.I.P">V.V.I.P</option>
                    <option value="V.I.P">V.I.P</option>
                    <option value="REGULAR">REGULAR</option>
                </select>
            </div>
            <div className={styles.formgroup}>
                <label htmlFor="occupation">DISCOUNT CODE(optional):</label>
                <input type="text" id='coupon' placeholder='DISCOUNT CODE' 
                    value={couponCode}
                    onInput={e => setCouponCode(e.target.value)}
                />
            </div>
            <div className={styles.formgroup}>
                <button onClick={handleSubmit} className={styles.submit}>
                    {
                        loading
                        ?<img src='/spinner.png' className={styles.loadingImg}/>
                        :"SUBMIT"
                    }
                </button>
            </div>
        </div>

        <Modal 
            open={open}
            setOpen={setOpen}
            title={"Thanks For Applying"}
            body={"Contact customer service through our email or live chat for payment, thank you."}
        />
    </div>
  )
}

export default Buy
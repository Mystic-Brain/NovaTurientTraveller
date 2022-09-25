import React, {useState,setState} from 'react';
import './Booking.css'
function Booking() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [Pick,setPick] = useState(null);


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id === "Pick"){
            setPick(value);
        }


    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword,Pick);
    }

    return(
        <div className="MainS">

            <div className="form-bodyS">
                  <h1>Registeration Form</h1>
                <div>
                    <label className="form__labelS" for="firstName">Full Name </label>
                    <input className="form__inputS" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="Full Name"/>
                </div>

                <div>
                    <label className="form__labelS" for="lastName">Address</label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__inputS" onChange = {(e) => handleInputChange(e)} placeholder="Address"/>
                </div>

                <div>
                    <label className="form__labelS" for="email">Email </label>
                    <input  type="email" id="email" className="form__inputS" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>

                <div>
                    <label className="form__label" for="password">Contact No.</label>
                    <input className="form__inputS" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Contact NO."/>
                </div>

                <div>
                    <label className="form__labelS" for="confirmPassword">Gender</label>
                    <input className="form__inputS" type="Radio" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>Male
                    <input className="form__inputS" type="Radio" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>Female
                </div>

                <div>
                    <label className="form__labelS" for="Pick">Pickup points</label>
                    <input className="form__inputS" type="Radio" id="pick" value={Pick} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>HINJWADI 10:00 AM
                    <input className="form__inputS" type="Radio" id="pick" value={Pick} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>KOTHRUD  11:00 AM
                </div>
                
            </div>
            
            <div class="footerS">
                <button onClick={()=>handleSubmit()} type="submit" class="btnS">Booking</button>
            </div>

        </div>
       
    )       
}

export default Booking;
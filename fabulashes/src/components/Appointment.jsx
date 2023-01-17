import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function Appointment(props) {

  const getData = async () => {
    await axios.get('http://localhost:8000/appointments/')
    .then(res => {
        if (res) {
            
            console.log(res)
        }
    })
}
useEffect(() => {
  getData()
}, [])
    const [showMessage, setShowMessage] = useState(false);


      const [allData, setAllData] = useState({
       firstname: '',
       lastname: '',
       phone_number: '',
       volume: '',
       effect: '',
       calendar: '',
       booking_time: ''
     } )

     const handleChange = (e) => {
           setAllData({...allData, [e.target.name]: e.target.value })
         }

         const handleSubmit = async (e) =>{
           const res = await axios.post(`http://localhost:8000/appointments/`, allData)
                e.preventDefault()
              console.log(allData)
              setShowMessage(true)
              setAllData({
                fisrtname: '',
                lastname: '',
                phone_number: '',
                volume: '',
                effect: '',
                calendar: '',
                booking_time: ''
              })
          
            
              
            }
            
    return (
        <div >
             <div className='space'></div>
         <Form className='booking_form'>
             <h2 className='form_h2'>Book your Appointment</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Firstname</Form.Label>
        <Form.Control className='input' type="text" placeholder="First Name" name='firstname' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control className='input' type="text" placeholder="Last Name" name='lastname' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Telephone</Form.Label>
        <Form.Control className='input phone_input' type="tel" placeholder="***-***-****" name='phone_number' onChange={handleChange}/>
      </Form.Group>

      <Form.Select className='input select_input' name='volume' onChange={handleChange} aria-label="Default select example">
      <option>Select Your Volume</option>
      <option value="Classic">Classic</option>
      <option value="2D">2D</option>
      <option value="3D">3D</option>
      <option value="4D">4D</option>
      <option value="5D">5D</option>
      <option value="Mega Volume">Mega Volume</option>
    </Form.Select>
    <br></br>
    <Form.Select className='input select_input' name='effect' onChange={handleChange} aria-label="Default select example">
      <option>Select Your Effect</option>
      <option value="Classic">Classic</option>
      <option value="Cat Eye">Cat Eye</option>
      <option value="Doll Eye">Doll Eye</option>
      <option value="Foxy Eye">Foxy Eye</option>
      <option value="Open Eye">Open Eye</option>
    </Form.Select>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Calendar</Form.Label>
        <Form.Control className='input date_input' type="date" placeholder="Select date" name='calendar' onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Booking Time</Form.Label>
        <Form.Control className='input time_input' type="time" placeholder="" name='booking_time' onChange={handleChange}/>
      </Form.Group>
      <Button className='input' variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
        {showMessage ? <h1>Your booking has been submitted!</h1>:null}
        </div>
    );
}

export default Appointment;
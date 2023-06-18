
import React, { useState } from 'react';
import axios from 'axios';

const Tracker = () => {
    const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState(null);
  

  const trackIP = async () => {
    try {
      const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=aa3b84cc44bd4349aa2981df0d25d6d1&ip=${ipAddress}`);
      setLocation(response.data);
    } catch (error) {
      console.log(error);
    }
  
  };
  const handleInputChange = (event) => {
    setIpAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    trackIP();
  };
  return (
    <div className='background-images'>
        <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div  className='container' >
        <input type="text" class="input" placeholder="Enter an IP address" value={ipAddress} onChange={handleInputChange} />
        <button type="submit" className='btn'>Track IP</button>
        </div>
        
      </form>
      {location && (
    
        <div className='information'>
          <p className='detailes'>IP Address: <br/>
           <h3 className='det'>{location.ip}</h3> </p>
          <p className='detailes'>Country: <br/>
            <h3 className='det'>{location.country_name}</h3></p>
          <p className='detailes'>City: <br/>
            <h3 className='det'>{location.city}</h3></p> 
         <p className='detailes'>ISP: <br/>
          <h3 className='det'>{location.isp}</h3></p> 
         
          {/* Add more information you want to display */}
        </div>
      )}
    </div>
  );
};
    
 

export default Tracker
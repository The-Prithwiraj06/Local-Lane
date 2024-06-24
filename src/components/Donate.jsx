
import "./Donate.css";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'

const Donate = () => {

  const [formData,setFormData]=useState({name:"",email:"",phonenumber:"",booktitle:""})
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setFormData({ ...formData, [input.name]: input.value });
  };

  const handleSubmit=async(e)=>
    {
      e.preventDefault();
     console.log("handle submitted");
    let url;

    console.log(formData)

    
        url = "http://localhost:3000/api/donate";
      
      

      const res = await axios.post(url, formData);

      console.log(res)

      // localStorage.setItem("token", JSON.stringify(res.data));
      
      // setUser(res.data);
    
       navigate("/categories");
    }
 
  return (
    <div div className="container1">
      <Navbar/>
       <div className="inputs">
       <h1 className="text-2xl font-semibold" style={{textAlign:'center'}}>Donate Here</h1>

       
        <div  className="input">

        
       
        <input type="text" placeholder="Name" name="name"  onChange={handleChange}
                    value={formData.name}/>
        </div>
       
        <div div className="input">
       
        <input type="email" placeholder="Email-Id" name="email" onChange={handleChange}
                    value={formData.email} />
        </div>
        <div div className="input">
        <input type="number" placeholder="phone-no." name="phonenumber" onChange={handleChange}
                    value={formData.phonenumber}/>
        </div>
        <div div className="input">
        <input type="text" placeholder="Book Title" name="booktitle" onChange={handleChange}
                    value={formData.booktitle}/>
        </div>
        <div className="input">
        <label  for="input-file">Book Image</label>
        <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-field"></input>
        </div>
        <div className="submit">
        
        <button onClick={handleSubmit}>Submit</button>
             
          
        </div>
       
        </div>
        </div>
  );
};
export default Donate;

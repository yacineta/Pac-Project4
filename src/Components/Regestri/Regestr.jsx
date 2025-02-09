import React  from 'react'
 import { useState } from 'react'


function Regestr() {
    const  [values,setValues] = useState({
        username:"",
        Email:"",
        birthday:"",
        password:"",
        confirmPasword:"",
    });
    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"Username should be 3-16 characters and shouldon t include any special character ! ",
            label:"Username", 
            pattern:"[A-za-z0-9]{3,16}$",
            required:true,

        },
        {
            id:2,
            name:"Email",
            type:"email",
            placeholder:"Email",
            errorMessage:"It should be a valid email address!",
            label:"Email", 
            required:true,

        },
        {
            id:3,
            name:"birthday",
            type:"date",
            placeholder:"Birthday",
            label:"Birthday", 

        },
        {
            id:4,
            name:"pasword",
            type:"text",
            placeholder:"Pasword",
            errorMessage:"Password should be 8-20  characters and include at least 1 letter 1 number and 1 special character",
            label:"Pasword", 
            // pattern:'(31:32)',
            required:true,

        },

        {
            id:5,
            name:"confirmPasword",
            type:"text",
            placeholder:"ConfirmPasword",
            errorMessage:"Password don t match!",
            label:"ConfirmPasword", 
            pattern:values.password,
            required:true,

        },
    ]

     
    
    

   
    // console.log("re-renderd")

    const handleSubmit = (e) => {
        e.preventDefault();
       
    };
    const onChange = (e) =>{
        setValues({...values,[e.target.name]: e.target.value});

    };
    console.log (values);
  return (
    <div className='dpp'>
        <from className="mbp" onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map(input =>(
               <FromInput  Key={input.id} {...input}  
               value={values[input.name]} 
               onChange= {onChange}  /> 
            )) }
            
           
            <button className='submit'>Submit</button>
        </from>
    </div>
  )
}

export default Regestr
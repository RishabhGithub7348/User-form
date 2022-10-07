import React, {useState} from "react";


export default () => {
    const [fullName, setFullName] = useState( {
      fname : '', 
      email : '',
      mobile : '',  
    });
  
 
  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;
    const {value,name} =event.target;
      setFullName((prevalue) => {
      return{
          ...prevalue,
          [name]: value,
      };
        //   if(name === 'fname'){
        //       return{
        //           fname: value,
        //           email: prevalue.email,
        //           mobile: prevalue.mobile,
        //       };
        //   }else if (name === 'email') {
        //       return{
        //           fname: prevalue.fname,
        //           email: value,
        //           mobile: prevalue.mobile,

        //       };
        //   }
        //   else if(name === 'mobile') {
        //       return {
        //         fname: prevalue.fname,
        //         email: prevalue.email,
        //         mobile: value,
        //       };
        //   }

      });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    alert("form Submitted");

  };
    return (
        <>
        <div>
        <form onSubmit={onSubmit}>
       <div >
           <h1>Hello {fullName.fname} {fullName.email} {fullName.mobile} </h1>
          <input type="text"  
          placeholder="Enter Your name" 
          name="fname"
          onChange={InputEvent}
          value={fullName.fname}
          />
          <br/>
          <input type="text"  
          placeholder="Enter Your Email" 
          name="email"
          onChange={InputEvent}
          value={fullName.email}
          />
             <input type="text"  
          placeholder="Enter Your Mobile Number" 
          name="mobile"
          onChange={InputEvent}
          value={fullName.mobile}
          />
          
         <button type="submit">Click me 😄 </button>
       </div>
       </form>
       </div>
        </>
    );
      
};


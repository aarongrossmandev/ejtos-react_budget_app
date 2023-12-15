import React,{useContext} from "react";
import {AppContext} from "../context/AppContext";
import "./Currency.css";

const Currency = () => {
  const {dispatch} = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };


  return (
    <div className='relative'>
      <label className="" style={{marginLeft: '1rem',backgroundColor: 'rgb(147, 228, 153)',color: 'white',borderRadius: '6px',padding: '10px 10px'}} >Currency
        <select name='hover_color' id="currency" onChange={(event) => changeCurrency(event.target.value)} style={{marginLeft: '1rem',backgroundColor: '#93E499',color: 'white',border: 'transparent',}}>
          <option style={{color: 'black'}} value="£">£ Pound</option>
          <option style={{color: 'black'}} value="$">$ Dollar</option>
          <option style={{color: 'black'}} value="€">€ Euro</option>
          <option style={{color: 'black'}} value="₹">₹ Rupee</option>
        </select>
      </label>
    </div >
  );
};

export default Currency;
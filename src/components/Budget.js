
import React,{useContext,useState} from 'react';
import {AppContext} from '../context/AppContext';
import {CurrencySymbol} from './CurrencySymbol';

const Budget = () => {
  const {budget,dispatch} = useContext(AppContext);
  const [newBudget,setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
    if(event.target.value >= 20000) {
      alert('value cannot exceed 20,000');
      setNewBudget(20000);
    }
  };
  const handleSetBudget = () => {
    dispatch({
      type: 'SET_BUDGET',
      payload: parseFloat(newBudget)
    });
  };

  return (
    <div className='alert alert-secondary'>
      <span style={{marginRight: '3px'}}>Budget: <CurrencySymbol /></span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onBlur={handleSetBudget}></input>
    </div>
  );
};
export default Budget;
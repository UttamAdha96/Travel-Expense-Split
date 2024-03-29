import React , { useEffect, useState }from 'react'
import './splitpage.css'
import ExpDetail from './ExpDetail/ExpDetail'
import ExpAddForm from './ExpAddForm/ExpAddForm'
import AddExp from './ExpDetail/AddExp'
import PersonDetail from './PersonDetail/PersonDetail'
import Banaras from '../pics/banaras.jpg'
import AddPerson from './PersonDetail/AddPerson'
import PersonAddForm from './PersonAddForm/PersonAddForm'
import axios from 'axios';

const SplitPage = ({tripname}) => {

  // Expense form show and card data
  const [showvar,setShowvar]=useState(false);
    const [EXPdetail, setEXPdetail] = useState([]);

    //Person add form and card data
    const [showPerform, setShowPerForm] = useState(false);
    const [PERSONdetail, setPERSONDetail] = useState([])

    // split calculation:
    //const [splitCalculation, setSplitCalculation] = useState({});

    // average expense calculaton
    const [average_value, setAverage_value] = useState(0);
    const [total_value, setTotal_value] = useState(0);  
    const [expense_value, setExpense_value] = useState(0);
    
    useEffect(() => {
      const newAverage_value = total_value - expense_value;
      setAverage_value(newAverage_value);
    }, [total_value, expense_value]);

    const handleTotalAmountAddedChange = (TotalMoney) => {
      setTotal_value(parseFloat(TotalMoney) || 0);
    };
  
    const handleTotalExpenseChange = (expPrice) => {
      setExpense_value(parseFloat(expPrice) || 0);
    };

    //Add expense card
    const addExp = async (expName, expDate, expPrice, paidPerson, expContri) => {
        const newExp = {
            // id: Date.now(),
            expName: expName,
            expDate: expDate,
            paidPerson: paidPerson,
            expContri: expContri,
            expPrice: expPrice,
        };
        setEXPdetail([...EXPdetail, newExp]);
        handleTotalExpenseChange(newExp.expPrice);
        handleTotalExpenseChange(expense_value     + parseFloat(expPrice) || 0);
        console.log('Request Payload:', newExp);
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/travel-expenses/', newExp, {
              headers: {
                  'Content-Type': 'application/json',
              },
          });
  
          if (!response.ok) {
              throw new Error('Failed to add travel expense');
          }
  
          handleTotalExpenseChange(expense_value + newExp.expPrice);
      } catch (error) {
          console.error('Error adding travel expense:', error.message);
      }
    };

    //Add Person card
    const addPer = async (PersonName, TotalAmount) => {
      const newPer = {
          // id: Date.now(),
          PersonName: PersonName,
          TotalMoney: TotalAmount,
      };
      setPERSONDetail([...PERSONdetail, newPer]);
      handleTotalAmountAddedChange(newPer.TotalMoney);
      handleTotalAmountAddedChange(total_value + parseFloat(newPer.TotalMoney) || 0);
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/persons/', newPer, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        if (!response.ok) {
          throw new Error('Failed to add person');
        }
      
        // Assuming handleTotalAmountAddedChange is correctly updating the state
        handleTotalAmountAddedChange(total_value + parseFloat(newPer.TotalMoney) || 0);
      } catch (error) {
        console.error('Error adding person:', error.message);
      }
  }; 
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/travel-expenses/')
      .then(response =>  setEXPdetail(response.data))
      .catch(error => console.error('Error fetching travel expenses:', error));
  }, []);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/persons/')
      .then(response => setPERSONDetail(response.data))
      .catch(error => console.error('Error fetching persons:', error));
  }, []);
  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/api/split-calculation/')
  //     .then(response => setSplitCalculation(response.data))
  //     .catch(error => console.error('Error fetching split calculation:', error));
  // }, []);

  

  //Expenses Form showning and hiding
    const showForm=()=>{
        setShowvar(true)
        
    }
    const hideform=() =>{
        setShowvar(false)
    }

    //Person Add form showing and hiding
    const showForm2=()=>{
      setShowPerForm(true)
      
  }
  const hideform2=() =>{
    setShowPerForm(false)
  }
  return (<>
  <div className='Poster'>
    <img src= {Banaras} alt='..?'/>
  </div>

  <div className='content'>
  <div className='heading-place'>- {tripname} -</div>
  <div className='Split-content'>
    <div className='Upper-boxs'>
      <div className="budget__title">
          Available Budget:
      </div>
      <div className="budget__value">{average_value}</div>
      <div className="budget__total clearfix">
        <div className="budget__total--text">Total Amount</div>
        <div className="right">
          <div className="budget__total--value">+ {total_value}</div>
        </div>
      </div>
      <div className="budget__expenses clearfix">
        <div className="budget__expenses--text">Total Expenses</div>
        <div className="right clearfix">
          <div clasNames="budget__expenses--value">- {expense_value}</div>
        </div>
      </div>
    </div>
    <div className='Middle-boxs'>
      <div className='All-exp'>
        <h3>- All Expenses- </h3>
        {EXPdetail.map((Exp) => (
          <ExpDetail key={Exp.id} expName={Exp.expName}  expDate={Exp.expDate}  paidPerson={Exp.paidPerson}  expContri ={Exp.expContri}  expPrice={Exp.expPrice} />
        ))}
        
        <AddExp viewform={showForm}/>
        {
            showvar&&<ExpAddForm hideform={hideform} addingExp ={addExp}/>
        }
      </div>

      <div className='Person-box'>
        <h3>- All Persons - </h3>
        {PERSONdetail.map((People) =>(
          <PersonDetail key={People.id}  PersonName={People.PersonName} TotalMoney={People.TotalMoney}  LeftMoney={People.LeftMoney} />
        ))}
        <AddPerson viewPerform={showForm2}/>
        {
          showPerform&&<PersonAddForm hidePerform={hideform2} addingPer = {addPer} />
        }
        {/* <h2>Split Calculation</h2>
      <pre>{JSON.stringify(splitCalculation, null, 2)}</pre> */}
      </div>
    </div>

  </div>




  </div>
  </>
  )
}

export default SplitPage

import React, { useState } from 'react'

function Form({getdata}) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [alert, setAlert] = useState(true);

  const onsubmit = (e) => {
    e.preventDefault();
    if(isNaN(weight) || isNaN(height))
    {
      setAlert(true)
    }else{
      setAlert(false)
      getdata(weight,height);
    }
    
   
  }
  return (
    <>
    <div className='container'>

    
      <form onSubmit={onsubmit}>
        <div className='bmi-form'>
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Weight(kg) :</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Hight(m) :</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>
        <button
         type="submit" className="btn btn-primary bmi-button" >GET BMI</button>
         </div>
      </form>
      { alert ? <div className='alert'>Enter valid data</div>: ''}
      </div>
    </>
  )
}

export default Form
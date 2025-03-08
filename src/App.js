import React, {useState} from 'react';

function BMICalcDemo() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [name, setName] = useState('');

  const calculateBMI = () => {

    var heightSquared=(height/100 * height/100);
    var bmi = weight/heightSquared;

    if(bmi <16)
      window.alert("Hi.."+name+"...You are completely underweight(Severe Thinner)");
    else if(bmi >=16 && bmi <17)
      window.alert("Hi.."+name+"...You are moderatley underweight(Moderate Thinner)");
    else if(bmi >=17 && bmi <18.5)
      window.alert("Hi.."+name+"...You are little underweight(Mild Thinner)");
    else if(bmi >=18.5 && bmi <24.99){
      window.alert("Hi.."+name+"...You are in healthy weight range");
    }
    else if(bmi >=25 && bmi <29.99){
      window.alert("Hi.."+name+"...You are overweight");
    }
    else if(bmi >=30){
      window.alert("Hi.."+name+"...You are in obese");
    }
    else if(bmi<18.5){
    window.alert("Hi.."+name+"...You are under weightt");
    }
    bmi = Math.round
  }

  const submitMessage = (e) => {
    e.preventDefault();
    calculateBMI();
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleHeight = (e) => {
    setHeight(e.target.value);
  }

  const handleWeight = (e) => {
    setWeight(e.target.value);
  }
  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <form onSubmit={submitMessage}>
        <label>Please Enter Your Name</label>
        <input type="text" name="name" value={name} onChange={handleNameChange} />
        <br />
        <br />
        <label>Enter Your Height in cm: </label>
        <input type="text" name="height" value={height} onChange={handleHeight} />
        <br /> <br />
        <label>Enter Your Weight in Kg: </label>
        <input type="text" name="weight" value={weight} onChange={handleWeight} />
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default BMICalcDemo;
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
     super(props);
     this.state = {  weight: "", height: "", bmi: "", message: ''};
     this.submitMe = this.submitMe.bind(this);
     this.heightchange = this.heightchange.bind(this);
     this.weightchange = this.weightchange.bind(this);
     this.change = this.change.bind(this);  
     this.ticker = this.ticker.bind(this); 
     this.blur = this.blur.bind(this); 
     this.calculateBMI = this.calculateBMI.bind(this); 
  }


  heightchange(e){
    this.setState({height: e.target.value});
    e.preventDefault();
  }

  blur(e){
   this.calculateBMI();
  }
   weightchange(e){
    this.setState({weight: e.target.value});
    e.preventDefault();
  }

  calculateBMI(){

      var heightSquared = (this.state.height/100  * this.state.height/100);
      var bmi = this.state.weight / heightSquared;
      var low = Math.round(18.5 * heightSquared);                                                         
      var high = Math.round(24.99 * heightSquared);    
      var message = "";
      if( bmi >= 18.5  && bmi <= 24.99 ){
        message = "Normal weight";
    }
    else if(bmi >= 25 && bmi <= 29.9){
      message = "Overweight";
    }
    else if(bmi >= 30){
        message ="Obesity";
    }
    else if(bmi < 18.5){
      message = "Underweight ";
    }
      this.setState({message: message});  
      this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
      this.setState({bmi: Math.round(bmi * 100) / 100});   

  }

  submitMe(e) {
     e.preventDefault();
     this.calculateBMI();
  }

  ticker() {
    this.setState({time: new Date().toLocaleTimeString()})
  }
 
  componentDidMount(){
    setInterval(this.ticker, 60000);
  }

  change(e){
    e.preventDefault();
    console.log(e.target);
    this.setState({message: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>BMI Calculator</h2>
        </div>
          <form onSubmit={this.submitMe}>
          
             <label>
             Enter your height in cm: 
            </label>
            <input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange}   />
             <label>
             Enter your weight in kg : 
            </label>
            <input type="text" name="weight" value={this.state.weight} onChange={this.weightchange}    />
         
            <input type="submit" value="Submit"/> <br></br><br></br>

            <div className='box'>
            <label>{this.state.checked} 
            
             Your BMI is {this.state.bmi} </label>
              <label>{this.state.message}</label>
              </div>
              <hr></hr>
              <label>{this.state.optimalweight}</label>
             
            
          </form>
      
      </div>
    );
  }
}

export default App;

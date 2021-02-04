import React from 'react';
import ReactDOM from 'react-dom';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isAUthorized: false,
      resData: ''
    };
  }

  componentDidMount(){
    const payLoad = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    }
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(payLoad)

    })
    .then(res=>res.json())
    .then((data)=>{
      this.setState({resData:data.token, isAUthorized:true});
      console.log(data);
    },
    (error) => {
      console.log(error);
      this.setState({
        isAUthorized: false,
        resData: 'No data from server'
      });
    }
    );
  }

  render(){
    return (
      <div>
        <p>The request returned - {this.state.resData}</p>
      </div>
    );
  }
}

ReactDOM.render(
    <HomePage />,
  document.getElementById('root')
);

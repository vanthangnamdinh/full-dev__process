import './App.css';
import Header from "./Header";
import Body from "./body";
import axios from "axios";
import {useEffect} from "react";
function App() {
    const postUser=(user)=> {
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/users',
            data: {user}
        });
    }
    const getUser=()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({persons});
            })
            .catch(error => console.log(error));
    }
    const handleClickSubmit=()=>{

    }
    return (
          <div className="container">
              <Header/>
              <Body/>
        </div>
    );
}

export default App;

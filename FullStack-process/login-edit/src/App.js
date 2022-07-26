import './App.css';
import Header from "./Header";
import Body from "./body";
import { useEffect } from "react";
import axios from "axios";

function App() {
    const postUser=(user)=> {
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/users',
            data: {user}
        });
    }
    
    const getApi=()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                console.log(res);
                this.setState({persons});
            })
            .catch(error => console.log(error));
    }
    useEffect(()=>
        getApi(),[]
    )
    return (
          <div className="container">
              <Header />
              <Body />
        </div>
    );
}

export default App;

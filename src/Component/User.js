import React,{ useState } from 'react';

const name={
    color:"darkmagenta",
    shadow:{opacity: 0.5,color:"red"}
};

const Detail = props =>{
     return(
           <div>
                <div style={{backgroundColor:"lightblue"}}>
                   <h3 style={name.shadow}>name : {props.name}</h3> 
                   <h3 style={name}>test : {props.name}</h3> 
                </div>
           </div>
     );
}

function User(){

    //state for funtion
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    /*-- --*/

    /*const addEntryData = () => {
        setData(oldData => [...oldData,`dataset ${oldData.length} `])
    };*/

    const date = new Date();
    const hours = date.getHours()

    console.log(hours); 

    return(
        <div>
            <h1>user</h1>
           
            <button onClick={() => setCount(count+1)}>Click me</button>
            <h5>{count}</h5>
            <hr/>
            
           <button>dataset</button>

           <div>{data.map(entry =>
                  <div>{entry}</div>
            )}
            </div>

            <Detail name='ram' />
            <Detail name='mack' />
            <Detail name='jim' />
           
        </div>
    );
}




export default User;
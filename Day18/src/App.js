import Box from './component/Box'
import './style.css'


function App(){
    var arr = [];
    for (let index = 0; index < 64; index++) {
        arr[index]=index;
    }
    let even = false;
    return(
        <div className="app">
           <div className="card">
               {
                   arr.map((item,index) =>{
                    if(index%8 === 0 && index!==0)
                    {
                        even = !even;
                    }
                    return <Box index ={index} even={even}/>
                    })
                }
           </div>
        </div>
    );
}


// Export
export default App;
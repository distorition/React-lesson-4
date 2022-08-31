import { useState } from "react"
import { BrowserRouter } from "react-router-dom"

const Routed=()=>{
return(
    <BrowserRouter>
    <div style={{width:'1000px',display:'flex'}}>
<link to='/'> FirstComponent</link>
<link to='component/component1'> SecondComponent</link>
<link to='comp3'> Component3</link>
    </div>

    <div style={{width:'1000px',display:'flex'}}>
        <Routes>
            <Route path="/" element={<SetCollor1/>}></Route>
            <Route path="component">
                <Route path=":ChatId" element={<Chats/>}></Route>
            </Route>

<Route path=":com3" element={<SetCollor2/>}></Route>

        </Routes>
    </div>
    </BrowserRouter>
)
}

const Chats=()=>{

    const{ChatId}=useParams()

    const[components,setChats]=useState([{
        id:'comp1',
        message:["component1"]
    },
    {
        id:'comp2',
        message:["component2","component3"]

    }])

    return(
        <div  style={{height:'50hv',background:'',width:'80%'}}>
            <link to={ '/components/comp1'}> Component1</link>
            <link to={ '/components/comp2'}> Component1</link>
        </div>
    )
}

const SetCollor1=()=><div style={{height:'50hv',background:'',width:'80%'}}>Component1</div>
const SetCollor2=()=><div style={{height:'50hv',background:'',width:'80%'}}>Component3</div>
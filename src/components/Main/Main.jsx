import Card from "./Card/Card";
import "./Main.scss";
import {  data} from "../../helper/data";



const Main =()=>{
return (
    <main>

{
        data.map((item)=>{

            return(
                    <Card item={item}/>
            )
        })
    }
    </main>
)
    
    
   
}
export default Main;
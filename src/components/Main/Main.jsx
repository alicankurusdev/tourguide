import Card from "./Card/Card";
import "./Main.scss";
import {  data} from "../../helper/data";



const Main =()=>{
return (
    <main>

{
        data.map((item,index)=>{
            return(
                    <Card  item={item} key={index}/>
            )
        })
    }
    </main>
)
    
    
   
}
export default Main;
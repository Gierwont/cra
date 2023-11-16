
import { useState } from "react";
function NewItem(props){
    const [Item, NewItem] = useState({
        title: '',
        amount: ''
    })
    const change1 = (e) =>{
        NewItem((prevState) =>
        {return{
            ...prevState, title: e.target.value
        }})
    }
    const change2 = (e) =>{
        NewItem((prevState) =>
        {return{
            ...prevState, amount: e.target.value
        }})
    }
    const Create = () =>{
        props.onSaveInnerData(Item)
    }
    return(
        <div className="flex flex-col ml-[150px]">
            Nazwa<input required onChange={change1} placeholder="Wpisz nazwe" className="bg-transparent border-b-2"></input>
            <br></br>
            Ilość<input required onChange={change2}  placeholder="Wpisz Ilosc" className="bg-transparent border-b-2"></input>
            <br></br>
            <button onClick={Create} className=" rounded bg-slate-500 h-[40px] hover:bg-slate-600">Dodaj</button>

        </div>

    );
}
export default NewItem;
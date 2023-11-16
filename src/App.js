import './App.css';
// import ItemsList from './components/ItemsList';
import NewItem from './components/NewItem';
import Item from './components/item';
import ItemList from './components/Item List';


  // return (
  //   <div>
  //     <h2>APP.JS DZIAŁA</h2>
  //     <ItemsList></ItemsList>
  //     <NewItem></NewItem>
  //   </div>
  // );
    const DUMMY_DATA = [
      {
          id: '1',
          title: 'Toilet Paper',
          amount: 4.12
      },
      {
          id: 'e2',
          title: 'New TV',
          amount: 799.49
      },
      {
          id: '3',
          title: 'Cabbage',
          amount: 8.67
      },
      {
          id: '4',
          title: 'Tomatoes',
          amount: 5.6
      },
    ];
    function App() {
        const SaveInnerDataHandler = (e) => {
            
            console.log(e)
        }

        return(
            <div className='bg-zinc-900 text-white h-screen flex justify-center items-center'>
                <ItemList items={DUMMY_DATA}></ItemList>
                <NewItem onSaveInnerData={SaveInnerDataHandler}></NewItem>
            </div>
        )
    }

export default App;

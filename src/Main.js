import AddPanel from './AddPanel';
import Activities from './Activities';
import Filters from './Filters';
import {useState} from 'react';

function Main(){

    const [listActivity, setListActivity] = useState([]);
    const [listActivityAddOrder, setListActivityAddOrder] = useState([]);

    return(
        <div className='main'>
            <Filters listActivity={listActivity} setListActivity={setListActivity} listActivityAddOrder={listActivityAddOrder} setListActivityAddOrder={setListActivityAddOrder}/>
            <Activities listActivity={listActivity} setListActivity={setListActivity} listActivityAddOrder={listActivityAddOrder} setListActivityAddOrder={setListActivityAddOrder}/>
            <AddPanel listActivity={listActivity} setListActivity={setListActivity} listActivityAddOrder={listActivityAddOrder} setListActivityAddOrder={setListActivityAddOrder}/>
        </div>
    )
};

export default Main;
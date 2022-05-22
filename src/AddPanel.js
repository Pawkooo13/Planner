import {useState} from 'react';

function AddPanel({listActivity, setListActivity, listActivityAddOrder,setListActivityAddOrder}){

    const [activity, setActivity] = useState('');
    const [location, setLocation] = useState('');
    const [deadline, setDeadline] = useState('');
    
    function AddActivity(){
        setListActivity([...listActivity,{activity: activity, location: location, deadline: deadline}]);
        setListActivityAddOrder([...listActivity,{activity: activity, location: location, deadline: deadline}]);
        setActivity('');
        setLocation('');
        setDeadline('');
    }

    return(
        <div className='add-panel'>
            <h1> Add Activity </h1>
            <div className='add-panel-container'>
                <label> Activity: </label>
                <input id='activity' type='text' placeholder='Activity:' value={activity}
                onChange={(e) => setActivity(e.target.value)}/>
                <label> Location: </label>
                <input id='location' type='text' placeholder='Location:' value={location}
                onChange={(e) => setLocation(e.target.value)}/>
                <label> Deadline: </label>
                <input id='deadline' type='date' placeholder='Deadline:' value={deadline}
                onChange={(e) => setDeadline(e.target.value)}/>
                <button type='submit' onClick={AddActivity}> Submit </button>
            </div>
        </div>
    )
};

export default AddPanel;
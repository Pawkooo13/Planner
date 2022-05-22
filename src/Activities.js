import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function Activities({listActivity, setListActivity, listActivityAddOrder,setListActivityAddOrder}){

    return(
        <div className='activities'>
            {listActivity.map((el) => {
                return(
                <div id='element'> 
                    <div id='element-header'> 
                        <HighlightOffIcon id='delete' value={listActivity.indexOf(el)} fontSize='medium' 
                            sx={{ color: 'gray', ":hover" : {color: "red", cursor: "pointer"}}}
                            onClick={() => {
                                setListActivity(listActivity.filter((e) => listActivity.indexOf(e) !== listActivity.indexOf(el)))
                                setListActivityAddOrder(listActivityAddOrder.filter((e) => listActivityAddOrder.indexOf(e) !== listActivityAddOrder.indexOf(el)))
                            }}
                        />
                    </div> 
                    <span> <strong> Activity: </strong> {el.activity} </span>
                    <span> <strong> Location: </strong> {el.location} </span> 
                    <span> <strong> Deadline: </strong> {el.deadline} </span> 
                    <textarea placeholder="Take a notes:"></textarea>  
                </div>
            )})}
        </div>
    )
};

export default Activities;
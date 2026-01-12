import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../store/slices/TodoSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import {updateCompletion} from '../store/slices/TodoSlice'

function Todo(props) {

  
  // console.log(props.total);
  // const [ total , setTotal] = useState(props.total)
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let [totalTask , setTotalTodo] = useState(total)
  // console.log(props.id);

  const incomingTask = props.text;
  
  

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  

 
  // console.log(total);
  // const setCount =()=>{
  //  total = total -1 
  // }

  const handleCompletion =()=>{
    dispatch(
      updateCompletion(props.id)
    )
    
  }


  console.log(props.fromDate);
  console.log(props.toDate);

  const formattedFromDate = new Date(props.fromDate)
  const formattedToDate = new Date(props.toDate)

  const daysLeft = formattedToDate.getDate()- formattedFromDate.getDate()
  console.log(daysLeft);
  
  
  return (
    <>
      <div
        className="container-fluid my-2 "
        style={{ backgroundColor: props.isCompleted? ("#57595bae") : ("#948979"), borderRadius: "6px" }}
      >
        <div className="row justify-content-between  align-items-center">
          <div className="  col-sm-5 col-md-5 col-lg-7  ">
            <p className="h5 mt-2 p-2" style={{ textTransform: "capitalize" , textDecorationLine: props.isCompleted? ('line-through'):(null) }}>
              {incomingTask}
            </p>
            <p className="daysLeft ms-3"  >days-left : <span style={{color:'#ed1919'}}>{daysLeft}</span></p>
            <hr className="p-0 m-0" />
          </div>
          {/* <hr className='p-0 m-0' style={{color: 'white'}} /> */}
          <div className=" col-lg-4   d-flex justify-content-md-end  justify-content-between">
            <button
              onClick={() => {
                navigate(`/updateTodo/${props.id}`);
              }}
              className="btn mx-2 my-2"
              style={{ backgroundColor: props.isCompleted? ("#cfc65b9a") : ("#FBEF76") , height: "40px" }}
            >
              {" "}
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button
              onClick={() => {
                deleteTodo(props.id);
              }}
              className="btn mx-2 my-2"
              style={{ backgroundColor: props.isCompleted? ("#ed3737a8"): ("#FA5C5C") , height: "40px" }}
            >
              {" "}
              <FontAwesomeIcon icon={faTrash} style={{ height: "20px" }} />
            </button>

           
        
            
            
          
           <button className="btn mx-2 my-2" style={{ backgroundColor: props.isCompleted? ( "#50aa46bc"):( "#75B06F") }} onClick={handleCompletion} >
                <input
                  checked={props.isCompleted}
                  readOnly
                  type="checkbox"
                  className="input checkbox"
                  style={{ width: "" }}
                />
                Done
              </button> 
           
              

             

            {/* <button className='btn btn-primary' style={{height}}>
              <input type="checkbox" className='' />
              Done
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../store/slices/TodoSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo(props) {
  console.log(props.total);
  // const [ total , setTotal] = useState(props.total)
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let [totalTask , setTotalTodo] = useState(total)
  // console.log(props.id);

  const incomingTask = props.text;
  
  

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const [done, setDone] = useState(false);

 
  // console.log(total);
  // const setCount =()=>{
  //  total = total -1 
  // }

  return (
    <>
      <div
        className="container-fluid my-2 "
        style={{ backgroundColor: done? ("#57595bae") : ("#948979"), borderRadius: "6px" }}
      >
        <div className="row justify-content-between  align-items-center">
          <div className="  col-sm-5 col-md-5 col-lg-7  ">
            <p className="h5 mt-2 p-2" style={{ textTransform: "capitalize" , textDecorationLine: done? ('line-through'):(null) }}>
              {incomingTask}
            </p>
            <hr className="p-0 m-0" />
          </div>
          {/* <hr className='p-0 m-0' style={{color: 'white'}} /> */}
          <div className=" col-lg-4   d-flex justify-content-md-end  justify-content-between">
            <button
              onClick={() => {
                navigate(`/updateTodo/${props.id}`);
              }}
              className="btn mx-2 my-2"
              style={{ backgroundColor: done? ("#cfc65b9a") : ("#FBEF76") , height: "40px" }}
            >
              {" "}
              <FontAwesomeIcon icon={faPen} />{" "}
            </button>
            <button
              onClick={() => {
                deleteTodo(props.id);
              }}
              className="btn mx-2 my-2"
              style={{ backgroundColor: done? ("#ed3737a8"): ("#FA5C5C") , height: "40px" }}
            >
              {" "}
              <FontAwesomeIcon icon={faTrash} style={{ height: "20px" }} />
            </button>

           
              <button
                className="btn mx-2 my-2"
                style={{ backgroundColor: done? ( "#50aa46bc"):( "#75B06F") }}
               
              >
                <input
                onClick={()=>{
                  setDone(!done)
                  
                  
                  
                }}
                  type="checkbox"
                  
                  className="input checkbox"
                  style={{ width: "" }}
                />{" "}
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

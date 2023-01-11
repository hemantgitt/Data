import axios from "axios";
import React, { useState, useEffect } from "react";

const Data = () => {
  const [newdata, setNewData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setNewData(result.data);
  };

 

  useEffect(() => {
    getData();
  }, []);
  console.log(newdata);
  return (
    <div>
      <button onClick={HandleChange}>CLICK ME</button>
      {
        newData ? "" : "null"
      }
    
    </div>
  );
};

export default Data;

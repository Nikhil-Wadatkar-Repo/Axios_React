import axios from "axios";
import { useEffect, useState } from "react";

function ChildComponent({ name }) {
  const [list, setList] = useState([]);
  const getAllClassAPI = () => {
    axios.get("https://dummyapi.online/api/movies").then((resp) => {
      // console.log("====================================");
      console.log("Response: ", resp.data);
      setList(resp.data);
      // console.log("====================================");
    });
  };
  useEffect(() => {
    console.log("on page load");
    //calling API on page load , use useEffect
    getAllClassAPI();
  }, []);
  return (
    <div>
      <h3>Child Component</h3> : {name}
      <br></br>
      List of classes:
      <br></br>
      {list.map((item, index) => (
        <li>{item.classId}</li>
      ))}
      <br></br>
      <table>
        <thead>
          <th>ID</th>
          <th>Movie</th>
          <th>Rating</th>
          <th>Image</th>
          <th>IMDB</th>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.movie}</td>
              <td>{item.rating}</td>
              <td>{item.image}</td>
              <td>{item.imdb_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ChildComponent;

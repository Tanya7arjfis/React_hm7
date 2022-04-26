import { useState, useEffect } from "react";
import  {fetchUsers}  from "../service/service";

export default function useUsersList() {
  const [list, setList] = useState([])
  useEffect(() => {
    fetchUsers().then(({data}) => setList(data))
  }, [])
  
  return {list}
}
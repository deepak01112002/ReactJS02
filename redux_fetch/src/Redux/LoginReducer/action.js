import axios from "axios";


export const LoginFetch = (dispatch,email,password,navigate)=>{
    dispatch({ type: "LOADING" });
    axios
      .get(`http://localhost:3000/users?email=${email}`)
      .then((Res) => {
        
        if(Res.data[0].password == password){
            dispatch({ type: "SUCCESS" ,payload : Res.data[0].username});
            navigate("/")
           
        }else{
            alert("Wrong Password")
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR" });
      });
}
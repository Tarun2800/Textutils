import { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  const [mode,setMode]= useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },1000);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has be enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has be enabled", "success");


    }
  }
  return (
    <>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform  showAlert={showAlert} heading="Enter the text analyze below!" mode={mode}/>
    {/* <button btn btn-primary></button> */}
    </div>
    </>
  );
}

export default App;

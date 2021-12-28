 import './App.css';
import Header from './Components/Layout/Header/Header';
import {Provider} from "react-redux"
import store from "./Components/Store/Store"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
  
   <Header/>
    </div>
    </Provider>
  );
}

export default App;

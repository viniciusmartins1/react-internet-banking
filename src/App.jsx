import Routes from "./components/Routes";
import './assets/styles/_reset.css';

import Loading from "./components/Layout/Loading";
import { useSelector } from 'react-redux'


function App(props) {

  const showLoading = useSelector(state => state.reducerApp.showLoading);
  
  return (
    <>
      <Routes />  
      { showLoading ? <Loading /> : null }
    </>
  );
}

export default App;

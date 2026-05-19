import 'react-photo-view/dist/react-photo-view.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Root from './Router/Root';


function App() {

  return (
    <div>
        <Root/>
        <ToastContainer/>
    </div>
  )
}

export default App

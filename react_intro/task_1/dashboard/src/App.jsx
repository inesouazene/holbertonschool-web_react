import holbertonLogo from './assets/holberton-logo.jpg';
import './App.css';
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  const currentYear = getCurrentYear();

  return (
    <>
    <div className='root-notification'>
      <Notifications />
    </div>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {currentYear} - {getFooterCopy(false)}</p>
      </div>
    </>
  );
}

export default App;

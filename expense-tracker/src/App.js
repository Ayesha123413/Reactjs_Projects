import './App.css'
import Addtransaction from './components/Addtransaction/Addtransaction'
import Balance from './components/Balance/Balance'
import Header from './components/Header/Header'
import IncExp from './components/IncExp/IncExp'
import Transaction from './components/Transaction/Transaction'
import { GlobalProvider } from './components/Context/GlobalState.jsx'
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncExp />
        <Transaction />
        <Addtransaction />
      </GlobalProvider>
    </div>
  )
}

export default App

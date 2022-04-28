import './App.css'
import { Greet } from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name="Mohammed" />
      <Greet name="Aabid" />
      <Greet name="A">
        <p>This is children props</p>
      </Greet>
    </div>
  )
}

export default App

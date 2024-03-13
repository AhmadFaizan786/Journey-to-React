
import './App.css'
import Bye  from './Components/Bye'
import Hello from './Components/Hello'
import Info from './Components/Info'
import Cars from './Components/Cars'
import Fruits from './Components/Fruits'

function App() {

  return (
    <>
      <Hello/>
      <Bye/>
      <Info name = 'Faizan' No = '1234567890' email = 'faizan@gmail.com' />
      <Info name = 'Divyam' No = '1234567890' email = 'Divyam@gmail.com' />
      <Info name = 'Adnan' No = '1234567890' email = 'Adnan@gmail.com' />
      <Info name = 'Aditya' No = '1234567890' email = 'Aditya@gmail.com' />
      <Cars/>
      <Fruits/>
    </>
  )
}

export default App

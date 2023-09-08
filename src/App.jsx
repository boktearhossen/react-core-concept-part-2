
import './App.css'
import Counter from './setCounter'
import Team from './team'
import Users from './useEffect'
import Friends from './friends'


function App() {
  function handleClick(){
    alert ('hello react')
  }
  const handleClick2 = () => {
    alert('hello react 2')
  }
  const addFive =(num) => {
    alert (num + 5)
  }
 
  return (
    <>

      <h3>Vite</h3>
       <Friends></Friends>
      {/* <Users></Users> */}
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me</button>
      <button onClick={() => alert('third click')}>third</button>
      <button onClick={() => addFive(6)}>third</button>
    </>
  )
}


export default App

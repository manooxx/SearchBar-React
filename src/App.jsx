import Home from "./pages/Home"
import BookData from "./Data.json"

function App() {


  return (
    <>
      <Home placeholder="Enter the Book name" data={BookData}/>
    </>
  )
}

export default App

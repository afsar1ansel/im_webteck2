import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Vision from './components/Vision'
import About from './components/About'
import Mission from './components/Mission'
import { Box } from '@chakra-ui/react'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Box position={"relative"} bottom={"80px"} >
        <Vision />
        <Mission />
        <About />
        <Contact />
      </Box>

    </>
  );
}

export default App

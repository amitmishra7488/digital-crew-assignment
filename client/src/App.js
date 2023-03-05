
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import socket from 'socket.io-client'
import AllRoutes from './Routes/AllRoutes';


function App() {

  useEffect(() => {
    const io = socket('http://localhost:8080');
    io.on('connect', () => {
      console.log('Connected to server');
    })

    io.on('product_create', (data) => {
      console.log(data)
      const {title}=data
      alert(`New Product Created Title: ${title}`)
    })

    io.on('product_delete', (data) => {
      console.log(data)
      const {title}=data
      alert(`One Product Deleted Title: ${title}`)
    })

    io.on('disconnect', () => {
      console.log('Disconnected from server');
    })

    return () => io.disconnect();

   }, [])

  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;

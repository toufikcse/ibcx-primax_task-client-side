import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './App.css';
import { Home } from './components/Home/Home';


function App() {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      <Home ref={componentRef} />
      <button style={{color: 'green', backgroundColor: 'yellow'}} onClick={handlePrint}>Print this out!</button>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Update from './components/update';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import AddQuote from './component/AddQuote';
import SearchQuote from './component/SearchQuote';
import DeleteQuote from './component/DeleteQuote';
import ViewAll from './component/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddQuote/>}/>
        <Route path='/search' element={<SearchQuote/>}/>
        <Route path='/delete' element={<DeleteQuote/>}/>
        <Route path='/view' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

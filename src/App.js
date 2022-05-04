import { Routes, Route } from 'react-router-dom';
import './App.css';
import BookList from './components/BookList';
import Category from './components/Category';
import FormList from './components/FormList';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <FormList />
    </>
  );
}

export default App;

import './App.css';
import BookList from './components/BookList';
import Books from './components/Books';
import Category from './components/Category';
import FormList from './components/FormList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Books />
      <BookList />
      <FormList />
      <Category />
    </div>
  );
}

export default App;

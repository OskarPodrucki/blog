import logo from './logo.svg';
import './App.css';

function App() {
  const title = "Welcome to the new blog"
  const likes = 50
  const person = { name: 'oskar', age: 16}
  const link = "https://github.com/OskarPodrucki"
  
  return (
    <div className="App">
      <h1>{ title }</h1>
      <p>Liked { likes } times</p>
      <p>{ person.name }</p>
      <p>Age: { 16 }</p>
      <p>{ 'nosiema' }</p>
      <p>{ [1,2,3,4,5] }</p>
      <p>{ Math.random() * 10}</p>

      <a href="https://github.com/OskarPodrucki">moj github pozdro</a> <br></br>
      <a href={ link }>link alternatywny pzodro</a>
    </div>
  );
}

export default App;

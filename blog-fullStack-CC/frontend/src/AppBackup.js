// Code 1
import './App.css';

function App() {
  const title = 'Welcome to my web page';
  const likes = 43;
  const person = {name: 'Hiba', age:25};
  const link = 'http://www.google.com';
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{/*person*/}</p>
        <p>{person.age}</p>
        <p>{20}</p>
        <p>{"Hello world!"}</p>
        <p>{[1, 2, 3, 4, 5, 6]}</p>
        <p>{Math.random()*10}</p>
        <a href={link} target='_blank'>Google site</a>
      </div>
    </div>
  );
}

export default App;

// Code 2

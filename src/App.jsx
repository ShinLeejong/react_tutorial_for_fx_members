import "./app.css"
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
// import { axios } from 'axios';

async function App() {

  // const something = await axios.get('https://jsonplaceholder.typicode.com/todos/40');

  // console.log(something);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

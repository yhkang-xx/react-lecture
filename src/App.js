import './App.css';
import Hello from './component/Hello';

function App() {
    return (
        <div className="App">
            <h3>1. state</h3>
            <h2>2. props: properties</h2>
            <Hello age={10} />
            <Hello age={20} />
            <Hello age={30} />
        </div>
    );
}

export default App;

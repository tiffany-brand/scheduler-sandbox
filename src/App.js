import './App.css';
import { Container, Typography } from '@material-ui/core';
import Schedule from './components/Schedule/Schedule';

function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant="h1" >Scheduler Sandbox</Typography>
        <Schedule />
      </Container>
    </div>
  );
}

export default App;

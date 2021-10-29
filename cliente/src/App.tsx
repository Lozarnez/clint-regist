import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import Form from 'components/Form';
import Evaluation from 'components/Evaluation';
import SubjectList from 'components/SubjectList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SubjectList} />
        <Route exact path="/formulario" component={Form} />
        <Route exact path="/lista-prospectos" component={SubjectList} />
        <Route exact path="/evaluacion/:id" component={Evaluation} />
      </Switch>
    </Router>
  );
}

export default App;

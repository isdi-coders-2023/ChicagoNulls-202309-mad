import { ApiRepo } from '../../services/api.repo';
import './app.scss';

function App() {
  const newApiRepo = new ApiRepo();
  console.log(newApiRepo.getClasses());
}

export default App;

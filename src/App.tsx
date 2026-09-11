import { Home } from './lib/components/Home/Home.tsx';
import { PageLayout } from './lib/layouts/PageLayout.tsx';
import './App.css';

function App() {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
}

export default App;

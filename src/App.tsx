import { Home } from './lib/components/Home/Home.tsx';
import { PageLayout } from './lib/layouts/PageLayout.tsx';
import './App.scss';

function App() {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
}

export default App;

import { Home } from './lib/components/Home/Home.tsx';
import { Preview } from './lib/components/Preview/Preview.tsx';
import { PageLayout } from './lib/layouts/PageLayout.tsx';
import './App.css';

function App() {
  return (
    <PageLayout>
      <Home />
      <Preview />
    </PageLayout>
  );
}

export default App;

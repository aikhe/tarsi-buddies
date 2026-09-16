import { Home } from './lib/components/Home/Home.tsx';
import { Preview } from './lib/components/Preview/Preview.tsx';
import { Features } from './lib/components/Features/Features.tsx';
import { Cards } from './lib/components/Cards/Cards.tsx';
import { Gallery } from './lib/components/Gallery/Gallery.tsx';
import { Buddies } from './lib/components/Buddies/Buddies.tsx';
import { Rawr } from './lib/components/Rawr/Rawr.tsx';
import { Fall } from './lib/components/Fall/Fall.tsx';
import { Footer } from './lib/components/Footer/Footer.tsx';
import {
  SCREEN_BLOCK_MEDIA_QUERY,
  ScreenBlock,
} from './lib/components/ScreenBlock/ScreenBlock.tsx';
import { PageLayout } from './lib/layouts/PageLayout.tsx';
import { useLenis } from './lib/utils/use-lenis.ts';
import { useMediaQuery } from './lib/utils/use-media-query.ts';
import './App.css';

function App() {
  useLenis();
  const isSmallScreen = useMediaQuery(SCREEN_BLOCK_MEDIA_QUERY);

  if (isSmallScreen) {
    return <ScreenBlock />;
  }

  return (
    <PageLayout>
      <Home />
      <Preview />
      <Features />
      <Cards />
      <Gallery />
      <Buddies>
        <Rawr />
      </Buddies>
      <Fall />
      <Footer />
    </PageLayout>
  );
}

export default App;

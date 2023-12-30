import { Footer, Header, Meta } from '@/common/components';

import { AppConfig } from '../../utils/AppConfig';
import { VerticalFeatures } from './components';

const Home = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <VerticalFeatures />
    <Footer />
  </div>
);

export { Home };

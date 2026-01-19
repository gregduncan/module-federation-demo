import { version } from 'react';

import Catalogue from './catalogue';
import { VersionBadge } from './styles';

function App() {
  return (
    <>
      <VersionBadge>React v{version}</VersionBadge>
      <Catalogue />
    </>
  );
}

export default App;

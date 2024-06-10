import React from 'react';
import Container from './components/Container';

const App = () => {
  return (
    <Container title="Click me to collapse or expand">
      <p>This is some content inside the container.</p>
      <p>Here is some more content.</p>
    </Container>
  );
};

export default App;
import React from 'react';

import { Modal } from 'react-moda11y';

const App = () => {
  return (
    <Modal.Container close={() => false}>
      <Modal.Header align='left'>
        <h3>Testing Headline</h3>
      </Modal.Header>
      <Modal.Content>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          voluptates repellendus architecto delectus placeat fugiat blanditiis
          eos dolor nemo aliquid mollitia sapiente voluptate et illum, totam
          ipsum voluptatem a voluptas.
        </p>
      </Modal.Content>
      <Modal.Footer>
        <button>Just some button</button>
      </Modal.Footer>
    </Modal.Container>
  );
};

export default App;

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from './form';

describe('Given FormCharacter component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Form></Form>);
    });
  });
});

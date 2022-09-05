import { render } from '@testing-library/react';

import DateText from './date-text';

describe('DateText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DateText />
    );
    expect(baseElement).toBeTruthy();
  });
});

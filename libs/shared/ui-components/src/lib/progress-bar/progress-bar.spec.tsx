import { render } from '@testing-library/react';

import ProgressBar from './progress-bar';

describe('ProgressBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProgressBar barWidth={160} percents={20} />
    );
    expect(baseElement).toBeTruthy();
  });
});

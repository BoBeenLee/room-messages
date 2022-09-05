import { render } from '@testing-library/react';

import AppBar from './app-bar';

describe('AppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AppBar>
        <AppBar.Content>test</AppBar.Content>
      </AppBar>
    );
    expect(baseElement).toBeTruthy();
  });
});

import { identity } from '@room-messages/shared-utils';
import { render } from '@testing-library/react';

import IconButton from './icon-button';

describe('IconButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <IconButton name="close" onClick={identity} />
    );
    expect(baseElement).toBeTruthy();
  });
});

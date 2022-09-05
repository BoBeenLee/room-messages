import { images } from '@room-messages/shared/interfaces';
import { render } from '@testing-library/react';

import Profile from './profile';

describe('Profile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Profile source={images.profile} />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { PostComponent } from './Post';

describe('Component Post', () => {
  const testPost = {
    id: '1',
    title: 'Rent an apartment',
    author: 'Thomas Scott',
    publicationDate: 'Jun 17, 2022, 10:00 AM',
    actualizationDate: 'Jun 17, 2022, 10:00 AM',
    status: 'Closed',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut consectetur felis. Maecenas feugiat nisl vitae sem venenatis iaculis. Aenean quis enim maximus, elementum libero vel, posuere massa. Praesent ut ligula eu nisl condimentum pulvinar volutpat vitae tortor. Praesent hendrerit, massa vel suscipit mattis, quam nisl ultrices nisi, quis porttitor elit dolor interdum nisl.',
  };

  const testUser = {
    name: 'Amanda',
    logged: true,
    position: 'Admin',
  };
  it('should render without crashing', () => {
    const component = shallow(
      <PostComponent user={testUser} post={testPost} />
    );
    expect(component).toBeTruthy();
  });
});

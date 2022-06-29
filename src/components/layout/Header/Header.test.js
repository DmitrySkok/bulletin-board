import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from './Header';

describe('Component Header', () => {
  const testUser = {
    name: 'Amanda',
    logged: true,
    position: 'Admin',
  };
  it('should render without crashing', () => {
    const component = shallow(<HeaderComponent user={testUser} />);
    expect(component).toBeTruthy();
  });
});

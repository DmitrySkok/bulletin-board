import React from 'react';
import { shallow } from 'enzyme';
import { MainMenuComponent } from './MainMenu';

describe('Component MainMenu', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainMenuComponent />);
    expect(component).toBeTruthy();
  });
});

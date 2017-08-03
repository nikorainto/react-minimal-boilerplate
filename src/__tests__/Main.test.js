import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Main from '../containers/Main';

describe('<Main />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
  });

  it('renders 1 <Main /> component', () => {
    const component = shallow(<Main name="Main" />);
    expect(component).toHaveLength(1);
  });

  describe('it confirms that state is changed after delay', () => {
    const fruits = ['banana', 'apple', 'orange', 'vodka', 'kiwi'];
    jest.useFakeTimers();

    const component = mount(<Main />);
    expect(component.state().fruits).toEqual(null);

    setTimeout(() => {
      expect(component.state().fruits).toEqual(fruits);
    }, 1500);
    jest.runAllTimers();
  });
});
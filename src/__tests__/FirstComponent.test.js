import React from 'react';
import { shallow } from 'enzyme';
import FirstComponent from '../components/FirstComponent';
import renderer from 'react-test-renderer';

describe('<FirstComponent /> dom', () => {
    it('renders without exploding', () => {
        expect(shallow(<FirstComponent />).length).toEqual(1);
    });
});

describe('<FirstComponent /> functions', () => {
    it('test the only function', () => {
        const wrapper = renderer.create(<FirstComponent />);
        const inst = wrapper.getInstance();
        expect(inst.sayMyName('orange')).toMatchSnapshot();
    });
})
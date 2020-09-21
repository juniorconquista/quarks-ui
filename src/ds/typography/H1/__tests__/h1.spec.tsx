import React from 'react';
import renderer from 'react-test-renderer';
import H1 from '../H1';

describe('', () => {
    it('it works', () => {
        const tree = renderer.create(<H1 />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

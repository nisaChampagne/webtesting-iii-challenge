// Test away

import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {

    ///snapshot of component
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />); // generates a DOM tree
    
        // snapshots are a JSON representation of the DOM tree
        expect(tree.toJSON()).toMatchSnapshot();
      }); 

///renders controls and display for unlock, lock gate, open and close gate
    it('should render controls & display',() => {
        const { getByText } = render(<Dashboard />)
        getByText(/unlocked/i)
        getByText(/lock gate/i)
        getByText(/open/i)
        getByText(/close gate/i)
    })
})
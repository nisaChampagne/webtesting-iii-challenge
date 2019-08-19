// Test away!
import React from 'react'
import { render, fireEvent } from '@testing-library/react'///for other renders
import 'jest-dom/extend-expect'/// to access expect without getting test fails
import renderer from 'react-test-renderer'/// for snapshot renderer
import Controls from './Controls'///import component needed

describe('<Control />', () => {
///snapshot of component
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />); // generates a DOM tree
    
        // snapshots are a JSON representation of the DOM tree
        expect(tree.toJSON()).toMatchSnapshot();
      });


    //btn render for closed and locked
    it('should render btn to toggle closed and locked states', ()=>{
      const { getByText } = render(<Controls/>)
      getByText(/close gate/i)
      getByText(/lock gate/i)
    })

    ///disable lock/unlock btn when open
    it(' should disble lock/unlock btn when open', ()=>{
      const { getByText } = render(<Controls closed={false} />)
      const btn = getByText(/lock gate/i)
      expect(btn).toBeDisabled();
    })
    
    ///disable open/close btn when locked
    it('should disable open/close btn when locked', ()=>{
        const {getByText} = render(<Controls locked={true} />)
        const btn = getByText(/close gate/i)
        expect(btn).toBeDisabled()
    })
    
    //toggleClosed to change on btn click
    it(' should toggleClosed change on btn click', ()=>{///mocking
        const toggleClosed = jest.fn();////toggleClosed is my mock in this case
        const { getByText } = render(<Controls toggleClosed={toggleClosed}/>) ///passing toggleClose as a prop to my Controls component
        //testing wise
        const btn = getByText(/close gate/i)
        fireEvent.click(btn)
        expect(toggleClosed).toBeCalledTimes(1)
    })
})
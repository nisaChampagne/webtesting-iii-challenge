// Test away!
import React from 'react'
import renderer from 'react-test-renderer'/// for snapshot
import { render } from '@testing-library/react'/// for others
import 'jest-dom/extend-expect'///so i can use expect without failed test
import Display from './Display'///importing component needed for testing

describe('<Display />', ()=>{
///snapshot of component
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />); // generates a DOM tree
    
        // snapshots are a JSON representation of the DOM tree
        expect(tree.toJSON()).toMatchSnapshot();
      });


   ///red-led
    it('should display red-led while locked', () => {
        const component = render(<Display closed={true} locked={true}/>)
        const display = component.getByText('Locked')
        expect(display).toHaveClass('red-led')
    })

    //green-led
    it('should display green-led while unlocked', () => {
        const component = render(<Display closed={true} locked={false}/>)
        const displaygreen = component.getByText('Unlocked')
        expect(displaygreen).toHaveClass('green-led')
    })

    ///locked when locked
    it('should display locked while locked', () => {
        const component = render(<Display closed={true} locked={true}/>)
        component.getByText('Locked')
    })


    ///unlocked when locked
    it('should display unlocked while unlocked', () => {
        const component = render(<Display closed={true} locked={false}/>)
        component.getByText('Unlocked')
    })

    ///red-led when closed
    it('should display red-led when closed', () => {
        const component = render(<Display closed={true} locked={false}/>)
        const displayclosed = component.getByText('Closed')
        expect(displayclosed).toHaveClass('red-led')
    })

    ///green-led when closed
    it('should display green-led while open', () => {
        const component = render(<Display closed={false} locked={false}/>)
        const displayopen = component.getByText('Open')
        expect(displayopen).toHaveClass('green-led')
    })
})
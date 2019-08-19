// Test away

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Dashboard from './Dashboard'

describe('Dashboard test', () => {
    it('should render controls & display',() => {
        const { getByText } = render(<Dashboard />)
        getByText(/unlocked/i)
        getByText(/lock gate/i)
        getByText(/open/i)
        getByText(/close gate/i)
    })
})
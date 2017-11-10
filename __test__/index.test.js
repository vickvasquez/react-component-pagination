import React from 'react'
import renderer from 'react-test-renderer'
import Pagination from '../build'

it('It renderer without errors', () => {
    const component = renderer.create(<Pagination
        page={1}
        pages={10}
        onClick={page => console.log(page)}
    />)

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
})

import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationtItems from './NavigationItems'
import NavigationtItem from './NavigationItem/NavigationItem'

configure({adapter: new Adapter()})

describe('<NavigationItems />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<NavigationtItems />)
    })
    it('should render two <NacigationItem /> element if not authenticated', () => {
        expect(wrapper.find(NavigationtItem)).toHaveLength(2)
    })
    it('should render three <NacigationItem /> element if  authenticated', () => {
        // wrapper = shallow(<NavigationtItems isAuthenticated />)
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationtItem)).toHaveLength(3)
    })
    it('should render three <NacigationItem /> element if  authenticated', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationtItem link="/logout">Logout</NavigationtItem>)).toEqual(true)
    })
})
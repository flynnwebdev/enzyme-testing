import React from 'react'
// import { render } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
})

it('renders increment button', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('button').text()).toBe('Increment')
})

it('starts counter at 0', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toContain('The count is 0')
})

it('clicking button increments counter', () => {
  const wrapper = shallow(<App />)
  wrapper.find('button').simulate('click')
  expect(wrapper.find('h1').text()).toContain('The count is 1')
})

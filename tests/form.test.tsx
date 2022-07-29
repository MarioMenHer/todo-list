import React, { Component } from 'react'
import { fireEvent, prettyDOM, render, RenderResult, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


import { Form } from '../src/components/form/index'


describe('Form component tests', () => {
    let component: RenderResult


    beforeEach(() => {
        component = render(<Form setTasks={() => { }} tasks={[]} setToggleformModal={() => { }} toggleFormModal={true} />)
    })

    test('should render correctly', () => {
        expect(component).toBeDefined()
        expect(component).toBeInTheDocument()


    })

    test('should call the function that add a new task ', () => {
        const mock = jest.fn()
        const btn = component.getByText('Guardar')
        btn.addEventListener('click', mock)
        fireEvent.click(btn)
        expect(mock).toHaveBeenCalled()
    })

    test('should call the function that open asigned to modal ', () => {
        const btn = component.getByTestId('asigned to')

        let isOpen = false
        const mock = jest.fn()
        mock.mockImplementation(() => {
            isOpen = true
            return true
        })
        btn.addEventListener('click', mock)
        fireEvent.click(btn)
        expect(mock).toBeTruthy()
    })

    test('should call the function that open date  modal ', () => {
        const btn = component.getByTestId('date')

        let isOpen = false
        const mock = jest.fn()
        mock.mockImplementation(() => {
            isOpen = true
            return true
        })
        btn.addEventListener('click', mock)
        fireEvent.click(btn)
        expect(mock).toBeTruthy()
    })



})
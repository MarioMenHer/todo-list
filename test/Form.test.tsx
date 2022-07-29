import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react'
import { Form } from "../src/components/form";

describe('Form components', () => {
    let component: RenderResult
    const mock = jest.fn();

    beforeEach(() => {      
        component = render(<Form onSubmit={mock}/>)
    })

    test('should Form render correctly', () => {
        expect(component).toBeDefined()
    })

    test('should click correctly', () => {
        const btn = component.getByText('Guardar')

        btn.addEventListener('click', mock)
        fireEvent.click(btn)

        expect(mock).toBeCalled();
    })

    test('should clean correctly', () => {
        const btn = component.getByText('Cancelar')
        const input = component.getByPlaceholderText('Titulo de tarea...')
        const textarea = component.getByPlaceholderText('Descripcion de la tarea...')
        input.setAttribute('value', 'hola')
        textarea.setAttribute('value', 'hola')
        
        const mock = jest.fn();
        mock.mockImplementation(()=>{
            input.setAttribute('value', '')
            textarea.setAttribute('value', '')
        })
        
        btn.addEventListener('click', mock)
        fireEvent.click(btn)        

        expect(mock).toBeCalled();
        expect(input.getAttribute('value')?.length).toBeLessThanOrEqual(0);
        expect(textarea.getAttribute('value')?.length).toBeLessThanOrEqual(0);
    })
})
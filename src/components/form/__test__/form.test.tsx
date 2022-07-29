import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import { Form } from '..'
import '@testing-library/jest-dom/extend-expect';

describe('Pruebas componente filter', () => {
    
    it('Se renderiza correctamente', ()=>{
        render(<Form onSubmit={() => {}}/>)
    })

    it('Existe el input para el titulo de la tarea', ()=>{
        render(<Form onSubmit={() => {}}/>)
        expect(screen.getByTestId('titleTask')).toBeTruthy()
    })
    
    it('Existe el input para la descripcion de la tarea', ()=>{
        render(<Form onSubmit={() => {}}/>)
        expect(screen.getByTestId('descriptionTask')).toBeTruthy()
    })
    
    it('Existe el input para el responsable de la tarea', ()=>{
        render(<Form onSubmit={() => {}}/>)
        expect(screen.getByLabelText('assignedTask')).toBeTruthy()
    })

    it('Existe el input para la fecha de la tarea', ()=>{
        render(<Form onSubmit={() => {}}/>)
        expect(screen.getByPlaceholderText('Due Date')).toBeTruthy()
    })

    it('Cambia el valor del Select de responsable de tarea', ()=>{
        render(<Form onSubmit={() => {}}/>)

        expect(screen.getByText("Assign To")).toBeTruthy()
     
        fireEvent.change(screen.getByLabelText('assignedTask'), {
            target: { value: "Carlos Mendoza" },
        });

        expect(screen.getByText("Carlos Mendoza")).toBeTruthy()
    }) 
    
    it('Cambia el valor del Input de titulo de tarea', ()=>{
        render(<Form onSubmit={() => {}}/>)

        expect(screen.getByTestId('titleTask')).toHaveValue('')
     
        fireEvent.change(screen.getByTestId('titleTask'), {
            target: { value: "Titulo test" },
        });

        expect(screen.getByTestId('titleTask')).toHaveValue('Titulo test')
    }) 
    
    it('Cambia el valor del Input de descripcion de tarea', ()=>{
        render(<Form onSubmit={() => {}}/>)

        expect(screen.getByTestId('descriptionTask')).toHaveValue('')
     
        fireEvent.change(screen.getByTestId('descriptionTask'), {
            target: { value: "Descripcion test" },
        });

        expect(screen.getByTestId('descriptionTask')).toHaveValue('Descripcion test')
    }) 
    
    it('Cambia el valor del Input de decha de tarea', ()=>{
        render(<Form onSubmit={() => {}}/>)

        expect(screen.getByPlaceholderText('Due Date')).toHaveValue('')
     
        fireEvent.change(screen.getByPlaceholderText('Due Date'), {
            target: { value: "4 January, 2022" },
        });

        expect(screen.getByPlaceholderText('Due Date')).toHaveValue('4 January, 2022')
    })    
})
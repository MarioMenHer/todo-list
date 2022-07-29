import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import { Filter,  Selection } from '../filter'
import '@testing-library/jest-dom/extend-expect';

describe('Pruebas componente filter', () => {
    
    it('Se renderiza correctamente', ()=>{
        render(<Filter onChangeSelection={() => {}} filterSelection={{label: 'Prueba', value: 'test'}}/>)
    })

    it('Contiene el Texto (label) pasado por props al renderizarse', ()=>{
        render(<Filter onChangeSelection={() => {}} filterSelection={{label: 'Prueba', value: 'test'}}/>)

        expect(screen.getByText('Prueba')).toBeTruthy()
    })
    
    it('Cambia el valor de Todas a Completadas', ()=>{
        const filterSelection ={ label: 'Todas', value: 'all'}
        const onChange = (filterSelection: Selection) => {
            filterSelection = {...filterSelection}
        }
        render(<Filter onChangeSelection={onChange} filterSelection={filterSelection}/>)

        expect(screen.getByText("Todas")).toBeTruthy()
     
        fireEvent.change(screen.getByLabelText("optionSelect"), {
            target: { value: "completed" },
        });

        expect(screen.getByText("Completadas")).toBeTruthy()
    })   
})
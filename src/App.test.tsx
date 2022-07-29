import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import App from './App';
import '@testing-library/jest-dom/extend-expect';

describe('Pruebas de la App', () => {
    
    it('Se renderiza correctamente', ()=>{
        render(<App/>)
    })  
})


import { useState } from 'react';
import Select from 'react-select'

const optionsSupplier: Selection[] = [
    { label: 'Todas', value: 'all'},
    { label: 'Completadas', value: 'completed'},
    { label: 'Pendientes', value: 'ongoing'}
]

const style = {
    control: (base : any) => ({
      ...base,
      border: 0,
      color: 'violet',
      boxShadow: 'none'
    })
}

export interface Selection{
    label: string, 
    value: string
}

interface FilterProps {
    onChangeSelection: (filterSelection: Selection) => void;
    filterSelection: Selection;
}

export const Filter = (props: FilterProps) =>{
    const {onChangeSelection} = props;
    const {filterSelection} = props;

    return(
        <div className="flex h-15 space-x-10 border-b border-b-gray-200 p-3">
            <p className="my-auto">Tareas</p>
            <div className='flex'>
                <label className='my-auto'>Mostrar:</label>
                <Select
                    aria-label="optionSelect"
                    styles={style}
                    defaultValue={filterSelection}
                    className="w-40 text-center rounded-md"
                    options={ optionsSupplier }
                    onChange={ (event: any) =>  onChangeSelection(event) }
                />
            </div>
        </div>
    );
}
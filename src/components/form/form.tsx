import { FormikProps, FormikValues, useFormik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonIcon from '@material-ui/icons/Person';
import { Modal } from '@material-ui/core';
import { motion } from 'framer-motion';


import { TaskData } from '../task';
import { JsxEmit } from 'typescript';

const defaultData: TaskData = {
  title: '',
  description: '',
  assignedTo: '',
  completed: false,
};

interface FormProps {
  setTasks: Dispatch<SetStateAction<TaskData[]>>,
  tasks: TaskData[],
  toggleFormModal: boolean
  setToggleformModal: Dispatch<SetStateAction<boolean>>
}

export const Form = (props: FormProps) => {
  const {
    setTasks,
    tasks,
    toggleFormModal,
    setToggleformModal
  } = props;

  const [toggleAsignedModal, setToggleAsignedModal] = useState<boolean>(false);
  const [toggleDateModal, setToggleDateModal] = useState<boolean>(false);

  const [isErr, setIsErr] = useState<boolean>(false);

  const handleAdd = () => {
    const localStorageTasks = localStorage.getItem('tasks')

    if (formik.values.title.length > 0 && formik.values.description.length) {
      setTasks([...tasks, formik.values])

      if (localStorageTasks) {
        const storageTasks: TaskData[] = JSON.parse(localStorageTasks)
        storageTasks.push(formik.values)
        localStorage.removeItem('tasks')
        localStorage.setItem('tasks', JSON.stringify(storageTasks))
      } else {
        localStorage.setItem('tasks', JSON.stringify([formik.values]))
      }
      setToggleformModal(!toggleFormModal)
      setIsErr(false)
      formik.handleReset()
    } else {
      setIsErr(true)
    }
  }

  const handleCancel = () => {
    formik.handleReset()
    setToggleformModal(false)
  }

  const formik: FormikProps<TaskData> = useFormik<TaskData>({
    initialValues: {
      title: '',
      description: '',
      assignedTo: '',
      createdAt: '',
      completed: false
    },
    onSubmit: handleAdd
  });

  return (

    <Modal
      data-testid='todo-1'
      className='flex justify-center items-center'
      open={toggleFormModal}
      onClose={() => setToggleformModal(!toggleFormModal)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >

      <div className="bg-white shadow-lg  rounded-2xl p-5 w-1/2" data-testid='divp'>

        <input
          value={formik.values.title}
          placeholder="Titulo de tarea..."
          className="w-full"
          onChange={formik.handleChange}
          name='title'
          required
        />


        < textarea
          value={formik.values.description}
          placeholder="Descripcion de la tarea..."
          className={`w-full mt-5 `}
          name='description'
          onChange={formik.handleChange}
        />


        <div className=' flex justify-between mt-5'>

          <div className="flex justify-end space-x-2">

            <button
              className="bg-gray-100 text-gray-500 py-1 px-4 border border-gray-200 rounded-md flex justify-center items-center"
              onClick={() => setToggleDateModal(true)}
              data-testid='date'
            >
              <CalendarTodayIcon fontSize='small' />
            Due Date
            </button>


            {/* Date modal */}
            <Modal
              className='flex justify-center items-center'
              open={toggleDateModal}
              onClose={() => setToggleDateModal(!toggleDateModal)}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <motion.div
                className='bg-slate-100 rounded-3xl p-4 w-auto flex items-center flex-col gap-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ delay: .3 }}

              >
                <label className='text-purple-700 font-thin'>Asigna esta tarea a fecha</label>
                <input
                  type="date"
                  name="createdAt"
                  onChange={formik.handleChange}
                  value={formik.values.createdAt}
                  className='bg-gray-100 text-gray-500 p-4 border border-gray-200 rounded-md flex justify-center items-center focus:outline-none'
                />
              </motion.div>
            </Modal>

            <button
              className="bg-gray-100 text-gray-500 py-1 px-4 border border-gray-200 rounded-md flex justify-center items-center"
              onClick={() => setToggleAsignedModal(true)}
              data-testid='asigned to'
            >
              <PersonIcon />
            Asignar a:
            </button>

            <Modal
              className='flex justify-center items-center'
              open={toggleAsignedModal}
              onClose={() => setToggleAsignedModal(!toggleAsignedModal)}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >

              <motion.div
                className='bg-slate-100 rounded-3xl p-4 w-auto flex items-center flex-col gap-2 '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ delay: .3 }}

              >
                <label className='text-purple-700 font-thin'>Asigna esta tarea a una persona</label>
                <input
                  type="text"
                  name="assignedTo"
                  onChange={formik.handleChange}
                  value={formik.values.assignedTo}
                  className='bg-gray-100 text-gray-500 p-4 border border-gray-200 rounded-md flex justify-center items-center focus:outline-none'
                />
              </motion.div>

            </Modal>
          </div>


          <div className="flex justify-end space-x-2">
            <button
              className="bg-gray-100 text-gray-500 py-1 px-4 border border-gray-200 rounded-md"
              onClick={handleCancel}
            >
              Cancelar
           </button>
            <button
              className="bg-violet-700 rounded-md text-white py-1 px-4 add"
              onClick={handleAdd}
            >
              Guardar
              </button>
          </div>

        </div>

      </div>
    </Modal>

  );
};

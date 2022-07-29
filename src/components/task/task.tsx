import { Opacity } from '@material-ui/icons';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonIcon from '@material-ui/icons/Person';
import { motion } from 'framer-motion';



export interface TaskData {
  id?: number;
  title: string;
  description: string;
  completed?: boolean;

  assignedTo: string;
  createdAt?: string;
  updatedAt?: string;
}

interface TaskProps {
  task: TaskData;
  toggleComplete: () => void;
}

export const Task = (props: TaskProps) => {
  const { task, toggleComplete } = props;

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .5 }}
      className="border-b border-b-gray-200 p-3 flex items-center w-full"
      onClick={toggleComplete}
    >
      <div
        className={`w-5 h-5 rounded-full border mr-4 ${task.completed && 'bg-purple-400'
          }`}
      >

      </div>
      <div className=' flex flex-col items-start'>
        <p className="font-semibold text-gray-700">{task.title}</p>
        <p className="text-gray-400 text-sm">{task.description}</p>

        <div className="flex gap-5 mt-2">
          {
            task?.createdAt &&
            <p
              className="text-gray-500 text-sm flex justify-center items-center"
            >
              <CalendarTodayIcon fontSize='small' />{task?.createdAt}
            </p>
          }

          {
            task.assignedTo &&
            <p
              className="text-gray-500 text-sm flex justify-center items-center"
            >
              <PersonIcon fontSize='small' />{task?.assignedTo}
            </p>
          }


        </div>


      </div>
    </motion.button>
  );
};

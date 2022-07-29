export interface Context {
  setTasks: Function;
  tasks: Array<Task>;
  filterStatus: string;
  setFilterStatus: Function;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
  assignedTo: string;
  executionDate: string;
}

 interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;     
  isCompleted: string; 
  isTask : boolean,
  assignedTo : string | null
}

interface IUser {
 id: string,
 name : string
}

export type {ITask, IUser}

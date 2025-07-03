import { useAppSelector } from '@/hooks/hooks';
import { filterTasks, selectTasks } from '@/redux/task/taskSlice';
// import TaskCard from './taskCard';
import { AddTaskModal } from './AddTaskModal';
import TaskCard from './TaskCard';



const Tasks = () => {
 const tasks = useAppSelector(selectTasks);
 const filter = useAppSelector(filterTasks);
 console.log(tasks);
 console.log(filter);
 
    return (
        <div className='space-y-2 max-w-7xl mx-auto'>
            <div className='flex justify-end items-center'>
               <AddTaskModal/>
            </div>
           {
            tasks.map(task => <TaskCard task={task} key={task.id}></TaskCard>)
           }
        </div>
    );
};

export default Tasks;
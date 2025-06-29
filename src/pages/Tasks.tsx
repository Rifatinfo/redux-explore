import { useAppSelector } from '@/hooks/hooks';
import { filterTasks, selectTasks } from '@/redux/task/taskSlice';



const Tasks = () => {
 const tasks = useAppSelector(selectTasks);
 const filter = useAppSelector(filterTasks);
 console.log(tasks);
 console.log(filter);
 
    return (
        <div>
            <h1>task</h1>
        </div>
    );
};

export default Tasks;
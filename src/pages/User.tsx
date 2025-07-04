import { useAppSelector } from "@/hooks/hooks";
import AddUserModal from "./AddUserModal";
import UserCard from "./UserCard";
import { selectUsers } from "@/redux/user/userSlice";

const User = () => {
     const users = useAppSelector(selectUsers);
    return (
        <div className='space-y-2 max-w-7xl mx-auto'>
            <div className='flex justify-end items-center'>
               <AddUserModal/>
            </div>
           {
            users.map(user => <UserCard user={user} key={user.id}></UserCard>)
           }
        </div>
    );
};

export default User;
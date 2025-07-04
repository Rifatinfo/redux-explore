import { removeUser } from "@/redux/user/userSlice";
import type { IUser } from "@/types/types";
import { useDispatch } from "react-redux";
interface IProps {
    user : IUser
}
const UserCard = ({ user }: IProps) => {
    const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-black text-white">
        <p>{user.name}</p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => dispatch(removeUser(user.id))}
            className="h-6 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default UserCard;

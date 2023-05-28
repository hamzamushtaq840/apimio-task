import { useSelector } from "react-redux";

const useAllUsers = () => {
  return useSelector(state => state.user.allUsers);
}

export default useAllUsers
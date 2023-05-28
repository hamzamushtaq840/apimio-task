import { useSelector } from 'react-redux';

const useUser = () => {
  return useSelector(state => state.user.currentUser);
}

export default useUser
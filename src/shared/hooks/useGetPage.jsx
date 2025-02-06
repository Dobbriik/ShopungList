import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getShoppingList } from '../../shop/shoppingListSlice';

function useGetPage(id) {
  console.log('useGetPage', id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(getShoppingList(id));
  // navigate('/List')
  return;
}

export default useGetPage;

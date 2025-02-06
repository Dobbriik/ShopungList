import { useParams } from 'react-router-dom';

function useFindPageId(data) {
  const { id } = useParams();
  let list = null;
  for (const element of data.items) {
    console.log(element);
    if (element.idPage == id) {
      list = element;
    }
  }
  return list;
}

export default useFindPageId;

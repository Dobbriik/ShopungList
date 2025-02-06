import { ShoppingCart } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import style from './SkeletonCard.module.css';
import Container from '../container/Container';

function SkeletonCard({ children }) {
  return (
    <Container>
      <div className={style.header}>
        <div>
          <ShoppingCart /> Список покупок
        </div>
      </div>
      <div className={style.skeleton}>
        <h1 className={style.hed}>
          <Skeleton />
        </h1>
        <p className={style.par}>
          <Skeleton />
        </p>
        <p className={style.par}>
          <Skeleton />
        </p>
        <h1 className={style.hed}>
          <Skeleton />
        </h1>
        <p className={style.par}>
          <Skeleton />
        </p>
        <p className={style.par}>
          <Skeleton />
        </p>
        {children}
      </div>
    </Container>
  );
}

export default SkeletonCard;

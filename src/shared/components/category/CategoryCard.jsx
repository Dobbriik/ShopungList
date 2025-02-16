import styles from './CategoryCard.module.css';

function CategoryCard({ category, items }) {
  const products = items.map(({ content, id, isBought }) => (
    <div key={id}>
      <input type="checkbox" checked={isBought} />
      {content}
    </div>
  ));
  return (
    <div className={styles.card}>
      <div className={styles.categoryname}>{category}
      </div>
      {products}
    </div>
  );
}

export default CategoryCard;

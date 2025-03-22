import styles from './main-layout.module.scss';

export default function MainLayout({ children }) {
  
  return (
    <div className={styles['main-container']}>
      <main>{children}</main>
    </div>
  );
}

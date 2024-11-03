'use client';

import * as styles from './page.css';
import { useCountStore } from './stores';

export default function Home() {
  const { count, inc, dec, removeAllCount } = useCountStore();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>Header</div>

      <div className={styles.columns}>
        <nav className={styles.nav}>
          <span>{count}</span>
        </nav>
        <div className={styles.mainContent}>
          <button type="button" onClick={inc}>
            one up
          </button>
          <button type="button" onClick={dec}>
            one down
          </button>
          <button type="button" onClick={removeAllCount}>
            Reset
          </button>
        </div>
        <div className={styles.aside}>SideBar</div>
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}

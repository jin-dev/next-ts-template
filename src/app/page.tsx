'use client';

import * as styles from './page.css';
import { useCountStore } from './stores';

export default function Home() {
  const { count, inc, dec, removeAllCount } = useCountStore();

  return (
    <div>
      <h1>haha</h1>
      <span>{count}</span>
      <button type="button" onClick={inc}>
        one up
      </button>
      <button type="button" onClick={dec}>
        one down
      </button>
      <button type="button" onClick={removeAllCount}>
        Reset
      </button>
      <div className={styles.page}>page</div>
      <div className={styles.text}>Tet</div>
    </div>
  );
}

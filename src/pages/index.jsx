import styles from './index.module.scss';
import { useState } from 'react';
import { Footer } from '../components/Footer';

export function Index() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.moduleTest}>react app</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>Count: {count}</div>
      <Footer visible key="1" />
    </>
  );
}

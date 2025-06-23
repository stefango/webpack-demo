import { ClassComponent, Footer, FunctionComponent } from '../components';
import styles from './index.module.scss';

export function Index() {
  return (
    <>
      <div className={styles.moduleTest}>react app</div>
      <ClassComponent />
      <FunctionComponent />
      <Footer visible key="1" />
    </>
  );
}

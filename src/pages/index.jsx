import styles from './index.module.scss';
import { Footer, ClassComponent, FunctionComponent } from '../components';

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

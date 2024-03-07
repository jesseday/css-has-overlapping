import clsx from 'clsx';
import styles from './section.module.css';

export default function Section() {
  return (
      <section className={clsx('component-section', 'bg-yellow', styles.section)}>
          <h1>Section</h1>
      </section>
  )
}
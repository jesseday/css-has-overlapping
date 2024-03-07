import clsx from 'clsx';
import styles from './panel.module.css';

export default function Panel() {
  return (
    <section className={clsx('component-section', 'overlapping', 'bg-orange', styles.panel)}>
      <h1>Panel</h1>
    </section>
  )
}
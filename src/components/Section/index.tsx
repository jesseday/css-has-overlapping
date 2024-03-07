import clsx from 'clsx';
import styles from './section.module.css';

export default function Section({color = 'bg-orange'}: {color: 'bg-lavender' | 'bg-orange' | 'bg-yellow'}) {
  return (
      <section className={clsx('component-section', color, styles.section)}>
          <h1>Section</h1>
      </section>
  )
}
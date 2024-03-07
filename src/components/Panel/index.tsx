import clsx from 'clsx';
import styles from './panel.module.css';

export default function Panel({color = 'bg-yellow', overlap = true }: {color: 'bg-lavender' | 'bg-orange' | 'bg-yellow', overlap: boolean}) {
  return (
    <section className={clsx('component-section', color, styles.panel, {
      'overlapping': overlap,
      [styles.overlap]: overlap
    })}>
      <h1>Panel</h1>
    </section>
  )
}
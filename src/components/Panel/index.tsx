import clsx from 'clsx';
import styles from './panel.module.css';

export default function Panel({color = 'bg-yellow', overlap = 'default' }: {color: 'bg-lavender' | 'bg-orange' | 'bg-yellow', overlap: 'fancy' | 'default' | 'none' }) {
  return (
    <section className={clsx('component-section', color, {
      'overlapping': overlap,
    })}>
      <div className={clsx(styles.panel, {
              [styles.overlap]: overlap === 'default',
              [styles.fancy]: overlap === 'fancy',
        })}>
        <h1>Panel</h1>
      </div>
    </section>
  )
}
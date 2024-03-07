import clsx from 'clsx';
import styles from './hero.module.css';

export default function Hero({color = 'bg-lavender'}: {color: 'bg-lavender' | 'bg-orange' | 'bg-yellow'}) {
  return (
    <div className={clsx('component-section', color, styles.hero)}>
      <h1>Hero</h1>
    </div>
  )
   
}
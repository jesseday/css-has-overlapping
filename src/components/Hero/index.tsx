import clsx from 'clsx';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className={clsx('component-section', 'bg-lavender', styles.hero)}>
      <h1>Hero</h1>
    </div>
  )
   
}
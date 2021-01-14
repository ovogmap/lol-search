import Link from 'next/link';
import styles from './Nav.module.scss';

export default function Nav(): React.ReactElement {
  return (
    <div className={styles.Container}>
      <nav className={styles.NavContainer}>
        <ul>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

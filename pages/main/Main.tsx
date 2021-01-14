import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Main.module.scss';

export default function Main(): React.ReactElement {
  const [input, setInput] = useState('');
  const router = useRouter();
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setInput(value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    router.push(`detail/${input}`);
  };
  return (
    <div className={styles.Container}>
      <div className={styles.FormContainer}>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}>
          <input
            type="text"
            placeholder="소환사명을 입력해 주세요."
            onChange={(e) => {
              onChange(e);
            }}
          />
          <button type="submit">검색</button>
        </form>
      </div>
    </div>
  );
}

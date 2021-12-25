import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import { countState } from '../store/atoms';

const Home: NextPage = () => {
  // useRecoilStateではatomの値を操作(read, write)できる
  const [count, setCount] = useRecoilState(countState);

  const increment = (c: number) => c + 1;
  const decrement = (c: number) => c - 1;

  useEffect(() => {
    console.log('index.tsxがmountされました。');
  }, []);

  return (
    <>
      <p>count:{count}</p>
      <button onClick={() => setCount(increment)}>count increment</button>
      <button onClick={() => setCount(decrement)}>count decrement</button>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
    </>
  );
};

export default Home;

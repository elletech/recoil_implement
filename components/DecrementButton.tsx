import React from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '../store/atoms';

const DecrementButton: React.VFC = () => {
  console.log('DecrementButton.tsxがmountされました。');
  const [count, setCount] = useRecoilState(countState);

  const decrement = () => setCount((c: number) => c - 1);

  return <button onClick={decrement}>{count}を-1します</button>;
};

export default DecrementButton;

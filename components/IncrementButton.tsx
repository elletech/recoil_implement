import React from 'react';
import { useSetRecoilState } from 'recoil';
import { countState } from '../store/atoms';

const IncrementButton: React.VFC = () => {
  console.log('IncrementButton.tsxがmountされました。');
  const setCount = useSetRecoilState(countState);

  const increment = () => setCount((c: number) => c + 1);

  return <button onClick={increment}>IncrementButton</button>;
};

export default IncrementButton;

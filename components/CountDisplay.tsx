import React from 'react';
import { useRecoilValue } from 'recoil';
import { countState } from '../store/atoms';

const CountDisplay: React.VFC = () => {
  console.log('CountDisplay.tsxがmountされました。');
  const count = useRecoilValue(countState);
  return <div>count: {count}</div>;
};

export default CountDisplay;
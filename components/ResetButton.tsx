import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { countState } from '../store/atoms';

const ResetButton: React.VFC = () => {
  console.log('ButtonIncrement.tsxがmountされました。');
  const setCount = useSetRecoilState(countState);

  const reset = () => setCount(0);


  return <button onClick={reset}>ResetButton</button>;
};

export default ResetButton;

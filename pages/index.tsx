import type { NextPage } from 'next';
import IncrementButton from '../components/IncrementButton';
import CountDisplay from '../components/CountDisplay';
import UnusingCountComponent from '../components/UnusingCountComponent';
import ResetButton from '../components/ResetButton';
import DecrementButton from '../components/DecrementButton';

const Home: NextPage = () => {
  console.log('index.tsxがmountされました。');
  return (
    <>
      <CountDisplay />
      <IncrementButton />
      <ResetButton />
      <DecrementButton />
      <UnusingCountComponent />
    </>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import { countState } from '../store/atoms';

const Profile: React.VFC = () => {
  const count = useRecoilValue(countState);

  useEffect(() => {
    console.log('profile.tsxがmountされました。');
  }, []);

  return (
    <>
      <h1>My Profile</h1>
      <p>count: {count}</p>
        <Link href="/">
          <a>Home</a>
        </Link>
    </>
  );
};

export default Profile;

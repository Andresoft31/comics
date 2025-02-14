import React from 'react';
import { HeroList } from '../components/HeroList';

export const DcPage = () => {
  console.log('Rendering DcPage with publisher:', 'DC Comics');
  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <HeroList publisher='DC Comics' />
    </>
  );
};

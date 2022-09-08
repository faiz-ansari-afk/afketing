import React from 'react'
import Layout from './../../components/Layout';
import Intro from './Intro';
import MarketeingStrat from './MarketeingStrat';
import WhyMarketing from './WhyMarketing';

export default function Home() {
  return (
    <Layout>
      <div className='px-32 sm:px-5'>
        <Intro />
        <MarketeingStrat />
        <WhyMarketing/>
      </div>
    </Layout>
  )
}

import React from 'react'
import Layout from '../../components/Layout'
import Intro from './Intro'
import WhatWeDo from './WhatWeDo'
import WhyChooseUs from './WhyChooseUs'

export default function About() {
  return (
    <Layout>

      <Intro />
      <WhatWeDo />
      <WhyChooseUs/>
    </Layout>
  )
}

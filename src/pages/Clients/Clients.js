import React from 'react'
import Layout from './../../components/Layout';
import ClientsList from './ClientsList';
import Intro from './Intro';

export default function Clients() {
  return (
    <Layout>
      <Intro />
      <ClientsList />
    </Layout>

  )
}

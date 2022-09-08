import React from 'react'
import Layout from '../../components/Layout'
import Address from './Address'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <Layout>
      <div className="grid grid-cols-2 px-32 gap-20 mt-32 sm:grid-cols-1 sm:mt-20 sm:p-2 lg:grid-cols-1 lg:mt-20 lg:p-2">
        <Address />
        <ContactForm />
      </div>

      <div className="flex justify-center mt-32 text-center border-b-2 mx-10 border-primary">
        <div className=" border-2 p-4 border-b-0 border-primary">
          <h1 className="text-gray-700 text-xl sm:text-sm">Designed and Developed By</h1>
          <h1 className=" text-xl text-red-400 hover:bg-secondary hover:text-primary duration-300">md faiz</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

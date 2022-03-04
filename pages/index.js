import { Button, Dialog, Pane } from 'evergreen-ui'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import DefaultDialogExample from '../components/dialog'

export default function Home() {
  const [isShown, setIsShown] = useState(false)

  return (
    <Layout home>
      <div className='grid  place-content-center grid-rows-1 content-center  ' >
        <div className='flex flex-col items-center w-3/4	'>
          <h1 className="text-xl font-semibold	 my-6 ">
            Register
          </h1>
          <p className='text-center pb-4'>Get started with an easier way to connect with your donors.</p>
          <div className='bg-white rounded-md shadow-md p-4	'>
            {/* <Pane>
              <Dialog
                isShown={true}
                title="Dialog title"
                onCloseComplete={() => setIsShown(isShown)}
                confirmLabel="Custom Label"
              >
                Dialog content
              </Dialog>

              <Button onClick={() => setIsShown(true)}>Show Dialog</Button>
            </Pane> */}
            <DefaultDialogExample></DefaultDialogExample>
          </div>
        </div>
      </div>
    </Layout>
  )
}

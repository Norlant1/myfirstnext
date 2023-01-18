import React from 'react'
import styles from '../../styles/Home.module.css'
import MainLayout from '../../src/MainLayout'
import PageStyles from '../../styles/Page.module.css'
import HeaderLayout from '../../src/HeaderLayout'
import Head from '../../src/Head'
import Footer from '../../src/Footer'
import Image from 'next/image'
import Link from 'next/link'

const post = ({data}) => {

  return (
    <div className={PageStyles.container}>
       <Head>
          {data.title}
       </Head>
       <header className={PageStyles.header}>
           <Link className={PageStyles.headerButton} href="/"><h3 style={{marginLeft:'2em'}}>Back home</h3></Link>
       </header>
       <main className={PageStyles.main}>
           <p>{data.content}</p>
           <Image className={PageStyles.image} src={data.cotentImage} alt={data.id} width={600} height={400} />
       </main>
       <Footer/>
    </div>
  )
}

export default post

export const getStaticPaths = async () => {
 
  const response = await fetch(`${process.env.BASE_URL}/api/norlant-blog`)
  const {data} = await response.json()

  const paths = data.map((each) => {
     return {
      params:{
         id:each.id.toString(),
         
      }
     }   
  })

  return { 
    paths,
    fallback:false
  }
}

export const getStaticProps = async ({params}) => { 

  const response = await fetch(`${process.env.BASE_URL}/api/norlant-blog/${params.id}`)
  const {data} = await response.json()
  
  return {
    props:{
      data
    }
  }
  
}
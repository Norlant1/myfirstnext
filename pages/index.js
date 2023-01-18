import Head from '../src/Head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import main from '../styles/Mainpage.module.css'
import MainLayout from '../src/MainLayout'
import HeaderLayout from '../src/HeaderLayout'

export default function Home({data}) {

  

  return (
    <div className={styles.Container}>
      <Head>
          Norlant Blog
      </Head>
      <HeaderLayout>
        <h1>Norlant blog</h1>
      </HeaderLayout>  
      <MainLayout>
        {data.map((each) => {
           return <a href={`/posts/${each.id}`} key={each.id} className={main.topic}>
                    <h2 className={main.title}>{each.title}</h2>
                    <p>{each.description}</p>
                    <div className={main.author}>
                       <Image className={main.authorImage} src={each.authorImage} alt={each.id} width={40} height={40} />         
                       <div>
                          <p className={main.authorName}>{each.authorName}</p> 
                          <p className={main.date}>{each.Date}</p>
                       </div>                      
                    </div>
                 </a>
        })}
      </MainLayout>
      <footer className={styles.footer}>
        <p>2023 Klaudsol Internship</p>
      </footer>
    </div>
  )
}


export const getStaticProps = async () => {
   
const response = await fetch(`${process.env.BASE_URL}/api/norlant-blog`)
const {data} = await response.json()



console.log(data)

  return(
    {
      props:{
        data
      
      }
    }
  )
}



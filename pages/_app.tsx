import '../styles/globals.scss'
import Router, { useRouter } from "next/router";
import type { AppProps } from 'next/app';
import _ from "lodash";
import Header from "../src/components/header";


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pages: any = { 0 : "index", 1: "cabeçlho"}
  for(var i in pages){
    console.log(pages[i])
    if(router.pathname.includes(pages[i])){
      return(<>
        <Header/>
      </>)
    }
  }
  
  
  return <Component {...pageProps} />
}

export default MyApp

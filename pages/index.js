import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Header from '../component/module/header'
import Header from "../component/module/Header"
import Topbanner from '../component/home/topbanner'
import HomeAbout from '../component/home/homeabout'
import Relatedcourse from '../component/home/relatedcourse'
import ContactUs from '../component/home/contactus'
import Footer from '../component/module/Footer'
import Registration from '../component/registration'


export default function Home() {
    return (
        < >

            < Header />
            <Topbanner />
            < HomeAbout />
            <Relatedcourse />
            <ContactUs />
            < Footer />


        </>

    )
}
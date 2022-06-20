import Main from "../components/Main"
import Head from "next/head"

export default function index() {
    return <>
    <Head>
        <title>Khushboo Kumari | Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Khushboo's portfolio. I solve problems using code (Mostly web). Pre-final year student from NIT Hamirpur."/>
        <meta data-react-helmet="true" name="keywords" content="web developer, web designer, software engineer, freelancer, programmer, platform builder, Content-Creator, traveller, tech, Essex, Patna, contractor, consultant, SaaS builder, frontend specialist, TypeScript, node.js, AMQP, TCP, HTTP, websockets, flutter, mobile, react, ios, android, AWS, gcloud, mentor, docker, k8s, kubernetes, lambda, functions, PWAs, architect"/>
    </Head>
    <Main />
    </>
}
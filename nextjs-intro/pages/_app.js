import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Layout>
                {/* <NavBar></NavBar> */}
                <Component {...pageProps}></Component>
                <span>Hello</span>
            </Layout>
        </>
    );
}
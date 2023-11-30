import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/navigation/home/Header"
import Layout from "hocs/layouts/Layout"

function Home(){
    return(
        <Layout>
            <Navbar />
            <Header />
                <Footer />
        </Layout>
    )
}
export default Home
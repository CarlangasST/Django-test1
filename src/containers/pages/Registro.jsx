import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Registro(){
    return(
        <Layout>
            <Navbar />
            <div className="pt-28">
                Registro
            </div>
                <Footer />
        </Layout>
    )
}
export default Registro
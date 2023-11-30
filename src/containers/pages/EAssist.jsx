import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function EAssist(){
    return(
        <Layout>
            <Navbar />
            <div className="pt-28">
                E-Assist
            </div>
                <Footer />
        </Layout>
    )
}
export default EAssist
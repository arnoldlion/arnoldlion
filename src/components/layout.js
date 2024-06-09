
import Header from "./header";
import Footer from "./footer";
import { dmSans } from './fonts'

const Layout = ({ children }) => {
  return (
    <>
      <div className={dmSans + " wrapper"}>
        <div className="layout">
          <Header />
          <div className="layout_footer">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Layout

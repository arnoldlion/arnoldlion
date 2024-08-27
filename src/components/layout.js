
import Header from "./header";
import Footer from "./footer";
import { dmSans } from './fonts';
import YandexMetrika from "./YandexMetrika";

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
      <YandexMetrika 
        yid={98171358}
        clickmap={true}
        trackLinks={true}
        accurateTrackBounce={true}
        webvisor={true}
      />
    </>
  )
}

export default Layout

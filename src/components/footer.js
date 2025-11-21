import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <footer>
      <div className="footer_cons">
        <div className="footer_cons_left"></div>
        <div className={"footer_cons_right " + (inView? `${"active"}` : "")}>
          <div className="footer_cons_paws"></div>
          <div className="footer_cons_text">
            <a href="tel:+375447401755" className="footer_cons_link footer_cons_link_tel">+375 (44) 740-17-55</a>
            <a href="mailto:arnoldlionmainecoon@gmail.com" className="footer_cons_link footer_cons_link_mail">arnoldlionmainecoon@gmail.com</a>
            <div className="footer_cons_messages">
              <a href="tg://resolve?domain=annamaxilife" className="footer_cons_link footer_cons_link_telegram">Telegram</a>
              <a href="whatsapp://send?phone=+375447401755" className="footer_cons_link footer_cons_link_whatsapp">Whatsapp</a>
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className="footer_grid">
        <p className="footer_text">Delivery company address: 101 Diplomat Parkway, Hallandale Beach Fl 33009, 3057332320</p>
        <div className="footer_documents">
          <a href="/" className="footer_link">Documents</a>
          <a href="/" className="footer_link">Privacy Policy</a>
        </div>
        <p className="footer_text">© 2025 arnoldlion.com</p>
        <div className="footer_developers">
          <p className="footer_text">Developers - </p>
          <a href="https://yellowpine.site/" className="footer_link footer_link_yellowpine">Yellowpine</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
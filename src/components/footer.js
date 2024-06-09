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
            <a href="tel:+15555551234" className="footer_cons_link footer_cons_link_tel">+1 (555) 555 1234</a>
            <a href="mailto:arnoldlionmainecoon@gmail.com" className="footer_cons_link footer_cons_link_mail">arnoldlionmainecoon@gmail.com</a>
            <div className="footer_cons_messages">
              <a href="/" className="footer_cons_link footer_cons_link_telegram">Telegram</a>
              <a href="/" className="footer_cons_link footer_cons_link_whatsapp">Whatsapp</a>
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className="footer_grid">
        <p className="footer_text">Address. 13th Street. 47 W 13th St, New York, NY 10011, USA</p>
        <div className="footer_documents">
          <a href="/" className="footer_link">Documents</a>
          <a href="/" className="footer_link">Privacy Policy</a>
        </div>
        <p className="footer_text">© 2024 arnoldcat.com</p>
        <div className="footer_developers">
          <p className="footer_text">Developers - </p>
          <a href="https://yellowpine.site/" className="footer_link footer_link_yellowpine">Yellowpine</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
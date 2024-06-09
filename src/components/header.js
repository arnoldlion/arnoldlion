import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from "react"; 

const Header = () => {
  const pathname = usePathname();
  const [navOpen , setNavOpen ]= useState(false);
  useEffect(()=>{
    if(navOpen){
      document.body.style.overflow="hidden";
      document.body.style.height="100vh";
    } else{
      document.body.style.height="auto";
      document.body.style.overflow="";
    }
  }, [navOpen]);
  const [getStickyHeader , setStickyHeader] = useState(true);
  useEffect(() => {
    let pscroll = 0;
    const stickyHeader = ()=>{
      if(typeof window ==='undefined'){
        return
      }
      const pageYOffset = window.pageYOffset;
      if (pscroll>pageYOffset&&pageYOffset>100){
        setStickyHeader(true);
        document.body.classList.add('is_sticky');
      } else {
        setStickyHeader(false);
        document.body.classList.remove('is_sticky');
        }
      pscroll=pageYOffset;
    };
    window.addEventListener('scroll', stickyHeader);
    return () => {
      window.removeEventListener('scroll', stickyHeader);
    }
  }, [ ])
  let position = getStickyHeader?"fixed":"absolute" ;
  if (navOpen ){
    position="fixed";
  }
  return (
    <div className="header">
      <header className="header_desktop">
        <div className="header__div_logo">
          <a href="/" className="header_logo"></a>
        </div>
        <div className="header_nav">
          <Link href="/available-kittens" className={`header_nav_link header_nav_link_available ${pathname === '/available-kittens' ? 'active' : ''}`}>Available kittens</Link>
          <Link href="/sold-kittens" className={`header_nav_link ${pathname === '/sold-kittens' ? 'active' : ''}`}>Sold kittens</Link>
          <Link href="/manufacturers" className={`header_nav_link ${pathname === '/manufacturers' ? 'active' : ''}`}>Our manufacturers</Link>
          <Link href="/graduates" className={`header_nav_link ${pathname === '/graduates' ? 'active' : ''}`}>Our graduates</Link>
          <Link href="/documentation" className={`header_nav_link ${pathname === '/documentation' ? 'active' : ''}`}>Documentation</Link>
          {/* <Link href="/" className={`header_nav_link ${pathname === '/' ? 'active' : ''}`}>Story</Link> */}
          <Link href="/about" className={`header_nav_link ${pathname === '/about' ? 'active' : ''}`}>About Us</Link>
          <Link href="/faq" className={`header_nav_link ${pathname === '/faq' ? 'active' : ''}`}>FAQ</Link>
        </div>
      </header>
      <header className="header_mob">
        <div style={{position:position}} className={( getStickyHeader?"header_sticky":"" ) + (navOpen?" header_open":"") + " header_wrap_mob"}>
          <div className="wrapper">
            <div className="header_top_mob">
              <a href="/" className="header_logo_mob"></a>
              <div
                onClick={()=> {
                setNavOpen(!navOpen)}}
                className="header_burger"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="header_hidden_mob">
              <div className="header__div_logo">
                <a href="/" className="header_logo"></a>
              </div>
              <div className="header_nav">
                <Link href="/available-kittens" className={`header_nav_link header_nav_link_available ${pathname === '/available-kittens' ? 'active' : ''}`}>Available kittens</Link>
                <Link href="/sold-kittens" className={`header_nav_link ${pathname === '/sold-kittens' ? 'active' : ''}`}>Sold kittens</Link>
                <Link href="/manufacturers" className={`header_nav_link ${pathname === '/manufacturers' ? 'active' : ''}`}>Our manufacturers</Link>
                <Link href="/graduates" className={`header_nav_link ${pathname === '/graduates' ? 'active' : ''}`}>Our graduates</Link>
                <Link href="/documentation" className={`header_nav_link ${pathname === '/documentation' ? 'active' : ''}`}>Documentation</Link>
                <Link href="/about" className={`header_nav_link ${pathname === '/about' ? 'active' : ''}`}>About Us</Link>
                <Link href="/faq" className={`header_nav_link ${pathname === '/faq' ? 'active' : ''}`}>FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header

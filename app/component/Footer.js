import styles from "./Footer.module.css"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
function Footer() {
  return (
    <>
    <a>
    <div className={styles.talk}>
           <div className="gradient-text"><h1>LET'S TALK</h1></div>
    <div className={styles.arrowContainer}>
           <div href="#" className={styles.arrowLink}>
             <FiArrowUpRight className={styles.arrowIcon} />
           </div>
    </div>
    </div>
    </a> 
    <section>
        <div className={styles.footer}>
            <div className={styles.section1}>
                 <img src="inverted.png" alt="PKF Logo" className={styles.logo} /> 
                  
            </div>
            <div className={styles.section2}>
                <div className={styles.sectionheading}><h3>Services</h3></div>
                <div className={styles.sectionlinks}>
                    <a><div>Assurance</div></a>
                    <a><div>Tax</div></a>
                    <a><div>Advisory</div></a>
                    <a><div>Business Solutions</div></a>
                    <a><div>Corporate Finance</div></a>
                    <a><div>Private Capital Solutions</div></a>
                    <a><div>Sustainability & ESG</div></a>
                </div>
            </div>
            <div className={styles.section3}>
                <div className={styles.sectionheading}><h3>About Us</h3></div>
                <div className={styles.sectionlinks}>
                    <a><div>About</div></a>
                    <a><div>Cookie policy</div></a>
                    <a><div>Privacy Policy</div></a>
                </div>
            </div>
              <div className={styles.section4}>
                 <div className={styles.sectionheading}><h3>Follow Us</h3></div>
                  <div className={styles.socialIcons}>
                         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                           <FaTwitter size={24}  />
                         </a>
                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                           <FaFacebookF size={24} />
                         </a>
                         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                           <FaLinkedinIn size={24} />
                         </a>
                </div>

            </div>
        </div>
    </section>
   
    </>
      );
}

export default Footer;
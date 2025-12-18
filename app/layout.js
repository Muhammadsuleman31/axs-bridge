import Navbar from "./component/Navbar";
import "./globals.css";
import Footer from "./component/Footer"


export const metadata = {
  title: "AXS BRIDGE",
  description: "We are a community of dynamic business advisors where belonging, growth, and action converge. Together, we unlock powerful opportunities for our clients, empower our people, and uplift the communities we serve.",

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

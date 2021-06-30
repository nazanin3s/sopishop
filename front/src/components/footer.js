
const Footer = ()=>{
  let date = new Date().getFullYear();
  return (
    <div className="footer">
    <p>Copyright © {date} ShopiShop</p>
    </div>
  )
}
export default Footer;

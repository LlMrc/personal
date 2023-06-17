import CustomerService from "../components/costumer"
import ContactForm from "../components/form"


const ContactPage = () => {
  return (
    <>
    <div id="contact" className="bg-green-100">
    <ContactForm/>
      <CustomerService/>
    </div>
      
    </>
  )
}

export default ContactPage
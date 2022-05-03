import { Link } from "react-router-dom"
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa"

function Home() {
  return (
    <>
      <section className="heading">
          <h1>How can we help you?</h1>
          <p>Please choose from the following options</p>
      </section>

      <Link to='/new-ticket' className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create new ticket
      </Link>

      <Link to='/tickets' className="btn btn-block">
        <FaTicketAlt /> View my tickets
      </Link>
    </>
  )
}

export default Home
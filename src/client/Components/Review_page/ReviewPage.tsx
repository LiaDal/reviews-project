import Navbar from '..//Navbar'
import Content from './Content'
import Comments from './Comments'
import 'bootstrap/dist/css/bootstrap.min.css'

const ReviewPage = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Content />
        <Comments />
      </div>
    </div>
  )
}

export default ReviewPage

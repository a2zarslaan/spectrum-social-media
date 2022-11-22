import Posts from '../../components/posts/posts.component'
import Stories from '../../components/stories/stories.component'
import './home.style.scss'

const Home = () => {
  return <div className='home'>
    <Stories />
    <Posts />
  </div>
}

export default Home

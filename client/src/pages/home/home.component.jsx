import Posts from '../../components/posts/posts.component';
import Share from '../../components/share/share.component';
import Stories from '../../components/stories/stories.component';
import './home.style.scss';

const Home = () => {
	return (
		<div className='home'>
			<Stories />
			<Share />
			<Posts />
		</div>
	);
};

export default Home;

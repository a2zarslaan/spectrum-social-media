import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

import './comments.style.scss';

import { useQuery } from 'react-query';
import { makeRequest } from '../../axios';
import moment from 'moment';

const Comments = ({ postId }) => {
	const { currentUser } = useContext(AuthContext);

	const { isLoading, error, data } = useQuery(['comments'], () =>
		makeRequest.get('/comments?postId=' + postId).then((res) => {
			return res.data;
		})
	);

	return (
		<div className='comments'>
			<div className='write'>
				<img src={currentUser.profilePic} alt='' />
				<input type='text' placeholder='Write a comment' />
				<button>Send</button>
			</div>
			{isLoading
				? 'Loading...'
				: data.map((comment) => (
						<div className='comment'>
							<img src={comment.profilePicture} alt='' />
							<div className='info'>
								<span>{comment.name}</span>
								<p>{comment.desc}</p>
							</div>
							<span className='date'>
								{moment(comment.createdAt).fromNow()}
							</span>
						</div>
				  ))}
		</div>
	);
};

export default Comments;

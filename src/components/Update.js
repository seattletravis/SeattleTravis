import '../App.css';

function Update({ imagePath }) {
	return (
		<div className='update'>
			<table>
				<thead>
					<tr>
						<th>Updates:</th>
						<td>(Jan 2024): Enrolled in IBM Full-Stack Developers Bootcamp!</td>
						<td>(Dec 2023): I received the Google IT Support Certificate!</td>
						<td>
							(Oct 2023): I received the Meta Front-End Developer Certificate!
						</td>
					</tr>
				</thead>
			</table>
		</div>
	);
}

export default Update;

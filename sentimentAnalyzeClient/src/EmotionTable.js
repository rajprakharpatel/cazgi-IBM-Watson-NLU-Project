import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
	render() {
		//Returns the emotions as an HTML table
		console.log(Object.keys(this.props.emotions))
		return (
			<div>
				<table className="table table-bordered">
					<tbody>
						{
							Object.keys(this.props.emotions).map((emotion) => {
								return (
									<tr>
										<td>{emotion}</td>
										<td>{this.props.emotions[emotion]}</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		);
	}

}
export default EmotionTable;

import React from "react"
import Article from "./Article";

function Articles(props) {

	const article = [
		{
			id: 1,
			title: 'Устоявший баян на даче',
			text: 'Старый баян слабо себя показал на предстоящей встрече администраторов клуба'
		},
		{
			id: 2,
			title: 'Лежачий тигр',
			text: 'Какой-то текст1'
		},
		{
			id: 3,
			title: 'Жизнь бабушки в поселке',
			text: 'Какой-то текст2'
		},
		{
			id: 4,
			title: 'Сгущенка оказалась кислой',
			text: 'Какой-то текст3'
		}
	]

	return (
		<div>
			{article.map(article => <Article 
			title = {article.title}
			text = {article.text}
			id = {article.id}
			/>)}
		</div>
	)
}

export default Articles;
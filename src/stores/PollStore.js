import { writable } from 'svelte/store'

let polls = [
	{
		id:1,
		question: 'Python or JavaScript',
		answerA: 'Python',
		answerB: 'Javascript',
		votesA: 9,
		votesB: 15
	}
];

const PollStore = writable(polls);

export default PollStore;
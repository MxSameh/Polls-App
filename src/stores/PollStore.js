import { writable } from 'svelte/store'

// let polls = [
// 	{
// 		id:1,
// 		question: 'What Is Your Favourite Color ?',
// 		answerA: 'Red',
// 		answerB: 'Blue',
// 		votesA: 5,
// 		votesB: 8
// 	}
// ];

// let polls = JSON.parse( localStorage.getItem('polls') );

// if(!localStorage.length){
// 	let polls = []
// 	localStorage.setItem("polls",JSON.stringify(polls))
// }else{
// 	let polls = JSON.parse( localStorage.getItem('polls') );
// }


// check if localStorage exists if not create new one
let polls;

if(localStorage.getItem('polls'))
{
	// load data
	polls = JSON.parse( localStorage.getItem('polls') );
	console.log('data loaded');
	
}else{
	// create data
	polls = [];
	localStorage.setItem('polls',JSON.stringify(polls))
	console.log('created new item');
}


const PollStore = writable(polls)

// subscribe to changes
PollStore.subscribe( data => {
	let polls = JSON.stringify(data);
	localStorage.setItem('polls',polls)
})


export default PollStore;
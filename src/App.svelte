<script>
	// IMPORTS
import Header from "./components/Header.svelte";
import Footer from "./components/Footer.svelte";
import PollList from "./components/PollList.svelte";
import Tabs from "./shared/Tabs.svelte";
import CreatePollForm from "./components/CreatePollForm.svelte";

// LOGIC
let items = ['Current Polls', 'Add New Poll'];
let activeItem = 'Current Polls';
const switchTab = (e) => {
	activeItem = e.detail;
}
const addPoll = ()=> {
	activeItem = 'Current Polls'
}

</script>

<Header />

<main>
	<Tabs {activeItem} {items} on:switchTab={switchTab}/>
	{#if activeItem == 'Current Polls'}
		<PollList />
	{:else if activeItem == 'Add New Poll'}
		<CreatePollForm on:addPoll={addPoll} />
	{/if}
</main>

<Footer/>

<style>
	main{
		max-width: 960px;
		margin:40px auto;
	}

</style>
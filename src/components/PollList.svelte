<script>
  import PollDetails from './PollDetails.svelte'
  import PollStore from '../stores/PollStore'
  import { fade, slide, scale } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  // let polls;
  // const unsub = PollStore.subscribe( data => {
  //   polls = data;
  // })

  // onDestroy(() => {
  //   unsub();
  //   console.log('bye bye');
  // })


</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id) }
  <div in:fade out:scale|local animate:flip={{duration: 500}}>
    <PollDetails {poll} />
  </div>
  {/each}
</div>

<style>
  .poll-list{
    display: grid;
    grid-template-columns: repeat(2 ,1fr);
    gap: 24px;
  }
</style>
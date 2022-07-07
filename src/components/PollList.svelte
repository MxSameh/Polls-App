<script>
  import PollDetails from './PollDetails.svelte'
  import Button from '../shared/Button.svelte'
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

{#if $PollStore.length}
  <div class="poll-list">
    {#each $PollStore as poll (poll.id) }
    <div in:fade out:scale|local animate:flip={{duration: 500}}>
      <PollDetails {poll} />
    </div>
    {/each}
  </div>
{:else}
  <div class="no-polls">
    <h1>You don't have any polls</h1>
    <Button on:click>Create New Poll</Button>
  </div>
{/if}

<style>
  .no-polls{
    text-align: center;
  }
  .no-polls h1{
    margin-bottom: 40px;
  }
  .poll-list{
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  @media (min-width:700px){
    .poll-list{
      grid-template-columns: repeat(2 ,1fr); }
  }

</style>
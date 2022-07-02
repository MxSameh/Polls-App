<script>
  import PollStore from "../stores/PollStore";
  import Button from '../shared/Button.svelte'
  import { tweened } from 'svelte/motion';


  export let poll;

  $: totalVotes = poll.votesB + poll.votesA ;
  $: percentA = Math.floor(100/totalVotes * poll.votesA) || 0;
  $: percentB = Math.floor(100/totalVotes * poll.votesB) || 0;

  //tweeened percenteage
  const tweenedA = tweened(0);
  const tweenedB = tweened(0);

  $: tweenedA.set(percentA)
  $: tweenedB.set(percentB)

  const id = poll.id
  const addVoteA = () => {
    PollStore.update( currentPolls => {
      const poll = currentPolls.find(poll => poll.id == id);
      poll.votesA++;
      return currentPolls
    })
	}
  const addVoteB = () => {
    PollStore.update( currentPolls => {
      const poll = currentPolls.find(poll => poll.id == id);
      poll.votesB++;	
      return currentPolls
    })
	}
  const deletePoll = () => {
    PollStore.update(currentPolls => {
      const polls = currentPolls.filter(poll => poll.id != id)
      return polls
    })
  }


</script>

<div class="poll">
  <h3>{ poll.question }</h3>
  <p>Total votes: {totalVotes}</p>
  
  <div class="answer" on:click={addVoteA}>
    <div class="percent percent-a" style="width: {$tweenedA}%"></div>
    <span>{ poll.answerA } ({ poll.votesA })</span>
  </div>

  <div class="answer" on:click={addVoteB}>
    <div class="percent percent-b" style="width: {$tweenedB}%"></div>
    <span>{ poll.answerB } ({ poll.votesB })</span>
  </div>

  <div class="delete">
    <Button flat={true} on:click={deletePoll}>Delete</Button>
  </div>

</div>


<style>

  h3{
    margin:0 auto;
    color: #555;
  }
  p{
    margin-top: 6px;
    font-size: 14px;
    color:#aaa;
    margin-bottom: 30px;
  }
  span{
    display: inline-block;
    padding: 10px 20px;
  }

  .poll{
    background-color: #fff;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(0,0,0,.1);
  }
  .answer{
    background-color: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover{
    opacity:0.6;
  }
  .percent{
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a{
    border-left: 4px solid #d91b42;
    background-color: rgba(217,27,66,.2);
  }
  .percent-b{
    border-left: 4px solid #45c496;
    background-color: rgba(69,196,150,.2);
  }
  .delete{
    margin-top: 30px;
    text-align: center;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import Button from '../shared/Button.svelte'
  import  PollStore from '../stores/PollStore'

  const dispatcher = createEventDispatcher();
  let poll = { question:"", answerA:"", answerB:"", votesA: 0, votesB: 0, id:Math.random()};
  let errors = { question:"", answerA:"", answerB:"" };

  const submitHandler = (e) => {
    let valid = true;
    // validate question
    if(poll.question.trim().length < 5){
      valid = false;
      errors.question = 'Question must be at least 5 characters long'
    }
    // validate answer A
    if(poll.answerA.trim().length < 1){
      valid = false;
      errors.answerA = 'Answer A cannot be empty'
    }

    // validate answer B
    if(poll.answerB.trim().length < 1){
      valid = false;
      errors.answerB = 'Answer B cannot be empty'
    }
    // add new poll
    if(valid){
      // save poll to store
      PollStore.update(currentPolls => {
        const polls = [poll, ...currentPolls];
        e.target.reset()
        return polls;
      })
      dispatcher('addPoll')
    }
  }

</script>


<!-- FORM -->
<form on:submit|preventDefault={submitHandler}>

  <!-- QUESTION -->
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={poll.question}>
    {#if errors.question}
    <div class="error">{ errors.question }</div>
    {/if}

  <!-- ANSWER A -->
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a"bind:value={poll.answerA}>
    {#if errors.answerA}
    <div class="error">{ errors.answerA }</div>
    {/if}
  </div>

  <!-- ANSWER B -->
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b"bind:value={poll.answerB}>
    {#if errors.answerB}
        <div class="error">{ errors.answerB }</div>
    {/if}
  </div>
  <Button type={'secondary'}>Add Poll</Button>
</form>


<style>
  form{
    width:400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field{
    margin: 18px auto;
  }
  input{
    width:100%;
    border-radius: 6px;
  }
  label{
    margin:10px auto;
    text-align: left;
  }
  .error{
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
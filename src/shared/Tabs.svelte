<script>
  import {createEventDispatcher} from 'svelte';
  export let items;
  export let activeItem;
  const dispatcher = createEventDispatcher();

  const switchTab = (item) => {
    dispatcher('switchTab',item);
  }

</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={()=>switchTab(item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<!--  STYLES -->

<style>
  .tabs{
    margin-bottom: 40px;
  }
  ul{
    display: flex;
    justify-content: center;
    padding: 0;
    list-style: none;
  }
  .active{
    color:#d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
  li{
    margin: 0 16px;
    font-size: 18px;
    color: #555;
  }
  li:hover{
    cursor: pointer;
  }

</style>
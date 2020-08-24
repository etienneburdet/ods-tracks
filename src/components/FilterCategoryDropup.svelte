<script>
  export let choices

  const preventClose = (event) => {
    event.stopPropagation()
  }
</script>

<form action="#" on:click|stopPropagation>
  {#each Object.values(category) as choice}
    <label>
      <input type="checkbox" bind:checked={split}>
      {split}
    </label>
  {/each}

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: 55px;
    left: 0px;
    border-radius: 5px;
    background: white;
  }

  label {
    border-top: 1px solid #cbd2db;
    width: 100%;
    display: inline;
    text-align: left;
    padding: 5px 8px;
    &:first-child {
      border: none;
    }
  }

  .selected {
    background: #565656;
  }
</style>

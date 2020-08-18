<script>
  // export let choices
  // export let name
  let split
  let trail = false
</script>

<form action="#" on:click={event.stopPropagation()}>
  <label>
    <input type="checkbox" bind:checked={split}>
    {split}
  </label>
  <label>
    <input type="checkbox" bind:checked={trail}>
    Trail
  </label>
</form>

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

<script>
export let name
export let value
let focused = false
</script>

<label class:focused>
  {name} minimum :
  <input type="number" bind:value={value}
    on:focus={() => focused = true }
    on:blur={() => focused = false}>
</label>

<style lang="scss">
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border:1px solid #cbd2db;
    border-radius:8px;
    width: 33%;
    padding:8px;
    white-space: nowrap;
    font-size: 13px;
    color:#cbd2db;
  }

  input {
    color: black;
    border: none;
    appearance: textfield;
    font-size: 16px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }

  .focused {
    border-color: black;
  }
</style>

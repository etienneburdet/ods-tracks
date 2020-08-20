<script>
export let name
export let value
let focused = false
</script>

<label class:focused>
  Durée minimum :
  <input type="number" bind:value={value}
    on:focus={() => focused = true }
    on:blur={() => focused = false}>
</label>

<style lang="scss">
  label {
   border:1px solid #cbd2db;
   color:#cbd2db;
   border-radius:8px;
   padding:8px;
   white-space: nowrap;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   font-size: 10px;
  }

  input {
    width: 34px;
    color: black;
    border: none;
    appearance: textfield;
    font-size: 13px;
    &:focus {
      outline: none;
    }
  }

  .focused {
    border-color: black;
  }
</style>

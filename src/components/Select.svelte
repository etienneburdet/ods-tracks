<script>
  // export let choices
  export let name
</script>

<form action="#">
  <input type="checkbox" id="split" name="split" checked>
  <label for="split">Splitboard</label>
  <input type="checkbox" id="trail" name="trail" checked>
  <label for="trail">Trail</label>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 55px;
    left: 0px;
    border-radius: 5px;
    padding: 13px;
    background: white;
  }
</style>

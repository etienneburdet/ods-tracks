<script>
  export let difficulty
  let easy = true
  let mid = false
  let hard = false
</script>

<span class:easy class:mid class:hard>
  {difficulty}
</span>

<style>
  span {
    padding: 3px 8px;
    border-radius: 8px;
    font-size: 8px;
    line-height: 8px;
    color: white;
  }

  .easy {
    background: blue;
  }

  .mid {
    background: red;
  }

  .hard {
    background: black;
  }
</style>

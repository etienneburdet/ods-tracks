<script>
  import difficlutyColors from './difficulty-colors.js'

  export let difficulty
</script>

<span style="--diffcultyColor: {difficlutyColors[difficulty]}">
  {difficulty}
</span>

<style>
  span {
    padding:6px 8px 4px 8px;
    margin: 8px 0;
    border-radius: 3px;
    font-size: 0.8rem;
    line-height: 13px;
    color: white;
    background: var(--diffcultyColor)
  }
</style>

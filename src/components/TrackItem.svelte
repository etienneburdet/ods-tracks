<script>
  import DifficultyBadge from './DifficultyBadge.svelte'
  export let fields
</script>

<div class="track-item">
  <strong>{fields.name}</strong>
  <div class="details">
    <span>{fields.sport}</span>
    <DifficultyBadge difficulty={fields.difficulte}/>
    <span>{fields.deniv}m</span>
    <span>{fields.temps}h</span>
  </div>
</div>

<style lang="scss">
  span {
    width: 34px;
  }
  .track-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding: 13px 5px;
    width: 100vw
  }

  .details {
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .details > * {
    margin: 0 8px;
  }

  strong {
    width: 144px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

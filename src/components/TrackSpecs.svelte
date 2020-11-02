<script>
  export let place, time, gain, sport, invert

  const sportIcons = {
    Trail: "run-line.svg",
    Splitboard: "snow-outline.svg"
  }
</script>

<div style="--invert: invert({invert})">
  <span>
    <img src="locate-outline.svg" alt="locate icon"/>
    {place}
  </span>
  <span>
    <img src="trending-up-outline.svg" alt="uphill icon"/>
    {gain}m
  </span>
  <span>
    <img src="time-outline.svg" alt="time icon"/>
    {time}h
  </span>
  <span>
    <img src={sportIcons[sport]} alt="sport icon"/>
    {sport}
  </span>
</div>

<style lang="scss">
div {
  font-size: 0.8rem;
  line-height: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0;
  color: black;
  margin-left: -5px;
  filter: var(--invert);
  & > * {
    padding: 5px;
  }
}

img {
  height: 1rem;
  width: 1rem;
  opacity: 0.75;
  vertical-align: text-bottom;
}
</style>

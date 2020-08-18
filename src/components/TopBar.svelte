<div>
  <slot></slot>
</div>

<style lang="scss">
  div {
    position: sticky;
    top: 21px;
    align-self: center;
    margin-bottom: -13px;
    display: inline-flex;
    text-align: center;
    padding: 13px 8px;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    background: white;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
    border-radius: 5px;
    z-index: 10;
  }

  div :global(button) {
    border-left: 1px solid #cbd2db;
    &:first-child {
      border: none;
    }
    padding: 3px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
</style>

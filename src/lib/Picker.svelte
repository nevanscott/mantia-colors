<script>
  import { page } from '$app/stores';
  import { hues, saturations, brightnesses } from '$lib/colors';
  import Swatch from '$lib/Swatch.svelte';

  export let hue;
  export let saturation;
  export let brightness;
</script>

<div class="picker">
  <ul class="hues">
  {#each hues as h}
    <li class:active={h == hue}>
      <a href="/{h}/{saturation}/{brightness}">
        <Swatch hue={h} {saturation} {brightness} />
      </a>
    </li>
  {/each}
  </ul>

  <ul class="saturations">
  {#each saturations as s}
    <li>
      <ul class="brightnesses">
      {#each brightnesses as b}
        <li class:active={s == saturation && b == brightness}>
          <a href="/{hue}/{s}/{b}">
            <Swatch {hue} saturation={s} brightness={b} />
          </a>
        </li>
      {/each}
      </ul>
    </li>
  {/each}
  </ul>
</div>

<style>
  .active {
    position: relative;
    z-index: 2;
    box-shadow: 0 0 0 3px white, 0 4px 16px 3px rgba(0,0,0,0.25);
  }
  .picker {
    display: flex;
    gap: 3rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0;
    padding: 0;
  }
  .hues {
    display: grid;
    grid-template-columns: repeat(9, auto);
  }
  .saturations {
    display: flex;
  }
</style>

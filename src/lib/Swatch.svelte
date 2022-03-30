<script>
  export let hue;
  export let saturation;
  export let brightness;

  const hsv2hsl = (h,s,v,l=v-v*s/2, m=Math.min(l,1-l)) => [h,m?(v-l)/m:0,l];

  $: [h,s,l] = hsv2hsl(hue, saturation/100, brightness/100);
</script>

<div class="swatch" style="background-color: hsl({h}, {s*100}%, {l*100}%);"></div>

<style>
  .swatch {
    width: 3rem;
    height: 3rem;
  }
</style>

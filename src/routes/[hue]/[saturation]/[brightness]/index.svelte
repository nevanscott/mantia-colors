<script context="module">
  export const prerender = true;

  export async function load({ params, fetch, session, stuff }) {
    return {
      props: {...params}
    };
  }
</script>

<script>
  import Swatch from '$lib/Swatch.svelte';
  import Picker from '$lib/Picker.svelte';

  export let hue;
  export let saturation;
  export let brightness;
</script>

<svelte:head>
	<title>HSB({hue},{saturation},{brightness}) | Mantia Colors</title>
</svelte:head>

<Swatch {hue} {saturation} {brightness} />

<br /><br />

<Picker {hue} {saturation} {brightness} />

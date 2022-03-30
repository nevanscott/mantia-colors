<script context="module">
  export async function load({ params, fetch, session, stuff }) {
    return {
      props: {...params}
    };
  }
</script>

<script>
  import Swatch from '$lib/Swatch.svelte';
  import Picker from '$lib/Picker.svelte';

  export let hue = 0;
  export let saturation = 100;
  export let brightness = 100;
</script>

<svelte:head>
	<title>Mantia Colors</title>
</svelte:head>

<Swatch {hue} {saturation} {brightness} />

<br /><br />

<Picker {hue} {saturation} {brightness} />

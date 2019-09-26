<script>
	export let icon = "chevron";
	export let size = "16"
</script>

<style>

</style>

<svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;"
	xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`}
	aria-hidden="true">
	{#if icon === 'chevron'}
	<path id="up-a" d="M4.61,16.55a.95.95,0,0,1-1.32-1.37l8.05-7.74a1,1,0,0,1,1.32,0l8.05,7.74a.95.95,0,1,1-1.32,1.37L12,9.45Z"/>
	{:else if icon === 'plus'}
	<path d="M9 7V3H7v4H3v2h4v4h2V9h4V7z"></path>
	{/if}
</svg>
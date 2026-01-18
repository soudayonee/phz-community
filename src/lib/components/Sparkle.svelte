<script>
  export let count = 30;

  const sparkles = Array.from({ length: count });
</script>

<div class="sparkle-container">
  <slot />

  <div class="sparkle-overlay">
    {#each sparkles as _, i}
      <span
        class={`sparkle ${i + 1}`}
        style="
          left: {Math.random() * 100}%;
          top: {Math.random() * 100}%;
          animation-delay: {Math.random() * 2}s;
          animation-duration: {1.5 + Math.random()}s;
        "
      ></span>
    {/each}
  </div>
</div>

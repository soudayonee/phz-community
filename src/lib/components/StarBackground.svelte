<script>
  import { onMount } from "svelte";

  let shootingStars = [];
  let starIdCounter = 0;

  function spawnShootingStar() {
    const id = `star-${Date.now()}-${starIdCounter++}`;

    shootingStars = [
      ...shootingStars,
      {
        id,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.4,
        duration: 1000 + Math.random() * 600,
      },
    ];

    setTimeout(() => {
      shootingStars = shootingStars.filter((s) => s.id !== id);
    }, 1800);
  }

  function randomLoop() {
    const delay = 2000 + Math.random() * 3000;
    setTimeout(() => {
      spawnShootingStar();
      randomLoop();
    }, delay);
  }

  onMount(() => {
    randomLoop();
  });
</script>

<div class="starfield">
  <div class="stars"></div>

  {#each shootingStars as star (star.id)}
    <div
      class="shooting-star"
      style="
        left: {star.x}px;
        top: {star.y}px;
        animation-duration: {star.duration}ms;
      "
    ></div>
  {/each}
</div>

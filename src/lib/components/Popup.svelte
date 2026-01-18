<script>
  import { scale } from "svelte/transition";

  export let open = false;
  //   let flipped = false;
</script>

{#if open}
  <button
    class="fixed inset-0 w-full bg-black/50 flex items-center justify-center z-50"
    on:click={() => (open = false)}
  >
    <div
      class="bg-gray-800 rounded-lg max-w-lg w-full mx-4 overflow-hidden shadow-lg p-3"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      on:click|stopPropagation
      on:keydown|stopPropagation
      transition:scale={{ duration: 300 }}
    >
      <slot />
    </div>

    <!-- KONSEP INI AKAN MENDATANG -->
    <!-- <button
      class="scene max-w-lg max-h-157 w-full h-full mx-4"
      on:click={() => (flipped = !flipped)}
    >
      <div class="card" class:flipped>
        <div class="layer front">
          <div class="p-6 rounded-lg w-full">
            <slot />
          </div>
        </div>

        <div class="layer middle bg-gray-800"></div>

        <div class="layer back">
          <slot name="back" />
        </div>
      </div>
    </button> -->
  </button>
{/if}

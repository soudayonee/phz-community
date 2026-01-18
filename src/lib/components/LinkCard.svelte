<script>
  import CopyLink from "./CopyLink.svelte";
  import Popup from "./Popup.svelte";
  import { WhatsappLogo, X } from "phosphor-svelte";
  import { fly } from "svelte/transition";

  export let href = "";
  export let title = "";
  export let description = "";
  export let introText = "";
  export let type = "link" | "button";

  let showPopup = false;
  let copied = false;
</script>

{#if type === "button"}
  <button class="link-card" on:click={() => (showPopup = true)}>
    <div class="flex items-center">
      <slot name="avatar" />

      <div class="flex flex-col ml-5 text-left">
        <h4 class="text-[1rem] font-bold">{title}</h4>
        <p class="text-xs opacity-75">{description}</p>
      </div>

      <!-- <button
      class="text-2xl px-3"
      on:click|stopPropagation={() => (showPopup = true)}
    >
      :
    </button> -->
    </div>
  </button>

  <Popup bind:open={showPopup}>
    <div class="flex justify-between">
      <h5 class="font-semibold text-left">Intro Grup</h5>
      <button
        on:click={() => (showPopup = false)}
        class="hover:text-gray-400 cursor-pointer"
        ><X size={22} weight="bold" /></button
      >
    </div>
    <pre
      class="whitespace-pre-wrap text-xs text-left p-4 rounded-md my-2 bg-gray-700">
      {introText}
  </pre>

    <p class="text-[10px] text-left text-red-500 font-medium">
      *Harap mengisi intro dengan benar, agar member dan admin bisa saling
      mengenal
    </p>

    <CopyLink
      value={introText}
      label="Copy Intro"
      labelCopied="Berhasil!"
      className="mt-4"
      onclick={() => (copied = true)}
    />

    {#if copied}
      <p class="text-sm text-center text-green-500 font-medium mt-4 underline">
        Intro berhasil di copy! Silahkan bergabung ke grup
      </p>
      <a
        {href}
        class="btn flex mt-4 w-full items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebe57] cursor-pointer"
        ><WhatsappLogo size={24} weight="fill" /> Join Grup</a
      >
    {:else}
      <p class="text-sm text-center text-red-500 font-medium mt-4 underline">
        Copy intro terlebih dahulu sebelum bergabung ke grup
      </p>
      <button
        class="btn flex mt-4 w-full items-center justify-center gap-2 bg-gray-600 cursor-not-allowed"
        disabled
      >
        <WhatsappLogo size={24} weight="fill" /> Join Grup
      </button>
    {/if}

    <!-- <div
    class="w-full py-6 rounded-lg flex flex-col items-center gap-3 px-6"
    style="background-image: url(/src/lib/assets/images/elaina-background.jpg); background-size: cover; background-position: top;background-repeat: no-repeat;background-color: rgba(0, 0, 0, 0.5); background-blend-mode: overlay;"
  >
    <slot name="popup-thumbnail" />
    <h2 class="text-lg font-bold">{title}</h2>
  </div>
  <slot name="popup-content">
    <div class="pb-6 flex flex-col">

      <CopyLink value={href} label="Copy Intro" labelCopied="Berhasil!" />
    </div>
  </slot> -->
  </Popup>
{:else}
  <a {href} class="link-card" target="_blank" rel="noopener noreferrer">
    <div class="flex items-center">
      <slot name="avatar" />

      <div class="flex flex-col ml-5 text-left">
        <h4 class="text-[1rem] font-bold">{title}</h4>
        <p class="text-xs opacity-75">{description}</p>
      </div>
    </div>
  </a>
{/if}

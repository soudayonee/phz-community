<script>
  import { Check, Clipboard } from "phosphor-svelte";

  export let value = "";
  export let label = "Copy Link";
  export let labelCopied = "Copied!";
  export let className = "";
  export let onclick = () => {};

  let copied = false;

  async function copy() {
    // Modern API
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value);
        success();
        return;
      } catch (e) {
        // lanjut ke fallback
      }
    }

    // Fallback (WAJIB untuk iOS)
    fallbackCopy(value);
  }

  function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";

    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    try {
      document.execCommand("copy");
      success();
    } catch (e) {
      alert("Copy gagal, tap & tahan manual");
    }

    document.body.removeChild(textarea);
  }

  function success() {
    copied = true;
    setTimeout(() => (copied = false), 1200);
  }
</script>

<button
  on:click={() => {
    copy();
    onclick();
  }}
  class="btn {className} flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 cursor-pointer"
>
  {#if copied}
    <Check size={20} weight="bold" />{labelCopied}
  {:else}
    <Clipboard size={20} weight="bold" />
    {label}
  {/if}
</button>

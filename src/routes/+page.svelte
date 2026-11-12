<script>
  import phzCommunity from "$lib/assets/images/phz-community.png";
  import elainaHatFront from "$lib/assets/images/elaina-hat-front.png";
  import elainaHatBack from "$lib/assets/images/elaina-hat-back.png";

  import phzGroup from "$lib/assets/images/phz-new-logo.jpeg";
  import yrpbGroup from "$lib/assets/images/yorepiblu-logo.jpeg";
  import LinkCard from "$lib/components/LinkCard.svelte";
  import StarBackground from "$lib/components/StarBackground.svelte";
  import { FacebookLogo, TiktokLogo } from "phosphor-svelte";
  import Sparkle from "$lib/components/Sparkle.svelte";
</script>

<StarBackground />

<div class="min-h-dvh flex justify-center px-4 py-8">
  <div class="relative w-full max-w-110">
    <header class="mb-6 text-center">
      <Sparkle count={50}>
        <img
          src={phzCommunity}
          alt="Pizza Hat Crown Community Logo"
          class="mx-auto w-64 h-auto pb-3 no-user-select"
        />
      </Sparkle>
      <h1 class="text-xl tracking-wide header-font sr-only">
        Pizza Hat Crown Community
      </h1>
      <p class="mt-1 text-[14px] opacity-75 header-font">
        Komunitas dimana kamu bisa mencari dan mendapatkan teman dari berbagai
        daerah, bahkan negara! <br /> <span class="font-semibold text-[#f4f4f4]">Join sekarang!</span>
      </p>
    </header>

    <div
      class="mb-6 marquee border-b-4 border-b-[#fee34c] border-t-[#f44336] border-t-4 font-medium"
    >
      <span>
        🍕 Selamat datang di pizza hat • Patuhi peraturan grup • dapatkan teman
        baru • Selamat bergabung! 🍕
      </span>
    </div>

    <div class="grid gap-4">
      <LinkCard
        href="https://chat.whatsapp.com/BuguV8ZV7YU4Yi5zkERZuu"
        title="Pizza Hat Crown"
        description="Grup utama komunitas PHZ yang sudah diisi 280+ member"
        introText={"\n*Welcome To Hat Pizza Hut 🍕* \n\n✙ *Member Baru Wajib Intro*\n\n✙════════════════✙\n• |     ```Kartu Intro```\n• | ✿ *Nama*        :\n• | ✿ *Umur*        :\n• | ✿ *Kelas*       :\n• | ✿ *Asal*        : \n• | ✿ *Gender*      :\n• | ✿ *Hoby*        : \n• | ✿ *Waifu/Husbu* :\n✙════════════════✙\n\n*Semoga betah member baru*"}
        type="button"
      >
        <div slot="avatar" class="relative avatar-wrapper">
          <img src={elainaHatBack} alt="Elaina Hat Back" class="hat hat-back" />
          <img
            src={elainaHatFront}
            alt="Elaina Hat Front"
            class="hat hat-front"
          />
          <img src={phzGroup} alt="Pizza Hat Crown Logo" class="avatar" />
        </div>

        <div slot="popup-thumbnail">
          <img
            src={phzGroup}
            alt="Pizza Hat Crown Logo"
            class="w-24 h-24 rounded-lg"
          />
        </div>
      </LinkCard>

      <LinkCard
        href="https://chat.whatsapp.com/ChudkqTLzQQKqgMbqNEjw9"
        title="Yorepiblu"
        description="Grup santai untuk Anda yang ingin mulai ngobrol dengan orang baru"
        introText={"\n*Welcome To YOREPIBLU* \n\n✙ *Member Baru Wajib Intro*\n\n✙════════════════✙\n• |     ```Kartu Intro```\n• | ✿ *Nama*        :\n• | ✿ *Umur*        :\n• | ✿ *Kelas*       :\n• | ✿ *Asal*        : \n• | ✿ *Gender*      :\n• | ✿ *Hoby*        : \n• | ✿ *Waifu/Husbu* :\n✙════════════════✙\n\n*Semoga betah member baru*"}
        type="button"
      >
        <div slot="avatar" class="avatar-wrapper yorepiblu">
          <img src={yrpbGroup} alt="Yorepiblu Logo" class="avatar" />
        </div>
      </LinkCard>

      <LinkCard
        href="https://www.tiktok.com/@pizhat_asik"
        title="PHZ Tiktok"
        description="Follow Tiktok Pizza Hat Crown untuk konten dan meme yang lucu"
        type="link"
      >
        <div slot="avatar" class="avatar-wrapper m-auto">
          <TiktokLogo size={50} />
        </div>
      </LinkCard>

      <LinkCard
        href="https://facebook.com/groups/3633373580281347"
        title="PHZ Facebook Group"
        description="Join grop Facebook Pizza Hat Crown untuk update terbaru"
        type="link"
      >
        <div slot="avatar" class="avatar-wrapper m-auto">
          <FacebookLogo size={50} />
        </div>
      </LinkCard>
    </div>

    <footer class="text-xs text-center mt-7 opacity-60">
      Created by <a href="https://naufaladityayahya.me" class="hover:underline"
        >Naufal AY</a
      >
      & Pizza Hat Crown Team<br />
      &copy; 2026 Pizza Hat Crown Community
    </footer>
  </div>
</div>

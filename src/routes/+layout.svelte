<script lang="ts">
  import logo from "$lib/assets/phz-web-logo.png";
  import ogImage from "$lib/assets/phz-community-og-banner.jpeg";

  import "../app.css";
</script>

<svelte:head>
  <title>Pizza Hat Crown Community</title>

  <meta
    name="description"
    content="PHZ adalah sebuah grup komunitas yang dimana kamu bisa mencari dan mendapatkan teman dari berbagai daerah, bahkan negara! Penasaran? Gabung sekarang!"
  />
  <meta
    name="keywords"
    content="Pizza Hat Crown, PHZ Community, Komunitas, Teman, Daerah, Negara, Grup WhatsApp, Sosial, Linktree, Teman Baru, Chatting, Networking, Pizza Hat, PHZ, Komunitas Online, Grup Chat, Teman Dunia Maya, Teman Baru, Komunitas Sosial"
  />
  <meta name="application-name" content="Pizza Hat Crown Community" />
  <meta name="author" content="Naufal AY" />
  <meta name="copyright" content="Naufal AY, Pizza Hat Crown Community" />

  <link rel="icon" type="image/png" sizes="16x16" href={logo} />

  <link rel="icon" type="image/png" sizes="32x32" href={logo} />

  <link rel="apple-touch-icon" href={logo} />

  <meta name="theme-color" content="#0d1117" />
  <meta name="msapplication-TileColor" content="#0d1117" />

  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />

  <meta property="og:title" content="Pizza Hat Crown Community" />
  <meta
    property="og:description"
    content="PHZ adalah sebuah grup komunitas yang dimana kamu bisa mencari dan mendapatkan teman dari berbagai daerah, bahkan negara! Penasaran? Gabung sekarang!"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://phz-community.vercel.app/" />
  <meta
    property="og:image"
    content={`https://phz-community.vercel.app${ogImage}`}
  />
  <meta property="og:site_name" content="Pizza Hat Crown Community" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Pizza Hat Crown Community" />
  <meta
    name="twitter:description"
    content="PHZ adalah sebuah grup komunitas yang dimana kamu bisa mencari dan mendapatkan teman dari berbagai daerah, bahkan negara! Penasaran? Gabung sekarang!"
  />
  <meta
    name="twitter:image"
    content={`https://phz-community.vercel.app${ogImage}`}
  />

  <link rel="canonical" href="https://phz-community.vercel.app/" />
  <link
    rel="alternate"
    hreflang="id"
    href="https://phz-community.vercel.app/"
  />
  <link
    rel="alternate"
    hreflang="x-default"
    href="https://phz-community.vercel.app/"
  />

  <meta
    http-equiv="content-security-policy"
    content="
          default-src 'self';
          img-src 'self' https: data:;
          style-src 'self' 'unsafe-inline' https:;
          script-src 'self' 'unsafe-inline' https:;
          font-src 'self' https: data:;
        "
  />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Pizza Hat Crown Community",
      "url": "https://phz-community.vercel.app",
      "logo": `https://phz-community.vercel.app${logo}`,
      "description": "PHZ adalah sebuah grup komunitas yang dimana kamu bisa mencari dan mendapatkan teman dari berbagai daerah, bahkan negara!",
      "sameAs": [
        "https://chat.whatsapp.com/BuguV8ZV7YU4Yi5zkERZuu",
        "https://www.tiktok.com/@pizhat_asik",
        "https://facebook.com/groups/3633373580281347"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Community Support",
        "areaServed": "ID",
        "availableLanguage": "id"
      }
    }
  </script>

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Pizza Hat Crown Community",
      "description": "PHZ adalah sebuah grup komunitas yang dimana kamu bisa mencari dan mendapatkan teman dari berbagai daerah, bahkan negara! Penasaran? Gabung sekarang!",
      "url": "https://phz-community.vercel.app",
      "applicationCategory": "SocialNetworking",
      "operatingSystem": "All",
      "creator": {
        "@type": "Person",
        "name": "Naufal Aditya Yahya",
        "url": "https://naufaladityayahya.me"
      },
      "image": `https://phz-community.vercel.app${ogImage}`
    }
  </script>
</svelte:head>

<slot />

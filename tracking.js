(() => {
  let loaded = false;

  function loadScript(src, attrs = {}) {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value));
    document.head.appendChild(script);
  }

  function boot() {
    if (loaded) return;
    const config = window.AVENZO_TRACKING || {};
    if (!config.enabled || !config.consent) return;

    loaded = true;

    if (config.gtmId) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      loadScript("https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(config.gtmId));
      return;
    }

    if (config.ga4Id) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", config.ga4Id);
      loadScript("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(config.ga4Id));
    }

    if (config.metaPixelId) {
      !function(f,b,e,v,n,t,s){
        if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];
        t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
      }(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
      window.fbq("init", config.metaPixelId);
      window.fbq("track", "PageView");
    }
  }

  window.addEventListener("avenzo:tracking-consent", event => {
    if (event.detail === true) {
      window.AVENZO_TRACKING = { ...(window.AVENZO_TRACKING || {}), consent: true };
      boot();
    }
  });

  boot();
})();

const Notifyer = {
  async init() {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("Permissão negada");
    }

    navigator.serviceWorker.register('sw.js');
    Notification.requestPermission(function (result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification('Notification with ServiceWorker');
        });
      }
    });
    try {

      // if (window.external.msIsSiteMode()) {
      // alert('Tab away from this window.');
      // window.setTimeout("window.external.msSiteModeActivate()", 2000);
      // }
    }
    catch (ex) {
      // Fail silently.
    }

  },
  notify() {
    new Notification("Qualquer título", {
      body: 'Teste de notificação'
    })
  }
};

export { Notifyer }
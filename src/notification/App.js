import { Notifyer } from './Notifyer'

const App = {
  start: async () => {
    try {
      await Notifyer.init();
      Notifyer.notify();
    } catch (err) {
      console.log(err.message)
    }
  }
}

export { App }
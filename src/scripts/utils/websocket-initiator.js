import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const movie = message.data;
    NotificationHelper.sendNotification({
      title: movie,
      options: {
        // kesalahan materi, perlu perubahan konfigurasi, jadi skip dulu
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`,
      },
    });
  },
};

export default WebSocketInitiator;
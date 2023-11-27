import iziToast from 'izitoast';

const options = {
  timeout: 3000,
  close: false,
  closeOnClick: true,
  icon: null,
  position: 'topLeft',
};

export default class Messages {
  static success(message) {
    iziToast.success({
      title: 'Success',
      titleColor: 'green',
      message: message,
      messageColor: 'green',
      progressBarColor: 'green',
      ...options,
    });
  }
  static error(message) {
    iziToast.error({
      title: 'Error',
      titleColor: 'red',
      message: message,
      messageColor: 'red',
      progressBarColor: 'red',
      ...options,
    });
  }
  static warning(message) {
    iziToast.warning({
      title: 'Warning',
      message: message,
      titleColor: 'red',
      messageColor: 'red',
      progressBarColor: 'red',
      ...options,
    });
  }
}

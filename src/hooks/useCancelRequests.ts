import instance from '@/libs/request';

// * 取消全部在发送的请求
export const useCancelRequest = (): void => {
  instance.cancelAllRequest();
};

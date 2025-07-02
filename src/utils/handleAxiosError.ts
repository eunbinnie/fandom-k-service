import axios from 'axios';

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const serverMessage =
      error.response?.data.error?.message || '서버에서 오류가 발생했습니다.';
    throw new Error(serverMessage);
  } else {
    throw new Error('알 수 없는 오류가 발생했습니다.');
  }
};

import axiosInstance from '../settings/axios';

type Res = {
  message: string;
  content: any;
  error: boolean;
};

const GET = async (url: string): Promise<Res> => {
  let res: Res = {
    message: '500. Internal Server Error',
    content: {},
    error: true,
  };

  try {
    const response = await axiosInstance.get(url);

    if (response.status !== 200) {
      throw new Error(response.data);
    }

    res = {
      message: response.data?.message || '',
      content: response.data,
      error: false,
    };
  } catch (error: any) {
    console.error(error);
    res = {
      message: error.message,
      content: error,
      error: true,
    };
  }

  return res;
};

const POST = async (url: string, body?: any) => {
  let res: Res = {
    message: '500. Internal Server Error',
    content: {},
    error: true,
  };

  if (!body) {
    body = {};
  }

  try {
    const response = await axiosInstance.post(url, body);

    if (response.status !== 200) {
      throw new Error(response.data);
    }

    res = {
      message: response.data?.message || '',
      content: response.data,
      error: false,
    };
  } catch (error: any) {
    console.error(error);
    res = {
      message: error.message,
      content: error,
      error: true,
    };
  }

  return res;
};

export {GET, POST};

import { useEffect, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  hasError: boolean;
  error: null | {
    code: number;
    message: string;
  };
}

const localCache: Record<string, any> = {};

export const useFetch = <T = unknown>(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      console.log('usando cache');
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });

      return;
    }

    setLoadingState();
    const resp = await fetch(url);

    //sleep

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });

      return;
    }

    const data = await resp.json();

    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    //Manejo del cache
    localCache[url] = data;

    console.log({ data });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

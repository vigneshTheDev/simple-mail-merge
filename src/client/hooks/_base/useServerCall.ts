import { useEffect, useState } from 'react';

type AsyncFunction<T> = () => Promise<T>;

export function useServerCall<T>(fn: AsyncFunction<T>) {
  const [data, setData] = useState<T | null>();
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(null);
    setLoading(true);
    setError(null);

    fn()
      .then((data) => {
        setData(data);
      })
      .catch((ex: Error) => {
        setError(ex);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    error,
    loading,
  };
}

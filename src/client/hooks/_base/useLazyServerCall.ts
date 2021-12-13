import { useCallback, useEffect, useState } from "react";

type AsyncFunction<T, U extends any[]> = (...args: U) => Promise<T>;

export function useLazyServerCall<T, U extends any[]>(fn: AsyncFunction<T, U>) {
  const [data, setData] = useState<T | null>();
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState(false);

  const executor = useCallback((...args: U): Promise<{ data?: T; error?: any }> => {
    setData(null);
    setLoading(true);
    setError(null);

    return fn(...args)
      .then((data) => {
        setData(data);
        return { data };
      })
      .catch((ex: Error) => {
        setError(ex);
        return { error: ex };
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [
    executor,
    {
      data,
      error,
      loading,
    },
  ] as const;
}

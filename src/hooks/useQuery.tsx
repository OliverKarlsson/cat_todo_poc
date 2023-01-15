import { useCallback, useState } from "react";

type Status = "initial" | "loading" | "loaded" | "failed";

type TypeGuard<T> = (dto: unknown) => dto is T;

interface RequestState<T> {
  status: Status;
  response: null | T;
}

/**
 * Util hook to handle fetching of queries.
 * @returns the call state & the callback function to start fetching the query.
 * @beta
 */
const useQuery = <T extends unknown>(
  name: string,
  url: string,
  dtoTypeGuard: TypeGuard<T>
) => {
  const [callState, setCallState] = useState<RequestState<T>>({
    status: "initial",
    response: null,
  });

  const startFetch = useCallback(() => {
    setCallState({ status: "loading", response: null });
    fetch(url)
      .then((response) => response.json())
      .then((response: unknown) => {
        if (dtoTypeGuard(response)) {
          setCallState({ status: "loaded", response });
        } else {
          throw new Error(`Received wrongfull response when fetching ${name}.`);
        }
      })
      .catch((e) => {
        console.error(e);
        setCallState({ status: "failed", response: null });
      });
  }, [name, url, dtoTypeGuard, setCallState]);

  return { callState, startFetch };
};

export default useQuery;

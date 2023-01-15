import { useCallback, useState } from "react";

type Status = "initial" | "loading" | "loaded" | "failed";

type TypeGuard<T> = (dto: unknown) => dto is T;

interface RequestState<T> {
  status: Status;
  response: null | T;
}

/**
 * Util hook to handle fetching of commands.
 * @remarks
 * - Providing a dtoTypeGuard indicates that there is a response that should be handled.
 * @returns the call state & the callback function to send the command.
 * @beta
 */
const useCommand = <T extends {}, U extends unknown>(
  name: string,
  url: string,
  command: "POST" | "PUT" | "DELETE" | "PATCH",
  dtoTypeGuard?: TypeGuard<U>
) => {
  const [callState, setCallState] = useState<RequestState<U>>({
    status: "initial",
    response: null,
  });

  const sendCommand = useCallback(
    (body: T) => {
      setCallState({ status: "loading", response: null });
      fetch(url, { method: command, body: JSON.stringify(body) })
        .then((response) => response.json())
        .then((response: unknown) => {
          if (!dtoTypeGuard) {
            setCallState({ status: "loaded", response: null });
          } else if (dtoTypeGuard(response)) {
            setCallState({ status: "loaded", response });
          } else {
            throw new Error(
              `Received wrongfull response when fetching ${name}.`
            );
          }
        })
        .catch((e) => {
          console.error(e);
          setCallState({ status: "failed", response: null });
        });
    },
    [name, url, command, dtoTypeGuard, setCallState]
  );

  return { callState, sendCommand };
};

export default useCommand;

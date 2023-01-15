import { render, waitFor } from "@testing-library/react";
import { useEffect } from "react";

import useSaveTaskLists from "../useSaveTaskLists";

describe("useSaveTaskLists", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    (console.error as unknown as jest.MockInstance<any, any>).mockClear();
  });

  it("Should have correct initial values", () => {
    const TestComponent = () => {
      const { saveTaskLists } = useSaveTaskLists();

      return <>{JSON.stringify(saveTaskLists)}</>;
    };

    const { container } = render(<TestComponent />);

    expect(container?.textContent).toMatchInlineSnapshot(
      `"{\\"status\\":\\"initial\\",\\"response\\":null}"`
    );
  });

  it("Should have correct values after starting a save", async () => {
    const fetchPromise = new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve({ json: () => ({ id: 0 }) });
      }, 2000);
    });
    jest
      .spyOn(global, "fetch")
      .mockImplementation((() => fetchPromise) as unknown as any);

    const TestComponent = () => {
      const { saveTaskLists, startSaveTaskLists } = useSaveTaskLists();

      useEffect(() => {
        startSaveTaskLists({ todos: [], dones: [] });
      }, [startSaveTaskLists]);

      return <>{JSON.stringify(saveTaskLists)}</>;
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      expect(container?.textContent).toMatch(
        '{"status":"loading","response":null}'
      );
    });
  });

  it("Should store correct values after a successfull save", async () => {
    const fetchPromise = new Promise<any>((resolve) => {
      resolve({ json: () => ({ id: 0 }) });
    });
    jest
      .spyOn(global, "fetch")
      .mockImplementation((() => fetchPromise) as unknown as any);

    const TestComponent = () => {
      const { saveTaskLists, startSaveTaskLists } = useSaveTaskLists();

      useEffect(() => {
        startSaveTaskLists({ todos: [], dones: [] });
      }, [startSaveTaskLists]);

      return <>{JSON.stringify(saveTaskLists)}</>;
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      expect(container?.textContent).toMatch(
        '{"status":"loaded","response":{"id":0}}'
      );
    });
  });

  it("Should have correct values after a save fails", async () => {
    const fetchPromise = new Promise<any>((resolve, reject) => {
      reject();
    });
    jest
      .spyOn(global, "fetch")
      .mockImplementation((() => fetchPromise) as unknown as any);

    const TestComponent = () => {
      const { saveTaskLists, startSaveTaskLists } = useSaveTaskLists();

      useEffect(() => {
        startSaveTaskLists({ todos: [], dones: [] });
      }, [startSaveTaskLists]);

      return <>{JSON.stringify(saveTaskLists)}</>;
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      expect(container?.textContent).toMatch(
        '{"status":"failed","response":null}'
      );
    });
  });

  it("Should handle wrongful DTOs as errors", async () => {
    const fetchPromise = new Promise<any>((resolve) => {
      resolve({ json: () => ({ guid: 0 }) });
    });
    jest
      .spyOn(global, "fetch")
      .mockImplementation((() => fetchPromise) as unknown as any);

    const TestComponent = () => {
      const { saveTaskLists, startSaveTaskLists } = useSaveTaskLists();

      useEffect(() => {
        startSaveTaskLists({ todos: [], dones: [] });
      }, [startSaveTaskLists]);

      return <>{JSON.stringify(saveTaskLists)}</>;
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      expect(container?.textContent).toMatch(
        '{"status":"failed","response":null}'
      );
    });
  });

  it("Should handle save error messages", async () => {
    const fetchPromise = new Promise<any>((resolve) => {
      resolve({
        json: () => ({ errorMsg: "you are obviously doing something wrong" }),
      });
    });
    jest
      .spyOn(global, "fetch")
      .mockImplementation((() => fetchPromise) as unknown as any);

    const TestComponent = () => {
      const { saveTaskLists, startSaveTaskLists } = useSaveTaskLists();

      useEffect(() => {
        startSaveTaskLists({ todos: [], dones: [] });
      }, [startSaveTaskLists]);

      return <>{JSON.stringify(saveTaskLists)}</>;
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      expect(container?.textContent).toMatch(
        '{"status":"loaded","response":{"errorMsg":"you are obviously doing something wrong"}}'
      );
    });
  });
});

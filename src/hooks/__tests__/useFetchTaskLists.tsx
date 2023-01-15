import { render, waitFor } from "@testing-library/react";
import { useEffect } from "react";
import useFetchTaskLists from "../useFetchTaskLists";

describe("useFetchTaskLists", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    (console.error as unknown as jest.MockInstance<any, any>).mockClear();
  });

  it("Should have correct initial values", () => {
    const TestComponent = () => {
      const { taskLists } = useFetchTaskLists();

      return <>{JSON.stringify(taskLists)}</>;
    };

    const { container } = render(<TestComponent />);

    expect(container?.textContent).toMatchInlineSnapshot(
      `"{\\"status\\":\\"initial\\",\\"response\\":null}"`
    );
  });

  it("Should have correct values after starting a fetch", async () => {
    const fetchPromise = new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve({ json: () => ({ todos: [], dones: [] }) });
      }, 2000);
    });
    jest
      .spyOn(global, "fetch")
      .mockImplementation((() => fetchPromise) as unknown as any);

    const TestComponent = () => {
      const { taskLists, fetchTaskLists } = useFetchTaskLists();

      useEffect(fetchTaskLists, [fetchTaskLists]);

      return <>{JSON.stringify(taskLists)}</>;
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      expect(container?.textContent).toMatch(
        '{"status":"loading","response":null}'
      );
    });
  });

  it("Should store correct values after a successfull fetch", async () => {
    const fetchPromise = new Promise<any>((resolve) => {
      resolve({ json: () => ({ todos: [], dones: [] }) });
    });
    jest
      .spyOn(global, "fetch")
      .mockImplementation((() => fetchPromise) as unknown as any);

    const TestComponent = () => {
      const { taskLists, fetchTaskLists } = useFetchTaskLists();

      useEffect(fetchTaskLists, [fetchTaskLists]);

      return <>{JSON.stringify(taskLists)}</>;
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      expect(container?.textContent).toMatch(
        '{"status":"loaded","response":{"todos":[],"dones":[]}}'
      );
    });
  });

  it("Should have correct values after a fetch fails", async () => {
    const fetchPromise = new Promise<any>((resolve, reject) => {
      reject();
    });
    jest
      .spyOn(global, "fetch")
      .mockImplementation((() => fetchPromise) as unknown as any);

    const TestComponent = () => {
      const { taskLists, fetchTaskLists } = useFetchTaskLists();

      useEffect(fetchTaskLists, [fetchTaskLists]);

      return <>{JSON.stringify(taskLists)}</>;
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
      resolve({ json: () => ({ foodos: [], doones: [] }) });
    });
    jest
      .spyOn(global, "fetch")
      .mockImplementation((() => fetchPromise) as unknown as any);

    const TestComponent = () => {
      const { taskLists, fetchTaskLists } = useFetchTaskLists();

      useEffect(fetchTaskLists, [fetchTaskLists]);

      return <>{JSON.stringify(taskLists)}</>;
    };

    const { container } = render(<TestComponent />);

    await waitFor(() => {
      expect(container?.textContent).toMatch(
        '{"status":"failed","response":null}'
      );
    });
  });
});

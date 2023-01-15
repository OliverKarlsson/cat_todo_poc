type SaveTaskListsResponse =
  | {
      id: number;
    }
  | {
      errorMsg: string;
    };

export default SaveTaskListsResponse;

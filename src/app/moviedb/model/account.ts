export interface Account {
  avatar: {
    gravatar: {
      hash: string;
    };
  };

  id: number;
  name: string;
  username: string;
}

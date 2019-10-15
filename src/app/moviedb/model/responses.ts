export interface NewTokenResp {
  success: boolean;
  expire_at: string;
  request_token: string;
}

export interface NewSessionResp {
  success: boolean;
  session_id: string;
}

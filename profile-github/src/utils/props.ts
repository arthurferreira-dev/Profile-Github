import type { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface DataType {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

export interface StateProps extends Props {
  state: string;
}
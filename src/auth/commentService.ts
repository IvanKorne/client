import axios from "axios";
import { CommentGet, CommentPost } from "../lib/types";

export const postCommentRequest = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/comment/${symbol}`,
      {
        title,
        content,
      }
    );

    return data as CommentPost;
  } catch (e) {
    console.log(e);
  }
};

export const getCommentRequest = async (symbol: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/comment/?Symbol=${symbol}`
    );

    return data as CommentGet[];
  } catch (e) {
    console.log(e);
  }
};

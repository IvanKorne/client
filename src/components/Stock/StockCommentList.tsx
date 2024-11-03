import React from "react";
import { CommentGet } from "../../lib/types";
import StockItem from "./StockItem";

type Props = {
  comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
  return (
    <>
      {comments
        ? comments.map((comment) => {
            return <StockItem comment={comment} />;
          })
        : null}
    </>
  );
};

export default StockCommentList;

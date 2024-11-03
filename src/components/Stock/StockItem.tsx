import React from "react";
import { CommentGet } from "../../lib/types";

type StockItemProps = {
  comment: CommentGet;
};

const StockItem = ({ comment }: StockItemProps) => {
  return (
    <div className="relative grid w-full grid-cols-1 gap-10 p-4 mb-8 ml-4 bg-white border rounded-lg shadow-md">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative overflow-hidden text-xl truncate whitespace-nowrap">
              {comment.title}
            </p>
          </div>
          <p className="text-xs text-blue-800">@{comment.createdBy}</p>
        </div>
      </div>
      <p className="-mt-4 text-sm text-gray-500">{comment.content}</p>
    </div>
  );
};

export default StockItem;

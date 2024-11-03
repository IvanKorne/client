import { toast } from "react-toastify";
import {
  getCommentRequest,
  postCommentRequest,
} from "../../auth/commentService";
import StockCommentForm from "./StockCommentForm";
import { useEffect, useState } from "react";
import { CommentGet } from "../../lib/types";
import Spinner from "../Spinner";
import StockCommentList from "./StockCommentList";

type StockCommentProps = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: StockCommentProps) => {
  const [comments, setComments] = useState<CommentGet[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    setIsLoading(true);
    try {
      const data = await getCommentRequest(stockSymbol);
      if (data) {
        setComments(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  const handleComment = async (e: CommentFormInputs) => {
    const data = await postCommentRequest(e.title, e.content, stockSymbol);
    if (data) {
      toast.success("Comment made successfully!");
      getComments();
    }
  };
  return (
    <div className="flex flex-col">
      {isLoading ? <Spinner /> : <StockCommentList comments={comments!} />}
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
  );
};

export default StockComment;

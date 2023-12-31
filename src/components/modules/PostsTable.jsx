import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import convertHelpers from "../../utils/helpers/convert.helpers";
import Menue from "./menue";
import { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import { deleteArticle } from "../../services/articleService";
import { toast } from "react-hot-toast";
import ReactPaginate from "react-paginate";

const PostsTable = ({ articles, articlesCount, handlepageChange }) => {
  const navigate = useNavigate();
  const client = useQueryClient();
  const PAGE_SIZE = 10;

  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [deleteSlug, setDeleteSlug] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(articlesCount / PAGE_SIZE);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    if (currentPage) {
      handlepageChange(currentPage);
      console.log(currentPage);
    }
  }, [currentPage]);

  const mutation = useMutation(async (slug) => {
    const data = await deleteArticle(slug);
    if (data.data == "") {
      client.invalidateQueries("Articles");
      toast.success("Article deleted successfully");
    }
    handleCloseAlertDialog();
  });

  useEffect(() => {}, [deleteSlug]);

  const handleEdit = (article) => {
    navigate(`/article/edit/${article.slug}`, {
      state: {
        article: article,
      },
    });
  };

  const handleDelete = (slug) => {
    setOpenAlertDialog(true);
    setDeleteSlug(slug);
  };

  const handleCloseAlertDialog = () => {
    setOpenAlertDialog(false);
    setDeleteSlug(null);
  };

  const confirmDeleteHandler = () => {
    if (deleteSlug) {
      console.log(deleteSlug);
      mutation.mutate(deleteSlug);
    }
  };

  return (
    <div className="w-full ">
      <table className="w-full overflow-auto">
        <thead className="bg-silver  ">
          <tr>
            <th className="text-left px-3 py-2">#</th>
            <th className="text-left px-3 py-2">Title</th>
            <th className="text-left px-3 py-2">Author</th>
            <th className="text-left px-3 py-2">Tags</th>
            <th className="text-left px-3 py-2">Excerpt</th>
            <th className="text-left px-3 py-2"></th>
            <th className="text-left px-3 py-2">Created</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((item, index) => (
            <tr key={index}>
              <td className="text-left px-3 py-2">{index}</td>
              <td className="text-left px-3 py-2">{item.title}</td>

              <td className="text-left px-3 py-2">
                {item.author && item.author.username
                  ? item.author.username
                  : ""}
              </td>
              <td className="text-left px-3 py-2">{item.tagList.toString()}</td>
              <td className="text-left px-3 py-2">{item.slug}</td>
              <td className="text-left px-3 py-2">
                {convertHelpers.dateConvert(item.createdAt)}
              </td>
              <td className="text-left px-3 py-2">
                <Menue
                  handleEdit={() => handleEdit(item)}
                  handleDelete={() => handleDelete(item.slug)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 text-lg ">
        <ReactPaginate
          previousLabel={
            <span className="text-[#373a3c] hover:text-[#1c7cd5] ">befor</span>
          }
          nextLabel={
            <span className="text-[#373a3c] hover:text-[#1c7cd5]">after</span>
          }
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          pageLinkClassName="block p-1 text-[#373a3c] hover:text-[#fff]"
          containerClassName="flex justify-center items-center gap-2 mt-4"
          pageClassName="rounded-lg bg-[#eceeef] px-1  hover:bg-[#1c7cd5]"
          activeClassName="bg-[#1c7cd5] rounded px-1 text-[#fff]" // Updated class
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>

      <Dialog
        dir="ltr"
        open={openAlertDialog}
        onClose={handleCloseAlertDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "500px", // Adjust the width as per your requirement
            maxWidth: "90vw", // Maximum width, responsive approach
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontFamily: "HelveticaNeue",
          }}
        >
          {"Delete Article"}
        </DialogTitle>
        <Divider sx={{ my: 0.3 }} />
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              fontFamily: "HelveticaNeue",
            }}
          >
            Are you sure to delete Article
          </DialogContentText>
        </DialogContent>
        <Divider sx={{ mt: 3, mb: 0.2 }} />
        <DialogActions>
          <div className="px-4 flex flex-row gap-4">
            <button
              className=" py-1 px-4  text-charcoal-grey rounded border border-1 border-[#dddddd]"
              onClick={handleCloseAlertDialog}
            >
              No
            </button>
            <button
              className=" py-1 px-4  text-white  rounded bg-brick "
              onClick={confirmDeleteHandler}
            >
              Yes
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PostsTable;

import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import convertHelpers from "../../utils/helpers/convert.helpers";
import PaginationRounded from "./PaginationRounded";
import Menue from "./menue";
import { useState } from "react";
import { Divider } from "@mui/material";

const PostsTable = ({ articles }) => {
  const navigate = useNavigate();
  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  const handleEdit = () => {
    navigate("/article/create");
  };

  const handleDelete = () => {
    setOpenAlertDialog(true);
  };

  const handleCloseAlertDialog = () => {
    setOpenAlertDialog(false);
  };

  const confirmDeleteHandler = () => {
    // Display an alert dialog on Delete click
    alert("Are you sure you want to delete?");
  };
  confirmDeleteHandler;

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
                {/* <button>...</button> */}
                <Menue handleEdit={handleEdit} handleDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationRounded />
      <Dialog
        dir="ltr"
        open={openAlertDialog}
        onClose={handleCloseAlertDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            width: '500px', // Adjust the width as per your requirement
            maxWidth: '90vw', // Maximum width, responsive approach
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
        <Divider sx={{ mt: 3,mb:0.2 }} />
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

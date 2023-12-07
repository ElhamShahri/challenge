const PostsTable = () => {
  return (
    <div className="w-full ">
      <table className="w-full overflow-auto">
        <thead className="bg-silver  ">
        <tr  >
          <th className="text-left px-3 py-2" >#</th>
          <th className="text-left px-3 py-2">Title</th>
          <th className="text-left px-3 py-2">Author</th>
          <th className="text-left px-3 py-2">Tags</th>
          <th className="text-left px-3 py-2">Excerpt</th>
          <th className="text-left px-3 py-2"></th>
          <th className="text-left px-3 py-2">Created</th>
        </tr>
        </thead>
        <tr>
          <td className="text-left px-3 py-2" >1</td>
          <td className="text-left px-3 py-2" >Article title</td>
          <td className="text-left px-3 py-2" >@author_Username</td>
          <td className="text-left px-3 py-2" >list of tags</td>
          <td className="text-left px-3 py-2" >First 20 words of article body</td>
          <td className="text-left px-3 py-2" >June 11 ,2019</td>
          <td className="text-left px-3 py-2" >
            <button>...</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default PostsTable;

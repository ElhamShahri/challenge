import convertHelpers from "../../utils/helpers/convert.helpers";

const PostsTable = ({ articles }) => {

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
              
              <td className="text-left px-3 py-2">{item.author && item.author.username?item.author.username:""}</td>
              <td className="text-left px-3 py-2">{item.tagList.toString()}</td>
              <td className="text-left px-3 py-2">
                {item.slug}
              </td>
              <td className="text-left px-3 py-2">{convertHelpers.dateConvert(item.createdAt)}</td>
              <td className="text-left px-3 py-2">
                <button>...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PostsTable;

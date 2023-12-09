import { useEffect, useState } from "react";
import Tags from "../modules/Tags";
import { useMutation, useQueryClient } from "react-query";
import { createArticle } from "../../services/articleService";
import Loading from "../modules/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ArticleForm = ({ tags, article }) => {
  const navigate = useNavigate();
  const client = useQueryClient();

  const [selectedTag, setSelectedTag] = useState([]);
  const [newArticle, setNewArticle] = useState(article);

  const selectedTagsHandler = (data) => {
    setSelectedTag(data);
  };

  useEffect(() => {
    console.log(selectedTag);
  }, [selectedTag]);

  const handleInputChange = ({ target: { name, value } }) => {
    setNewArticle((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    console.log(newArticle);
  }, [newArticle]);

  const mutation = useMutation(async (article) => {
    const data = await createArticle(article);
    if (data.data && data.data.article) {
      client.invalidateQueries("Articles");
      navigate("/");
      toast.success("Article added successfully");
    }
    console.log(data);
  });

  const addArticleHandler = () => {
    console.log(selectedTag);
    mutation.mutate({
      title: newArticle.title,
      description: newArticle.description,
      body: newArticle.body,
      tagList: selectedTag,
    });
  };

  return (
    <div className="w-full">
      <form>
        <div className="flex flex-col md:flex-row ">
          {/* form */}
          <div className="w-full md:w-2/3 flex flex-col me-3">
            <div className=" w-full flex flex-col mb-6">
              <label className="mb-3 ms-1 text-charcoal-grey">Title</label>
              <input
                className=" rounded p-2 border border-1 border-[#dddddd]"
                placeholder="Title"
                defaultValue={newArticle&& newArticle.title}
                name="title"
                onChange={handleInputChange}
              />
              <div className="mt-1 ">{/* console.error(); */}</div>
            </div>

            <label className="mb-3 ms-1 text-charcoal-grey">Description</label>
            <input
              className="mb-6 rounded p-2 border border-1 border-[#dddddd]"
              placeholder="Description"
              defaultValue={newArticle&& newArticle.description}
              name="description"
              onChange={handleInputChange}
            />
            <label className="mb-3 ms-1 text-charcoal-grey">Body</label>
            <textarea
              className="mb-3 rounded p-2 border border-1 border-[#dddddd]"
              rows="6"
              defaultValue={newArticle&& newArticle.body}
              name="body"
              onChange={handleInputChange}
            ></textarea>
          </div>
          {/* tag */}
          <div className="w-full md:w-1/3 mb-5">
            <Tags data={tags} onTagFormChild={selectedTagsHandler} />
          </div>
        </div>

        {mutation.isLoading ? (
          <div className="w-20">
            <Loading />
          </div>
        ) : (
          <button
            type="button"
            className="mb-4 bg-water-blue px-6 py-2 rounded text-white"
            onClick={addArticleHandler}
          >
            submit
          </button>
        )}
      </form>
    </div>
  );
};
export default ArticleForm;

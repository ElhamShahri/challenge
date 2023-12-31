import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ArticleForm from "../components/templates/ArticleForm";
import { getTags } from "../services/articleService";
import { useQuery } from "react-query";

const NewArticle = () => {
  const [tags, setTags] = useState([]);
  const { isLoading, isError, data, error } = useQuery("Tags", getTags, {
    onSuccess: (data) => {
      console.log("Get data!");
      console.log(data);
    },
  });

  useEffect(() => {
    async function fetchTags() {
      if (data != undefined) {
        if (data && data.data && data.data.tags) {
          setTags(data.data.tags);
        }
      }
    }
    fetchTags();
  }, [data]);

  

  return (
    <MainLayout>
      <div className="w-full h-full py-6 px-7">
        <div className="mb-7">
          <label className="text-4xl">New Article</label>
        </div>
        <ArticleForm tags={tags} article={null} />
      </div>
    </MainLayout>
  );
};

export default NewArticle;

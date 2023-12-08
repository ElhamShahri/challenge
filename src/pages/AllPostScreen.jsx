import { useQuery } from "react-query";
import MainLayout from "../components/layouts/MainLayout";
import PostsTable from "../components/modules/PostsTable";
import { getArticles } from "../services/articleService";
import { useEffect, useState } from "react";
import Loading from "../components/modules/Loading";

const AllPostScreen = () => {
  const [articles, setArticles] = useState([]);

  const { isLoading, isError, data, error } = useQuery(
    "Articles",
    getArticles,
    {
      onSuccess: (data) => {
        console.log("Get data!");
        console.log(data);
     
      },
    }
  );

  useEffect(() => {
    async function fetchAtricles() {
      if (data != undefined) {
 
        if (data&& data.data && data.data.articles) {
          setArticles(data.data.articles);
        }
      }
    }
    fetchAtricles()
  }, [data])

  return (
    <MainLayout>
      <div className="w-full h-full py-6 px-7">
        <div className="mb-7">
          <label className="text-4xl">All Posts</label>
        </div>
        {isLoading ? <Loading /> : <PostsTable articles={articles} />}
      </div>
    </MainLayout>
  );
};

export default AllPostScreen;

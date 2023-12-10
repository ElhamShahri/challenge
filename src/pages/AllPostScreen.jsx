import { useQuery } from "react-query";
import MainLayout from "../components/layouts/MainLayout";
import PostsTable from "../components/modules/PostsTable";
import { getArticles } from "../services/articleService";
import { useEffect, useState } from "react";
import Loading from "../components/modules/Loading";
import { useNavigate, useParams } from "react-router-dom";

const AllPostScreen = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [articlesCount, setArticlesCount] = useState(0);

  // const { page } = useParams();
  // console.log(page)

  const handlepageChange = (page) => {
    navigate(`/articles/page/${page}`, { replace: true });
    console.log(page);
  };

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

  // const { isLoading, isError, data, error } = useQuery(
  //   "Articles",
  //   getArticles(page),
  //   {
  //     onSuccess: (data) => {
  //       console.log("Get data!");
  //       console.log(data);
  //     },
  //   }
  // );

  useEffect(() => {
    async function fetchAtricles() {
      if (data != undefined) {
        if (data && data.data && data.data.articles) {
          setArticles(data.data.articles);
          setArticlesCount(data.data.articlesCount);
        }
      }
    }
    fetchAtricles();
  }, [data]);

  return (
    <MainLayout>
      <div className="w-full h-full  py-6 px-7">
        <div className="mb-7">
          <label className="text-4xl">All Posts</label>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <PostsTable
            articles={articles}
            articlesCount={articlesCount}
            handlepageChange={handlepageChange}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default AllPostScreen;

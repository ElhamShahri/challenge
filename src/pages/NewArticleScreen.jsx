import MainLayout from "../components/layouts/MainLayout";
import ArticleForm from "../components/templates/ArticleForm";

const NewArticle = () => {
  return (
    <>
      <MainLayout>
        <div className="w-full h-full py-6 px-7">
          <div className="mb-7">
            <label className="text-4xl">New Article</label>
          </div>
          <ArticleForm />
        </div>
      </MainLayout>
    </>
  );
};

export default NewArticle;

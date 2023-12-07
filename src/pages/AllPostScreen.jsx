
import MainLayout from '../components/layouts/MainLayout';
import PostsTable from '../components/modules/PostsTable';

const AllPostScreen =()=> {

  return (
    <>
      <MainLayout>
        <div className="w-full h-full py-6 px-7">
          <div className="mb-7">
          <label className="text-4xl">All Posts</label>
          </div>
          <PostsTable />
        </div>
       
      </MainLayout>
    </>
  );
}

export default AllPostScreen;

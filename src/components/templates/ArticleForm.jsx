import { useEffect, useState } from "react";
import Tags from "../modules/Tags";

const ArticleForm = ({ tags }) => {

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
              />
              <div className="mt-1 ">{/* console.error(); */}</div>
            </div>

            <label className="mb-3 ms-1 text-charcoal-grey">Description</label>
            <input
              className="mb-6 rounded p-2 border border-1 border-[#dddddd]"
              placeholder="Description"
            />
            <label className="mb-3 ms-1 text-charcoal-grey">Body</label>
            <textarea
              className="mb-3 rounded p-2 border border-1 border-[#dddddd]"
              name="content"
              rows="6"
            ></textarea>
          </div>
          {/* tag */}
          <div className="w-full md:w-1/3 mb-5">
            <Tags data={tags} />
          </div>
        </div>
        <button className="mb-4 bg-water-blue px-6 py-2 rounded text-white">
          submit
        </button>
      </form>
    </div>
  );
};
export default ArticleForm;

const Tags = () => {
  return (
    <div className="w-full flex flex-col overflow-auto">
      <label className="mb-3 text-charcoal-grey">Tags</label>
      <input
        className="mb-3 rounded p-2 border border-1 border-[#dddddd] placeholder-slate-gray"
        placeholder="New tag"
      />
      <div className="w-full h-auto md:h-80 border border-1 rounded border-[#dddddd] "></div>
    </div>
  );
};
export default Tags;

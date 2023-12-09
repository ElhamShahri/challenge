import { useEffect, useState } from "react";

const Tags = ({ data }) => {
  const [tagswithState, setTagswithState] = useState([]);
  useEffect(() => {
    const init = data.map((tagName) => ({
      name: tagName,
      isChecked: false,
    }));
    setTagswithState(init);
    console.log(init);
  }, [data]);

  useEffect(() => {
    console.log(tagswithState);
  }, [tagswithState]);

  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const isChecked = event.target.checked;

    setTagswithState((prevState) =>
      prevState.map((item) =>
        item.name === name
          ? {
              ...item,
              isChecked: isChecked,
            }
          : item
      )
    );
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleAddTag = (newTag) => {
    console.log(newTag);


    setTagswithState((prevState) => {
      const isDuplicate = prevState.some((item) => item.name === newTag);
      if (isDuplicate) {
        return prevState;
      } else {
        return [...prevState, { name: newTag, isChecked: true }];
      }
    });
    

    // setTagswithState((prev) => [...prev, { name: newTag, isChecked: true }]);
  };

  return (
    <div className="w-full flex flex-col overflow-auto">
      <label className="mb-3 text-charcoal-grey">Tags</label>
      <input
        className="mb-3 rounded p-2 border border-1 border-[#dddddd] placeholder-slate-gray"
        placeholder="New tag"
        onKeyDown={(event) =>
          event.key === "Enter" && handleAddTag(event.target.value)
        }
      />
      <div className="w-full h-auto md:h-80 border border-1 rounded border-[#dddddd] flex flex-col justify-center p-4 overflow-y-scroll">
        {tagswithState &&
          tagswithState
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item, index) => (
              <div className="" key={index}>
                <input
                  className="m-2 cursor-pointer"
                  type="checkbox"
                  name={item.name}
                  checked={item.isChecked}
                  onChange={handleCheckboxChange}
                />
                {item.name}
              </div>
            ))}
      </div>
    </div>
  );
};
export default Tags;

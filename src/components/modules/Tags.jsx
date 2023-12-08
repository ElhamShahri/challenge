import { useEffect, useState } from "react";

const Tags = ({ data }) => {
  const [checkboxState, setCheckboxState] = useState(
    new Array(data.length).fill(false)
  );

  const handleCheckboxChange = (event) => {
    const index = parseInt(event.target.id);
    const newState = [...checkboxState];
    newState[index] = event.target.checked;
    setCheckboxState(newState);
  };

  useEffect(()=>{
    console.log(checkboxState)
  },[checkboxState])

  useEffect(()=>{
    console.log(data)
  },[data])



  return (
    <div className="w-full flex flex-col overflow-auto">
      <label className="mb-3 text-charcoal-grey">Tags</label>
      <input
        className="mb-3 rounded p-2 border border-1 border-[#dddddd] placeholder-slate-gray"
        placeholder="New tag"
      />
      <div className="w-full h-auto md:h-80 border border-1 rounded border-[#dddddd] flex flex-col justify-center p-4 overflow-y-scroll">
        {data.sort().map((item, index) => (
          <div className="" key={index}>
            <input
              className="m-2 cursor-pointer"
              type="checkbox"
              id={index}
              checked={checkboxState[index]}
              onChange={handleCheckboxChange}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tags;

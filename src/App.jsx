import React, { useState } from "react";
import ArrowSvg from "./SVG/ArrowSvg";
import { v4 as uuid } from "uuid";
import CreatableSelect from "react-select/creatable";
import Delete from "./SVG/delete";
import Editor from "./RichTExtEditor";
const topics = [
  {
    id: 1,
    heading:
      "The importance of Establishing a String Online Presence for Small Business",
    tags: [
      {
        color: "#f1c94e",
        bg: "#fdf8e8",
        border: "#fdf8e8",
        tag: "Online Presence",
      },
      {
        color: "#39d5ae",
        bg: "#e5faf5",
        border: "#39d5ae",
        tag: "Small Businesses",
      },
      {
        color: "#eb5858",
        bg: "#ffe7e7",
        border: "#fe7e7e",
        tag: "Digital Marketing",
      },
      { color: "#f1c94e", bg: "#fdf8e8", border: "#fdf8e8", tag: "Branding" },
    ],
  },

  {
    id: 2,
    heading:
      "How Fast Turnaround Times in Logo and Website Design Benefit Your Business",
    tags: [
      {
        color: "#f1c94e",
        bg: "#fdf8e8",
        border: "#fdf8e8",
        tag: "Fast Turnaround",
      },
      {
        color: "#39d5ae",
        bg: "#e5faf5",
        border: "#39d5ae",
        tag: "Logo Design",
      },
      {
        color: "#eb5858",
        bg: "#ffe7e7",
        border: "#fe7e7e",
        tag: "website design",
      },
      { color: "#f1c94e", bg: "#fdf8e8", border: "#fdf8e8", tag: "branding" },
    ],
  },

  {
    id: 3,
    heading: "Affordable Branding Solutions for Startups and Entrepreneurs",
    tags: [
      {
        color: "#f1c94e",
        bg: "#fdf8e8",
        border: "#fdf8e8",
        tag: "Affordable branding",
      },
      { color: "#39d5ae", bg: "#e5faf5", border: "#39d5ae", tag: "startups" },
      {
        color: "#eb5858",
        bg: "#ffe7e7",
        border: "#fe7e7e",
        tag: "entrepreneurs",
      },
      {
        color: "#f1c94e",
        bg: "#fdf8e8",
        border: "#fdf8e8",
        tag: "logo design",
      },
      {
        color: "#39d5ae",
        bg: "#e5faf5",
        border: "#39d5ae",
        tag: "website design",
      },
    ],
  },

  {
    id: 4,
    heading:
      "The Benefits of Comprehensive Branding Services for Small to Medium-Sized Businesses",
    tags: [
      {
        color: "#f1c94e",
        bg: "#fdf8e8",
        border: "#fdf8e8",
        tag: "comprehensive branding",
      },
      {
        color: "#39d5ae",
        bg: "#e5faf5",
        border: "#39d5ae",
        tag: "small businesses",
      },
      {
        color: "#eb5858",
        bg: "#ffe7e7",
        border: "#fe7e7e",
        tag: "logo design",
      },
      {
        color: "#f1c94e",
        bg: "#fdf8e8",
        border: "#fdf8e8",
        tag: "website design",
      },
      {
        color: "#39d5ae",
        bg: "#e5faf5",
        border: "#39d5ae",
        tag: "social media management",
      },
    ],
  },

  {
    id: 5,
    heading:
      "Expert Tips for Choosing thr Right Digital Marketing Agency for Your Business",
    tags: [
      {
        color: "#f1c94e",
        bg: "#fdf8e8",
        border: "#fdf8e8",
        tag: "digital marketing agency",
      },
      { color: "#39d5ae", bg: "#e5faf5", border: "#39d5ae", tag: "tips" },
      { color: "#eb5858", bg: "#ffe7e7", border: "#fe7e7e", tag: "branding" },
      {
        color: "#f1c94e",
        bg: "#fdf8e8",
        border: "#fdf8e8",
        tag: "website design",
      },
      {
        color: "#39d5ae",
        bg: "#e5faf5",
        border: "#39d5ae",
        tag: "social media management",
      },
    ],
  },
];
const navBar = ["All", "Custom", "ICP", "Mission", "Products"];
const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [active, setActive] = useState("Mission");
  const [blogPopUp, setBlogPopUp] = useState(false);
  const [topic, setTopic] = useState(topics);
  const [tag, setTag] = useState([]);
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const handleWrite = () => {
    setIsPopupOpen(true);
  };
  const handleCancel = () => {
    setIsPopupOpen(false);
  };
  const handleSave = () => {
    const unique_id = uuid();
    setTopic([
      ...topic,
      {
        id: unique_id,
        heading: name,
        tags: tag.map((x) => {
          const randomClr = getRandomColor();
          const bgWithOpacity = randomClr + "33";
          return {
            color: randomClr,
            bg: bgWithOpacity,
            border: randomClr,
            tag: x.label,
          };
        }),
      },
    ]);
    setIsPopupOpen(false);
  };

  const handleDelete = (id) => {
    const topicIndex = topic.findIndex((item) => item.id === id);
    if (topicIndex !== -1) {
      const updatedTopic = [...topic];
      updatedTopic.splice(topicIndex, 1);
      setTopic(updatedTopic);
    }
  };

  return (
    <>
      <div className="mt-2 p-6 w-[1000px] m-auto border border-[#8989] relative">
        <h4 className="mb-6 text-xl font-bold">Categories</h4>
        <div className="w-full flex mb-8">
          <ul className="text-[12px] ml-7 font-bold flex justify-between w-[50%]">
            {navBar.map((x, i) => {
              return (
                <>
                  <li
                    onClick={() => {
                      setActive(x);
                    }}
                    className={`${
                      active === x
                        ? "border-b-[#FF6F58] border-b-2 text-[#FF6F58] cursor-pointer"
                        : "text-black cursor-pointer"
                    }`}
                  >
                    {x}
                  </li>
                </>
              );
            })}
          </ul>

          <div className="w-[50%] flex justify-end items-center">
            <button
              onClick={handleWrite}
              className="gap-1 py-[7px] w-24 px-2 font-bold text-white bg-[#FF6F58] text-[12px] rounded-md flex justify-center items-center"
            >
              Add Topic
              <ArrowSvg />
            </button>
            <div></div>
          </div>
        </div>

        <div className="p-3 bg-[#dadcde99] text-[12px] border border-t-[#8989] border-x-[#8989]">
          <h3 className="font-semibold">Recommended Topic</h3>
        </div>
        {topic.map((x) => {
          return (
            <div
              className="p-4 border border-b-[#8989] border-x-[#8989] text-[12px]"
              key={x.id}
            >
              <h4 className="mb-2">{x.heading}</h4>
              <div className="flex">
                <div className="w-[80%] gap-2 flex">
                  {x?.tags.map((item, index) => {
                    return (
                      <button
                        style={{
                          borderColor: `${item.border}`,
                          color: `${item.color}`,
                          background: `${item.bg}`,
                        }}
                        className={`border font-bold px-2 py-1 text-[12px] rounded-[6px]`}
                        key={index}
                      >
                        {item.tag}
                      </button>
                    );
                  })}
                </div>
                <div className="w-[20%] flex justify-end gap-2 items-center ">
                  <button
                    onClick={() => {
                      setBlogPopUp(true);
                    }}
                    className="gap-1 py-[7px] w-16 px-[8px] font-bold text-white bg-[#FF6F58] text-[12px] rounded-md flex justify-center items-center"
                  >
                    Write
                    <ArrowSvg />
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(x.id);
                    }}
                    className="p-2 rounded-md text-white bg-[#FF6F58]"
                  >
                    <Delete />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="">
          {isPopupOpen && (
            <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-gray-900 bg-opacity-50">
              {/* Pop-up content */}
              <div className="flex-col p-6 gap-2 flex justify-center items-center bg-white border-[#3498db] max-w-[40rem] min-w-[25rem] min-h-[15rem]  rounded-lg">
                <div className="w-full h-full flex flex-col justify-start items-center gap-2">
                  <div className="flex justify-start w-full">Name</div>
                  <input
                    type="text"
                    className="py-1 pl-3 w-full border-gray-300 border rounded-[3px]"
                    placeholder="Heading"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full items-center gap-2">
                  <div className="flex justify-start w-full">Keyword</div>
                  <div className="flex justify-start w-full">
                    <CreatableSelect
                      isMulti
                      className="w-full"
                      onChange={(e) => {
                        setTag(e);
                      }}
                    />
                  </div>
                </div>
                <div className="flex mt-4 w-full justify-end  gap-4">
                  <button
                    className="gap-1 w-16 py-[7px] px-[8px] font-bold text-white bg-[#FF6F58] text-[12px] rounded-md flex justify-center items-center"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="gap-1 w-16 py-[7px] px-[8px] font-bold text-white bg-[#FF6F58] text-[12px] rounded-md flex justify-center items-center"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {blogPopUp && (
          <>
            <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-gray-900 bg-opacity-50">
              <div className="flex-col p-6 gap-2 flex justify-center items-center bg-white border-[#3498db] max-w-[40rem] min-w-[25rem] min-h-[15rem]  rounded-lg">
                <div className="flex w-full justify-start font-medium">
                  Write a blog
                </div>
                <Editor placeholder="Write something..." />
                <div className="flex justify-end w-full gap-2">
                  <div className="flex mt-4 w-full justify-end  gap-4">
                    <button
                      className="gap-1 w-16 py-[7px] px-[8px] font-bold text-white bg-[#FF6F58] text-[12px] rounded-md flex justify-center items-center"
                      onClick={() => {
                        setBlogPopUp(false);
                      }}
                    >
                      Save
                    </button>
                    <button
                      className="gap-1 w-16 py-[7px] px-[8px] font-bold text-white bg-[#FF6F58] text-[12px] rounded-md flex justify-center items-center"
                      onClick={() => {
                        setBlogPopUp(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;

import React from "react";
import Profile from "../../assets/avatar.svg";
import Input from "../../Components/input/input";

const Dashboard = () => {
  const contacts = [
    { name: "Jhon", status: "Available", img: Profile },
    { name: "Alexander", status: "Available", img: Profile },
    { name: "Mary", status: "Available", img: Profile },
    { name: "Adam", status: "Available", img: Profile },
    { name: "Alex", status: "Available", img: Profile },
    { name: "Larry", status: "Available", img: Profile },
  ];
  return (
    <div className="w-screen flex ">
      <div className="w-[25%] h-screen bg-secondary">
        <div className="flex items-center my-8 mx-10">
          <div className="border border-primary p-[2px] rounded-full">
            <img src={Profile} width={75} height={75} />
          </div>
          <div className="ml-8 ">
            <h3 className="text-2xl">Tutorials Dev</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-12 mt-10 overflow-y-scroll no-scrollbar h-[70.5%]">
          <div className="text-primary text-lg">Messages</div>
          <div>
            {contacts.map((contact) => (
              <div key={contact.name} className="">
                <div className="flex items-center py-8 border-b border-b-gray-300">
                  <div className="cursor-pointer flex items-center">
                    <div className="">
                      <img src={contact.img} width={50} height={50} />
                    </div>
                    <div className="ml-6 ">
                      <h3 className="text-lg font-semibold">{contact.name}</h3>
                      <p className="text-sm font-light text-gray-600">
                        {contact.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-secondary h-[80px] my-8 rounded-full flex items-center px-14">
          <div className="cursor-pointer">
            <img src={Profile} alt="" width={50} height={50} />
          </div>
          <div className="ml-6 mr-auto">
            <h3 className="text-lg font-semibold ">Alexander</h3>
            <p className="text-sm font-light text-gray-600">online</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-phone-outgoing"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 9l5 -5" />
              <path d="M16 4l4 0l0 4" />
            </svg>
          </div>
        </div>
        <div className="h-[75%] w-full overflow-y-auto no-scrollbar shadow-sm ">
          <div className="h-auto p-14 ">
            <div className=" max-w-[50%] bg-secondary rounded-b-lg rounded-tr-lg p-4 mb-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                distinctio in nobis rem aperiam dolorem magnam expedita officiis
                sint. Iure pariatur quos accusantium nihil nobis adipisci ab
                dolorum? Iure, architecto!
              </p>
            </div>
            <div className=" max-w-[50%] text-white bg-primary rounded-b-lg rounded-tl-lg ml-auto p-4 mb-8 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                distinctio in nobis rem aperiam dolorem magnam expedita officiis
                sint. Iure pariatur quos accusantium nihil nobis adipisci ab
                dolorum? Iure, architecto!
              </p>
            </div>
            <div className=" max-w-[50%] bg-secondary rounded-b-lg rounded-tr-lg p-4 mb-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                distinctio in nobis rem aperiam dolorem magnam expedita officiis
                sint. Iure pariatur quos accusantium nihil nobis adipisci ab
                dolorum? Iure, architecto!
              </p>
            </div>
            <div className=" max-w-[50%] text-white bg-primary rounded-b-lg rounded-tl-lg ml-auto p-4 mb-8 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                distinctio in nobis rem aperiam dolorem magnam expedita officiis
                sint. Iure pariatur quos accusantium nihil nobis adipisci ab
                dolorum? Iure, architecto!
              </p>
            </div>
            <div className=" max-w-[50%] bg-secondary rounded-b-lg rounded-tr-lg p-4 mb-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                distinctio in nobis rem aperiam dolorem magnam expedita officiis
                sint. Iure pariatur quos accusantium nihil nobis adipisci ab
                dolorum? Iure, architecto!
              </p>
            </div>
            <div className=" max-w-[50%] text-white bg-primary rounded-b-lg rounded-tl-lg ml-auto p-4 mb-8 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                distinctio in nobis rem aperiam dolorem magnam expedita officiis
                sint. Iure pariatur quos accusantium nihil nobis adipisci ab
                dolorum? Iure, architecto!
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 w-full flex items-center">
          <Input
            placeholder="Type Message...."
            className="w-full"
            inputClassName="p-4 border-0 shadow-lg rounded-full bg-light focus:ring-0 "
          />
          <div className="ml-4 p-4 cursor-pointer bg-light rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-send"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
          <div className="ml-4 p-4 cursor-pointer bg-light rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[25%] h-screen bg-light"></div>
    </div>
  );
};

export default Dashboard;

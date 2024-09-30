import Landsite from "../../assets/landsite.jpg";
import Usdt from "../../assets/usdt-img.png";
import Timer from "../Timer";
import "./Explore.css";
import Slider from "./Slider";
import { ExploreData } from "../../../data/ExploreData";

const Explore = () => {
  return (
    <div className="mb-10 p-16 w-full bg-gradient-to-b from-[#effdf1] to-[#f8f3ff] flex flex-col justify-center items-center space-y-2">
      <div className="space-y-4 mb-4">
        <h2 className="text-center font-bold uppercase text-[#36BB91] font-[inter] text-[1rem] ">
          Featured Collections
        </h2>
        <h2 className=" text-center font-semibold text-3xl font-[syne] ">
          Discover the best live & upcoming land
        </h2>
        <p className=" text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="max-w-[1500px] min-w-[800px] grid grid-cols-3 gap-10 justify-center max-md:hidden">
        {ExploreData.map((data) => (
          <ExploreCard data={data} key={data.id} />
        ))}
      </div>
      <Slider />
    </div>
  );
};

export function ExploreCard({ data }) {
  return (
    <div className="flex flex-col justify-between rounded-t-[2.1rem] rounded-b-3xl bg-[#24C2A5] w-[20rem] h-[32rem] space-y-1 min-w-[250px]">
      <div className="bg-white rounded-b-3xl rounded-t-[2rem] flex-grow overflow-hidden">
        <div className="p-4 w-full h-full flex flex-col justify-between">
          <img src={Landsite} className="w-full h-40 object-cover" />
          <div className="flex-grow">
            <h1 className="font-bold pt-4 text-2xl">{data?.name}</h1>
            <h2 className="text-gray-400">{data?.location}</h2>
            <small className="font-sans leading-1 text-xs font-small">
              {data?.description}
            </small>
          </div>

          <div className="mt-3">
            <div className="flex justify-between items-center">
              <small>Targeted Raise</small>
              <div className="flex mb-2">
                <img src={Usdt} className="w-6 h-6" />
                <h2>200,000</h2>
              </div>
            </div>
            <progress max="15" value="7.5" />
          </div>

          <div className="flex justify-between items-center gap-4 pt-4">
            <div>
              <small className="font-semibold">Min.Entry</small>
              <h1 className="text-teal-500 font-semibold">5 USDT</h1>
            </div>
            <button className="bg-[#24c2a5] w-auto px-4 py-2 rounded-full text-white hover:border-solid hover:bg-white hover:text-[#24C2A5] transition-all duration-300">
              INVEST
            </button>
          </div>
        </div>
      </div>
      <Timer />
    </div>
  );
}

export default Explore;
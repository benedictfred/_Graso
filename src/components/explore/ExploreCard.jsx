import Landsite from "../../assets/landsite.jpg";
import Timer from "../Timer";

export default function ExploreCard({ data }) {
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
              <div className="flex mb-2 items-center gap-x-2">
                {/* <img src={Usdt} /> */}
                <img
                  src="data:image/png;base64,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"
                  alt="Sui"
                  className="w-[1rem] h-[1rem]"
                />
                <h2>117,000</h2>
              </div>
            </div>
            <progress max="15" value="7.5" />
          </div>

          <div className="flex justify-between items-center gap-4 pt-4">
            <div>
              <small className="font-semibold">Min.Entry</small>
              <h1 className="text-teal-500 font-semibold">2.95 SUI</h1>
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

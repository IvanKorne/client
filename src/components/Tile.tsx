type TileProps = {
  title: string;
  value: string;
};

const Tile = ({ title, value }: TileProps) => {
  return (
    <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg xl:mb-0">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
              <h5 className="text-xs font-bold uppercase text-blueGray-400">
                {title}
              </h5>
              <span className="text-xl font-bold">{value}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;

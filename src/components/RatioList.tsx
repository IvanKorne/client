type RatioListProps = {
  config: any;
  data: any;
};

const RatioList = ({ config, data }: RatioListProps) => {
  return (
    <div className="h-full p-4 mb-4 ml-4 bg-white rounded-lg shadow sm:p-6">
      <ul className="divide-y divide-gray-200">
        {config.map((row: any) => (
          <li className="py-3 sm:py-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {row.label}
                </p>
                <p className="text-sm font-medium text-gray-500 ">
                  {row.subTitle && row.subTitle}
                </p>
              </div>
              <div className="flex items-center text-base font-semibold text-gray-900">
                {row.render(data)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatioList;

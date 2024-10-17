type TableProps = {
  configs: any;
  data: any;
};

const Table = ({ configs, data }: TableProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
      <table>
        <thead className="min-w-full m-5 divide-y divide-gray-200">
          {configs.map((config: any) => (
            <th
              className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              key={config.label}
            >
              {config.label}
            </th>
          ))}
        </thead>
        <tbody>
          {data.map((value: any) => (
            <tr key={value.cik}>
              {configs.map((config: any) => (
                <td className="p-4 text-sm text-gray-900 whitespace-nowrap">
                  {config.render(value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

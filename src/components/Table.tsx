import { INCOME_STATEMENT_DATA } from "../lib/companyData";

type Company = (typeof INCOME_STATEMENT_DATA)[0];

const configs = [
  {
    label: "Year",
    render: (company: Company) => company.acceptedDate,
  },
  {
    label: "Cost of Revenue",
    render: (company: Company) => company.costOfRevenue,
  },
];
const Table = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
      <table>
        <thead className="min-w-full m-5 divide-y divide-gray-200">
          {configs.map((config) => (
            <th
              className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              key={config.label}
            >
              {config.label}
            </th>
          ))}
        </thead>
        <tbody>
          {INCOME_STATEMENT_DATA.map((data) => (
            <tr key={data.cik}>
              {configs.map((config) => (
                <td className="p-4 text-sm text-gray-900 whitespace-nowrap">
                  {config.render(data)}
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

import Card from "./Card";

const Cardlist = () => {
  return (
    <div>
      <Card ticker="APPL" companyName="Apple" price={130} />
      <Card ticker="MSFT" companyName="Microsoft" price={200} />
      <Card ticker="TSLA" companyName="Tesla" price={300} />
    </div>
  );
};

export default Cardlist;

import s from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.text}>Type</th>
          <th className={s.text}>Amount</th>
          <th className={s.text}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr className={s.row} key={item.id}>
              <td className={s.cell}>{item.type}</td>
              <td className={s.cell}>{item.amount}</td>
              <td className={s.cell}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;

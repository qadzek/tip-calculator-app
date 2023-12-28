export default function Bill({ bill, setBill }) {
  return (
    <div className="bill">
      <label htmlFor="bill__field">Bill</label>
      <input
        id="bill__field"
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        placeholder={0}
      />
    </div>
  );
}

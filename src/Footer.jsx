function Footer({ list }) {
  const totalItem = list.length;
  const packedStats = list.filter((item) => item.packed).length;
  const avg = (packedStats / totalItem) * 100;

  if (totalItem > 0)
    return (
      <footer className="stats">
        <p>
          You have {totalItem} items on your list, and you already packed{" "}
          {packedStats} ({avg}%)
        </p>
      </footer>
    );

  return (
    <footer className="stats">
      <p>Start adding some items to your packing list 🚀</p>
    </footer>
  );
}

export default Footer;

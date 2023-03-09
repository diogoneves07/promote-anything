
const o = {
    title: "Lorem ipsum, dolor sit amet consectetur",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae officia aliquam sequi deserunt amet veritatis cum labore delectus ex, itaque ad eius tempora incidunt rem perspiciatis eveniet possimus, suscipit fugit.",
    username: "Diogo Neves",
    date: new Date().toDateString(),
  };
  
  let count = 0;
  const fakeProducts = [];
  
  while (count++ < 10) {
    fakeProducts.push({ ...o });
  }
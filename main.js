
{

  // 背景動かし
  
  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  };

  setInterval(() => {
    document.body.style.setProperty("--color1", randomColor());
    document.body.style.setProperty("--color2", randomColor());
    document.body.style.setProperty("--color3", randomColor());
  }, 2000);
}
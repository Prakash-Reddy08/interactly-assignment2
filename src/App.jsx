function App() {
  const handleCopyLink = (e) => {
    console.log(e.target.dataset.num)
    navigator.clipboard.writeText(`http://localhost:5173/share/${e.target.dataset.num}`)
  }
  return <div>
    <button onClick={handleCopyLink} data-num="1" >Copy Linked Gif 1</button>
    <button onClick={handleCopyLink} data-num="2">Copy Linked Gif 2</button>
  </div>

}

export default App

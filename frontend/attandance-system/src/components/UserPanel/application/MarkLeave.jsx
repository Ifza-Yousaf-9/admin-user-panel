  import './Mark.css'; 



const MarkLeave = () => {
  return (
    <div className="outer-container">
      <div className="inner-box">
        <h1>Write Application</h1>
        <textarea placeholder='Application' className="application-input" />
        <button className="submit-button">Submit Application</button>
      </div>
    </div>
  )
}

export default MarkLeave;

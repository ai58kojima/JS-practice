import "./MyNotepad.css";

function MyNotepad() {
  return (
    <div className="Notepad">
      <textarea className="textarea" />
      <div className="footer">
        <button className="clear">クリア</button>
      </div>
    </div>
  );
}

export default MyNotepad;

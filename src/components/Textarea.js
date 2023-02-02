import {useState} from "react";
import {fleschScores, calculateReadingTime} from "../readability";

export default function Textarea(props) {
  const [text, setText] = useState("");
  const [modifiedText, setModifiedText] = useState("");
  const [readTime, setReadTime] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
    // console.log("change");
    setReadTime(calculateReadingTime(text));
  };

  const handleUpCase = () => {
    const newText = text.toUpperCase();
    // console.log(newText);
    // setText(newText);
    setModifiedText(newText);
  };
  const handleLoCase = () => {
    const newText = text.toLowerCase();
    // console.log(newText);
    // setText(newText);
    setModifiedText(newText);
  };
  const handleClear = () => {
    // console.log("clear clicked");
    setText("");
    setModifiedText("");
  };
  const handleExtraSpace = () => {
    const newText = text
      .split(" ")
      .filter((i) => i)
      .join(" ");
    // console.log(newText)
    // setText(newText);
    setModifiedText(newText);
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(modifiedText);
    alert("Copied modified text to Clipboard!", "success");
  };
  return (
    <>
      <div
        className="position-relative"
        style={{minHeight: "120vh", top: "70px", marginBottom: "80px"}}
      >
        <h2 className="mb-3 my-3">Enter the text below</h2>
        <form>
          <div className="mb-3 my-3">
            <textarea
              className="form-control border border-success"
              id="exampleFormControlTextarea1"
              rows="8"
              onChange={handleChange}
              value={text}
              style={{
                backgroundColor: props.darkMode.textAreaBg,
                color: props.darkMode.textColor,
              }}
            ></textarea>
          </div>
        </form>
        <button
          type="button"
          className="btn btn-success mx-1 my-1"
          onClick={handleUpCase}
          disabled={text.length === 0}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-success mx-1 my-1"
          onClick={handleLoCase}
          disabled={text.length === 0}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-success mx-1 my-1"
          onClick={handleClear}
          disabled={text.length === 0}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-success mx-1 my-1"
          onClick={handleExtraSpace}
          disabled={text.length === 0}
        >
          Remove Extra Space
        </button>
        <button
          type="button"
          className="btn btn-success mx-1 my-1"
          onClick={handleCopyText}
          disabled={text.length === 0 || true}
        >
          Summary
        </button>
        <button
          type="button"
          className="btn btn-success mx-1 my-1"
          onClick={handleCopyText}
          disabled={text.length === 0 || true}
        >
          Precis
        </button>

        <div className="d-flex flex-wrap my-2">
          <div className="my-1 p-2 border">
            <h5 className="card-title">Words</h5>
            <p className="card-subtitle my-1">
              {
                text
                  .replace(/\n/g, " ")
                  .split(" ")
                  .filter((value) => value !== "").length
              }
            </p>
          </div>

          <div className="my-1 p-2 border">
            <h5 className="card-title">Characters</h5>
            <p className="card-subtitle my-1 ">{text.trim().length}</p>
          </div>

          <div className="my-1 p-2 border">
            <h5 className="card-title">Read Time</h5>
            <p className="card-subtitle my-1">
              {readTime === 0 ? 0 : readTime - 1} - {readTime} Minutes
            </p>
          </div>

          <div className="my-1 p-2 border">
            <h5 className="card-title">Readability</h5>
            <p className="card-subtitle my-1">Grade {fleschScores(text)}</p>
          </div>
        </div>

        <div className="mb-3 my-3">
          <div className="d-flex">
            <h2 className="me-2">Preview</h2>
            <button
              type="button"
              className="btn btn-success mx-1 my-1"
              onClick={handleCopyText}
              disabled={text.length === 0}
            >
              Copy Text
            </button>
          </div>
          <textarea
            className="form-control border border-success"
            id="exampleFormControlTextarea1"
            rows="10"
            value={
              modifiedText.length === 0 ? "Nothing to show!" : modifiedText
            }
            readOnly
            style={{
              backgroundColor: props.darkMode.textAreaBg,
              color: props.darkMode.textColor,
            }}
          ></textarea>
          {/* <p>{text.length === 0 ? "Nothing to show!" : text}</p> */}
        </div>
      </div>
    </>
  );
}

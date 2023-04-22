import "./Control.css";

export default function Control(props: any) {
  const { source, destination } = props;
  return (
    <div className="information-panel">
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => {
          props.triggerReset();
        }}
      >
        Reset
      </button>
      {(source || destination) && (
        <ul className="list-group">
          <li className="list-group-item">Source : {source}</li>
          <li className="list-group-item">Destination : {destination}</li>
        </ul>
      )}
    </div>
  );
}

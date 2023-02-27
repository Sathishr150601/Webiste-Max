import { Link } from "react-router-dom";

export default function Button3(props: any) {
  return (
    <div className="Button3">
      <Link to="" className="space-btn" onClick={props.btn3click}>
        {props.button3Name}
      </Link>
    </div>
  );
}

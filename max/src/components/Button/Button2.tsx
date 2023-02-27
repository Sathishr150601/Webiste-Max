export default function Button2(props: any) {
  return (
    <div className="button2 learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button2-text">{props.button2text}</span>
    </div>
  );
}

export default function Heading1(props: {
  heading1span1: string;
  heading1span2: string;
}) {
  return (
    <div className="Topic my-[8vw] w-[60vw] sm:w-[50vw] mx-auto text-black">
      <h2 className="text-[10vw] leading-[13vw] font-medium ">
        <span className="">{props.heading1span1}</span>
        <span className="">{props.heading1span2}</span>
      </h2>
    </div>
  );
}

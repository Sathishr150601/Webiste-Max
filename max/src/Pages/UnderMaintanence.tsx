export default function UnderMaintanence() {
  return (
    <div className="UnderMaintanence h-[100vh] w-[100vw] text-white bg-[#d6433b] flex flex-col justify-center items-center text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 202.24 202.24"
        className="mt-[1em] w-[75px]"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Capa_1" data-name="Capa 1">
            <path
              className="fill-white"
              d="M101.12,0A101.12,101.12,0,1,0,202.24,101.12,101.12,101.12,0,0,0,101.12,0ZM159,148.76H43.28a11.57,11.57,0,0,1-10-17.34L91.09,31.16a11.57,11.57,0,0,1,20.06,0L169,131.43a11.57,11.57,0,0,1-10,17.34Z"
            />
            <path
              className="fill-white"
              d="M101.12,36.93h0L43.27,137.21H159L101.13,36.94Zm0,88.7a7.71,7.71,0,1,1,7.71-7.71A7.71,7.71,0,0,1,101.12,125.63Zm7.71-50.13a7.56,7.56,0,0,1-.11,1.3l-3.8,22.49a3.86,3.86,0,0,1-7.61,0l-3.8-22.49a8,8,0,0,1-.11-1.3,7.71,7.71,0,1,1,15.43,0Z"
            />
          </g>
        </g>
      </svg>
      <h1>We&rsquo;ll be back soon!</h1>
      <div className="">
        <p className="md:w-[80%] md:mx-auto lg:w-[1000px]">
          Sorry for the inconvenience. We&rsquo;re performing some maintenance
          at the moment. If you need to you can always follow us on &nbsp;
          <strong>
            <a
              href="https://www.instagram.com/maxhairclinicglobal/"
              className="underline"
            >
              Instagram
            </a>
          </strong>
          &nbsp; for updates, otherwise we&rsquo;ll be back up shortly!
        </p>
        <p>&mdash; The MAX Team</p>
      </div>
    </div>
  );
}

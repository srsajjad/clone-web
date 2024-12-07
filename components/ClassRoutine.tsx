import parse from "html-react-parser";

export const ClassRoutine = ({
  html,
  downloadLink,
  sectionName,
}: {
  html: string;
  downloadLink: string;
  sectionName: string;
}) => {
  return (
    <div className="class-routine-container my-8" id={sectionName}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{sectionName}</h2>
        <a
          href={downloadLink}
          className="flex items-center text-green-600 hover:text-green-700 gap-2 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-[20px] h-[20px]"
            src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/1667985694407.png"
            alt="Download"
          />
          ডাউনলোড রুটিন
        </a>
      </div>

      <div className="routine-table">{parse(html)}</div>
    </div>
  );
};

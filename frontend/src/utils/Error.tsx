import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="m-3 flex gap-5 align-middle justify-center w-full">
      <Link
        to="#"
        onClick={() => window.history.back()}
        className="flex-[1] flex align-middle text-lg"
      >
        <IoIosArrowRoundBack size={30} />
        Return back
      </Link>
      <div className="text-4xl font-bold flex flex-col align-middle gap-5 flex-[10]">
        <h1 className="self-center">Error 404</h1>
        <h2 className="self-center">Route not Found</h2>
      </div>
    </div>
  );
}

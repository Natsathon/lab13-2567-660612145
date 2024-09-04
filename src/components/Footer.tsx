import { footerProps } from "@lib/types";

export default function Footer({year, fullName, studentId}: footerProps) {
  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">Copyright © TOP-10-IMDB</p>
    </div>
  );
}

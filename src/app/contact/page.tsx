import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandTwitter, IconBrandTwitterFilled } from "@tabler/icons-react";



export default function ContactPage() {
  return (
    <div className="text-center my-4">
      <p className="fw-bold fs-4">Contact</p>
      <p>
        <strong>
          <IconBrandFacebookFilled /> Facebook :
        </strong>
        TOP10IMDB
      </p>
      <p>
        <strong>
          <IconBrandTwitterFilled /> Twitter :
        </strong>
        @TOP10IMDB
      </p>
    </div>
  );
}

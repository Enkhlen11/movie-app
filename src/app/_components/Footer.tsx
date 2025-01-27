import WhiteFilmLogo from "./FilmLogo";

export default function Footer() {
  return (
    <div className="w-[100%] h-[280px] bg-[#4338CA]">
      <div className="flex">
        <div>
          <div className="flex gap-1">
            <img src="logo.svg" alt="" />
            <p className="italic text-[16px] font-bold text-[#FAFAFA]">
              Movie Z
            </p>
          </div>
          <p className="text-[14px]">© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div>
          <p>Contact Information</p>
          <p>Email:</p>
          <p>support@movieZ.com</p>
          <p>Phone</p>
          <p>+976 (11) 123-4567</p>
        </div>
        <div>
          <p>Follow us </p>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
          <a href="">Youtube</a>
        </div>
      </div>
    </div>
  );
}

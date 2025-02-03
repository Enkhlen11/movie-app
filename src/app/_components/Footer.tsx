import WhiteFilmLogo from "./FilmLogo";

export default function Footer() {
  return (
    <div className="w-[100%] h-[280px] bg-[#4338CA] py-[40px] flex justify-around">
      <div className="flex flex-col gap-12">
        <div className="flex gap-8">
          <img src="logo.svg" alt="" />
          <p className="italic text-[16px] font-bold text-[#FAFAFA] ">
            Movie Z
          </p>
        </div>
        <p className="text-[14px] text-[#FAFAFA]">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>
      <div className="flex gap-96 text-[#FAFAFA]">
        <div className="text-[14px]">
          <p className="mb-[12px]">Contact Information</p>
          <p className="font-medium">Email:</p>
          <p className="mb-[24px]">support@movieZ.com</p>
          <p className="font-medium">Phone</p>
          <p>+976 (11) 123-4567</p>
        </div>
        <div>
          <p className="mb-[12px]">Follow us </p>
          <div className="flex gap-12">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Youtube</a>
          </div>
        </div>
      </div>
    </div>
  );
}

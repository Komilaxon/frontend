export const WorksCart = ({
  img,
  name,
  user_img,
  username,
  price,
  projects,
  stars,
}) => {
  return (
    <li className="w-[308px] rounded-xl border border-[#F2F0FE]">
      <div>
        <img src={img} alt="work_img" />
      </div>
      <div className="py-5 px-5 space-y-4">
        <div>
          <p className="text-lg font-semibold text-[#222] pb-5">{name}</p>
          <p className="text-lg font-semibold text-[#1DBF73]">{price}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[60px]">
            <img src={user_img} alt="user-img" />
          </div>
          <div>
            <p className="text-base font-medium pb-2">{username}</p>
            <p className="text-sm font-normal text-[#B0AAD0]">{projects}</p>
          </div>
        </div>
        <div>
          <img src={stars} alt="star-img" />
        </div>
      </div>
    </li>
  );
};

import React from "react";
import publish_image from '../../../../assets/img/publish_image.png';

const TabsPublication = () => {
  return <div className="w-full space-y-7 flex flex-col items-center">
    <h1 className="text-2xl font-semibold">Поздравляем!</h1>
    <h4 className="text-lg font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh et volutpat sagittis, turpis sed cum massa.</h4>
    <div>
      <img width={420} height={317} src={publish_image} alt="publish_image" className="mt-10" />
    </div>
  </div>;
};

export default TabsPublication;

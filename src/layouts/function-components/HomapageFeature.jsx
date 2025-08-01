import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {feature_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg transition-all duration-200 hover:shadow-[0px_5px_30px_rgba(31,48,104,0.4)] hover:-translate-y-1"
          >
            <div>
              <h3 className="h4 text-dark lg:text-2xl">{item.title}</h3>
              <p className="text-dark">{item.content}</p>
            </div>
            <span className="icon mt-4">
              <FeatherIcon />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;

import { marked } from "marked";
import { useState } from "react";

const FeatureTab = ({ feature_tab }) => {
  const [tab, setTab] = useState(0);
  return (
    <div className="row mt-[120px] items-center" data-fade>
      <div className="col-8 mx-auto mb-0 text-center text-white" data-fade>
        <h2
          dangerouslySetInnerHTML={{
            __html: marked.parseInline(feature_tab.title),
          }}
        />
      </div>
      <div className="lg:col-6">
        {feature_tab.list.map((item, index) => (
          <div
            key={`item-${index}`}
            className={`features-tab-panel ${
              tab === index ? "active" : undefined
            } relative`}
          >
            <img className="w-full object-contain" src={item.image} />
          </div>
        ))}
      </div>
      <div className="mt-0 lg:col-6 lg:mt-0">
        <div className="lg:max-w-[473px] text-white">
          {feature_tab.list.map((item, index) => (
            <div
              className={`features-tab-item ${
                tab === index ? "active" : undefined
              } mt-9 first:mt-0`}
              key={index}
            >
              <h2
                className="lg:text-2xl text-white cursor-pointer"
                dangerouslySetInnerHTML={{
                  __html: marked.parseInline(item.title),
                }}
                onClick={() => setTab(index)}
              />
              <p className="mt-4">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureTab;

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";
import AllType from "./AllType";
import Books from "./Books";

const AddProduct = () => {
  const data = [
    {
      label: "All Type",
      value: "all_type",
      desc: <AllType />,
    },
    {
      label: "Books",
      value: "books",
      desc: <Books />,
    },
  ];
  return (
    <div>
      <Tabs value="html">
        <TabsHeader className="p-0">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default AddProduct;

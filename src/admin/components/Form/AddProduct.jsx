import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";
import Automotive from "./Automotives";
import Books from "./Books";
import Computers from "./Computers";
import Decoration from "./Decoration";
import Electronics from "./Electronics";
import Medias from "./Medias";
import Wear from "./Wear";

const AddProduct = () => {
  const data = [
    {
      label: "Wear",
      value: "wear",
      desc: <Wear />,
    },
    {
      label: "Computers",
      value: "computers",
      desc: <Computers />,
    },
    {
      label: "Electronics",
      value: "electronics",
      desc: <Electronics />,
    },
    {
      label: "Medias",
      value: "medias",
      desc: <Medias />,
    },
    {
      label: "Decoration",
      value: "decoration",
      desc: <Decoration />,
    },
    {
      label: "Books",
      value: "books",
      desc: <Books />,
    },
    {
      label: "Automotive",
      value: "automotive",
      desc: <Automotive />,
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

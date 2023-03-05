import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
// import AddProduct from "../components/Form/AddProduct";
import AllProducts from "../components/AllProducts";
import AllType from "../components/Form/AllType";

const AdminProducts = () => {
  const data = [
    {
      label: "Add Product",
      value: "add-product",
      desc: <AllType />,
    },
    {
      label: "All Products",
      value: "all-products",
      desc: <AllProducts />,
    },
  ];

  return (
    <div className="mt-6">
      <Tabs id="custom-animation" value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
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

export default AdminProducts;

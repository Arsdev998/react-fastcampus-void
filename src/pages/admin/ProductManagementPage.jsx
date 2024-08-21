import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";

const ProductManagementPage = () => {
  return (
    <>
      <div>ProductManagementPage</div>
      <AdminLayout
        title="Products Management"
        description="Managing our product"
        rightButton={
          <Button>
            <IoAdd className="h-6 w-6 mr-2" />
            Add Product
          </Button>
        }
      ></AdminLayout> 
    </>
  );
};

export default ProductManagementPage;

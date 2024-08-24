import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { axiosIstance } from "@/lib/axios";
import { ChevronLeft, ChevronRight, Edit, Ellipsis, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { Link, useParams, useSearchParams } from "react-router-dom";

const ProductManagementPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [hashNextPage, setHashNextPage] = useState(true);
  const [searchParam, setSearchparams] = useSearchParams();
  const [productName, setProductName] = useState("");
  const [selectedProductIds, setSelectesProductIds] = useState([]);

  const nextPage = () => {
    searchParam.set("page", Number(searchParam.get("page")) + 1);
    setSearchparams(searchParam);
  };
  const prevPage = () => {
    searchParam.set("page", Number(searchParam.get("page")) - 1);
    setSearchparams(searchParam);
  };
  const fetchProduct = async () => {
    try {
      const response = await axiosIstance.get("/products?", {
        params: {
          _per_page: 5,
          _page: searchParam.get("page"),
          title: searchParam.get("search"),
        },
      });
      console.log(response.data);
      setProductsData(response.data);
      setHashNextPage(Boolean(response.data.next));
      setLastPage(Number(response.data.last));
    } catch (error) {
      console.log(error);
    }
  };

  const searhProduct = () => {
    if (productName) {
      searchParam.set("search", productName);
      setSearchparams(searchParam);
    } else {
      searchParam.delete("search");
    }
  };

  const handleDeleteProduct = async (productId) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;
    try {
      await axiosIstance.delete(`/products/${productId}`);
      alert("Product has been deleted");
      fetchProduct();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnCheckedProduct = (productId, checked) => {
    if (checked) {
      const prevSelectedProductIds = [...selectedProductIds];
      prevSelectedProductIds.push(productId);
      setSelectesProductIds(prevSelectedProductIds);
    }
  };
  useEffect(() => {
    if (searchParam.get("page")) {
      fetchProduct();
    }
  }, [searchParam.get("page"), searchParam.get("search")]);

  useEffect(() => {
    if (!searchParam.get("page")) {
      searchParam.set("page", 1);
      setSearchparams(searchParam);
    }
  }, []);

  return (
    <>
      <AdminLayout
        title="Products Management"
        description="Managing our product"
        rightButton={
          <Link to="/admin/products/create">
            <Button>
              <IoAdd className="h-6 w-6 mr-2" />
              Add Product
            </Button>
          </Link>
        }
      >
        <div className="">
          <Label>Search product name</Label>
          <div className="flex gap-4 mb-5">
            <Input
              placeholder="Search Products"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="max-w-[400px]"
            />
            <Button onClick={searhProduct}>Search</Button>
          </div>
        </div>
        <Table className="p-4 border rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Peoduct Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productsData.data?.map((product) => {
              return (
                <TableRow key={product.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedProductIds.includes(product.id)}
                      onCheckedChange={(checked) =>
                        handleOnCheckedProduct(product.id, checked)
                      }
                    />
                  </TableCell>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>
                    Rp.{product.price?.toLocaleString("id-ID")}
                  </TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell className="flex gap-4">
                    <Link to={"/admin/products/edit/" + product.id}>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-6 w-6" />
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash className="w-5 h-5" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="ghost"
                onClick={prevPage}
                disabled={searchParam.get("page") == 1}
              >
                <ChevronLeft className="h-6 w-6 mr-2" /> Prev
              </Button>
            </PaginationItem>
            <PaginationItem className="mx-8 font-semibold">
              {searchParam.get("page")}
            </PaginationItem>
            <PaginationItem>
              <Button
                variant="ghost"
                disabled={!hashNextPage}
                onClick={nextPage}
              >
                <ChevronRight className="h-6 w-6 ml-2" /> Next
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </AdminLayout>
    </>
  );
};

export default ProductManagementPage;

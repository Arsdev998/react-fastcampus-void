import { ProductForm } from "@/components/forms/ProductForm";
import AdminLayout from "@/components/layout/AdminLayout";
import { axiosIstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProductPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    stock: 0,
    img: "",
    description: "",
    category: "",
    id: "",
  });
  const params = useParams();

  const fethById = async () => {
    try {
      const response = await axiosIstance.get(`/products/${params.id}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (values) => {
   
    await axiosIstance.patch(`/products/${params.id}`, {
      title: values.title,
      price: values.price,
      stock: values.stock,
      img: values.img,
      description: values.description,
      category: values.category,
    });
    navigate(`/admin/products`);

    try {
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fethById();
  }, []);
  return (
    <AdminLayout title="Edit Product" description="Edit Our Product">
      <h1>Edit and management product</h1>
      {product.id ? (
        <ProductForm
          onSubmit={handleEdit}
          loading={loading}
          title={"Edit Product " + product.title}
          defaultTitle={product.title}
          defaultPrice={product.price}
          defaultStock={product.stock}
          defaultImg={product.img}
          defaultDescription={product.description}
          defaultCategory={product.category}
        />
      ) : (
        <p>loadingg</p>
      )}
    </AdminLayout>
  );
};

export default EditProductPage;

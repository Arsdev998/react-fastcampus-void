import { ProductForm } from "@/components/forms/ProductForm";
import AdminLayout from "@/components/layout/AdminLayout";

import { axiosIstance } from "@/lib/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
const CreateProductPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateProduct = async (values) => {
    console.log(values);
    setLoading(true);
    try {
      await axiosIstance.post("/products", {
        title: values.title,
        price: values.price,
        stock: values.stock,
        img: values.img,
        description: values.description,
        category: values.category,
      });

      alert("Product created successfully");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AdminLayout title="Create Product" description="Add new product">
      <ProductForm onSubmit={handleCreateProduct} loading={loading} title="Create Product"/>
    </AdminLayout>
  );
};

export default CreateProductPage;

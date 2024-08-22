import { z } from "zod";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ProductFormSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(80, "Title must be at most 80 characters"),
  price: z.coerce.number().min(10000, "Price must be at least Rp 10.000"),
  stock: z.coerce.number().min(1, "Stock must be at least 1 item"),
  img: z.string().url("Must be a valid URL"),
  category: z
    .string()
    .min(3, "Category must be at least 3 characters")
    .max(42, "Category must be at most 42 characters"),
  description: z
    .string()
    .min(3, " description must be at least 3 characters")
    .max(400, "description  must be at most 400 characters"),
});

export const ProductForm = (props) => {
  const {
    onSubmit,
    loading,
    title,
    defaultTitle,
    defaultPrice,
    defaultStock,
    defaultImg,
    defaultCategory,
    defaultDescription,
  } = props;
  const form = useForm({
    defaultValues: {
      title: defaultTitle || "",
      price: defaultPrice || 0,
      stock: defaultStock || 0,
      img: defaultImg || "",
      description: defaultDescription || "",
      category: defaultCategory || "",
    },
    resolver: zodResolver(ProductFormSchema),
    reValidateMode: "onSubmit",
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[540px]"
      >
        <Card>
          <CardHeader>
            <CardTitle className="font-semibold ">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Title has to be between 2 and 42 character
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="img"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>image</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Please enter a valid URL</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={loading} type="submit" className="w-full">
              Create Product
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

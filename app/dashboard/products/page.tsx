import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Plus } from "lucide-react"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import {
  BodyProductDashboard,
  FooterProductDashboard,
} from "@/components/dashboard/products/product-dashboard"

const ProductPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-end">
        <Link href="/dashboard/products/create">
          <Button className="capitalize">
            create product <Plus className="ml-2 size-4" />
          </Button>
        </Link>
      </div>
      <div>
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>
              Manage your products and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Created at
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <BodyProductDashboard />
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <FooterProductDashboard />
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default ProductPage

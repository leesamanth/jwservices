import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json"; 

Amplify.configure(outputs);
const client = generateClient<Schema>();

const AddVendor = () => {

  const [vendor, setVendor] = useState<Array<Schema["Vendor"]["type"]>>([]);
  const [vendorType, setVendorType] = useState<Array<Schema["VendorType"]["type"]>>([]);
  
  function listVendorTypes() {
    client.models.VendorType.observeQuery().subscribe({
      next: (data) => setVendorType([...data.items]),
    });
  }
  function listVendors() {
      client.models.Vendor.observeQuery().subscribe({
        next: (data) => setVendor([...data.items]),
      });
    }

  useEffect(() => {
    listVendors();
  }, []);

  function createVendor() {
    client.models.Vendor.create({
      legalId: vendor.legalId,
      vendorTypeId: vendor.vendorTypeId,
      vendorName: vendor.vendorName,
      description: vendor.description,
      email: vendor.email,
      phone: vendor.phone,
      website: vendor.website,
      status: vendor.status,
    });
  }

  return (
    <div className=" grid grid-cols-12  gap-4  rounded-lg">
      <div className="col-span-12 md:col-span-7 space-y-4 lg:col-span-7 ">
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Vendor Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none" htmlFor="h_Vendorname">
                Vendor Name
              </Label>
              <Input id="h_Vendorname" type="text" placeholder="Vendor name" />
            </div>
            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none">Vendor Type</Label>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="beauty-and-health">Beauty and Health</SelectItem>
                    <SelectItem value="event-management">Event Management</SelectItem>
                    <SelectItem value="event-organizer">Event Organizer</SelectItem>
                    <SelectItem value="food-and-grocery">Food and Grocery</SelectItem>
                    <SelectItem value="food-service">Food Service</SelectItem>
                    <SelectItem value="educational-service">Educational Services</SelectItem>
                    <SelectItem value="fashion-and-clothing">Fashion and Clothing</SelectItem>
                    <SelectItem value="home-and-living">Home and Living</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none">Status</Label>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="onboarding">Onboarding</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                    <SelectItem value="terminated">Terminated</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center flex-wrap">
                <Label className="w-[130px] flex-none">Description</Label>
                <Textarea id="pn4" placeholder="Vendor description..." />
            </div>
            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none" htmlFor="h_vendoremail">
                Vendor Email
              </Label>
              <Input id="h_vendoremail" type="text" placeholder="Vendor email" />
            </div>
            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none" htmlFor="h_vendorephone">
                Vendor Phone
              </Label>
              <Input id="h_vendorphone" type="text" placeholder="Vendor phone" />
            </div>
            <div className="flex items-center flex-wrap">
              <Label className="w-[150px] flex-none" htmlFor="h_vendorweb">
                Vendor Website
              </Label>
              <Input id="h_vendorweb" type="text" placeholder="Vendor web" />
            </div>
          </CardContent>
        </Card>
      </div>
{/*       <div className="col-span-12 md:col-span-5 space-y-4 lg:col-span-5">
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Shipping Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <Label>Free Shipping</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
            <div className="flex justify-between">
              <Label>Flat Rate</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
            <div className="flex justify-between">
              <Label>Is Product Quantity Multiply</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Low Stock Quantity Warning</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <Label className="w-[130px] flex-none">Quantity</Label>
            <Input id="qty_warning" type="text" placeholder="1" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Stock Visibility State</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-sm font-normal">Show Stock Quantity</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
            <div className="flex justify-between">
              <Label className="text-sm font-normal">
                Show Stock With Text Only
              </Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
            <div className="flex justify-between">
              <Label className="text-sm font-normal">Hide Stock</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Cash On Delivery</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-sm font-normal">Status</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Featured</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-sm font-normal">Status</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Todays Deal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-sm font-normal">Status</Label>
              <div>
                <Switch color="success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Flash Deal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Label className="w-[150px] flex-none">Category</Label>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center">
              <Label className="w-[150px] flex-none">Discount</Label>
              <Input id="discount" type="text" placeholder="0" />
            </div>

            <div className="flex items-center">
              <Label className="w-[150px] flex-none">Type</Label>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Type</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Estimate Shipping Time</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <Label className="w-[150px] flex-none">LabelShipping Days</Label>
            <Input id="shipping_days" type="text" placeholder="07" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b border-solid border-default-200 mb-6">
            <CardTitle>Estimate Shipping Tax</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex items-center">
                <Label className="flex-none w-10">VAT</Label>
                <Input
                  className="inline-flex"
                  id="vat"
                  type="text"
                  placeholder="00"
                />
              </div>
              <div className="flex-1">
                <Select>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Flat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Flat</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <Label className="flex-none w-10">TAX</Label>
                <Input type="text" placeholder="00" />
              </div>
              <div className="flex-1">
                <Select>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Percent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Percent</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}
      <div className="col-span-12 flex justify-end">
        <Button>Save Vendor</Button>
      </div>
    </div>
  );
};

export default AddVendor;

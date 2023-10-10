import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { RiGroupLine } from "react-icons/ri";
import AvatarsGroup from "./AvatarGroup";

export default function TaskLittleCard() {
  return (
    <Card shadow="sm"  radius="sm" className="max-w-[400px] p-3 cursor-pointer">
      <p className="font-bold text-md">NextUI</p>
        <p>Make beautiful websites regardless of your design experience.</p>
      
      <CardFooter className="flex justify-between">
        <div className="flex gap-0.5">
        <RiGroupLine/>
        <p className="font-semibold text-sm">(2)</p>
        </div>
        <p className="text-gray-500 text-sm">end: Sep 20, 2023</p>
      </CardFooter>
    </Card>
  );
}

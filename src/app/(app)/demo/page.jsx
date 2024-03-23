"use client";
import Button from "@/components/Shared/Button/Button";
import Dropdown from "@/components/Shared/Dropdown/Dropdown";
import Input from "@/components/Shared/Inputs/Input";
import Modal from "@/components/Shared/Modal/Modal";
import Switch from "@/components/Shared/Switch/Switch";
import { useState } from "react";
export default function page() {
  const [modal1, setModal1] = useState(false);
  const handleSwitchChange = (id, isChecked) => {
    console.log(
      `Switch with ID ${id} is now ${isChecked ? "checked" : "unchecked"}`
    );
  };
  return (
    <>
      <div className="container mx-auto px-5">
        <p className="text-bold py-5 text-center font-bold">Buttons</p>
        <div className="flex gap-3 flex-wrap">
          <Button
            type="button"
            onClick={() => {
              console.log("Clicked");
            }}
            style="primary"
          >
            Primary
          </Button>
          <Button
            type="button"
            onClick={() => {
              console.log("Clicked");
            }}
            style="secondary"
          >
            hello world
          </Button>
          <Button
            type="button"
            onClick={() => {
              console.log("Clicked");
            }}
            style="outline"
          >
            hello world
          </Button>
          <Button
            type="button"
            onClick={() => {
              console.log("Clicked");
            }}
            style="outline"
            disabled
          >
            Disabled
          </Button>
        </div>
        <p className="text-bold py-5 text-center font-bold">Inputs</p>
        <div className="flex flex-wrap gap-3">
          <Input
            style="custom"
            type="text"
            label="Input Filed large"
            placeholder="Enter Text"
            size="lg"
            className="border border-black p-1 rounded-full"
          />
    
  
          <Dropdown
            label="Select Menu"
            data={[
              { id: 1, name: "Select 1", value: "select" },
              { id: 2, name: "Select 2", value: "select2" },
              { id: 3, name: "Select 3", value: "select3" },
            ]}
            onChange={(e) => console.log(e)}
            className
          />
          <Switch
            id="switch"
            label="Switch"
            defaultChecked={true}
            onChange={handleSwitchChange}
          />
        <Button style="custom" className="w-fit h-fit rounded-full bg-green-500 text-white px-4 py-2" onClick={()=>setModal1(true)}>Modal 1</Button>
        </div>
        <Modal show={modal1} onClose={()=>setModal1(false)}><h2>Hello  World</h2></Modal>
      </div>
    </>
  );
}

"use client";
import Button from "@/components/Shared/Button/Button";
import Dropdown from "@/components/Shared/Dropdown/Dropdown";
import Input from "@/components/Shared/Inputs/Input";
import Switch from "@/components/Shared/Switch/Switch";
export default function page() {
  const handleSwitchChange = (id, isChecked) => {
    console.log(
      `Switch with ID ${id} is now ${isChecked ? "checked" : "unchecked"}`
    );
  };
  return (
    <>
      <div className="px-5">
        <p className="text-bold py-5 text-center font-bold">Buttons</p>
        <div className="flex gap-3">
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
            style="small"
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
        <div className="flex gap-3">
          <Input
            style="primary"
            type="text"
            label="Input Filed large"
            placeholder="Enter Text"
            size="lg"
          />
          <Input
            style="secondary"
            type="number"
            label="Input Filed Medium"
            placeholder="Enter Text"
            size="md"
          />
          <Input
            style="secondary"
            type="text"
            label="Input Filed Small"
            placeholder="Enter Text"
            size="sm"
          />
          <Input
            style="secondary"
            type="search"
            placeholder="Search"
            size="sm"
            className="h-fit my-auto"
          />
          <Input
            style="secondary"
            type="quantity"
            placeholder="0"
            size="sm"
            className="h-fit my-auto"
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
        </div>
      </div>
    </>
  );
}
